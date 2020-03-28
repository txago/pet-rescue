import React from 'react';
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Linking
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { FontAwesome } from '@expo/vector-icons';

import petrescueLogo from '../../assets/petrescue-logo.png';

import styles from './styles';

export default function Detail() {
	const navigation = useNavigation();
	const route = useRoute();

	const incident = route.params.incident;
	const message = `Olá ${incident.name}! Estou entrando em contato pois tenho interesse em adotar o pet "${incident.title}"`;

	function navigationBack() {
		navigation.goBack();
	}

	function sendMail() {
		MailComposer.composeAsync({
			subject: `Quero adotar: ${incident.title}`,
			recipients: [incident.email],
			body: message
		});
	}

	function sendWhatsapp() {
		Linking.openURL(
			`whatsapp://send?phone=${incident.whatsapp}&text=${message}`
		);
	}

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<ScrollView style={styles.safeView}>
				<View style={styles.headerDetail}>
					<TouchableOpacity
						style={styles.headerBackButton}
						onPress={navigationBack}>
						<FontAwesome name='chevron-left' size={16} color='#3E2F5B' />
					</TouchableOpacity>
					<TouchableOpacity onPress={navigationBack}>
						<Image
							source={petrescueLogo}
							style={styles.headerDetailImage}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.detail}>
					<Text style={styles.detailTitle}>{incident.title}</Text>
					<Text style={styles.detailDescription}>{incident.description}</Text>
					<Text style={styles.detailLocation}>
						<FontAwesome name='map-marker' size={14} color='#606162' />{' '}
						{incident.city}, {incident.state}
					</Text>
				</View>
				<View style={styles.contact}>
					<Text style={styles.contactTitle}>Faça um pet feliz...</Text>
					<Text style={styles.contactTitle}>Adote já! 🐶🐱</Text>
					<Text style={styles.contactText}>
						Entre em contato com{' '}
						<Text style={styles.contactBoldText}>{incident.name}</Text> para ter
						mais detalhes sobre este pet.
					</Text>

					<View style={styles.contactButtons}>
						<TouchableOpacity
							style={styles.contactButton}
							onPress={sendWhatsapp}>
							<Text style={styles.contactTextButton}>WhatsApp</Text>
							<FontAwesome name='whatsapp' size={16} color='#FFF' />
						</TouchableOpacity>

						<TouchableOpacity style={styles.contactButton} onPress={sendMail}>
							<Text style={styles.contactTextButton}>E-mail</Text>
							<FontAwesome name='envelope' size={16} color='#FFF' />
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

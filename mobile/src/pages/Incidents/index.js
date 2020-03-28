import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import api from '../../services/api';

import petrescueLogo from '../../assets/petrescue-logo.png';

import styles from './styles';
import { setDetectionImagesAsync } from 'expo/build/AR';

export default function Incident() {
	const [incidents, setIncidents] = useState([]);
	const [total, setTotal] = useState(0);

	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();

	function navigateToDetail(incident) {
		navigation.navigate('Detail', { incident });
	}

	async function loadIncidents() {
		if (loading) {
			return;
		}

		if (total > 0 && incidents.length === total) {
			return;
		}

		setLoading(true);

		const response = await api.get('incidents', { params: { page } });

		setIncidents([...incidents, ...response.data]);
		setTotal(response.headers['x-total-count']);
		setPage(page + 1);
		setLoading(false);
	}

	useEffect(() => {
		loadIncidents();
	}, []);

	return (
		<FlatList
			style={styles.incidentList}
			data={incidents}
			keyExtractor={incident => String(incident.id)}
			onEndReached={loadIncidents}
			onEndReachedThreshold={0.2}
			ListHeaderComponent={() => (
				<>
					<View style={styles.container}>
						<View style={styles.header}>
							<Image
								source={petrescueLogo}
								style={styles.headerImage}
								resizeMode='contain'
							/>
							<Text style={styles.headerText}>
								Total de <Text style={styles.headerBoldText}>{total} pets</Text>
							</Text>
						</View>
						<Text style={styles.welcomeTitle}>Olá!</Text>
						<Text style={styles.welcomeDescription}>
							Quer fazer um pet feliz? 🐶🐱 Acompanhe os casos abaixo e veja os
							que estão disponíveis para adoção.
						</Text>
					</View>
				</>
			)}
			renderItem={({ item: incident }) => (
				<View style={styles.incident}>
					<Text style={styles.incidentTitle}>{incident.title}</Text>
					<Text style={styles.incidentLocation}>
						<FontAwesome name='map-marker' size={14} color='#606162' />{' '}
						{incident.city}, {incident.state}
					</Text>

					<TouchableOpacity
						style={styles.detailsButton}
						onPress={() => navigateToDetail(incident)}>
						<Text style={styles.detailsTextButton}>Ver mais detalhes</Text>
						<FontAwesome name='chevron-right' size={12} color='#FFF' />
					</TouchableOpacity>
				</View>
			)}
		/>
	);
}

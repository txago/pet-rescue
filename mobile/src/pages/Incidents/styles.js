import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	headerImage: {
		width: 140
	},

	headerText: {
		fontSize: 14,
		color: '#141516'
	},

	headerBoldText: {
		fontWeight: 'bold'
	},

	welcomeTitle: {
		fontSize: 36,
		lineHeight: 44,
		marginBottom: 15,
		fontWeight: 'bold',
		color: '#3E2F5B'
	},

	welcomeDescription: {
		fontSize: 18,
		lineHeight: 24,
		marginBottom: 40,
		color: '#606162'
	},

	incidentList: {
		flex: 1,
		paddingHorizontal: 20
	},

	incident: {
		padding: 20,
		borderRadius: 4,
		fontSize: 16,
		color: '#141516',
		backgroundColor: '#FFF',
		marginBottom: 20
	},

	incidentTitle: {
		fontSize: 21,
		lineHeight: 30,
		fontWeight: 'bold',
		color: '#3E2F5B',
		marginBottom: 10
	},

	incidentLocation: {
		fontSize: 14,
		color: '#3E2F5B',
		marginBottom: 20
	},

	detailsButton: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#3E2F5B',
		paddingHorizontal: 20,
		paddingVertical: 15,
		alignSelf: 'flex-end',
		borderRadius: 4
	},

	detailsTextButton: {
		color: '#FFF',
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 1,
		marginRight: 10
	}
});

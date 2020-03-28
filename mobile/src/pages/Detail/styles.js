import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
	safeAreaView: {
		flex: 1
	},

	safeView: {
		paddingHorizontal: 20
	},

	headerDetail: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},

	headerBackButton: {
		paddingLeft: 5,
		paddingRight: 20
	},

	headerDetailImage: {
		width: 140
	},

	headerText: {
		fontSize: 14,
		color: '#141516'
	},

	headerBoldText: {
		fontWeight: 'bold'
	},

	detail: {
		padding: 20,
		borderRadius: 4,
		fontSize: 16,
		color: '#141516',
		backgroundColor: '#FFF',
		marginBottom: 20
	},

	detailTitle: {
		fontSize: 36,
		lineHeight: 44,
		marginBottom: 15,
		fontWeight: 'bold',
		color: '#3E2F5B'
	},

	detailDescription: {
		fontSize: 18,
		lineHeight: 24,
		color: '#606162',
		marginBottom: 5
	},

	detailLocation: {
		fontSize: 14,
		color: '#3E2F5B',
		marginTop: 10,
		marginBottom: 10
	},

	contact: {
		padding: 20,
		borderRadius: 4,
		fontSize: 16,
		color: '#141516',
		backgroundColor: '#FFF',
		marginBottom: 20
	},

	contactTitle: {
		fontSize: 21,
		lineHeight: 30,
		fontWeight: 'bold',
		color: '#087E8B'
	},

	contactText: {
		fontSize: 14,
		lineHeight: 18,
		color: '#606162',
		marginTop: 10,
		marginBottom: 20
	},

	contactBoldText: {
		color: '#087E8B',
		fontWeight: 'bold'
	},

	contactButtons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	contactButton: {
		width: '47%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#087E8B',
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 4
	},

	contactTextButton: {
		color: '#FFF',
		fontSize: 14,
		fontWeight: 'bold',
		marginRight: 10
	}
});

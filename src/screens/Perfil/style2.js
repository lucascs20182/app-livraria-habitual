import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        position: 'relative',
    },

    logo: {
        width: 149,
        height: 29,
        marginTop: 410,
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },

    backgroundBlue: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000170',
        marginTop: -370,
        borderRadius: 35,
        alignItems: 'center',
    },

    backgroundWhite: {
        width: '87%',
        height: '100%',
        backgroundColor: '#fff',
        marginTop: 470,
        borderRadius: 20,
        position: 'absolute',
    },

    text: {
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontSize: 22,
        margin: 14,
        color: '#464646',
    },

    photo: {
        width: 210,
        height: 210,
        backgroundColor: '#C4C4C4',
        borderRadius: 150,
    },

    userName: {
        fontSize: 15,
        margin: 20,
    },
});

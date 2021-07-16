import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        position: 'relative',
        justifyContent: 'space-between'
    },
    
    logo: {
        width: 155,
        height: 30,
        marginTop: 380,       
    },

    container: {
        flex: 1,
        alignItems: 'center',
    },

    backgroundBlue: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000170',
        marginTop: -350,
        borderRadius: 35,
        alignItems: 'center',

    },

    backgroundWhite: {
        width: '87%',
        height: '75%',        
        backgroundColor: '#fff',
        marginTop: 435,
        borderRadius: 20,
        position: 'absolute',       
    },

    text: {
        fontStyle: 'normal',
        fontSize: 19,
        marginTop: 8,
        marginBottom: 13,
        color: '#464646',
        fontWeight: '600',         
    },

    photo: {
        width: 175,
        height: 175,
        backgroundColor: '#C4C4C4',
        borderRadius: 150,
    },

    userName: {
        fontSize: 17,
        marginTop: 6,
        marginBottom: 10,  
        fontWeight: '600',         
    },

    userInfo:{
        alignSelf: 'flex-start',
        fontSize: 14,
        marginLeft: 20,
        
    },

    containerBotaoEntrar: {
        width: 57,
        height: 31,
        backgroundColor: '#000170',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15
    },

    botaoEntrar: {
        fontSize: 13,        
        letterSpacing: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: "#fff"
    },
});
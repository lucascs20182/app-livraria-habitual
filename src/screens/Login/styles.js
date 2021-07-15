import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        position: 'relative'
    },

    background: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },

    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    logo: {
        width: 252,
        height: 49,
    },

    containerLogin: {

    },

    tituloLogin: {
        // fontFamily: 'Inter',
        fontSize: 25,
        lineHeight: 32,
        letterSpacing: 15,
        textTransform: 'uppercase',
        fontWeight: '500',
        color: '#fff',
        alignSelf: 'center',
        marginBottom: 15
    },

    containerInput: {
        marginVertical: 10,
        width: 310
    },

    emLinha: {
        flexDirection: 'row',
        paddingLeft: 5,
    },

    textInput: {
        fontWeight: '400',
        // fontFamily: 'Inter',
        width: 400,
        fontSize: 17,
        lineHeight: 15,
        // letterSpacing: 1,
        color: '#fff',
        marginLeft: 10
    },

    linhaBranca: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '100%',
        marginTop: 8
    },

    containerButton: {
        width: 300,
        height: 100,
        justifyContent: 'space-between',
        marginTop: 40
    },

    containerTextoCadastro: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 25
    },

    textoCadastro: {
        color: "#fff"
    },

    containerBotaoEntrar: {
        width: 120,
        height: 38,
        backgroundColor: "#fff",
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        // marginTop: 20
    },

    botaoEntrar: {
        fontSize: 17,
        lineHeight: 18,
        letterSpacing: 3,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: "#464646"
    }
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerBackground: {
        flex: 1,
        position: 'relative',
    },

    // background: {
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     backgroundColor: '#E5E4E5',
    // }, 
    
    logo: {
        width: 149,
        height: 29,
        marginTop: 410,
       
    },

    container: {
        flex: 1,
        // justifyContent: 'space-around',
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
        // fontWeight: 600,        
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

//     font-family: Inter;
// font-style: normal;
// font-weight: 600;
// font-size: 18px;
// line-height: 22px;
// /* identical to box height */

// display: flex;
// align-items: center;
// text-align: center;

// color: #464646;


});
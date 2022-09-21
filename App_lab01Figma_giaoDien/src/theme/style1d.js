import { TextInput } from '@react-native-material/core';
import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    imageBackground_D: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#D8EFDE',
    },
    flex_1: {
        flex:1
    },
    flex_2: {
        flex:2
    },
    flex_3: {
        flex:3
    },
    flex_4: {
        flex:4
    },

    view_center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_centerTop: {
        alignItems: 'center',
    },
    view_row: {
        flexDirection: 'row',
        
    },
    view_column:{
        flexDirection: 'column',
    },

    //
    fontSize_h1:{
        fontSize: 30,
    },

    //
    contentHeader: {
        // backgroundColor: 'red',
        
    },
    txtTitleHead: {
        fontWeight: 'bold',
    },

    //
    contentCenter1: {
        // backgroundColor: 'green',
    },

    txtEmail: {
        width: '85%',
        backgroundColor: '#C9E0D0',
        marginBottom: 30,
    },
    txtPass:{
        width: '85%',
        backgroundColor: '#C9E0D0',
        justifyContent: 'space-between',

    },
    Input: {
        padding: 10,
        paddingHorizontal: 15,
        
        fontSize: 16,
        color: "#000",
    },
    InputPass: {
        paddingVertical: 10,
        paddingLeft: 15,
        
        fontSize: 16,
        color: "#000",
    },
    btnLogin: {
        width: '85%',
        backgroundColor: '#d93f26',
        marginTop: 50,
        padding: 10,
        alignItems: 'center',

    },

    //
    contentCenter2: {
        // backgroundColor: 'yellow',
    },

    //
    contentFooter: {
        // backgroundColor: 'blue',
    },

    //
});

export default style;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    backgroundC: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#71E0F7',
    }, 
    flex_1: {
        flex: 1,
    },
    flex_2: {
        flex: 2,
    },
    flex_3: {
        flex: 3,
    },
    view_center:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_centerTop:{
        alignItems: 'center',
    },
    view_Row:{
        flexDirection: 'row',
    },
    containerTop: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleHeader: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    containerCenter: {
    } ,
    ccHeader:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    text1:{
        width: 250,
        textAlign: 'center',
        fontSize: 16,
    },
    txtBox: {
        marginBottom: 30,
        paddingBottom: 10,
    },
    textBox: {
        width: 40,
        height: 40,
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 10,
    },

    containerBottom: {
        color:'#000',
    } ,
    textClick: {
        textAlign: 'center',
        backgroundColor: '#ff0', 
        width: 300, 
        padding: 10, 
        marginTop: 40,
    },

})

export default styles;



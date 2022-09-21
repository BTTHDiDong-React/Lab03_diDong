import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    bgImage:{
        width: '100%',
        height: '100%',
        flex:1,
        backgroundColor: '#D8EFDE',
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
        justifyContent: "center",
        alignItems: "center",
    },
    view_centerTOP: {
        alignItems: "center",
    },
    textHeader: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 50,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    input: {
        width: '85%',
        backgroundColor: '#C9E0D0',
        padding: 10,
        fontSize: 16,
        marginBottom: 20,

    },
    inputPass: {
        width: '80%',
        // flex:1,
    }


})

export default style;
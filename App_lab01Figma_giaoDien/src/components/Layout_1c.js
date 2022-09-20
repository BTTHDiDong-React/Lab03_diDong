import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Button } from "@react-native-material/core";
import styles from '../theme/style1c';

const layout_1c = ( { navigation }) => {
    return (
        <ImageBackground style={styles.backgroundC} >
            <View style={[styles.containerTop, styles.flex_1]}>
                <Text style={styles.titleHeader}>CODE </Text>
            </View>
            <View style={[styles.containerCenter, styles.flex_1]}>
                <View style={[styles.flex_2 , styles.view_centerTop ]}>
                    <Text style={styles.ccHeader}>VERIFICATION</Text>
                </View>
                <View style={[styles.flex_2 , styles.view_centerTop ]}>
                <Text style={styles.text1}> Enter ontime password sent on ++849092605798</Text>
                </View>
                <View style={[styles.flex_1, styles.view_center, styles.view_Row, styles.txtBox ]}>
                    <TextInput style={styles.textBox}></TextInput>
                    <TextInput style={styles.textBox}></TextInput>
                    <TextInput style={styles.textBox}></TextInput>
                    <TextInput style={styles.textBox}></TextInput>
                    <TextInput style={styles.textBox}></TextInput>
                    <TextInput style={styles.textBox}></TextInput>
                </View>
            </View>
            <View style={[styles.containerBottom, styles.view_centerTop, styles.flex_1]}>
                {/* <Button title="VERIFY CODE" style={{ alignSelf: "center",backgroundColor: '#ff0', width: 300, padding: 5, marginTop: 40 }}/> */}
                <TouchableOpacity style={styles.btnClick} activeOpacity='0.5'
                    // onPress={()=> { navigation.goBack() }} >
                    onPress={()=> { navigation.push('Layout_1d') }} >
                    <Text style={styles.textClick}>VERIFY CODE (1_D)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnClick} activeOpacity='0.5'
                    // onPress={()=> { navigation.goBack() }} >
                    onPress={()=> { navigation.goBack() }} >
                    <Text style={styles.textClick}>go back</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}



export default layout_1c;
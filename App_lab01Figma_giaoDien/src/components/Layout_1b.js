import { ImageBackground, StyleSheet, StatusBar, Text, View, Image, Button, TouchableOpacity, TextInput  } from 'react-native';
import React from 'react';

import styles from './../theme/style1b';
import Layout1c from './Layout_1c';

const Layout1b = ( {navigation} ) => {
  return (
    <ImageBackground style={styles.imgBackground} source={require('./../images/1b_background.png')} > 
    <StatusBar style="auto" />
        <View style={[styles.flex_1]}>
            {/* <Text style={styles.ct_title} >FORGET PASSWORD</Text>  */}
            
        </View> 
        <View style={[styles.containerTop , styles.flex_3] }>
            <Image
                style={styles.ct_img} 
                source={require('./../images/1b_lock.png')} />
            <Text style={styles.ct_title} >FORGET PASSWORD</Text> 

        </View> 
        <View style={[styles.containerCenter, styles.flex_3] }>
            <Text style={styles.cc_title} >Provide your account’s email for which you want to reset your password</Text> 

            {/* <Button style={styles.ct_img} >
                <Image source={require('./../images/1b_icon_mail.png')} />
                <Text> Email</Text>
            </Button> */}
            <View style={styles.ccEmail} activeOpacity={0.5}   >
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Image source={require('./../images/1b_icon_mail.png')}  />
                </TouchableOpacity>
                    <TextInput placeholder='Email' style={styles.txtEmail} />
            </View>

            <TouchableOpacity style={styles.ccNext} activeOpacity={0.5}  
                onPress={() => navigation.navigate('Layout_1c')} >
                <Text  style={styles.btnNext} >
                Next 1_c
                </Text>
            </TouchableOpacity>
        </View>


        <View style={[styles.containerBottom, styles.flex_1 ]}>
            
        </View> 
    </ImageBackground>
    
  )
}

export default Layout1b ;
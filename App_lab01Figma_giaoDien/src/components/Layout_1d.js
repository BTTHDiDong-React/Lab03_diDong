import { View, TextInput, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from '../theme/style1d';

const Layout_1d = ( { navigation } ) => {
    const [passVisible, setPassVisible] = useState(false);

  return (
    <ImageBackground style={styles.imageBackground_D}
        source={require('../images/1b_background.png')} >
        <View style={[styles.contentHeader, styles.view_center, styles.flex_3]}>
            <Text style={[styles.txtTitleHead, styles.fontSize_h1]}>LOGIN</Text> 
        </View>
        <View style={[styles.contentCenter1, styles.view_centerTop, styles.flex_3]}>
            {/* <TextInput style={styles.txtInput} placeholder={'Email'} />
            <TextInput style={styles.txtInput} placeholder={'Password'} />
            <TextInput style={styles.txtInput} placeholder={'Email'} /> */}

            <View style={styles.txtEmail}  >
                <TextInput autoComplete='email' autoCapitalize='none' style={styles.Input} placeholder={'Email'}  />
            </View>
            <View style={[styles.txtPass, styles.view_row]}  >
                <TextInput 
                    style={[styles.flex_1, styles.InputPass ]} 
                    secureTextEntry={passVisible?false:true}
                    placeholder={'Password'} />
                <TouchableOpacity style={[styles.view_center, {width: '20%'}]}
                    onPress={() => {
                        setPassVisible(!passVisible);
                    }}
                >
                    <Image  source={require('./../images/1d_icon_eye.png')} />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.btnLogin} 
                onPress={() => {
                    navigation.navigate('Home')
                }}
                >
                <Text style={{color: "#fff", fontSize: 16, fontWeight: 'bold',}}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.contentCenter2, styles.flex_2, styles.view_centerTop]}>
            <Text style={{marginTop: 15 }} >When you agree to terms and conditions</Text>
            <View style={styles.view_row}>
                <Text style={{color: '#0d99ff', marginTop: 20}} >For got your password?</Text>
                <TouchableOpacity onPress={()=> { navigation.goBack() }} >
                    <Text style={{color: '#0d99ff', marginTop: 20}} > -  Go to Back</Text>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity onPress={()=> {navigation.push('Layout_1e')}}>
                <Text style={{color: '#0d99ff', marginTop: 20 }} >Or register with</Text>
            </TouchableOpacity>
        </View>
        <View style={[styles.contentFooter, styles.flex_2, styles.view_centerTop]}>
            <View style={[{width: '85%', height: 45 }, styles.view_row]} >
                    <View style={[styles.flex_1, styles.view_center, {backgroundColor: '#275A8D'}]} >
                        <Icon name='facebook' color={'#eee'} size={30} />
                    </View>
                    <View style={[styles.flex_1, styles.view_center, {backgroundColor: '#1593C5' }]} >
                        <Text style={{fontSize: 32, marginBottom: 5, fontWeight: 'bold', color: '#fff'}} >Z</Text>
                    </View>
                    <View style={[styles.flex_1, styles.view_center, {borderWidth: 1, borderColor: '#1593C5'}]} >
                        <Icon name='google' color={'#fff'} size={30} />
                    </View>
            </View> 
        </View>
    </ImageBackground>
  )
}

export default Layout_1d;
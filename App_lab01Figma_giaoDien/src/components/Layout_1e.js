import { View, Text, StatusBar, ImageBackground, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
 
import styles from '../theme/style1e';
import { Button } from '@react-native-material/core';

const Layout_1e = () => {
    const [visiblePass, setVisiblePass] = useState(false);

    const [value, setValue] = React.useState(0);

    var radio_props = [
        {label: 'Male      ', value: 0 },
        {label: 'Female', value: 1 }
      ];
  return (
    
    <View 
        style={[styles.bgImage, styles.view_centerTOP]}
        // source={require('./../images/1b_background.png')}
        >
        <StatusBar style="auto" />
        
        <Text style={styles.textHeader} >REGISTER</Text>
        <View style={[{marginTop: 30, width: '100%'}, styles.view_centerTOP]}>
            <TextInput style={[styles.input]} placeholder={'Name'} autoComplete={'name'}/>
            <TextInput style={[styles.input]} placeholder={'Phone'} autoComplete={'tel'}/>
            <TextInput style={[styles.input]} placeholder={'Email'} autoComplete={'email'} />
            <View style={[styles.row, {  width: '85%', paddingVertical: 10, paddingLeft: 10, backgroundColor: '#C9E0D0', marginBottom: 20 }]}>
                <TextInput style={[styles.inputPass ]} placeholder={'Password'} secureTextEntry={visiblePass?false:true}/>
                <TouchableOpacity onPress={() => { setVisiblePass(!visiblePass) }}
                    style={[{width: '20%'}, styles.view_center]}
                    >
                    <Image  
                    source={require('./../images/1d_icon_eye.png')} />
                </TouchableOpacity>
            </View> 
            <TextInput style={[styles.input]} placeholder={'Birthday'} autoComplete={'birthdate-full'}/>
        </View>
        <View style={{marginTop : 15,}}>
            <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
                formHorizontal={true}
                animation={true}
            />
        </View>
        <Button title='REGISTER' color='#C34E3B' style={{marginTop: 40, width:'85%', }}/>

        <Text style={{marginTop:20, }}>When you agree to terms and conditions</Text>
    </View>
  )
}

export default Layout_1e;
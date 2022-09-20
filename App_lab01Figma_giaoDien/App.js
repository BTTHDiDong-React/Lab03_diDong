import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Layout1a from './src/components/Layout_1a';
import Layout1b from './src/components/Layout_1b';
import Layout1c from './src/components/Layout_1c';
import Layout1d from './src/components/Layout_1d';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Layout1a} />
        <Stack.Screen name="Layout_1b" component={Layout1b} />
        <Stack.Screen name="Layout_1c" component={Layout1c} />
        <Stack.Screen name="Layout_1d" component={Layout1d} />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //     {/* <Layout1a /> */}
    //     <Layout1b />
    //     {/* <Layout1c /> */}
    //     </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

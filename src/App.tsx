// 📁 App.tsx

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigation/types';

import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './components/providers/ConnectionProvider';
import {AuthorizationProvider} from './components/providers/AuthorizationProvider';
import {clusterApiUrl} from '@solana/web3.js';

import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthorizationProvider>
        <NavigationContainer>
          <SafeAreaView style={styles.shell}>
            <Stack.Navigator
              initialRouteName="Main"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Main" component={MainScreen} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
  },
});

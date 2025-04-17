// 📁 screens/MainScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import ConnectButton from '../components/ConnectButton';
import {useAuthorization} from '../components/providers/AuthorizationProvider';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const {selectedAccount} = useAuthorization();

  const handleStart = () => {
    console.log('🚀 Navigating to ConnectScreen (si utilisé)');
    navigation.navigate('Connect');
  };

  return (
    <ImageBackground
      source={require('../assets/img/capy2.jpeg')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.overlay}>
        {/*
        <Image
          source={require('../assets/bechill-logo.png')}
          style={styles.logo}
        />
        */}

        <Text style={styles.title}>Welcome to BE CHILL 😎</Text>
        <Text style={styles.subtitle}>Your personal AI crypto coach.</Text>
        <Text style={styles.description}>
          Set your goals, connect your wallet, and start growing — both wealth &
          well-being.
        </Text>

        <ConnectButton title="Connect wallet" />

        {selectedAccount && (
          <Text style={styles.walletAddress}>
            ✅ Connected: {selectedAccount.address}
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Start My CHILL Journey</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  walletAddress: {
    fontSize: 14,
    color: '#333',
    marginTop: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6C47FF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

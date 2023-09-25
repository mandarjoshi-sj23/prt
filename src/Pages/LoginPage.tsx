import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import {
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Color} from '../styles';
import {logoWhite} from '../assets/images';

function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.logoView}>
          <Image source={logoWhite} resizeMode="contain" style={styles.logo} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            autoCapitalize="none"
            value={email}
            style={styles.inputText}
            placeholder="youremail@email.com"
            placeholderTextColor={Color.light.greyColor}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            autoCapitalize="none"
            value={password}
            style={styles.inputText}
            placeholder="password"
            placeholderTextColor={Color.light.greyColor}
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'grey',
  },
  scrollView: {
    flex: 1,
  },
  logoView: {
    alignItems: 'center',
    marginBottom: 15,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    alignSelf: 'center',
  },
  inputText: {
    height: 50,
    color: '#777777',
    fontWeight: '800',
  },
  logo: {
    marginTop: 210,
    marginBottom: 25,
    width: 250,
    height: 100,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: Color.light.primaryColor,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  actionText: {
    color: '#ffffff',
    fontWeight: '800',
  },
});

export default LoginPage;

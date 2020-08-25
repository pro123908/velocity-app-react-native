import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Block from '../components/Block';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <Block center middle>
      <Block middle>
        <Image
          source={require('../assets/images/Base/Logo.png')}
          style={{height: 28, width: 100}}
        />
      </Block>

      <Block flex={2.5} center>
        <Block center>
          <Text
            size={28}
            color="#2E384D"
            height={32}
            spacing={0}
            weight={'300'}
            style={{marginBottom: 6}}>
            Sign in to Velocity
          </Text>

          <Text color="#8798AD" height={22} spacing={0} weight={'300'}>
            Please enter your credentials to proceed
          </Text>
          <Block center flex={0} style={{marginTop: 40}}>
            <Input marginBottom={20} label="Email Address" full email />

            <Input marginBottom={25} label="Password" password full />
            <Button onPress={() => {}} full style={{marginBottom: 10}}>
              <Text size={21} spacing={0} weight="bold" color="white">
                Sign In
              </Text>
            </Button>
            <Text height={22} color="#8798AD">
              Don't have an account?{' '}
              <Text height={18} color="#2E5BFF">
                Sign up
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;

const styles = StyleSheet.create({
  Login: {
    flex: 1,
  },
});

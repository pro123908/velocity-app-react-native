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
            h3
            // color="#2E384D"

            // height={32}
            // spacing={0}
            // weight={'300'}
            style={{marginBottom: 6}}>
            Sign in to Velocity
          </Text>

          <Text color="black3" paragraph>
            Please enter your credentials to proceed
          </Text>
          <Block center flex={0} style={{marginTop: 40}}>
            <Input marginBottom={20} label="Email Address" full email />

            <Input
              marginBottom={25}
              label="Password"
              password
              full
              rightLabel={
                <Text color="gray" paragraph>
                  Forgot password?
                </Text>
              }
            />
            <Button onPress={() => {}} full style={{marginBottom: 10}}>
              <Text button>Sign In</Text>
            </Button>
            <Text color="gray" paragraph>
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

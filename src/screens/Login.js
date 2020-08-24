import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Block from '../components/Block';

const Login = () => {
  return (
    <Block center middle>
      <Block>
        <Text>Logo</Text>
      </Block>

      <Block>
        <Text>Sign in to Velocity</Text>
        <Text>Please enter your credentials to proceed</Text>
      </Block>

      <Block>
        <Text>Email</Text>
        <Text>Password</Text>
        <Button title="Sign In" />
        <Text>Don't have an account? Sign up</Text>
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

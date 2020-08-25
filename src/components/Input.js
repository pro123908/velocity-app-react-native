import React from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import Text from './Text';

const {width} = Dimensions.get('window');

const Input = ({
  label,
  style,
  email,
  phone,
  number,
  full,
  password,
  marginBottom,
  ...props
}) => {
  const inputStyles = [
    styles.input,
    marginBottom && {marginBottom: marginBottom},
    full && styles.full,
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <View>
      <Text
        height={14}
        weight={'700'}
        style={styles.label}
        size={12}
        spacing={1.12}
        color="#B0BAC9">
        {label}
      </Text>
      <TextInput
        style={inputStyles}
        secureTextEntry={password}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(224, 231, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#E0E7FF',
    borderRadius: 5,
    fontSize: 15,
    color: '#2E384D',
    height: 40,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  label: {
    textTransform: 'uppercase',
  },

  full: {
    width: width - 50,
  },
});

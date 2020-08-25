import React from 'react';
import {StyleSheet, TextInput, View, Dimensions} from 'react-native';
import Text from './Text';

const {width} = Dimensions.get('window');

const Input = ({
  label,
  rightLabel,
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
      <View style={styles.labelContainer}>
        <Text
          height={14}
          weight={'bold'}
          style={styles.label}
          size={12}
          spacing={1.12}
          color="#B0BAC9">
          {label}
        </Text>
        {rightLabel}
      </View>
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
    borderWidth: 0.5,
    borderColor: '#E0E7FF',
    borderRadius: 5,
    fontSize: 15,
    color: '#2E384D',
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
  },
  label: {
    textTransform: 'uppercase',
  },

  full: {
    width: width - 50,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

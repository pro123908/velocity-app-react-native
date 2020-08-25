import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Button = ({children, opacity, full, style, ...props}) => {
  const buttonStyles = [styles.button, full && styles.full, style];
  return (
    <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E5BFF',
    borderRadius: 4,
    height: 50,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  full: {
    width: width - 50,
  },
});

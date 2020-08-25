import React, {Children} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Typography = ({
  center,
  color,
  size,
  height,
  spacing,
  weight,
  style,
  children,
  ...props
}) => {
  const textStyles = [
    styles.text,
    color && {color},
    size && {fontSize: size},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    center && styles.center,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },

  center: {
    alignItems: 'center',
  },
});

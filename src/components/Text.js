import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as theme from '../constants/theme';

const Typography = ({
  center,
  color,
  size,
  height,
  spacing,
  weight,
  style,
  children,
  h1,
  h2,
  h3,
  h4,
  paragraph,
  paragraphGray,
  paragraphGray2,
  caption,
  medium,
  button,
  captionMedium,
  ...props
}) => {
  const textStyles = [
    styles.text,
    color && {color},
    color && color === 'blue' && styles.blue,
    color && color === 'lightBlue' && styles.lightBlue,
    color && color === 'green' && styles.green,
    color && color === 'red' && styles.red,
    color && color === 'yellow' && styles.yellow,
    color && color === 'teal' && styles.teal,
    color && color === 'purple' && styles.purple,
    color && color === 'black' && styles.black,
    color && color === 'black2' && styles.black2,
    color && color === 'black3' && styles.black3,
    color && color === 'white' && styles.white,
    color && color === 'gray' && styles.gray,
    color && color === 'gray2' && styles.gray2,
    color && color === 'gray3' && styles.gray3,
    color && color === 'caption' && styles.caption,

    size && {fontSize: size},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    center && styles.center,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    paragraph && styles.paragraph,
    paragraph && color === 'gray' && styles.paragraphGray,
    paragraph && color === 'gray2' && styles.paragraphGray2,
    caption && styles.caption,
    caption && medium && styles.captionMedium,
    button && styles.button,
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
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    color: theme.colors.black,
  },

  blue: {
    color: theme.colors.blue,
  },

  lightBlue: {
    color: theme.colors.lightBlue,
  },

  green: {color: theme.colors.green},
  red: {color: theme.colors.red},
  yellow: {color: theme.colors.yellow},
  teal: {color: theme.colors.teal},
  purple: {color: theme.colors.purple},
  black: {color: theme.colors.black},
  black2: {color: theme.colors.black2},
  black3: {color: theme.colors.black3},
  white: {color: theme.colors.white},
  gray: {color: theme.colors.gray},
  gray2: {color: theme.colors.gray2},
  gray3: {color: theme.colors.gray3},
  caption: {color: theme.colors.caption},

  center: {
    alignItems: 'center',
  },

  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  h4: theme.fonts.h4,
  paragraph: theme.fonts.paragraph,
  paragraphGray: theme.fonts.paragraphGray,
  paragraphGray2: theme.fonts.paragraphGray2,
  caption: theme.fonts.caption,
  captionMedium: theme.fonts.captionMedium,
  button: theme.fonts.button,
});

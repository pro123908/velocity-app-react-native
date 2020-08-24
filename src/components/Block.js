import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Block = ({children, flex, center, middle, style, ...props}) => {
  const blockStyles = [
    styles.block,
    flex && {flex},
    center && styles.center,
    middle && styles.middle,
  ];
  return (
    <View style={blockStyles} {...props}>
      {children}
    </View>
  );
};

export default Block;

const styles = StyleSheet.create({
  block: {flex: 1},
  center: {alignItems: 'center'},
  middle: {justifyContent: 'center'},
});

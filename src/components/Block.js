import React from 'react';
import {StyleSheet, View} from 'react-native';

const Block = ({children, flex, center, middle, style, ...props}) => {
  const blockStyles = [
    styles.block,
    flex && {flex},
    center && styles.center,
    middle && styles.middle,
    style,
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

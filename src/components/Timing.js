import { StyleSheet, View } from 'react-native';
import React from 'react';
import { RoundedButton } from './RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton title="10" onPress={() => onChangeTime(10)} size={75} />
      <RoundedButton title="15" onPress={() => onChangeTime(15)} size={75} />
      <RoundedButton title="20" onPress={() => onChangeTime(20)} size={75} />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

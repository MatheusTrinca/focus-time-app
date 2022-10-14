import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { fontSizes, spacing } from '../util/sizes';
import { colors } from '../util/colors';

export const FocusHistory = ({ history }) => {
  if (history.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You need to focus in something!!</Text>
      </View>
    );
  }

  const renderItem = item => {
    return <Text style={styles.text}> - {item.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your focus history:</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={history}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.md,
    marginTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
});

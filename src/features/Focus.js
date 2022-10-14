import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../util/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../util/sizes';
import { FocusHistory } from '../components/FocusHistory';

export const Focus = ({ addSubject, history }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Qual o seu foco agora?"
          type="outlined"
          value={subject}
          onChangeText={setSubject}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
      <FocusHistory history={history} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
  },
});

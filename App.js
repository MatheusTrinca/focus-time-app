import { useState } from 'react';
import { Platform, StatusBar, Text } from 'react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { colors } from './src/util/colors';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.dark,
  },
  text: {
    color: colors.white,
  },
});

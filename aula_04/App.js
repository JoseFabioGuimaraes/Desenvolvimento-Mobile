import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import MainComponent from './src/components/MainComponent';

export default function App() {
  return (
    <ThemeProvider>
      <MainComponent/>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

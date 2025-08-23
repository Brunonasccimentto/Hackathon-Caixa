/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
  <>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <AppNavigation />
  </>
  );
}

export default App;

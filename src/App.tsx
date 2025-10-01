/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import MainRouter from './router/MainRouter';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './styles/GlobalStyles';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.backgroundLight} />
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <MainRouter />
        </SafeAreaView>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 10,
  },
});

export default App;

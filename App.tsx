import {Provider} from 'react-redux';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Todo} from './src/screens/TodoScreen';
import {configureStore} from './src/stores';

export const App = () => {
  return (
    <Provider store={configureStore}>
      <SafeAreaProvider>
        <Todo />
      </SafeAreaProvider>
    </Provider>
  );
};

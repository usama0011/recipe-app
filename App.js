import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import RecipeScreen from './screens/Recipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/store';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

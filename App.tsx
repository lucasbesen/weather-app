import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import { HomeScreen } from 'app/components/screens';
import ROUTES, { StackParamsList } from 'app/config/routes';

import store from 'app/store';

const Stack = createStackNavigator<StackParamsList>();

const stackOptions: StackNavigationOptions = {
  title: '',
  headerTransparent: true,
  gestureEnabled: true,
};

const MainStack = () => (
  <Stack.Navigator initialRouteName={ROUTES.HOME} screenOptions={stackOptions}>
    <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}

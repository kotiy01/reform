import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import SettingScreen from "../screens/setting";
import SearchScreen from "../screens/search";
import ProfileScreen from "../screens/profile";
import TredingScreen from "../screens/treding";
import { tabBar } from './bottomBar/BottomBar';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="tabBar"
          component={tabBar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
 import React from 'react';
 import type {Node} from 'react';
 import {
   ImageBackground,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
 import { HomeNavigation, MenuNavigation, AccountNavigation } from "./CustomNavigation";
 
 const Tab = createBottomTabNavigator();
 
 const App = () => {
   return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home"
            component={HomeNavigation}
            options={{headerShown: false}}
          />
          <Tab.Screen 
            name="Menu"
            component={MenuNavigation}
            options={{headerShown: false}}
          />
          <Tab.Screen 
            name="Account"
            component={AccountNavigation}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({

 });
 
 export default App;
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
 import Home from './screens/Home';
 import Account from './screens/Account';
 import Menu from './screens/Menu';

 const Tab = createBottomTabNavigator();
 
 const App: () => React$Node = () => {
   return (
     <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen 
            name="Menu"
            component={Menu}
          />
          <Tab.Screen 
            name="Account"
            component={Account}
          />
        </Tab.Navigator>
      </NavigationContainer>
     </>
   );
 };
 
 const styles = StyleSheet.create({

 });
 
 export default App;
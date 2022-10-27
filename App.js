import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View, Text, LogBox, } from 'react-native';
import AppWithNavigationState from "./src/navigation";
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppWithNavigationState />
    </View>
  );
}
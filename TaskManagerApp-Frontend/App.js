// App.js
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tasks' }} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ title: 'Task Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

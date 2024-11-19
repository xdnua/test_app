import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

export default function router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

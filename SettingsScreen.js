import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsDetailsScreen from './SettingsDetailsScreen';

const Stack = createStackNavigator();

export default function SettingsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsMainScreen} />
      <Stack.Screen name="Details" component={SettingsDetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsMainScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

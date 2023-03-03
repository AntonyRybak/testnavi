import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Modal } from 'react-native';

// Create screens
function HomeScreen({ setScreen }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Мазафака" onPress={() => setScreen('Settings')} />
    </View>
  );
}

function SettingsScreen({ setScreen }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Go back" onPress={() => setScreen('Home')} />
    </View>
  );
}

// Create main component
export default function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'Home' && <HomeScreen setScreen={setScreen} />}
      {screen === 'Settings' && <SettingsScreen setScreen={setScreen} />}
    </View>
  );
}

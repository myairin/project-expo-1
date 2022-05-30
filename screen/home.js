import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
    </NavigationContainer>
      );

}


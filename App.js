import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View 
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}/>
      
      <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
  },
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'red'
    }
});

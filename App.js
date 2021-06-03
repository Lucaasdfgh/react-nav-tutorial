import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
const {useState} = React

function HomeScreen({ navigation: { navigate } }) {
  const [counter, setCounter] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to details" 
      onPress={() => navigate("Details"), {}}/>
      <Button onClick={()=> {
        setCounter(counter+1)
      }}></Button>
    </View>
  );
}
function DetailsScreen({navigation: {navigate}}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" 
      onPress={() => navigate("Home")}/>
      <Button title="Go to Demo" 
      onPress={() => navigate("Demo")}/>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Details" component={DetailsScreen}/>
      <Stack.Screen name="Demo" component={Demo} options={{title: "my Home"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import QScreen from './screens/QScreen';
import ResultScreen from './screens/ResultScreen';
import ListScreen from './screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen}  />
          <Stack.Screen name='List' component={ListScreen} />
          <Stack.Screen name='Question' component={QScreen} />
          <Stack.Screen name='Result' component={ResultScreen} />
        </Stack.Navigator>

      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
},
    
    
});

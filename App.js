import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './screens/SignInPage';
import Login from './screens/Login';
import './global.css'; 

const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignInPage} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


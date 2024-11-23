import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "./Register";
import NewUserPage from "./NewUserPage";
import { StatusBar } from "expo-status-bar";
import Home from "./Home";
import Login from "./Login";
import { StripeProvider } from "@stripe/stripe-react-native";

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <StatusBar backgroundColor={'#aeaeae'} />

        <Stack.Navigator initialRouteName="NewUserPage">
          <Stack.Screen name="NewUserPage" component={NewUserPage} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );

}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const headerStyles = {
    backgroundColor: "#CDD6D1",
    headerTintColor: "#444",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Game Review",
            headerStyle: headerStyles,
          }}
        />
        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: headerStyles,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: "About Us",
            headerStyle: headerStyles,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

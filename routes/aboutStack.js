import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";

export const aboutStack = createNativeStackNavigator();

export default function Navigator() {
  const headerStyles = {
    backgroundColor: "#CDD6D1",
    headerTintColor: "#444",
  };
  return (
    <NavigationContainer>
      <aboutStack.Navigator initialRouteName="Home">
        <aboutStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Game Review",
            headerStyle: headerStyles,
          }}
        />
        <aboutStack.Screen
          name="Details"
          component={ReviewDetails}
          options={{
            title: "Review Details",
            headerStyle: headerStyles,
          }}
        />
        <aboutStack.Screen
          name="About"
          component={About}
          options={{
            title: "About Us",
            headerStyle: headerStyles,
          }}
        />
      </aboutStack.Navigator>
    </NavigationContainer>
  );
}

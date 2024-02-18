import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  function pressHander() {
    navigation.navigate("Details");
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Checkout Reviews" onPress={pressHander} />
    </View>
  );
}

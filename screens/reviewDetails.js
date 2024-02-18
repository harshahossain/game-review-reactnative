import { Button, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  function pressHandler() {
    //navigation.pop();
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>reviewDetails</Text>
      <Button title="Back to Home Screen" onPress={pressHandler} />
    </View>
  );
}

import { Button, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  function pressHandler() {
    //navigation.pop();
    navigation.goBack();
  }

  const { game, title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{title}</Text>
      <Text style={globalStyles.subtitleText}>Game: {game}</Text>
      <Text style={globalStyles.paragraph}>{body}</Text>
      <Text style={globalStyles.titleText}>
        Score: <Text style={globalStyles.scoreText}>{rating}</Text>/
        <Text>5</Text>
      </Text>
      {/* <Button title="Back To All Reviews" onPress={pressHandler} /> */}
    </View>
  );
}

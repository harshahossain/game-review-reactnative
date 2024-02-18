import { StyleSheet, Button, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      game: "Baldur's Gate 3",
      title: "Baldurs Gate 3A+ from 2A",
      rating: 5,
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      id: "1",
    },
    {
      game: "Palworld",
      title: "Pokemon with guns",
      rating: 4,
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      id: "2",
    },
    {
      game: "Enshrouded",
      title: "Survival meets Dark Soul",
      rating: 3.5,
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      id: "3",
    },
    {
      game: "Death Stranding",
      title: "Death Stranded cause bored",
      rating: 2,
      body: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      id: "4",
    },
  ]);

  ////////////////////////
  function pressHander() {
    navigation.navigate("Details");
    //navigation.push("Details");
  }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Checkout Reviews" onPress={pressHander} />
    </View>
  );
}

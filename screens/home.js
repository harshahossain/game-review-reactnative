import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginTop: 20,
  },
  titleText: {
    fontFamily: "Monsterrat-Bold",
    fontSize: 18,
  },
});

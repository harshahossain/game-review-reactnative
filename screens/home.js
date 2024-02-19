import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
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
      img: "https://wallpapercave.com/wp/wp7527718.jpg",
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
  // function pressHander() {
  //   navigation.navigate("Details");
  //   //navigation.push("Details");
  // }
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// export const styles = StyleSheet.create({
//   img: {
//     width: "100%",
//     height: 120,
//   },
// });

// {item.img && (
//   <Image
//     style={styles.img}
//     source={{
//       uri: item.img,
//       cache: "force-cache",
//       cacheKey: "my-image",
//       immutable: true,
//     }}
//   />
// )}

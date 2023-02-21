import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import imgOne from "../../assets/1.png";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgsContainer}>
          <View>
            <Image source={imgOne} style={styles.image} />
          </View>
          <View>
            <Image source={imgOne} style={styles.image} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
  image: {
    width: "50%",
    height: 100,
  },
  imgsContainer: {
    // display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
});

export default Home;

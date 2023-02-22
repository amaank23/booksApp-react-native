import React from "react";
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import imgOne from "../../assets/1.png";
import imgTwo from "../../assets/2.jpg";

const screen = Dimensions.get("screen");
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgsContainer}>
          <View
            style={{
              ...styles.imgSingleContainer,
              marginRight: 10,
            }}
          >
            <Image source={imgTwo} style={{ ...styles.image }} />
          </View>
          <View
            style={{
              ...styles.imgSingleContainer,
            }}
          >
            <Image source={imgOne} style={styles.image} />
          </View>
        </View>
        <View style={styles.imgsContainer}>
          <View
            style={{
              ...styles.imgSingleContainer,
              marginRight: 10,
            }}
          >
            <Image source={imgOne} style={{ ...styles.image }} />
          </View>
          <View
            style={{
              ...styles.imgSingleContainer,
            }}
          >
            <Image source={imgOne} style={styles.image} />
          </View>
        </View>
        <View style={styles.imgsContainer}>
          <View
            style={{
              ...styles.imgSingleContainer,
              marginRight: 10,
            }}
          >
            <Image source={imgOne} style={{ ...styles.image }} />
          </View>
          <View
            style={{
              ...styles.imgSingleContainer,
            }}
          >
            <Image source={imgOne} style={styles.image} />
          </View>
        </View>
        <View style={styles.imgsContainer}>
          <View
            style={{
              ...styles.imgSingleContainer,
              marginRight: 10,
            }}
          >
            <Image source={imgOne} style={{ ...styles.image }} />
          </View>
          <View
            style={{
              ...styles.imgSingleContainer,
            }}
          >
            <Image source={imgOne} style={styles.image} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  image: {
    // width: 50,
    height: 200,
    width: (screen.width - 40) * 0.5,
    resizeMode: "cover",
    borderRadius: 10,
  },
  imgsContainer: {
    flex: 1,
    flexDirection: "row",
    columnGap: 10,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  imgSingleContainer: {
    height: 200,
    width: (screen.width - 40) * 0.5,
  },
});

export default Home;

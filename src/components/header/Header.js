import React from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HeaderCustom = ({ title, style, navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={{ ...style, ...styles.container }}>
      <Pressable>
        <MaterialCommunityIcons
          name="backburger"
          size={24}
          color="black"
          onPress={openDrawer}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      {title.toLowerCase() === "all books" && (
        <Pressable>
          <Feather name="search" size={24} color="black" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
  },
});

export default HeaderCustom;

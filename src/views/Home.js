import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button title="Drawer" />
        <Text>All Books</Text>
        <Button title="Search" />
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
});

export default Home;

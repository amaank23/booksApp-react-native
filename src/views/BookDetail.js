import React from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

const BookDetail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Book Details</Text>
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

export default BookDetail;

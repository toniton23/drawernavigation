import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Cliked")} />
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

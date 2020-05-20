import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Cliked")} />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import React from "react";
import { View, Text, Button } from "react-native";

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to Detail screen ...again"
        onPress={() => navigation.push("Detail")}
      />
      <Button
        title="Go to Detail Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default DetailScreen;

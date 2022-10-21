import { StyleSheet, Text, View, Image, ImageBackground, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Test() {
  const [text, setText] = useState("");
  return (
   <ImageBackground source={require("../assets/chair.jpg")} style={styles.BackgroundImage}>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
      </SafeAreaView>
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  BackgroundImage: {
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
});

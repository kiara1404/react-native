import { StyleSheet, Text, View, Image, ImageBackground, Button } from "react-native";

export default function WelcomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Test");
  };

  return (
    <ImageBackground style={styles.backgroundImg} source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.logoContainerText}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.login}>
        <Button title="Login" style={styles.text} onPress={handlePress} />
      </View>
      <View style={styles.signUp}>
        <Button title="Sign up" style={styles.text} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  login: {
    width: "100%",
    height: "8%",
    flexDirection: "column",
    backgroundColor: "#fc5c65",
  },
  signUp: {
    width: "100%",
    height: "8%",
    flexDirection: "column",
    backgroundColor: "#4ecdc4",
  },
  text: {
    fontSize: "30px",
    color: "#fff",
    textAlign: "center",
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoContainerText: {
    paddingTop: 20,
  },
});

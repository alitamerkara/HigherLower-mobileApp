import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#bfbfff", "#002d68"]} style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.image}
        >
          <StartGame />
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: -31,
    flex: 1,
  },
  image: {
    opacity: 0.3,
  },
});

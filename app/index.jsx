import { StyleSheet, View, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const [actualNumber, setActualNumber] = useState(0);
  let screen = <StartGame start={start} />;
  function start(number) {
    setActualNumber(number);
    if (actualNumber != 0) {
      screen = <GameScreen />;
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#bfbfff", "#002d68"]} style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.image}
        >
          {screen}
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

import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />
      <LinearGradient colors={["#bfbfff", "#002d68"]} style={styles.container}>
        <StartGame />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: -32,
    flex: 1,
  },
});

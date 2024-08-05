import { View, Text, StyleSheet } from "react-native";

const GameOver = () => {
  return (
    <View style={styles.container}>
      <Text>GameOver</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
});

export default GameOver;

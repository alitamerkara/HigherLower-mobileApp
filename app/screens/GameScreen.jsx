import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
let min = 1,
  max = 100;
const GameScreen = ({ number, setGameOver }) => {
  const randomNumber = (min, max, exclude) => {
    const rndm = Math.floor(Math.random() * (max - min)) + min;
    if (rndm == exclude) {
      return randomNumber(min, max, exclude);
    } else {
      return rndm;
    }
  };

  const initalNumber = randomNumber(min, max, number);
  const [currentGuess, setCurrentGuess] = useState(initalNumber);
  const guessNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "greater" && currentGuess > number)
    ) {
      Alert.alert("You are liar", "You know that is a lie", [
        { text: "Sorry", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess;
    }
    let newNumber = randomNumber(min, max, currentGuess);
    setCurrentGuess(newNumber);
    console.log(min, max);
  };
  if (currentGuess == number) {
    setGameOver((gameOver) => !gameOver);
  }
  return (
    <View style={styles.container}>
      <Title style={styles.screen}>Opponent's Guess</Title>
      <View>
        <Text style={styles.screen}>{currentGuess}</Text>
      </View>
      <Text>Higher or Lower?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={guessNumber.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={guessNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  screen: {
    fontSize: 70,
    color: "green",
    fontWeight: "bold",
    borderWidth: 4,
    borderColor: "green",
    borderRadius: 25,
    width: 200,
    textAlign: "center",
    margin: 15,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
export default GameScreen;

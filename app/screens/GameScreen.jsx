import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
let min = 1,
  max = 100;
const GameScreen = ({ number, setGameOver, setCount }) => {
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
  const [pastGuess, setPastGuess] = useState([]);
  const guessNumber = (direction) => {
    setCount((count) => count + 1);
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "greater" && currentGuess > number)
    ) {
      Alert.alert("You are liar", "You know that is a lie", [
        { text: "Sorry", style: "cancel" },
      ]);
    } else if (direction === "lower") {
      max = currentGuess;
      let newNumber = randomNumber(min, max, currentGuess);
      setPastGuess([...pastGuess, currentGuess]);
      setCurrentGuess(newNumber);
    } else if (direction === "greater") {
      min = currentGuess;
      let newNumber = randomNumber(min, max, currentGuess);
      setPastGuess([...pastGuess, currentGuess]);
      setCurrentGuess(newNumber);
    }

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
      <View style={styles.guess}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={guessNumber.bind(this, "greater")}>
              <FontAwesome name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={guessNumber.bind(this, "lower")}>
              <FontAwesome name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={pastGuess}
          renderItem={(pastGuess) => (
            <Text style={styles.flatList}>
              #{pastGuess.index + 1} Opponent's Guess : {pastGuess.item}
            </Text>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  guess: {
    alignItems: "center",
    backgroundColor: "purple",
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 10,
  },
  screen: {
    fontSize: 70,
    color: "purple",
    fontWeight: "bold",
    borderWidth: 4,
    borderColor: "purple",
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
  text: {
    color: "white",
    fontSize: 20,
  },
  flatList: {
    backgroundColor: "purple",
    color: "white",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    width: 300,
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    marginVertical: 15,
  },
});
export default GameScreen;

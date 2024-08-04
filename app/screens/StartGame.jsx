import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGame = ({ start }) => {
  const [value, setValue] = useState("");
  const handleChange = (content) => {
    setValue(content);
  };
  const confirm = () => {
    const chosenNumber = parseInt(value);
    if (chosenNumber == isNaN || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "You have to enter a number between 0 and 99",
        [{ text: "Okay", style: "default", onPress: reset }]
      );
    } else {
      start(chosenNumber);
    }
  };
  const reset = () => {
    setValue("");
  };
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        maxLength={2}
        keyboardType={"number-pad"}
        onChangeText={handleChange}
        value={value}
      />
      <View style={style.buttonContainer}>
        <View style={style.button}>
          <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
        </View>
        <View style={style.button}>
          <PrimaryButton onPress={reset}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "purple",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 10,
    elevation: 4,
  },
  input: {
    width: 50,
    borderBottomColor: "gold",
    borderBottomWidth: 3,
    color: "gold",
    textAlign: "center",
    fontSize: 30,
    height: 50,
    fontWeight: "bold",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default StartGame;

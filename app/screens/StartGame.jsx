import { View, TextInput, StyleSheet, Alert, Dimensions } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";

const StartGame = ({ setActualNumber }) => {
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
      setActualNumber(chosenNumber);
    }
  };
  const reset = () => {
    setValue("");
  };
  return (
    <View style={style.inputContainer}>
      <Title>Enter a number</Title>
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
const deviceWidth = Dimensions.get("window").width;
const style = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    backgroundColor: "purple",
    marginTop: deviceWidth < 392 ? 120 : 150,
    marginHorizontal: deviceWidth < 392 ? 24 : 28,
    padding: deviceWidth < 392 ? 16 : 24,
    borderRadius: 10,
    elevation: 4,
  },
  input: {
    width: deviceWidth < 392 ? 50 : 70,
    borderBottomColor: "gold",
    borderBottomWidth: 3,
    color: "gold",
    textAlign: "center",
    fontSize: deviceWidth < 392 ? 30 : 40,
    height: deviceWidth < 392 ? 50 : 60,
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

import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame = () => {
  return (
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        maxLength={2}
        keyboardType={"number-pad"}
      />
      <View style={style.buttonContainer}>
        <View style={style.button}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={style.button}>
          <PrimaryButton>Reset</PrimaryButton>
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
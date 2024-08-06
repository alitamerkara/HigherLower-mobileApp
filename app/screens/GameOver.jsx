import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";

const GameOver = ({ handlePress, number, count }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.screen}>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style={styles.textContainer}>
        The phone needed <Text style={styles.text}> {count}</Text> rounds to
        guess the number <Text style={styles.text}>{number}</Text>
      </Text>
      <PrimaryButton onPress={handlePress}>Restart</PrimaryButton>
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "purple",
    overflow: "hidden",
    margin: deviceWidth < 380 ? 18 : 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: "gold",
    fontSize: 23,
  },
});

export default GameOver;

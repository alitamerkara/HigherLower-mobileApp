import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={style.container}>
      <Pressable
        style={style.innerContainer}
        android_ripple={{ color: "#4e34f9" }}
        onPress={onPress}
      >
        <Text style={style.containerText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 5,
  },
  innerContainer: {
    borderRadius: 18,
    backgroundColor: "#a293ff",
    paddingVertical: 8,
    paddingHorizontal: 26,
  },
  containerText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;

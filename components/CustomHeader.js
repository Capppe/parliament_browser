import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const CustomTitle = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export const CustomButton = () => {
  return (
    <TouchableOpacity onPress={() => alert("Pressed")} style={styles.button}>
      <Text style={styles.text}> Search </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

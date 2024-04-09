import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const Person = ({ person, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          onPress(person.id);
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: person.image !== null ? person.image.url : null }}
        />
        <Text>{person.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 140,
    width: 140,
  },
  button: {
    alignItems: "center",
  },
});

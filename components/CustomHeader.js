import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const CustomHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text>{title}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

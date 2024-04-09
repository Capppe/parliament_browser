import { View, FlatList, StyleSheet } from "react-native";

import Person from "./Person";

export const PersonList = ({ data, onPress }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Person person={item} onPress={onPress} />}
        keyExtractor={(item) => item.id}
        horizontal
        style={styles.list}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {},
  container: {
    gap: 10,
  },
});

import { View, FlatList, StyleSheet } from "react-native";

import { Person } from "./Person";

export const PersonList = ({ data, onPress }) => {
  const renderItem = ({ item }) => {
    return <Person person={item} onPress={onPress} />;
  };

  return (
    <View style={styles.topContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
  },
  list: {
    margin: 5,
  },
  container: {
    gap: 3,
  },
});

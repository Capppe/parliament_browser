import { View, FlatList, StyleSheet } from "react-native";

import { Person } from "./Person";

export const PersonList = ({ data, onPress }) => {
  const renderItem = ({ item }) => {
    return <Person person={item} onPress={onPress} />;
  };

  return (
    <View>
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
  list: {
    margin: 5,
  },
  container: {
    gap: 3,
  },
});

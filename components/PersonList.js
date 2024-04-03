import { View, Text, FlatList, StyleSheet } from 'react-native';

import Person from './Person';

export default PersonList = ({data, label}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Person person={item}/>}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.list}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
  },
  container: {
    gap: 10,
  }
})

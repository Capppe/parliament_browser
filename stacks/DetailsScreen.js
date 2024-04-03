import { View, Text, Image, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';

import { fetchPerson } from '../handlers/ApiHandler';
import { useEffect, useState } from 'react';

export default DetailsScreen = ({ navigation, route }) => {
  const [person, setPerson] = useState(null);

  const personID = route.params.personID;

  useEffect(() => {
    const getPerson = async () => {
      const data = await fetchPerson(personID);
      setPerson(data);
    }

    getPerson();
  }, [personID]);

  return (
    <View style={styles.container}>
      {person !== null ?
        <View>
          {console.log(person)}
          <Image style={styles.image} source={{uri: person.image !== null ? person.image.url : null}}/>
          <Text>{person.name}</Text>
        </View>
        :
        <View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
})

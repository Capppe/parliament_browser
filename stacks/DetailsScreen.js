import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { fetchPerson } from "../handlers/ApiHandler";

export const DetailsScreen = ({ navigation, route }) => {
  const [person, setPerson] = useState(null);

  const personID = route.params.personID;

  useEffect(() => {
    const getPerson = async () => {
      const data = await fetchPerson(personID);
      setPerson(data);
    };

    getPerson();
  }, [personID]);

  return (
    <View style={styles.container}>
      {person !== null ? (
        <View>
          {console.log(person)}
          <Image
            style={styles.image}
            source={{ uri: person.image !== null ? person.image.url : null }}
          />
          <Text>{person.name}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
});

import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import PersonList from "../components/PersonList";
import { fetchPersons } from "../handlers/ApiHandler";

export const HomeScreen = ({ navigation }) => {
  const [persons, setPersons] = useState([]);
  const [currentSittingPersons, setCurrentSittingPersons] = useState([]);

  //Empty dependency list ([]) means it will run when the component is loaded
  useEffect(() => {
    getPersons();
  }, []);

  useEffect(() => {
    setCurrentSittingPersons(persons.filter((person) => person.state === "1"));
  }, [persons]);

  const getPersons = async () => {
    setPersons(await fetchPersons());
  };

  const viewPersonDetails = (ID) => {
    navigation.navigate("Details", { personID: ID });
  };

  return (
    <View>
      <View>
        <Text style={styles.drawerHeader}> Nuvarande ledamöter </Text>
        <PersonList data={currentSittingPersons} onPress={viewPersonDetails} />
      </View>
      <View>
        <Text style={styles.drawerHeader}> Övriga ledamöter </Text>
        <PersonList
          data={persons.filter((person) => person.state !== "1")}
          onPress={viewPersonDetails}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 5,
  },
});

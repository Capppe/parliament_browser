import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { PersonList } from "../components/PersonList";
import { fetchPersons } from "../handlers/ApiHandler";

export const HomeScreen = ({ navigation }) => {
  const [persons, setPersons] = useState([]);
  const [currentSittingPersons, setCurrentSittingPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    <View style={{ flex: 1 }}>
      <View style={{ height: "80%" }}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Sök..."
            onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
            style={{ flex: 1 }}
          />
          <Button
            title="x"
            disabled={searchQuery === ""}
            onPress={() => setSearchQuery("")}
          />
        </View>
        {searchQuery.length === 0 ? (
          <View>
            <View style={styles.titleBar}>
              <Text style={styles.drawerHeader}>Ledamöter</Text>
            </View>
            <PersonList data={persons} onPress={viewPersonDetails} />
          </View>
        ) : (
          <View>
            <Text style={styles.drawerHeader}>
              Sökresultat för {searchQuery}...
            </Text>
            <PersonList
              data={persons.filter((person) =>
                person.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )}
              onPress={viewPersonDetails}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    margin: 5,
  },
  searchBar: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  filterButton: {
    marginRight: 5,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008CBA",
    borderRadius: 3,
    borderWidth: 1,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 3,
  },
});

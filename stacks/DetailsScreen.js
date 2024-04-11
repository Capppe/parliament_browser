import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { fetchPerson } from "../handlers/ApiHandler";
import { FormBinding, FormItem } from "../components/FormItem";

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

  const getAge = () => {
    const today = new Date();
    const dob = new Date(person.birthday);
    const monthDiff = today.getMonth() - dob.getMonth();
    let age = today.getFullYear() - dob.getFullYear();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return isNaN(age) ? null : age;
  };

  return (
    <View style={styles.container}>
      {person !== null ? (
        <ScrollView>
          {person.image !== null ? (
            <Image style={styles.image} source={{ uri: person.image.url }} />
          ) : (
            <View />
          )}
          <View style={styles.container}>
            <FormItem
              label="Namn:"
              value={person.name !== null ? person.name : ""}
            />

            <FormItem
              label="Ålder:"
              value={
                person.birthday !== null && person.birthday !== ""
                  ? getAge() + ", född " + person.birthday
                  : ""
              }
            />

            <FormItem
              label="Adress:"
              value={
                person.address !== person.city
                  ? person.address + "," + person.city.replace(/[0-9]/g, "")
                  : person.address
              }
            />

            <FormItem
              label="Email:"
              value={person.email !== null ? person.email : ""}
            />

            <FormItem label="Tfn:" value={person.phone} />

            <FormItem
              label="Sittande:"
              value={person.state === "1" ? "Ja" : "Nej"}
            />

            <View
              style={{ borderColor: "#009999", borderWidth: 1, padding: 2 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5 }}>
                Positioner:
              </Text>
              {person.bindings.map((binding, index) => (
                <FormBinding key={index} binding={binding} />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  detailRow: {
    flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 15,
    marginBottom: 5,
    marginLeft: 5,
  },
  noValue: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 14,
    fontStyle: "italic",
    color: "#b3b3cc",
    marginBottom: 5,
    marginLeft: 5,
  },
  image: {
    alignSelf: "center",
    height: 150,
    width: 150,
  },
  formItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#009999",
    padding: 5,
  },
});

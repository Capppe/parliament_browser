import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { fetchPersons } from '../handlers/ApiHandler';
import PersonList from '../components/PersonList';

export default HomeScreen = ({ navigation }) => {
  const [persons, setPersons] = useState([]);
  const [currentSittingPersons, setCurrentSittingPersons] = useState([]);

  //Empty dependency list ([]) means it will run when the component is loaded
  useEffect(() => {
    addPersons();
  }, []);

  useEffect(() => {
    setCurrentSittingPersons(persons.filter((person) => person.state === '1'));
  }, [persons])

  const addPersons = async () => {
    setPersons(await fetchPersons());
  }

  return (
    <View>
      <View>
        <Text style={styles.drawerHeader}> Nuvarande ledamöter </Text>
        <PersonList data={currentSittingPersons}/>
      </View>
      <View>
        <Text style={styles.drawerHeader}> Övriga ledamöter </Text>
        <PersonList data={persons.filter((person) => person.state !== '1')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 5,
  }
})

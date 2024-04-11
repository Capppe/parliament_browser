import { ListItem, Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

export const Person = ({ person, onPress }) => {
  return (
    <ListItem
      bottomDivider
      Component={TouchableOpacity}
      onPress={() => onPress(person.id)}
    >
      {person.image !== null ? (
        <Avatar source={{ uri: person.image.url }} />
      ) : (
        <Avatar
          rounded
          icon={{ name: "person-outline", type: "material", size: 26 }}
          containerStyle={{ backgroundColor: "#c2c2c2" }}
        />
      )}
      <ListItem.Content>
        <ListItem.Title>{person.name}</ListItem.Title>
        <ListItem.Subtitle>
          {person.city.replace(/[0-9]+\s+/g, "")}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

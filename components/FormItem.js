import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { fetchOrganization, fetchRole } from "../handlers/ApiHandler";

export const FormItem = ({ label, value }) => {
  return (
    <View style={styles.formItem}>
      <Text style={styles.label}>{label}</Text>
      {value !== "" ? (
        <Text style={styles.value}>{value}</Text>
      ) : (
        <Text style={styles.noValue}>Uppgifter saknas...</Text>
      )}
    </View>
  );
};

export const FormBinding = ({ binding }) => {
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const getData = async () => {
      const orgData = await fetchOrganization(binding.organization);
      setOrganization(orgData.title);

      const roleData = await fetchRole(binding.role);
      setRole(roleData.title);
    };

    getData();
  }, [binding]);

  return (
    <View>
      <View style={styles.bindingItem}>
        <Text style={styles.bindingDot}>•</Text>
        <Text>{organization} - </Text>
        <Text style={styles.bindingRole}>{role}</Text>
      </View>
      <View style={styles.bindingDate}>
        <Text style={styles.bindingDot}>•</Text>
        <Text style={{}}>
          {binding.period_start} - {binding.period_end}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formItem: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#009999",
    padding: 5,
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
  bindingItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  bindingDot: {
    marginRight: 3,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  bindingRole: {
    fontWeight: "500",
  },
  bindingDate: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 25,
  },
});

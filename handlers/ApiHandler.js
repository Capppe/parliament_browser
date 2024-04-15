async function apiCall(url) {
  const response = await fetch(url);
  return await response.json();
}

/***********/
/* Persons */
/***********/

export async function fetchPersons() {
  console.log("Fetching persons");
  const url = "https://api.lagtinget.ax/api/persons.json";
  return await apiCall(url);
}

/******************/
/* Person details */
/******************/

export async function fetchPerson(personID) {
  console.log("Fetching person with ID: ", personID);
  const url =
    "https://api.lagtinget.ax/api/persons/" +
    personID.replace(/\s/g, "") +
    ".json"; //Remove whitespaces
  return await apiCall(url);
}

export async function fetchOrganization(orgID) {
  console.log("Fetching organization with ID: ", orgID);
  const url =
    "https://api.lagtinget.ax/api/organizations/" +
    orgID.replace(/\s/g, "") +
    ".json";
  return await apiCall(url);
}

export async function fetchRole(roleID) {
  console.log("Fetching role with ID: ", roleID);
  const url =
    "https://api.lagtinget.ax/api/roles/" + roleID.replace(/\s/g, "") + ".json";
  return await apiCall(url);
}

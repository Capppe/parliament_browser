async function apiCall(url) {
  const response = await fetch(url);
  return await response.json();
}

/***********/
/* Persons */
/***********/

export async function fetchPersons() {
  console.log("Fetching persons");
  const url = 'https://api.lagtinget.ax/api/persons.json';
  return await apiCall(url);
}


/*****************/
/* Person detail */
/*****************/

export async function fetchPerson(personID) {
  console.log("Fetching person with ID: ", personID);
  const url = 'https://api.lagtinget.ax/api/persons/' + personID.replace(/\s/g, ""); //Remove whitespaces
  return await apiCall(url);
}

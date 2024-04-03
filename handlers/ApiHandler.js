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

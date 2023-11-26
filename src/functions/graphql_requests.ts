export const createNewEvent = (number: number) => {    
  const graphqlEndpoint = process.env.REACT_APP_API_URL;

  if (!graphqlEndpoint) {
    console.error('GraphQL endpoint is not defined.');
    return;
  }

  // GraphQL query or mutation
  const graphqlQuery = `
    mutation CreateEvent {
      createEvent(
        input: {
          userId: 1,
          title: "shit fucker",
          eventNumber: 5,
          status: "on_hold",
          datetime: "2022-10-26T17:30:00.000-04:00",
          eventType: "athletic_race",
        }
      ) {
          errors
          clientMutationId
      }
    }
  `;
    
  const headers = {
    'Content-Type': 'application/json',
  };
    
  const data = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query: graphqlQuery }),
  };

  fetch(graphqlEndpoint, data)
    .then(response => response.json())
    .then(result => { console.log(result); })
    .catch(error => { console.error('Error:', error); });
}
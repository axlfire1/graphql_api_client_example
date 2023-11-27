export const createNewEvent = async (number: number): Promise<any> => {
  const graphqlEndpoint = process.env.REACT_APP_API_URL;

  if (!graphqlEndpoint) {
    console.error('GraphQL endpoint is not defined.');
    return Promise.reject('GraphQL endpoint is not defined.');
  }

  // GraphQL mutation
  const graphqlQuery = `
    mutation CreateEvent {
      createEvent(
        input: {
          userId: ${number},
          title: "shit fucker",
          eventNumber: 5,
          status: "on_hold",
          datetime: "2022-10-26T17:30:00.000-04:00",
          eventType: "athletic_race"
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

  try {
    const response = await fetch(graphqlEndpoint, data);
    if (!response.ok) { throw new Error(`HTTP error! Status: ${response.status}`);}
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';
const uri = 'https://teesside-hackspace.herokuapp.com/v1/graphql';

export default () => {
  const client = new ApolloClient({ uri });
  return client
    .query({
      query: gql`
        {
          pokemons(first: 100) {
            id
            name
            image
            number
            classification
          }
        }
      `
    });
};

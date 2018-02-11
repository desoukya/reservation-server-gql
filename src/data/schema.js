import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  reservation(id: String): Reservation
  allReservations: [Reservation]
}
type Reservation {
  _id: String
  name: String
  hotelName: String
  arrivalDate: String
  departureDate: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

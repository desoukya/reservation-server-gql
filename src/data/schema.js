import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Reservation {
  _id: String
  name: String
  hotelName: String
  arrivalDate: String
  departureDate: String
}

type Query {
  reservation(id: String): Reservation
  allReservations: [Reservation]
}

type Mutation {
  # Create a new Reservation
  createReservation(input: CreateReservation): Reservation
}

input CreateReservation {
  name: String
  hotelName: String
  arrivalDate: String
  departureDate: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;

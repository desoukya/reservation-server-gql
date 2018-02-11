import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';
import db from './data/db';

// Load Environment Variables
require('dotenv').config()
const PORT = process.env.PORT;

// Create Express Instance
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () => {
  console.log(
    `GraphiQL is now running on http://localhost:${PORT}/graphiql`
  )

  // initiate database connection
  db.establishConnection();

});

import db from './db';
const ObjectID = require('mongodb').ObjectID;

const resolvers = {
  Query: {
    reservation(_, args) {
      return db.getDb().collection('reservations').findOne({_id: ObjectID(`${args.id}`)});
    },
    allReservations(_, args) {
      return db.getDb().collection('reservations').find().toArray();
    }
  }
};

export default resolvers;

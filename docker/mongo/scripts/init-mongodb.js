rs.initiate( { _id: "rs0", members: [ { _id: 0, host: "localhost:27017" } ] } );
db = db.getSiblingDB( 'kafka-book' );
db.createUser(
    {
        user: 'process.env.MONGO_USERNAME',
        pwd: 'process.env.MONGO_PASSWORD',
        roles: [ { role: 'readWrite', db: 'kafka-book' } ]
    }
);
db.createCollection( 'flights' );

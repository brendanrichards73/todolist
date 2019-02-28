const mongodb = require("mongodb");

function connect(database) {
    return mongodb.MongoClient.connect(
        "mongodb+srv://appservice:natalieann1@cluster0-gwsww.mongodb.net/test?retryWrites=true"
    ).then(client => {
        console.log("Connected to Mongodb!");
        return client.db(database);
    });
}

module.exports = connect;

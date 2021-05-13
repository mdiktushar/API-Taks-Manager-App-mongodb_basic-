//CRUD create, read, update, delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{ useUnifiedTopology: true }, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database...!')
    }
    console.log("connected!")
    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 28
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('task').deleteOne({
        description : "Clean the house"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

})
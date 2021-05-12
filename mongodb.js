//CRUD create, read, update, delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{ useUnifiedTopology: true }, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database...!')
    }
    console.log("connected!")
    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Tushar',
    //     age: 23
    // }, (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Selena',
    //         age: 28
    //     }, {
    //         name: 'Mithila',
    //         age: 28
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Uable to insert documnet');
    //     }
    //     console.log(result.ops);
    // })


    // db.collection('task').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) =>{
    //     if(error){
    //         return console.log('Unable to insert');
    //     }
    //     console.log(result.ops);
    // })

});
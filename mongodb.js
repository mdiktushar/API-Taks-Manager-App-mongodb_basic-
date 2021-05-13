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

    // db.collection('users').findOne({name: 'Tushar'}, (error, user) =>{
    //     if(error){
    //         return console.log("Unable to find");
    //     }
    //     console.log(user);
    // })

    // db.collection('users').findOne({_id: new ObjectID("609c2c86fd268f2ce81d9e74")}, (error, user) =>{
    //     if(error){
    //         return console.log("Unable to find");
    //     }
    //     console.log(user);
    // })


    // db.collection('users').find({age: 28}).toArray((error, user) =>{
    //         if(error){
    //             return console.log("Unable to find");
    //         }
    //         console.log(user);
    // })

    // db.collection('task').findOne({_id: new ObjectID("609c2e19ce70220894692112")}, (error, task) =>{
    //     if(error){
    //         return console.log("Unable to find");
    //     }
    //     console.log(task);
    // })



    // db.collection('task').find({completed: false}).toArray((error, task) =>{
    //     if(error){
    //         return console.log("Unable to find");
    //     }
    //     console.log(task);
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("609c2a07559cab2e207d54c6")
    // }, {
    //     $set: {
    //         name: "Md. Imrul Kayes"
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error)=>{
    //    console.log(error); 
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6609c2c86fd268f2ce81d9e74")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) =>{
    //     console.log(result);
    // }).catch((error)=>{
    //    console.log(error); 
    // })

    db.collection('task').updateMany({
       completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) =>{
        console.log(result);
    }).catch((error)=>{
       console.log(error); 
    })

})
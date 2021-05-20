const express = require('express');
const Tasks = require('./models/task');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    // console.log(req.body);
    // res.send('testing!')
    const user = new User(req.body);

    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
        // res.send(e);
    })
})

app.post('/tasks', (req, res) =>{
    const task = Tasks(req.body);
    
    task.save().then(()=>{
        res.status(201).send(task);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.get('/users',(req, res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    }).catch((e)=>{
        res.status(500).send(e);
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send(e)
    })
})


app.get('/tasks',(req, res)=>{
    Tasks.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
        res.status(500).send(e);
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Tasks.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

app.listen(port, ()=>{
    console.log('Server is up on post '+port);
})

//nodemon src/index.js
//npm run start
//npm run dev
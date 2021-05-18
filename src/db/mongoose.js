const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        teim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error['Email is invalid'];
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value< 0) {
                throw new Error['Age must be a positive number'];
            }
        }
    }
})

const Tasks = mongoose.model('Tasks',{
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const me = new User({
    name: 'Selena   ',
    email: 'mdTUSHARar@dld.dc',
    // age: 24
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log('Error', error);
})

// const task = new Tasks({
//     description: 'Do your Homework',
//     completed: true
// })

// task.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error);
// })

 


// To Run: node src/db/mongoose.js
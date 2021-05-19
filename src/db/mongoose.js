const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const Tasks = mongoose.model('Tasks',{
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
})


// To Run: node src/db/mongoose.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})



// To Run: node src/db/mongoose.js
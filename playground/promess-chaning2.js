require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('60a541ed3d70fa2124e17bd5').then((task)=>{
    console.log(task);
    return Task.countDocuments({completed: false});
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})
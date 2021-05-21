require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60a541ed3d70fa2124e17bd5').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('60a6a35f4fe89603cc45b6dc').then((v)=>{
    console.log(v);
}).catch((e)=>{
    console.log(e);
})

//  node .\playground\promess-chaning2.js
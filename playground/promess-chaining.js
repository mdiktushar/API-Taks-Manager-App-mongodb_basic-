require('../src/db/mongoose');
const User = require('../src/models/user')

// 60a40ced8a65d319241de2d2

User.findByIdAndUpdate('60a54115e7626a2a1cffdd1b',{age: 1}).then((user)=>{
    console.log(user);
    return User.countDocuments({age: 1});
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})


// node .\playground\promess-chaining.js
require('../src/db/mongoose');
const { count } = require('../src/models/user');
const User = require('../src/models/user')

// 60a40ced8a65d319241de2d2

// User.findByIdAndUpdate('60a54115e7626a2a1cffdd1b',{age: 1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age: 1});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


const updateAgeAndCount = async (id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age});
    const count = await User.countDocuments({age});

    return count;
}

updateAgeAndCount('60a54115e7626a2a1cffdd1b',2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})

// node .\playground\promess-chaining.js
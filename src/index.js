const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('Get request are disable')
//     } else {
//         next()
//     }
// })

// maintenance Function
// app.use((req, res, next) => {

//     res.status(503).send('The site is under maintenance please try back soon')

// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log('Server is up on post '+port);
})

// const bcrypt = require('bcryptjs')
// const myfunction = async () =>{
//     const password = 'tushar123'
//     const hashedPassword = await bcrypt.hash(password, 8);
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('tushar123', hashedPassword)
//     console.log(isMatch);
// }

// const jwt = require('jsonwebtoken')
// const myfunction = async () =>{
//     const token = jwt.sign({_id: 'abd234'}, 'anything' ,{expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token,'anything')
//     console.log(data)
// }

// myfunction()


const Task = require('./models/task')
const User = require('./models/user')
const main = async () => {
    // const task = await Task.findById('60affd6015c06b1e8cb44834')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('60affcd915c06b1e8cb44831')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)

}

main()

//nodemon src/index.js
//npm run start
//npm run dev
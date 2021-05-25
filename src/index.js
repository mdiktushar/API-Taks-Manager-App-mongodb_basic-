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

//nodemon src/index.js
//npm run start
//npm run dev
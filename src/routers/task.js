const express = require('express');
const Tasks = require('../models/task');

const router = new express.Router();


router.post('/tasks', async(req, res) =>{
    const task = Tasks(req.body);
    try{
        await task.save();
        res.status(201).send(task);
    }catch(e){
        res.status(400).send(e);
    }
    
})

router.get('/tasks',async(req, res)=>{
    try{
        const users = await Tasks.find({});
        res.send(users)
    }catch(e){
        res.status(500).send(e);
    }
})

router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id
    try{
        const task = await Tasks.findById({_id});
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update)=>allowedUpdates.includes(update));

    if(!isValidOperation)
        return res.status(400).send({error: "invalid task"});
    
    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!task){
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    
    try {
        const task = await Tasks.findByIdAndDelete(req.params.id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    }catch(e) {
        res.status(500).send();
    }
})

module.exports = router;
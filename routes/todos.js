const express = require('express');
const router = express.Router();
const passport = require('passport');
const Todo = require('../models/todo');
// Add New Todo
router.post('/add', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const newTodo = new Todo({
        name: req.body.name,
        done: req.body.done,
        owner: req.body.owner
    });
    newTodo.save((err, todo) => {
        if(err){
            return res.send({
                success: false,
                msg: 'Error While Saving New Todo, Please Try Again'
            })
        }
        if(!todo) {
            return res.send({
                success: false,
                msg: 'Failed To Save'
            })
        }
        return res.send({
            success: true,
            todo,
            msg: 'Todo Saved'
        });
    });
});
// List Own Todos
router.post('/list', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    // Query 
    const owner = req.body.owner;
    Todo.find({owner}, (err, todos) => {
       if(err) {
           console.log(err)
       } else {
           res.json(todos)
       }
    });
});
//Delete Todo
router.delete('/remove/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const todoId = req.params.id;
    Todo.deleteOne({_id: todoId}, (err) => {
        if(err){
            return res.send({
                success: false,
                msg: 'Error While Getting Own Todos, Please Try Again'
            })
        }
        return res.send({
            success: true,
            msg: 'Todo Deleted'
        })
    })
})
module.exports = router;


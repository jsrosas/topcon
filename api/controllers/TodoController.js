/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res) {
    try{
      const todos = await sails.helpers.todo.getTodosHelper();
      res.status(200).send(todos);
    } catch(error){
      sails.log.debug(error);
      res.status(500).send(error.details);
    }
  },

  show: async function (req, res) {
    if(!req.params.id){
      res.status(400);
    }

    try{
      const todo = await sails.helpers.todo.getTodoHelper(req.params.id);
      if(!todo){
        res.status(404).send('Not Found');
      }
      res.status(200).send(todo);
    } catch(error){
      sails.log.debug(error);
      res.status(500).send(error.details);
    }
  },

  create: async function (req, res) {
    try {
      const todo = await sails.helpers.todo.createTodoHelper(req.allParams());
      res.status(201).send(todo);
    } catch (error) {
      sails.log.debug(error);
      res.status(500).send(error.details);
    }
  },

  update: async function (req, res) {
    if(!req.params.id){
      res.status(400);
    }
    try {
      const todo = await sails.helpers.todo.updateTodoHelper(req.params.id, req.allParams());
      res.status(200).send(todo);
    } catch (error) {
      sails.log.debug(error);
      res.status(500).send('Unable to update todo.');
    }
  },

  delete: async function (req, res) {
    if(!req.params.id){
      res.status(400);
    }
    try {
      await sails.helpers.todo.deleteTodoHelper(req.params.id);
      res.status(204).send('Todo destroyed.');
    } catch (error) {
      sails.log.debug(error);
      res.status(500).send('Unable to delete todo.');
    }
  }
};


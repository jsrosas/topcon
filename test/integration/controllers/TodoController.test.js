const supertest = require('supertest');
const assert = require('chai').assert;

describe('TodosController', () => {
  describe('GET /todos', () => {

    beforeEach(async () => {
      await Todo.destroy({});
    });

    it('should get index with empty set', async () => {
      const response = await supertest(sails.hooks.http.app)
        .get('/todos')
        .expect(200);
      assert(response.body, []);
    });

    it('should get index with 1 todo', async () => {
      await Todo.create({
        'message' : 'test1',
        'dueDate': '2020-07-10 15:00:00.000',
        'label': 2
      }).fetch();
      const response = await supertest(sails.hooks.http.app)
        .get('/todos')
        .expect(200);
      assert.equal(1, response.body.length);
      assert.equal('test1', response.body[0].message);
      assert.equal('2020-07-10 15:00:00.000', response.body[0].dueDate);
      assert.equal('Design', response.body[0].label.name);
    });

    it('should get index with 2 todo', async () => {
      await Todo.create({
        'message' : 'test1',
        'dueDate': '2020-07-10 15:00:00.000',
        'label': 2
      }).fetch();
      await Todo.create({
        'message' : 'test2',
        'dueDate': '2020-07-11 15:00:00.000',
        'label': 1
      }).fetch();

      const response = await supertest(sails.hooks.http.app)
        .get('/todos')
        .expect(200);
      assert.equal(2, response.body.length);
      assert.equal('test1', response.body[0].message);
      assert.equal('2020-07-10 15:00:00.000', response.body[0].dueDate);
      assert.equal('Design', response.body[0].label.name);
      assert.equal('test2', response.body[1].message);
      assert.equal('2020-07-11 15:00:00.000', response.body[1].dueDate);
      assert.equal('Chore', response.body[1].label.name);
    });

  });

  describe('GET /todos/:id', () => {
    beforeEach(async () => {
      await Todo.destroy({});
    });

    it('should get 404 if no todo exists', async () => {
      const response = await supertest(sails.hooks.http.app)
        .get('/todos/1')
        .expect(404);
      assert.equal('Not Found',response.text);
    });

    it('should get a todo', async () => {
      const todo = await Todo.create({
        'message' : 'test1',
        'dueDate': '2020-07-10 15:00:00.000',
        'label': 2
      }).fetch();
      const response = await supertest(sails.hooks.http.app)
        .get(`/todos/${todo.id}`)
        .expect(200);
      assert.equal('test1',response.body.message);
      assert.equal('2020-07-10 15:00:00.000',response.body.dueDate);
      assert.equal('Design',response.body.label.name);
    });

  });

  describe('PATCH /todos/:id', () => {
    beforeEach(async () => {
      await Todo.destroy({});
    });

    it('should get 500 if no todo exists', async () => {
      await supertest(sails.hooks.http.app)
        .patch('/todos/1')
        .send({ message: 'test', label: 2 })
        .expect(500);
    });

    it('should update a todo', async () => {
      const todo = await Todo.create({
        'message' : 'test1',
        'dueDate': '2020-07-10 15:00:00.000',
        'label': 2
      }).fetch();
      const response = await supertest(sails.hooks.http.app)
      .patch(`/todos/${todo.id}`)
      .send({ message: 'testUpdate', label: 1 })
      .expect(200);
      assert.equal('testUpdate',response.body.message);
      assert.equal('2020-07-10 15:00:00.000',response.body.dueDate);
      assert.equal('Chore',response.body.label.name);
    });

  });

  describe('DELETE /todos/:id', () => {

    beforeEach(async () => {
      await Todo.destroy({});
    });

    it('should not delete todoif if it does not exists', async () => {
      response = await supertest(sails.hooks.http.app)
        .delete('/todos/50')
        .expect(500);
      assert.equal('Unable to delete todo.', response.text);
    });

    it('should delete todo', async () => {
      const todo = await Todo.create({
        'message' : 'test1',
        'dueDate': '2020-07-10 15:00:00.000',
        'label': 2
      }).fetch();
      await supertest(sails.hooks.http.app)
        .delete(`/todos/${todo.id}`)
        .expect(204);
      const deletedTodo = await Todo.findOne({id: todo.id});
      assert.isUndefined(deletedTodo);
    });

  });
});

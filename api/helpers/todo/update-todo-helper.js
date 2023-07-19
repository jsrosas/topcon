module.exports = {


  friendlyName: 'Update todo helper',


  description: '',


  inputs: {
    id: {
      description: 'Todo id',
      type: 'number',
    },
    data: {
      description: 'Todo update request',
      type: {},
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const todo =  await Todo.updateOne({id: inputs.id})
      .set(inputs.data);
    if(!todo){
      throw new Error('Unable to update todo.');
    }
    return sails.helpers.todo.getTodoHelper(todo.id);
  }


};


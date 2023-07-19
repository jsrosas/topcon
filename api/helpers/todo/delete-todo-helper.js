module.exports = {


  friendlyName: 'Delete todo helper',


  description: '',


  inputs: {
    id: {
      description: 'Todo id',
      type: 'number',
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const todo = await Todo.destroyOne({id: inputs.id});
    if(!todo){
      throw new Error('Unable to delete todo.');
    }
    return;
  }


};


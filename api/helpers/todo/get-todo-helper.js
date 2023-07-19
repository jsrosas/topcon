module.exports = {


  friendlyName: 'Get todo helper',


  description: '',


  inputs: {
    id: {
      description: 'Todo id',
      type: 'number',
    },
  },


  exits: {

    success: {
      outputFriendlyName: 'Todo helper',
    },

  },


  fn: async function (inputs) {
    return await Todo.findOne(inputs.id).populate('label');
  }


};


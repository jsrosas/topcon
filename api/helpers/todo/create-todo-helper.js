module.exports = {


  friendlyName: 'Create todo helper',


  description: '',


  inputs: {
    data: {
      description: 'Todo create request',
      type: {},
      defaultsTo: {}
    },
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    return await Todo.create(inputs.data).fetch();
  }


};


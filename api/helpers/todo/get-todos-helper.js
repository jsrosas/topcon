module.exports = {


  friendlyName: 'Get todos helper',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'Todos helper',
    },

  },


  fn: async function (inputs) {
    return await Todo.find().populate('label');
  }


};


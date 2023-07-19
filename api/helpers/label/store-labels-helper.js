const async = require('async');
const sails = require('sails');

module.exports = {


  friendlyName: 'Store labels helper',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

  fn: async function () {
    const labels = await sails.helpers.label.getLabelsHelper();
    async.map(labels, ((object, callback) => {
      Label.findOrCreate(object, object).exec(callback);
    }), (error, createdOrFoundObjects) => {
      console.log(error);
    });
  }
};


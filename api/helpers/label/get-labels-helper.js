const axios = require('axios');
const axiosRetry = require('axios-retry');

axiosRetry(axios, { retries: 3 });
const LABELS_API = 'https://nptwpxthvb.eu-west-1.awsapprunner.com/labels';
module.exports = {


  friendlyName: 'Get labels helper',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      outputFriendlyName: 'Labels helper',
    },

  },


  fn: async function () {
    axiosRetry(axios, { retries: 3 });
    try {
      const response = await axios.get(LABELS_API);
      return response.data;
    } catch (error) {
      sails.debug.log(error);
    }

  }


};


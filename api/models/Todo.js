/**
 * Todo.ts
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    message: {
      type: 'string',
      required: true,
    },
    dueDate: {
      type: 'ref',
      columnType: 'datetime'
    },
    label: {
      model: 'label',
    }
  },
};


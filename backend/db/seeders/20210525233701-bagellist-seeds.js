"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "BagelLists",
      [
        {
          shopId: 1,  
          bagelId: 1,
        },
        {
          shopId: 2,
          bagelId: 2,
        },
        {
          shopId: 3,
          bagelId: 3,
        },
        {
          shopId: 4,
          bagelId: 4,
        },
        {
          shopId: 5,
          bagelId: 5,
        },
        {
          shopId: 6,
          bagelId: 6,
        },
        {
          shopId: 7,
          bagelId: 7,
        },
        {
          shopId: 8,
          bagelId: 8,
        },
        {
          shopId: 9,
          bagelId: 9,
        },
        {
          shopId: 10,
          bagelId: 10,
        },
        {
          shopId: 11,
          bagelId: 11,
        },
        {
          shopId: 12,
          bagelId: 12,
        },
        {
          shopId: 13,
          bagelId: 13,
        },
        {
          shopId: 14,
          bagelId: 14,
        },
        {
          shopId: 15,
          bagelId: 15,
        },
        {
          shopId: 16,
          bagelId: 16,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("BagelLists", null, {});
  },
};

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bagels",
      [
        {
          bagelType: "Plain",
        },
        {
          bagelType: "Everything",
        },
        {
          bagelType: "Cinnamon Raisin",
        },
        {
          bagelType: "Blueberry",
        },
        {
          bagelType: "Chocolate Chip",
        },
        {
          bagelType: "Onion",
        },
        {
          bagelType: "Asiago",
        },
        {
          bagelType: "Salt",
        },
        {
          bagelType: "Poppy Seed",
        },
        {
          bagelType: "French Toast",
        },
        {
          bagelType: "Egg",
        },
        {
          bagelType: "Pumpernickel",
        },
        {
          bagelType: "Whole Wheat",
        },
        {
          bagelType: "Garlic",
        },
        {
          bagelType: "Sesame",
        },
        {
          bagelType: "Cheddar",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bagels", null, {});
  },
};

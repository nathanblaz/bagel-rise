"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "MarkB",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "KristinaG",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "AlyssaK",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "DerekG",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "TedH",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ConradE",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ChrisV",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JerryM",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "HampusP",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "PatrickF",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "CodyD",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JohannG",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ArloS",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "LynnL",
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};

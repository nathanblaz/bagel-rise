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
          bio: null,
          hashedPassword: bcrypt.hashSync("password"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "MarkB",
          bio: null,
          hashedPassword: bcrypt.hashSync("password1"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JasonJ",
          bio: null,
          hashedPassword: bcrypt.hashSync("password2"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "KristinaG",
          bio: null,
          hashedPassword: bcrypt.hashSync("password3"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "AlyssaK",
          bio: null,
          hashedPassword: bcrypt.hashSync("password4"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "DerekG",
          bio: null,
          hashedPassword: bcrypt.hashSync("password5"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "TedH",
          bio: null,
          hashedPassword: bcrypt.hashSync("password6"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ConradE",
          bio: null,
          hashedPassword: bcrypt.hashSync("password7"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ChrisV",
          bio: null,
          hashedPassword: bcrypt.hashSync("password8"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "TeetW",
          bio: null,
          hashedPassword: bcrypt.hashSync("password9"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "JerryM",
          bio: null,
          hashedPassword: bcrypt.hashSync("password10"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "TiffanyP",
          bio: null,
          hashedPassword: bcrypt.hashSync("password11"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "TinusM",
          bio: null,
          hashedPassword: bcrypt.hashSync("password12"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "AndriiD",
          bio: null,
          hashedPassword: bcrypt.hashSync("password13"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "PavleS",
          bio: null,
          hashedPassword: bcrypt.hashSync("password14"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "BevS",
          bio: null,
          hashedPassword: bcrypt.hashSync("password15"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "IanM",
          bio: null,
          hashedPassword: bcrypt.hashSync("password16"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "IgorO",
          bio: null,
          hashedPassword: bcrypt.hashSync("password17"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "ShawnC",
          bio: null,
          hashedPassword: bcrypt.hashSync("password18"),
          avatar: faker.internet.avatar(),
        },
        {
          email: faker.internet.email(),
          username: "GillesP",
          bio: null,
          hashedPassword: bcrypt.hashSync("password19"),
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

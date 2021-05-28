'use strict';
module.exports = (sequelize, DataTypes) => {
  const BagelShop = sequelize.define(
    'BagelShop',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      zipcode: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      information: {
        type: DataTypes.TEXT,
      }
    }, {});
  BagelShop.associate = function(models) {
    // associations can be defined here
    BagelShop.hasMany(models.BagelList, { foreignKey: 'shopId' });
  };
  return BagelShop;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define(
    'Checkin',
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      listId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      review: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      }
    }, {});
  Checkin.associate = function(models) {
    // associations can be defined here
    Checkin.hasMany(models.User, { foreignKey: 'userId' });
    Checkin.hasOne(models.BagelList, { foreignKey: 'listId' });
  };
  return Checkin;
};

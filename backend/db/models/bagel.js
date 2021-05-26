'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bagel = sequelize.define(
    'Bagel',
    {
      bagelType: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {});
  Bagel.associate = function(models) {
    // associations can be defined here
    Bagel.hasMany(models.BagelList, { foreignKey: 'bagelId' });
  };
  return Bagel;
};

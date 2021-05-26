'use strict';
module.exports = (sequelize, DataTypes) => {
  const BagelList = sequelize.define(
    'BagelList',
    {
      shopId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bagelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {});
  BagelList.associate = function(models) {
    // associations can be defined here
    BagelList.hasOne(models.Checkin, { foreignKey: 'listId' });
    BagelList.belongsTo(models.BagelShop, { foreignKey: 'shopId' });
    BagelList.belongsTo(models.Bagel, { foreignKey: 'bagelId' });
  };
  return BagelList;
};

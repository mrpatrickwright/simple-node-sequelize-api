const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaType', {
    mediaTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'MediaTypeId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'MediaType',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_MediaType",
        unique: true,
        fields: [
          { name: "MediaTypeId" },
        ]
      },
    ]
  });
};

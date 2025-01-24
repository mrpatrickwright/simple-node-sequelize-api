const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Artist', {
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'ArtistId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'Artist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_Artist",
        unique: true,
        fields: [
          { name: "ArtistId" },
        ]
      },
    ]
  });
};

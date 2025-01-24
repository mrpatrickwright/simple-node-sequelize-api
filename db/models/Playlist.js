const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Playlist', {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'PlaylistId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'Playlist',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_Playlist",
        unique: true,
        fields: [
          { name: "PlaylistId" },
        ]
      },
    ]
  });
};

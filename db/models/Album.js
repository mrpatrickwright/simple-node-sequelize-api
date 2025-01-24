const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Album', {
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'AlbumId'
    },
    title: {
      type: DataTypes.STRING(160),
      allowNull: false,
      field: 'Title'
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Artist',
        key: 'ArtistId'
      },
      field: 'ArtistId'
    }
  }, {
    sequelize,
    tableName: 'Album',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "IFK_AlbumArtistId",
        fields: [
          { name: "ArtistId" },
        ]
      },
      {
        name: "PK_Album",
        unique: true,
        fields: [
          { name: "AlbumId" },
        ]
      },
    ]
  });
};

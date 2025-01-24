const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track', {
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'TrackId'
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'Name'
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Album',
        key: 'AlbumId'
      },
      field: 'AlbumId'
    },
    mediaTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MediaType',
        key: 'MediaTypeId'
      },
      field: 'MediaTypeId'
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Genre',
        key: 'GenreId'
      },
      field: 'GenreId'
    },
    composer: {
      type: DataTypes.STRING(220),
      allowNull: true,
      field: 'Composer'
    },
    milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'Milliseconds'
    },
    bytes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'Bytes'
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'UnitPrice'
    }
  }, {
    sequelize,
    tableName: 'Track',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "IFK_TrackAlbumId",
        fields: [
          { name: "AlbumId" },
        ]
      },
      {
        name: "IFK_TrackGenreId",
        fields: [
          { name: "GenreId" },
        ]
      },
      {
        name: "IFK_TrackMediaTypeId",
        fields: [
          { name: "MediaTypeId" },
        ]
      },
      {
        name: "PK_Track",
        unique: true,
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};

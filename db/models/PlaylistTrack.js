const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlaylistTrack', {
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Playlist',
        key: 'PlaylistId'
      },
      field: 'PlaylistId'
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Track',
        key: 'TrackId'
      },
      field: 'TrackId'
    }
  }, {
    sequelize,
    tableName: 'PlaylistTrack',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "IFK_PlaylistTrackTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
      {
        name: "PK_PlaylistTrack",
        unique: true,
        fields: [
          { name: "PlaylistId" },
          { name: "TrackId" },
        ]
      },
    ]
  });
};

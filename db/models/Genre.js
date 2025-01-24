const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'GenreId'
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true,
      field: 'Name'
    }
  }, {
    sequelize,
    tableName: 'Genre',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "PK_Genre",
        unique: true,
        fields: [
          { name: "GenreId" },
        ]
      },
    ]
  });
};

var DataTypes = require("sequelize").DataTypes;
var _Album = require("./Album");
var _Artist = require("./Artist");
var _Customer = require("./Customer");
var _Employee = require("./Employee");
var _Genre = require("./Genre");
var _Invoice = require("./Invoice");
var _InvoiceLine = require("./InvoiceLine");
var _MediaType = require("./MediaType");
var _Playlist = require("./Playlist");
var _PlaylistTrack = require("./PlaylistTrack");
var _Track = require("./Track");

function initModels(sequelize) {
  var Album = _Album(sequelize, DataTypes);
  var Artist = _Artist(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var Genre = _Genre(sequelize, DataTypes);
  var Invoice = _Invoice(sequelize, DataTypes);
  var InvoiceLine = _InvoiceLine(sequelize, DataTypes);
  var MediaType = _MediaType(sequelize, DataTypes);
  var Playlist = _Playlist(sequelize, DataTypes);
  var PlaylistTrack = _PlaylistTrack(sequelize, DataTypes);
  var Track = _Track(sequelize, DataTypes);

  Playlist.belongsToMany(Track, { as: 'trackIdTracks', through: PlaylistTrack, foreignKey: "playlistId", otherKey: "trackId" });
  Track.belongsToMany(Playlist, { as: 'playlistIdPlaylists', through: PlaylistTrack, foreignKey: "trackId", otherKey: "playlistId" });
  Track.belongsTo(Album, { as: "album", foreignKey: "albumId"});
  Album.hasMany(Track, { as: "tracks", foreignKey: "albumId"});
  Album.belongsTo(Artist, { as: "artist", foreignKey: "artistId"});
  Artist.hasMany(Album, { as: "albums", foreignKey: "artistId"});
  Invoice.belongsTo(Customer, { as: "customer", foreignKey: "customerId"});
  Customer.hasMany(Invoice, { as: "invoices", foreignKey: "customerId"});
  Customer.belongsTo(Employee, { as: "supportRep", foreignKey: "supportRepId"});
  Employee.hasMany(Customer, { as: "customers", foreignKey: "supportRepId"});
  Employee.belongsTo(Employee, { as: "reportsToEmployee", foreignKey: "reportsTo"});
  Employee.hasMany(Employee, { as: "employees", foreignKey: "reportsTo"});
  Track.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(Track, { as: "tracks", foreignKey: "genreId"});
  InvoiceLine.belongsTo(Invoice, { as: "invoice", foreignKey: "invoiceId"});
  Invoice.hasMany(InvoiceLine, { as: "invoiceLines", foreignKey: "invoiceId"});
  Track.belongsTo(MediaType, { as: "mediaType", foreignKey: "mediaTypeId"});
  MediaType.hasMany(Track, { as: "tracks", foreignKey: "mediaTypeId"});
  PlaylistTrack.belongsTo(Playlist, { as: "playlist", foreignKey: "playlistId"});
  Playlist.hasMany(PlaylistTrack, { as: "playlistTracks", foreignKey: "playlistId"});
  InvoiceLine.belongsTo(Track, { as: "track", foreignKey: "trackId"});
  Track.hasMany(InvoiceLine, { as: "invoiceLines", foreignKey: "trackId"});
  PlaylistTrack.belongsTo(Track, { as: "track", foreignKey: "trackId"});
  Track.hasMany(PlaylistTrack, { as: "playlistTracks", foreignKey: "trackId"});

  return {
    Album,
    Artist,
    Customer,
    Employee,
    Genre,
    Invoice,
    InvoiceLine,
    MediaType,
    Playlist,
    PlaylistTrack,
    Track,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

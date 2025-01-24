const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InvoiceLine', {
    invoiceLineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'InvoiceLineId'
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Invoice',
        key: 'InvoiceId'
      },
      field: 'InvoiceId'
    },
    trackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Track',
        key: 'TrackId'
      },
      field: 'TrackId'
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'UnitPrice'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'Quantity'
    }
  }, {
    sequelize,
    tableName: 'InvoiceLine',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "IFK_InvoiceLineInvoiceId",
        fields: [
          { name: "InvoiceId" },
        ]
      },
      {
        name: "IFK_InvoiceLineTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
      {
        name: "PK_InvoiceLine",
        unique: true,
        fields: [
          { name: "InvoiceLineId" },
        ]
      },
    ]
  });
};

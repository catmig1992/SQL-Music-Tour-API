"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band }) {
      // band
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
    }
  }
  Meet_Greet.init(
    {
      meet_greet_id: DataTypes.INTEGER,
      event_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      meet_start_time: DataTypes.DATE,
      meet_end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Meet_Greet",
      tableName: "meet_greets",
      timestamps: false,
    }
  );
  return Meet_Greet;
};

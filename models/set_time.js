"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    static associate({ Band, Event, Stage }) {
      //   band
      Set_Time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band",
      });
      //   event
      Set_Time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event",
      });
      //   stage
      Set_Time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage",
      });
    }
  }
  Set_Time.init(
    {
      set_time_id: DataTypes.INTEGER,
      event_id: DataTypes.SMALLINT,
      stage_id: DataTypes.SMALLINT,
      band_id: DataTypes.SMALLINT,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Set_Time",
      tableName: "set_times",
      timestamps: false,
    }
  );
  return Set_Time;
};

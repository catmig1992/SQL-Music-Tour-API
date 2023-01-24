"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Meet_Greet, Set_Time, Stage, Stage_Event }) {
      //   meet and greets
      Event.hasMany(Meet_Greet, {
        foreignKey: "event_id",
        as: "meet_greets",
      });
      //   set times
      Event.hasMany(Set_Time, {
        foreignKey: "event_id",
        as: "set_times",
      });
      // stages
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: Stage_Event,
      });
    }
  }
  Event.init(
    {
      event_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Event",
      tableName: "events",
      timestamps: false,
    }
  );
  return Event;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Set_Time, Event, Stage_Event }) {
      //   set time
      Stage.hasMany(Set_Time, {
        foreignKey: "stage_id",
        as: "set_times",
      });
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: Stage_Event,
      });
    }
  }
  Stage.init(
    {
      stage_id: DataTypes.INTEGER,
      stage_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Stage",
      tableName: "stages",
      timestamps: false,
    }
  );
  return Stage;
};

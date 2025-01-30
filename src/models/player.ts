import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

export const playerModel = sequelize.define("Player", {
  idplayer: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
  team: {
    type: DataTypes.STRING,
  },
});

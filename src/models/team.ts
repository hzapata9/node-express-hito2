import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

export const teamModel = sequelize.define("team", {
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
  },
  owner: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

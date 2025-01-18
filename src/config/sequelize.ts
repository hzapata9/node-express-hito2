import { Sequelize } from "sequelize-typescript";
import { Player, Team } from "./schema";

const DATABASE_URL = "postgresql://postgres:root@localhost:5432/hzapata";

export const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    models: [Team, Player],
    logging: false,
  });
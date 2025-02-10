import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { Player, Team } from "./schema";
import { PostgresDialect } from "@sequelize/postgres";

const DATABASE_URL = "postgresql://postgres:root@localhost:5432/dbtest";

const url = process.env.DATABASE_URL;

// validar database url

export const sequelize = new Sequelize(url!, {
    dialect: "postgres",
    models: [Player, Team],
    logging: false,
});
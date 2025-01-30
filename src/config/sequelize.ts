import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import { Player, Team } from "./schema";
import { PostgresDialect } from "@sequelize/postgres";

const DATABASE_URL = "postgresql://postgres:root@localhost:5432/dbtest";

const url = process.env.DATABASE_URL;

export const sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    models: [Player, Team],
    logging: false,
  });

  //process.loadEnvFile("../../.env");
/*
  export const connection = new Sequelize(process.env.DATABASE,
    process.env.DATABAE_USER,
    process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: PostgresDialect,
    logging: true,
  });
  */
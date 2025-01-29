import {readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {Team} from "../interfaces/team.interface";
import { pool } from "../config/database_back";


const __dirname = import.meta.dirname;
const pathFile = path.resolve(__dirname, "../../data/teams.json");

const readTeams = async() => {
    const teamsJSON = await readFile(pathFile, "utf-8");
    return JSON.parse(teamsJSON);
};

const writeTeams = async(teams: Team[]) => {
    const teamsJSON = JSON.stringify(teams, null, 2);
    return await writeFile(pathFile, teamsJSON);
};

const findAllTeams = async() => {
    const { rows } = await pool.query("SELECT * FROM TEAM");
    console.log("findAllTeams Team: " , rows);
    return rows as unknown as Team;
  };

const findOneByName = async(name: string) => {
    const query = {
        text: "SELECT * FROM TEAM WHERE NAME = $1",
        values: [name],
      };
      console.log("QUERY: " , query);
    const { rows } = await pool.query(query);
    console.log("findOneByName Team: " , rows);
    return rows[0] as Team;
};

const createTeam = async(name: string, city: string, owner: string, password: string) => {
    const query = {
        text: "INSERT INTO TEAM(name, city, owner, password) VALUES($1, $2, $3, $4) RETURNING *",
        values: [name, city, owner, password],
      };
      console.log("CREATE:" , query);
    const { rows } = await pool.query(query);
    console.log(rows);
    return rows[0] as Team;
};

const updateTeam = async (name: string, city: string, owner: string, password: string) => {
  const query = {
    text: "UPDATE TEAM SET city = $2, owner = $3, password = $4 WHERE name = $1 RETURNING *",
    values: [name, city, owner, password],
  };
  const { rows } = await pool.query(query);
  return rows[0] as Team;
};

const removeTeam = async (name: string) => {
    console.log("REMOVE: " , name)
  const query = {
    text: "DELETE FROM TEAM WHERE name = $1 RETURNING *",
    values: [name],
  };
  console.log("REMOVE: " , query)
  const { rows } = await pool.query(query);
  return rows[0] as Team;
};

export const teamModel = {
    readTeams,
    writeTeams,
    createTeam,
    findAllTeams,
    findOneByName,
    updateTeam,
    removeTeam
};
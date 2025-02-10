import { teamService } from "./team.service";
import { Team } from "../interfaces/team.interface";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";

const loginWithNameAndPassword = async(name: string, password: string) => {
    const teams: Team[] = await teamService.getAllTeams();

    // 1. verificar que existe
    const team = teams.find((item => item.name === name));
    if(!team) {
        throw new Error("Team not found! \n");
    }

    // 2. comparar los hash
    console.log("Team pas: ", team.password);
    console.log("Password: ", password);
    const isValidPassword = await bcrypt.compare(password, team.password);
    if(!isValidPassword) {
        throw new Error("Password incorrect! \n");
    }

    // 3. generar el token
    const token = jwt.sign({name: team.name}, "secret", {
        expiresIn: "1h"
    });
    return token;
};

const registerTeam = async(name: string, city: string, owner: string, password: string) => {
    const team = await teamService.getTeamByName(name);
    if(team) {
        throw new Error("Team already exists! \n");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newTeam = await teamService.createTeam(name, city, owner, hashedPassword);
    return newTeam;
}

const loginTeam = async(req: Request, res: Response) => {
    console.log("Login Team", req.body);
    try {
        const { name, password } = req.body;
        const team: Team = await teamService.getTeamByName(name);
        if (!team) {
            return void res.status(404).json({ error: "Team not found!" });
        }

        const isValidPassword = await authService.validatePassword(team.password);
        if (!isValidPassword) {
            return void res.status(400).json({ error: "Password incorrect!" });
        }
        console.log("Team: ", team);
        return res.status(200).json( {team: team} );

    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Internal Server Error!"});
    }
};

const hashPassword = async(password: string) => {
    if (!password) {
        throw new Error("Password undefined! \n");
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, 10);
    return passwordHashed;
  }

 const validatePassword = async(password: string) => {
    return await bcrypt.compare(password, password);
 }


export const authService = {
    loginWithNameAndPassword,
    registerTeam,
    hashPassword,
    validatePassword,
    loginTeam,
}
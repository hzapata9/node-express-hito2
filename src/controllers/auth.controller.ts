import { log } from "console";
import { Request, Response } from "express";
import { teamService } from "../services/team.service";
import { authService } from "../services/auth.service";

const login = async(req: Request, res: Response) => {
    console.log("Login");
    try {
        const { name, password } = req.body;
        //const token = await authService.loginTeam(name, password);
        const team = await teamService.getTeamByName(name);
        if (!team) {
            return void res.status(404).json({ error: "Team not found!" });
        }
        
        return void res.status(200).json( {team: team} );
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Error del servidor!"});
    }
};

const register = async(req: Request, res: Response) => {
    console.log("Register");
    try {
        const { name, city, owner, password } = req.body;
        const team = await teamService.getTeamByName(name);
        if (team) {
            return void res.status(400).json({ error: "Team already exists"});
        }

        const hashedPassword = await authService.hashPassword(password);
        const newTeam = await teamService.createTeam(name, city, owner, hashedPassword);
        
        res.json(newTeam);
        
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Error del servidor!"});
    }
};

export const authController = {
    login,
    register,
};
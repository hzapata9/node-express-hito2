import { log } from "console";
import { Request, Response } from "express";
import { teamService } from "../services/team.service";
import { authService } from "../services/auth.service";

const login = async(req: Request, res: Response) => {
    try {
        const { name, password } = req.body;
        const token = await authService.loginWithNameAndPassword(name, password);
        
        res.json( {token} );
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Error del servidor!"});
    }
};

const register = async(req: Request, res: Response) => {
    try {
        const { name, city, owner, password } = req.body;
        const newTeam = await teamService.createTeam(name, city, owner, password);
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
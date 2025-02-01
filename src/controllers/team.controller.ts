import {Request, Response} from "express";
import {teamService} from "../services/team.service";

const getTeams = async(req: Request, res: Response) => {
    try {
        const teams = await teamService.getAllTeams();
        res.json(teams);
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Error del servidor!"});
    }
};

const getTeamByName = async(req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const team = await teamService.getTeamByName(name);
        res.json(team);
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        }
        res.status(500).json({error: "Error del servidor!"});
    }
};

const createTeam = async(req: Request, res: Response) => {
    const { name, city, owner, password } = req.body;
    try {
        await teamService.createTeam(name, city, owner, password);
        res.status(201).json( {message: "Team created!"} );
    } catch(error) {
        console.log(error);
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        } else {
            res.status(500).json({message: "Internal server error!"});
        }
    }
};

const deleteTeam = async(req: Request, res: Response) => {
    const { name } = req.params;
    try {
        const team = await teamService.deleteTeamByName(name);
        res.json(team);
    } catch(error) {
        console.log(error);
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        } else {
            res.status(500).json({message: "Internal server error!"});
        }
    }
};

const updateTeam = async(req: Request, res: Response) => {
    const { name, city, owner, password } = req.body;
    const { newName } = req.params;
    try {
        const team = await teamService.updateTeamByName(name, newName, city, owner, password);
        res.json(team);
    } catch(error) {
        console.log(error);
        if(error instanceof Error) {
            res.status(500).json({message: error.message});
        } else {
            res.status(500).json({message: "Internal server error!"});
        }
    }
};


export const teamController = {
    getTeams,
    createTeam,
    getTeamByName,
    deleteTeam,
    updateTeam
}
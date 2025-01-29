import { Request, Response } from "express";
import {playerService} from "../services/player.service";


const getPlayers = async(req: Request, res: Response) => {
    try {
        const players = await playerService.getAllPlayers();
        res.json(players);
    } catch(error) {
        console.log(error);
        if (error instanceof Error) {
            res.status(500).json({ error: error.message});
        } else
            res.status(500).json({error: "Error del servidor!"});
    }
}


export const playerController = {
    getPlayers
}
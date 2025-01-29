import { playerModel } from "../models/player"
import { Player } from "../interfaces/player.interface"

const getAllPlayers = async() => {
    return await playerModel.findAll();
};


export const playerService = {
    getAllPlayers
}
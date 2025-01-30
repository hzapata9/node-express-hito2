import { playerModel } from "../models/player"

const getAllPlayers = async() => {
    return await playerModel.findAll();
};


export const playerService = {
    getAllPlayers
}
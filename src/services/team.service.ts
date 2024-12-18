import {teamModel} from "../models/team.model";
import {Team} from "../interfaces/team.interface";

const getAllTeams = async() => {
    return await teamModel.findAllTeams();
};

const getTeamByName = async(name: string) => {
    const team: Team = await teamModel.findOneByName(name)
    return team;
};

const createTeam = async(name: string, city: string, owner: string, password: string) => {
    const team = await getTeamByName(name);
    if(team) {
        throw new Error("Team already exists! \n");
    }
    /*const newTeam: Team = {
        name: name,
        city: city,
        owner: owner,
        password: password,
    };*/
    const newTeam = await teamModel.createTeam(name, city, owner, password);
    return newTeam;
};

const deleteTeamByName = async(name: string) => {
    const team = await teamModel.removeTeam(name);
    if(!team) throw new Error("Team Not Found.");
    return team;
};

const updateTeamByName = async(name: string, city: string, owner: string, password: string) => {
    const team = await teamModel.updateTeam(name, city, owner, password);
    if(!team) throw new Error("Team not found! \n");
    return team;
};


export const teamService = {
    getAllTeams,
    getTeamByName,
    createTeam,
    deleteTeamByName,
    updateTeamByName
}
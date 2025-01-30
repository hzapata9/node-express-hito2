import { teamModel } from "../models/team";
import { Team } from "../interfaces/team.interface";

const getAllTeams = async() => {
    
    const teams = await teamModel.findAll();
    console.log("Service getAllTeams", teams);
    //return await teamModel.findAll();
    return teams;
};

const getTeamByName = async(name: string) => {
    const team = await teamModel.findByPk(name);
    return team;
};

const createTeam = async(name: string, city: string, owner: string, password: string) => {
    const team = await getTeamByName(name);
    if(team) {
        throw new Error("Team already exists! \n");
    }

    const newTeam = await teamModel.create({
        name,
        city,
        owner,
        password,
    });
    if(newTeam) {
        console.log("Registro Creado: ", newTeam);
    }
    
    return newTeam;
};

const deleteTeamByName = async(name: string) => {
    const team = await teamModel.findByPk(name);
    console.log("Registro Buscado para Borrar: ", team);
    
    if(!team) {
        throw new Error("Team Not Found.");
    } else {
        const result = await teamModel.destroy({
            where: { name },
        });
    }
    return team;
};

const updateTeamByName = async(name: string, city: string, owner: string, password: string) => {
    console.log("DATOS UPDATE: ", name, city, owner, password);
    const findTeam = await teamModel.findByPk(name);
    console.log("DATOS UPDATE: ", findTeam);
    
    if(!findTeam) {
        throw new Error("Team not found! \n");
    } else {
        findTeam.name = name;
        findTeam.city = city;
        findTeam.owner = owner;
        findTeam.password = password;

        const uTeam = await findTeam.update(findTeam);
    }

    return findTeam;
};


export const teamService = {
    getAllTeams,
    getTeamByName,
    createTeam,
    deleteTeamByName,
    updateTeamByName
}
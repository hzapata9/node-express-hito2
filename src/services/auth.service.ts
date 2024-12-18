import { teamService } from "./team.service";
import { Team } from "../interfaces/team.interface";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

export const authService = {
    loginWithNameAndPassword,
}
import express from "express";
import { sequelize } from "./config/sequelize";
import teamRouter from "./routes/team.route";
import playerRouter from "./routes/player.route";
import authRouter from "./routes/auth.route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/players", playerRouter);
app.use("/api/v1/auth", authRouter);


const main = async () => {
    try {
        await sequelize.authenticate();
        
        // force: true => elimina las tablas
        //await sequelize.sync({ force: true });

        console.log("Conexión a la base de datos realizada correctamente");
        
        app.listen(PORT, () => {
            console.log(`\nServer is running on http://localhost:${PORT}`);
          });
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
    }
};

main();
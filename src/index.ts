import express from "express";
import { sequelize } from "./config/sequelize";
import teamRouter from "./routes/team.route";
import playerRouter from "./routes/player.route";

const app = express();
const PORT = 3000;

app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/players", playerRouter);


const main = async () => {
    try {
        await sequelize.authenticate();
        
        // force: true => elimina las tablas
        await sequelize.sync({ force: true });
        
        console.log("Conexión a la base de datos realizada correctamente");
        //app.listen(3000, console.log("Servidor levantado en el puerto 3000"));
        app.listen(PORT, () => {
            console.log(`\nServer is running on http://localhost:${PORT}`);
          });
    } catch (error) {
        console.log("No se pudo conectar a la base de datos", error);
    }
};

main();
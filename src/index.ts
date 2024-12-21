import express from "express";
import teamRouter from "./routes/team.route";
import authRouter from "./routes/auth.route"
import { pool } from "./config/database"
import rateLimit from "express-rate-limit";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el limitador
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Límite de 100 peticiones por IP
    message:
      "Demasiadas solicitudes desde esta IP, por favor inténtalo más tarde.",
    standardHeaders: true, // Informa el límite en las cabeceras `RateLimit-*`
    legacyHeaders: false, // Desactiva las cabeceras `X-RateLimit-*`
  });
// Aplicar el limitador globalmente
app.use(limiter);

app.use("/api/v1/teams", teamRouter);
app.use("/api/v1/auth", authRouter);

const main = async() => {
    try {
        const response = await pool.query('SELECT NOW()');
        console.log("Time DB: ", response.rows);

        app.listen(3000, () => {
            console.log("\nServer is running on Port:" + port);
        });
    } catch(error) {
        console.log(error);
    }
};

main();
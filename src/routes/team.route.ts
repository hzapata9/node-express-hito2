import { Router } from "express";
import { teamController } from "../controllers/team.controller";

const router: Router = Router();

router.get("/", teamController.getTeams);

router.post("/create", teamController.createTeam);

router.get("/:name", teamController.getTeamByName);

router.delete("/:name", teamController.deleteTeam);

router.put("/:name", teamController.updateTeam);

/*
router.use((req, res, next) => {
    console.log("Middleware de Team Route");
    next();
  });
  
  router.get("/logs", (req, res) => {
    res.send("Path Team root");
  });
*/

export default router;
import { Router } from "express";
import { playerController } from "../controllers/player.controller";

const router: Router = Router();

router.get("/", playerController.getPlayers);

/*
router.post("/create", playerController.createTeam);

router.get("/:name", playerController.getTeamByName);

router.delete("/:name", playerController.deleteTeam);

router.put("/:name", playerController.updateTeam);
*/

export default router;
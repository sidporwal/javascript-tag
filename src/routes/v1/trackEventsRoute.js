import { Router } from "express";
import { trackEvents } from "../../controllers/trackEventsController.js";

const router = Router();

router.post("/event", trackEvents);

export default router;

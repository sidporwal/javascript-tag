import { Router } from "express";
import apiTokenRoute from "./apiTokenRoute.js";
import scriptRoute from "./scriptRoute.js";
import trackEventsRoute from "./trackEventsRoute.js";
import userInfoRoute from "./userInfoRoute.js";

const router = Router();

router.use("/token", apiTokenRoute);
router.use("/script", scriptRoute);
router.use("/track", trackEventsRoute);
router.use("/user", userInfoRoute);

export default router;

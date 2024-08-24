import { Router } from "express";
import {
  createToken,
  validateToken,
} from "../../controllers/apiTokenController.js";

const router = Router();

router.get("/create", createToken);
router.get("/validate", validateToken);

export default router;

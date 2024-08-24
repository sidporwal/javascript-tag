import { Router } from "express";
import path from "path";
import { getDirname } from "../../utils/pathUtils.js";

const router = Router();
const __dirname = getDirname(import.meta.url);

router.get("/index.js", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "..", "build", "script.js"),
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

export default router;

import express from "express";
import bodyParser from "body-parser"; // Middleware to parse the body of the request
import path from "path"; // Node.js module to work with file paths
import cors from "cors"; // Middleware to enable CORS
import routes from "./src/routes/v1/index.js";
import { getDirname } from "./src/utils/pathUtils.js";

const app = express();

const port = 8080;
const __dirname = getDirname(import.meta.url);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "src", "public")));

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

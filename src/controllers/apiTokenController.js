import crypto from "crypto";
import { TOKENS } from "../db/tokens.js";

export const createToken = (req, res) => {
  const apiKey = crypto.randomBytes(16).toString("hex");
  const tokenExpiry = new Date() + 7 * 24 * 60 * 60 * 1000;
  TOKENS[apiKey] = { tokenExpiry };
  return res.json({ apiKey });
};

export const validateToken = (req, res) => {
  const apiKey = req.query.apiKey;
  console.log(apiKey);
  if (!TOKENS[apiKey]) {
    return res.status(401).json({ message: "Invalid API Key" });
  }
  if (TOKENS[apiKey].tokenExpiry < new Date()) {
    return res.status(401).json({ message: "Token expired" });
  }
  return res.json({ message: "Token is valid" });
};

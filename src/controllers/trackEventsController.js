import { EVENTS } from "../db/events.js";

export const trackEvents = (req, res) => {
  const data = req.body;

  // Log the received data
  console.log("Received data:", data);

  EVENTS.push(data);

  // Respond to the client
  res.status(200).json({ message: "Data received successfully" });
};

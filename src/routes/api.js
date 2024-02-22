// Imports
import { Router } from "express";

// Initializing the API Router.
const api = Router();

// Shortening Endpoint.
api.post("/api/shorten", (req, res) => {
  const data = req.body;
  res.json({ orginal: data.url, shortened: "THIS FOR TESTING" });
});

export default api;

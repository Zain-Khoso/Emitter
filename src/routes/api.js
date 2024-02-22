// Imports
import { Router } from "express";

// Initializing the API Router.
const api = Router();

// Endpoints.

// Test Endpoint.
api.get("/api/test/", (_, res) => res.send("API END POINT"));

export default api;

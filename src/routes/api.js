// Imports
import { Router } from "express";
import { v4 as UUID4 } from "uuid";
import urlEmitModel from "../models/urlEmit.model.js";

// Initializing the API Router.
const api = Router();

// Shortening Endpoint.
api.post("/api/shorten", async (req, res) => {
  const orgURL = req.body.url;
  const urlID = UUID4();
  const shortURL = `${process.env.SERVER_URL}/short/${urlID}`;

  try {
    const newUser = new urlEmitModel({ orgURL, shortURL, urlID });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Redirecting URL Endpoint.
api.get("/short/:id", async (req, res) => {
  const urlID = req.params.id;

  try {
    const urlEmit = await urlEmitModel.findOne({ urlID });

    if (urlEmit.length === 0) res.redirect(`${process.env.SERVER_URL}/shorten`);

    res.redirect(urlEmit.orgURL);
  } catch (error) {
    // Handle errors, such as invalid category or database errors
    res.status(500).json({ error: error.message });
  }
});

export default api;

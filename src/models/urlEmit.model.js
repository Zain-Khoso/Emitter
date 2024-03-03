// Imports
import { Schema, model } from "mongoose";

const schema = new Schema({
  orgURL: String,
  shortURL: String,
  urlID: String,
});

export default model("urlEmitModel", schema);

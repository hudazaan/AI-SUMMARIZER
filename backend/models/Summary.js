import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  transcript: String,
  prompt: String,
  summary: String,
}, { timestamps: true });

export default mongoose.model("Summary", summarySchema);

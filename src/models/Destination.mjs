import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  region: { type: String },
  images: [String], 
  altitude: { type: String },
  climate: { type: String },
  bestSeason: { type: String },
  attractions: [String],
  recommendations: [String],
}, { timestamps: true });

export default mongoose.model("Destination", destinationSchema);

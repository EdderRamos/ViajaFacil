import mongoose from "mongoose";

const itineraryItemSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
);

const travelPackageSchema = new mongoose.Schema(
  {
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: true,
    },
    duration: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: { type: String, required: true }, // e.g., "Hotel + Flight"
    includes: {
      type: [String],
      default: [],
    },
    itinerary: [itineraryItemSchema],
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("TravelPackage", travelPackageSchema);

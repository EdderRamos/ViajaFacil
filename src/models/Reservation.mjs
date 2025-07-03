import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TravelPackage",
    required: true,
  },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  travelDate: Date,
  peopleCount: { type: Number, min: 1 },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  },
}, { timestamps: true });

export default mongoose.model("Reservation",reservationSchema);
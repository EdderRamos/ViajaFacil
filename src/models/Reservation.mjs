import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TravelPackage",
      required: true,
    },
    customerName: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "El correo es obligatorio"],
      lowercase: true,
      match: [/.+\@.+\..+/, "Correo no válido"],
    },
    phone: {
      type: String,
      match: [/^[0-9]{9}$/, "El teléfono debe tener 9 dígitos"],
    },
    travelDate: {
      type: Date,
      required: [true, "La fecha de viaje es obligatoria"],
      validate: {
        validator: (v) => v >= new Date(),
        message: "La fecha debe ser igual o posterior a hoy",
      },
    },
    peopleCount: {
      type: Number,
      required: [true, "Debes ingresar el número de personas"],
      min: [1, "Debe haber al menos 1 persona"],
      max: [100, "Demasiadas personas"],
    },
    comments: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);
export default mongoose.model("Reservation", reservationSchema);

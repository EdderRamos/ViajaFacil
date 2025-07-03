import Reservation from "../models/Reservation.mjs";

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate("travelPackage");
    res.status(200).json({ ok: true, data: reservations });
  } catch {
    res.status(400).json({ ok: false, message: "Error al obtener reservas" });
  }
};

export const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const saved = await newReservation.save();
    res.status(201).json({ ok: true, data: saved });
  } catch {
    res.status(400).json({ ok: false, message: "Error al crear la reserva" });
  }
};

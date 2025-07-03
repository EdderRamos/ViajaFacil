import Destination from "../models/Destination.mjs";

export const getAllDestination = async (req, res) => {
  try {
    const destinos = await Destination.find();
    res.status(200).json({ ok: true, data: destinos });
  } catch {
    res.status(400).json({ ok: false, message: "Error al obtener destinos" });
  }
};

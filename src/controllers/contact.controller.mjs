import ContactMessage from "../models/ContactMessage.mjs";

export const create = async (req, res) => {
  try {
    const newReservation = new ContactMessage(req.body);
    const saved = await newReservation.save();
    res.status(201).json({ ok: true, data: saved });
  } catch {
    res.status(400).json({ ok: false, message: "Error al  guardar datos" });
  }
};

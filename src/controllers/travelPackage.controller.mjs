import TravelPackage from "../models/TravelPackage.mjs";

export const getAllTravelPackages = async (req, res) => {
  try {
    const pkgs = await TravelPackage.find().populate("destination");
    res.status(200).json({ ok: true, data: pkgs });
  } catch {
    res.status(400).json({ ok: false, message: "Error al obtener viajes" });
  }
};

export const getTravelPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const pkt = await TravelPackage.findById(id).populate("destination");

    if (!pkt) {
      return res
        .status(404)
        .json({ ok: false, message: "Viaje no encontrado" });
    }

    res.status(200).json(pkt);
  } catch (error) {
    res
      .status(400)
      .json({ ok: false, message: "Error al obtener viaje por ID" });
  }
};

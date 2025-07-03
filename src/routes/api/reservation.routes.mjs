import { Router } from "express";
import {
  getAllReservations,
  createReservation,
} from "../../controllers/reservation.controller.mjs";

const router = Router();

router.get("/reservations", getAllReservations);
router.post("/reservations", createReservation);

export default router;

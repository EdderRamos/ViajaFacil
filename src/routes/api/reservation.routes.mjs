import { Router } from "express";
import {
  getAllReservations,
  createReservation,
} from "../../controllers/reservation.controller.mjs";

const router = Router();

router.get("/", getAllReservations);
router.post("/", createReservation);

export default router;

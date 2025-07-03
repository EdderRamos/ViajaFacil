import { Router } from "express";
import { getAllDestination } from "../../controllers/Destination.controller.mjs";

const router = Router();

router.get("/", getAllDestination);

export default router;

import { Router } from "express";
import {
  getAllTravelPackages,
  getTravelPackageById,
} from "../../controllers/TravelPackage.controller.mjs";

const router = Router();

router.get("/", getAllTravelPackages);
router.get("/:id", getTravelPackageById);

export default router;

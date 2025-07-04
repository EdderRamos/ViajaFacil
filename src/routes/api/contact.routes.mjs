import { Router } from "express";
import { create } from "../../controllers/contact.controller.mjs";

const router = Router();

router.post("/", create);

export default router;

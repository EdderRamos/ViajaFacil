import { Router } from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router();

router.get("/", (req, res) => {
  const viewsPath = join(__dirname, "..", "views", "quienes-somos.html");

  res.sendFile(viewsPath, (err) => {
    if (err) {
      console.error("Error sirviendo archivo:", err);
      res.status(404).send("Página no encontrada");
    }
  });
});

export default router;

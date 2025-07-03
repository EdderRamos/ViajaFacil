import express from "express";
import dbConnect from "../db/connect.mjs";

import travelPackage from "./routes/api/travelPackage.routes.mjs";
import destination from "./routes/api/destination.routes.mjs";
import reservation from "./routes/api/reservation.routes.mjs";
//env
import dotenv from "dotenv";
import viajeRouter from "./routes/viaje.routes.mjs";
import destinoRourter from "./routes/destino.routes.mjs";
import formularioRourter from "./routes/formulario.routes.mjs";

dotenv.config();

dbConnect();

const app = express();
// html provider
app.use(express.static("public"));

app.use("/", viajeRouter);
app.use("/destino", destinoRourter);

app.use("/formulario", formularioRourter);

// entry api
app.use("/api/travel-packages", travelPackage);
app.use("/api/destination", destination);
app.use("/api/reservation", reservation);

app.get("/hello", (req, res) => {
  res.send("Hello Express");
});
app.listen(3000);

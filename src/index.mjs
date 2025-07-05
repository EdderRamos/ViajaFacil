import express from "express";
import dbConnect from "../db/connect.mjs";

//login api
import auth from "./routes/api/login.routes.mjs";

import travelPackage from "./routes/api/travelPackage.routes.mjs";
import destination from "./routes/api/destination.routes.mjs";
import reservation from "./routes/api/reservation.routes.mjs";
import contactMessage from "./routes/api/contact.routes.mjs";
//env
import dotenv from "dotenv";
import viajeRouter from "./routes/viaje.routes.mjs";
import portada from "./routes/portada.routes.mjs";
import contact from "./routes/contacts.routes.mjs";
import promotions from "./routes/promotions.mjs";
import us from "./routes/us.routes.mjs";
import services from "./routes/services.routes.mjs";
import destinoRourter from "./routes/destino.routes.mjs";
import formularioRourter from "./routes/formulario.routes.mjs";

//login
import login from "./routes/login.routes.mjs";

dotenv.config();

dbConnect();

const app = express();
// html provider
app.use(express.static("public"));
app.use(express.json());

app.use("/paquetes", viajeRouter);
app.use("/", portada);
app.use("/destino", destinoRourter);
app.use("/contacto", contact);
app.use("/services", services);
app.use("/promotions", promotions);
app.use("/formulario", formularioRourter);
app.use("/us", us);

app.use("/login", login);
// entry api
app.use("/api/login", auth);
app.use("/api/travel-packages", travelPackage);
app.use("/api/destination", destination);
app.use("/api/reservations", reservation);

app.use("/api/contact-message", contactMessage);

app.get("/hello", (req, res) => {
  res.send("Hello Express");
});
app.listen(3000);

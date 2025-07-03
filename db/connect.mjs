import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGODB_URI);

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI, clientOptions)
    .then(() => {
      console.log("✅ Conexión exitosa con la base de datos");
    })
    .catch((err) => {
      console.error("❌ Error al conectar con la base de datos", err);
    });
};

export default dbConnect;

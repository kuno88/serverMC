import mongoose  from "mongoose";
require("dotenv").config({path:"src/.env"})
const dbConnect = async () => {
    const DB_URI = process.env.DB_URI;
    try {
    await mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err, res) => {
        if (!err) {
          console.log("**** CONEXION CORRECTA ****");
        }
      }
    );
  } catch (error) {
    console.log("**** ERROR DE CONEXION ****");
    console.log(error);
    process.exit(1); // detenemos la app
  }
};

module.exports = dbConnect;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const tipoUsuarioRoute = require("./routes/TipoUsuarioRoute");
const entidadRouter = require("./routes/EntidadRoute");
const usuarioRouter = require("./routes/UsuarioRoute");
const importanciaRouter = require("./routes/ImportanciaRoute");
const tipoRouter = require("./routes/TipoRoute");

const port = 9091;

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "image");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/image", express.static(path.join(__dirname, "image")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api", tipoUsuarioRoute);
app.use("/api", entidadRouter);
app.use("/api", usuarioRouter);
app.use("/api", importanciaRouter);
app.use("/api", tipoRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.listen(port, () => {
  console.log(`Port api run it is at http://localhost:${port}`);
});

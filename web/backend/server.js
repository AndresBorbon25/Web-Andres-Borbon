const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Base de datos en memoria (simple)
const users = [{ username: "admin", password: "1234" }];
const reservas = [];

// REGISTRO
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.json({ message: "El usuario ya existe ❌" });
  }
  users.push({ username, password });
  res.json({ message: "Usuario registrado ✅" });
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: "Login exitoso ✅" });
  } else {
    res.json({ message: "Usuario o contraseña incorrectos ❌" });
  }
});

// RESERVA (Barbería)
app.post("/reserva", (req, res) => {
  const { nombre, servicio, hora } = req.body;
  if (!nombre || !servicio || !hora) {
    return res.json({ message: "Faltan datos ❌" });
  }
  reservas.push({ nombre, servicio, hora });
  res.json({ message: `Reserva confirmada para ${nombre}, servicio: ${servicio}, hora: ${hora} ✅` });
});

// Servidor
app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

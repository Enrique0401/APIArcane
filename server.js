import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import personajesRoutes from "./src/routes/personajes.js";

// Crear __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configura cors para permitir tu frontend local
app.use(cors({
 
}));

// Servir imágenes estáticas
app.use("/public", express.static(path.join(__dirname, "src/public")));

// Permitir recibir JSON
app.use(express.json());

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({
    mensaje: "🔥 Bienvenido a la API de Demon Slayer",
    endpoints: {
      personajes: "/api/personajes",
      personajePorId: "/api/personajes/:id"
    },
    documentacion: "Usa GET, POST, PUT, DELETE en /api/personajes"
  });
});

// Rutas principales
app.use("/api/personajes", personajesRoutes);

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`🔥 API Demon Slayer corriendo en http://localhost:${PORT}`)
);

export default app;
// Ejemplo para una ruta API en Next.js con exportaciones nombradas.

export async function GET(req, res) {
  // Manejar método GET
}

export async function POST(req, res) {
  // Manejar método POST
  try {
    // Aquí va tu lógica para manejar la solicitud POST
    res.status(200).json({ message: "Solicitud POST exitosa" });
  } catch (error) {
    // Manejar errores
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// Si necesitas manejar otros métodos HTTP, puedes añadirlos de forma similar:
// export async function put(req, res) { /* ... */ }
// export async function del(req, res) { /* ... */ }

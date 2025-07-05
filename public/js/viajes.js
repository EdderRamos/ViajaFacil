// corousel
document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("viajes-container");
  try {
    const response = await fetch("/api/travel-packages");
    if (!response.ok) throw new Error("Respuesta no OK: " + response.status);

    const json = await response.json();
    console.log("JSON recibido:", json);

    const viajes = json.data;
    if (!Array.isArray(viajes))
      throw new Error("El campo 'data' no es un array");

    viajes.forEach((viaje) => {
      const card = document.createElement("div");
      card.className = "card";

      const lugar = viaje.destination?.name || "Destino desconocido";
      const imagen = viaje.gallery?.[0]
        ? `images/${viaje.gallery[0]}`
        : "/img/placeholder.jpg";
      const duracion = viaje.duration || "Duración no disponible";
      const tipo = viaje.type || "Tipo no especificado";
      const precio = viaje.price?.toFixed(2) || "0.00";

      card.innerHTML = `
        <a href="/destino?id=${viaje._id}">
          <img src="${imagen}" alt="${lugar}" />
        </a>
        <h3>Paquetes a ${lugar}</h3>
        <p class="duracion">${duracion}</p>
        <p class="tipo">${tipo}</p>
        <p class="precio">Desde <strong>S/ ${precio}</strong> por persona</p>
        <a href="/destino?id=${viaje._id}" class="btn">Ver más</a>
        <a href="/formulario?id=${viaje._id}" class="btn secondary">Reservar</a>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = "<p>Error al cargar los viajes.</p>";
    console.error("Error cargando API:", err);
  }
});

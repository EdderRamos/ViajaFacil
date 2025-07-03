const params = new URLSearchParams(window.location.search);
const packageId = params.get("id");

if (!packageId) {
  alert("Destination ID not found in URL");
}

fetch(`/api/travel-packages/${packageId}`)
  .then((res) => res.json())
  .then((packageData) => renderPackage(packageData))
  .catch((err) => console.error("Failed to load travel package:", err));

function renderPackage(packageData) {
  const {
    destination,
    price,
    includes,
    itinerary,
    gallery,
    description,
    recommendations,
  } = packageData;

  // Title and header image
  document.getElementById("destino-titulo").textContent = destination.name;
  document.getElementById("destino-subtitulo").textContent =
    "Discover the magic of " + destination.name;
  document.getElementById("hero-image").src = `/images/${gallery[0]}.jpg`;
  document.getElementById("hero-image").alt = destination.name;

  // Description
  document.getElementById("descripcion").textContent = description;

  // Main attractions
  const attractionsEl = document.getElementById("atractivos");
  destination.attractions.forEach((attraction) => {
    const p = document.createElement("p");
    p.textContent = `• ${attraction}`;
    attractionsEl.appendChild(p);
  });

  // What's included
  const includesList = document.querySelector(".info-principal ul");
  includesList.innerHTML = "";
  includes.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
    includesList.appendChild(li);
  });

  // Itinerary
  const itineraryEl = document.getElementById("itinerario");
  itinerary.forEach(({ day, title, description }) => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>Day ${day}: ${title}</strong><p>${description}</p>`;
    itineraryEl.appendChild(div);
  });

  const infoList = document.getElementById("info-importante");
  const importantDetails = [
    `Altitude: ${destination.altitude}`,
    `Climate: ${destination.climate}`,
    `Best season: ${destination.bestSeason}`,
  ];
  importantDetails.forEach((info) => {
    const li = document.createElement("li");
    li.textContent = info;
    infoList.appendChild(li);
  });

  document.getElementById("precio").textContent = `S/ ${price}`;

  const recList = document.getElementById("recomendaciones");
  recommendations.forEach((rec) => {
    const li = document.createElement("li");
    li.textContent = rec;
    recList.appendChild(li);
  });

  const galleryEl = document.getElementById("galeria");
  destination.images.forEach((imgName) => {
    const img = document.createElement("img");
    img.src = `/images/${imgName}`;
    img.alt = "Destination image";
    galleryEl.appendChild(img);
  });

  document.getElementById(
    "boton-reserva"
  ).href = `/reservar.html?id=${packageData._id}`;
}

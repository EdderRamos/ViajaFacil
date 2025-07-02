// js/destino.js

function normalizar(str) {
  return str.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

const param = new URLSearchParams(window.location.search).get('lugar');
const clave = param ? normalizar(param) : '';

const data = {
  cusco: {
    img: 'imagen/cusco.jpg',
    desc: 'Cusco, la antigua capital del Imperio Inca, es una ciudad mágica que combina la riqueza histórica con la modernidad.',
    atractivos: ['Machu Picchu', 'Valle Sagrado', 'Sacsayhuamán'],
    info: {
      altitud: '3,399 m.s.n.m.',
      clima: 'Templado',
      duracion: '6 días / 5 noches',
      mejorEpoca: 'Mayo a Octubre'
    },
    precio: '50',
    recomendaciones: ['Llevar medicamentos para el mal de altura', 'Ropa abrigada y cómoda'],
    itinerario: [
      { dia: 1, titulo: 'Llegada', desc: 'Recepción y descanso.' },
      { dia: 2, titulo: 'City Tour', desc: 'Visita al centro histórico y alrededores.' }
    ],
    galeria: ['cusco.jpg', 'machupicchu.jpg']
  },
  huacachina: {
    img: 'imagen/huacachina.jpg',
    desc: 'Huacachina es un oasis en el desierto de Ica, ideal para el sandboarding.',
    atractivos: ['Dunas', 'Oasis', 'Sandboarding'],
    info: {
      altitud: '406 m.s.n.m.',
      clima: 'Desértico',
      duracion: '2 días / 1 noche',
      mejorEpoca: 'Todo el año'
    },
    precio: '199',
    recomendaciones: ['Ropa ligera', 'Protector solar'],
    itinerario: [
      { dia: 1, titulo: 'Llegada', desc: 'Paseo en buggy y sandboarding.' },
      { dia: 2, titulo: 'Relax', desc: 'Disfrutar del oasis y partida.' }
    ],
    galeria: ['huacachina.jpg', 'buggy.jpg']
  },
  arequipa: {
    img: 'imagen/arequipa.jpg',
    desc: 'Arequipa, la ciudad blanca, se destaca por su arquitectura colonial y su impresionante paisaje volcánico.',
    atractivos: ['Monasterio de Santa Catalina', 'Plaza de Armas', 'Volcán Misti'],
    info: {
      altitud: '2,335 m.s.n.m.',
      clima: 'Templado seco',
      duracion: '5 días / 4 noches',
      mejorEpoca: 'Abril a noviembre'
    },
    precio: '480',
    recomendaciones: ['Zapatos cómodos', 'Protección solar'],
    itinerario: [
      { dia: 1, titulo: 'Llegada', desc: 'Recepción y descanso en hotel céntrico.' },
      { dia: 2, titulo: 'City Tour', desc: 'Visita guiada al centro histórico y museos.' }
    ],
    galeria: ['arequipa.jpg', 'misti.jpg']
  },
  tarapoto: {
    img: 'imagen/tarapoto.jpg',
    desc: 'Tarapoto, en la selva peruana, ofrece una mezcla perfecta entre naturaleza, cultura y aventura.',
    atractivos: ['Catarata de Ahuashiyacu', 'Laguna Azul', 'Reserva del Lago Lindo'],
    info: {
      altitud: '356 m.s.n.m.',
      clima: 'Tropical húmedo',
      duracion: '4 días / 3 noches',
      mejorEpoca: 'Mayo a octubre'
    },
    precio: '399',
    recomendaciones: ['Ropa ligera', 'Repelente de insectos'],
    itinerario: [
      { dia: 1, titulo: 'Llegada', desc: 'Traslado al hotel y paseo por la ciudad.' },
      { dia: 2, titulo: 'Cataratas', desc: 'Visita a Ahuashiyacu y tiempo libre.' }
    ],
    galeria: ['tarapoto.jpg', 'laguna-azul.jpg']
  },
  puno: {
    img: 'imagen/puno.jpg',
    desc: 'Puno se ubica a orillas del lago Titicaca, el lago navegable más alto del mundo.',
    atractivos: ['Islas flotantes de los Uros', 'Taquile', 'Sillustani'],
    info: {
      altitud: '3,827 m.s.n.m.',
      clima: 'Frío seco',
      duracion: '3 días / 2 noches',
      mejorEpoca: 'Mayo a octubre'
    },
    precio: '360',
    recomendaciones: ['Ropa térmica', 'Agua y bloqueador'],
    itinerario: [
      { dia: 1, titulo: 'Lago Titicaca', desc: 'Paseo en bote por las islas Uros.' },
      { dia: 2, titulo: 'Isla Taquile', desc: 'Recorrido cultural por la isla y caminata guiada.' }
    ],
    galeria: ['puno.jpg', 'uros.jpg']
  },
  iquitos: {
    img: 'imagen/iquitos.jpg',
    desc: 'Iquitos, la ciudad más grande del mundo sin acceso por carretera, es la puerta de entrada a la selva amazónica.',
    atractivos: ['Río Amazonas', 'Mercado de Belén', 'Reserva Pacaya Samiria'],
    info: {
      altitud: '104 m.s.n.m.',
      clima: 'Tropical húmedo',
      duracion: '4 días / 3 noches',
      mejorEpoca: 'Junio a septiembre'
    },
    precio: '620',
    recomendaciones: ['Repelente de insectos', 'Ropa ligera', 'Botas para selva'],
    itinerario: [
      { dia: 1, titulo: 'Llegada y paseo fluvial', desc: 'Recepción y tour en el río Amazonas.' },
      { dia: 2, titulo: 'Reserva Pacaya', desc: 'Excursión a la reserva natural y fauna local.' }
    ],
    galeria: ['iquitos.jpg', 'amazonia.jpg']
  },
  piura: {
    img: 'imagen/piura.jpg',
    desc: 'Piura es conocida por su clima cálido y sus playas paradisíacas como Máncora y Colán.',
    atractivos: ['Catedral de Piura', 'Máncora', 'Catacaos'],
    info: {
      altitud: '29 m.s.n.m.',
      clima: 'Cálido seco',
      duracion: '4 días / 3 noches',
      mejorEpoca: 'Todo el año'
    },
    precio: '550',
    recomendaciones: ['Protector solar', 'Gafas de sol'],
    itinerario: [
      { dia: 1, titulo: 'Llegada', desc: 'Paseo por el centro de Piura y mercado artesanal.' },
      { dia: 2, titulo: 'Playa Máncora', desc: 'Día completo en la playa.' }
    ],
    galeria: ['piura.jpg', 'mancora.jpg']
  },
  trujillo: {
    img: 'imagen/trujillo.jpg',
    desc: 'Trujillo destaca por sus sitios arqueológicos precolombinos y su arquitectura colonial.',
    atractivos: ['Chan Chan', 'Huaca del Sol y la Luna', 'Plaza de Armas'],
    info: {
      altitud: '34 m.s.n.m.',
      clima: 'Cálido moderado',
      duracion: '3 días / 2 noches',
      mejorEpoca: 'Todo el año'
    },
    precio: '360',
    recomendaciones: ['Bloqueador', 'Ropa ligera', 'Zapatos cómodos'],
    itinerario: [
      { dia: 1, titulo: 'Chan Chan', desc: 'Visita al complejo arqueológico.' },
      { dia: 2, titulo: 'City Tour', desc: 'Recorrido por el centro histórico.' }
    ],
    galeria: ['trujillo.jpg', 'huaca.jpg']
  }
};

const lugar = data[clave];

function actualizarContenido() {
  if (lugar && param) {
    document.getElementById("destino-titulo").innerText = param;
    document.getElementById("hero-image").src = lugar.img;
    document.getElementById("descripcion").innerText = lugar.desc;
    document.getElementById("boton-reserva").href = `formulario.html?destino=${param}`;
    document.getElementById("precio").innerText = `S/ ${lugar.precio}`;

    document.getElementById("atractivos").innerHTML = lugar.atractivos.map(a => `
      <div class="atractivo-item">
        <i class="fas fa-check-circle"></i>
        <span>${a}</span>
      </div>
    `).join('');

    document.getElementById("info-importante").innerHTML = `
      <li><i class="fas fa-mountain"></i> Altitud: ${lugar.info.altitud}</li>
      <li><i class="fas fa-temperature-high"></i> Clima: ${lugar.info.clima}</li>
      <li><i class="fas fa-clock"></i> Duración: ${lugar.info.duracion}</li>
      <li><i class="fas fa-calendar"></i> Mejor época: ${lugar.info.mejorEpoca}</li>
    `;

    document.getElementById("recomendaciones").innerHTML = lugar.recomendaciones.map(r => 
      `<li><i class="fas fa-check"></i> ${r}</li>`
    ).join('');

    document.getElementById("itinerario").innerHTML = lugar.itinerario.map(i => `
      <div class="dia">
        <h4>Día ${i.dia}: ${i.titulo}</h4>
        <p>${i.desc}</p>
      </div>
    `).join('');

    document.getElementById("galeria").innerHTML = lugar.galeria.map(g => 
      `<img src="imagen/${g}" alt="${param}">`
    ).join('');
  } else {
    document.getElementById("destino-titulo").innerText = "Destino no encontrado";
    document.getElementById("hero-image").style.display = "none";
    document.getElementById("descripcion").innerText = "Próximamente más información sobre este destino.";
    document.getElementById("boton-reserva").style.display = "none";
  }
}

actualizarContenido();

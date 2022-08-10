const HIPODOGE_ATAQUES = [
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
], CAPIPEPO_ATAQUES = [
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
], RATIGUEYA_ATAQUES = [
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
];
const mokepons = [
  {
    id: 1,
    name: 'Hipodoge',
    img: "./images/hipodoge.png",
    mini: "./images/hipodoge-mini.png",
    attacks: HIPODOGE_ATAQUES,
  },
  {
    id: 2,
    name: 'Capipepo',
    img: "./images/capipepo.png",
    mini: "./images/capipepo-mini.png",
    attacks: CAPIPEPO_ATAQUES,
  },
  {
    id: 3,
    name: 'Ratigueya',
    img: "./images/ratigueya.png",
    mini: "./images/ratigueya-mini.png",
    attacks: RATIGUEYA_ATAQUES,
  }
]

module.exports = mokepons;
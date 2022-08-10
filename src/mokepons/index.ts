// const BASE_URL = 'https://mokepones-api.herokuapp.com';
const BASE_URL = 'https://localhost:3005';

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
export const mokepons = [
  {
    id: 1,
    name: 'Hipodoge',
    img: `${BASE_URL}/images/hipodoge.png`,
    mini: `${BASE_URL}/images/hipodoge-mini.png`,
    attacks: HIPODOGE_ATAQUES,
  },
  {
    id: 2,
    name: 'Capipepo',
    img: `${BASE_URL}/images/capipepo.png`,
    mini: `${BASE_URL}/images/capipepo-mini.png`,
    attacks: CAPIPEPO_ATAQUES,
  },
  {
    id: 3,
    name: 'Ratigueya',
    img: `${BASE_URL}/images/ratigueya.png`,
    mini: `${BASE_URL}/images/ratigueya-mini.png`,
    attacks: RATIGUEYA_ATAQUES,
  }
]

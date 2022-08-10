const BASE_URL = 'https://mokepones-api.herokuapp.com';

const HIPODOGE_ATAQUES = [
  { nombre: "💧" },
  { nombre: "💧" },
  { nombre: "💧" },
  { nombre: "🔥" },
  { nombre: "🌱" },
], CAPIPEPO_ATAQUES = [
  { nombre: "🌱" },
  { nombre: "🌱" },
  { nombre: "🌱" },
  { nombre: "💧" },
  { nombre: "🔥" },
], RATIGUEYA_ATAQUES = [
  { nombre: "🔥" },
  { nombre: "🔥" },
  { nombre: "🔥" },
  { nombre: "💧" },
  { nombre: "🌱" },
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

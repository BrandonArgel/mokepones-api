const BASE_URL = 'https://mokepones-api.herokuapp.com';

const HIPODOGE_ATTACKS = [
  { name: "💧" },
  { name: "💧" },
  { name: "💧" },
  { name: "🔥" },
  { name: "🌱" },
], CAPIPEPO_ATTACKS = [
  { name: "🌱" },
  { name: "🌱" },
  { name: "🌱" },
  { name: "💧" },
  { name: "🔥" },
], RATIGUEYA_ATTACKS = [
  { name: "🔥" },
  { name: "🔥" },
  { name: "🔥" },
  { name: "💧" },
  { name: "🌱" },
];
export const mokepons = [
  {
    id: 1,
    name: 'Hipodoge',
    img: `${BASE_URL}/images/hipodoge.png`,
    mini: `${BASE_URL}/images/hipodoge-mini.png`,
    attacks: HIPODOGE_ATTACKS,
  },
  {
    id: 2,
    name: 'Capipepo',
    img: `${BASE_URL}/images/capipepo.png`,
    mini: `${BASE_URL}/images/capipepo-mini.png`,
    attacks: CAPIPEPO_ATTACKS,
  },
  {
    id: 3,
    name: 'Ratigueya',
    img: `${BASE_URL}/images/ratigueya.png`,
    mini: `${BASE_URL}/images/ratigueya-mini.png`,
    attacks: RATIGUEYA_ATTACKS,
  }
]

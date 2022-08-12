// const express = require("express");
// const cors = require("cors");
// const app = express();

// const corsOptions = {
// 	origin: "http://localhost:3000",
// };

// app.use(cors());
// app.use(express.json());

// const jugadores = [];

// class Jugador {
// 	constructor(id) {
// 		this.id = id;
// 	}

// 	asignarMokepon(mokepon) {
// 		this.mokepon = mokepon;
// 	}

// 	actualizarPosicion({ x, y }) {
// 		this.x = x;
// 		this.y = y;
// 	}

// 	asignarAtaques(ataques) {
// 		this.ataques = ataques;
// 	}
// }

// class Mokepon {
// 	constructor(nombre) {
// 		this.nombre = nombre;
// 	}
// }

// app.get("/unirse", (req, res) => {
// 	const id = `${Math.random()}`;
// 	const jugador = new Jugador(id);

// 	jugadores.push(jugador);

// 	res.setHeader("Access-Control-Allow-Origin", "*");

// 	res.send(id);
// });

// app.post("/mokepon/:jugadorId", (req, res) => {
// 	const { jugadorId } = req.params || "";
// 	const nombre = req.body.mokepon || "";
// 	const mokepon = new Mokepon(nombre);

// 	const jugador = jugadores.find((jugador) => jugador.id === jugadorId);
// 	jugador.asignarMokepon(mokepon);
// 	res.end();
// });

// app.post("/mokepon/:jugadorId/posicion", (req, res) => {
// 	const { jugadorId } = req.params || "";
// 	const { x, y } = req.body || "";
// 	const jugador = jugadores.find((jugador) => jugador.id === jugadorId);
// 	jugador.actualizarPosicion({ x, y });

// 	const enemigos = jugadores.filter((jugador) => jugador.id !== jugadorId);
// 	res.send({ enemigos });
// });

// app.post("/mokepon/:jugadorId/ataques", (req, res) => {
// 	const { jugadorId } = req.params || "";
// 	const { ataques } = req.body || [];
// 	const jugador = jugadores.find((jugador) => jugador.id === jugadorId);
// 	jugador.asignarAtaques(ataques);
// 	res.end();
// });

// app.get("/mokepon/:jugadorId/ataques", (req, res) => {
// 	const { jugadorId } = req.params || "";
// 	const jugador = jugadores.find((jugador) => jugador.id === jugadorId);
// 	res.send({ ataques: jugador.ataques || [] });
// });

// app.listen(3000, () => console.log("Server started on port 3000"));

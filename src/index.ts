import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';
import { mokepons } from './mokepons';

const port = process.env.PORT || 3005;
const app = express();
const ORIGIN_URL = 'http://localhost:3000';

const corsOptions: cors.CorsOptions = {
  origin: ORIGIN_URL,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

class Mokepon {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

type Attacks = Array<{ name: string, id: number }>
type Coordinates = { x: number, y: number }

class Player {
  attacks: Attacks;
  mokepon: Mokepon;
  id: string;
  x: number;
  y: number;

  constructor(id: string) {
    this.id = id;
    this.mokepon = null;
  }

  assignMokepon(mokepon: Mokepon) {
    this.mokepon = mokepon;
  }

  updatePosition({ x, y }: Coordinates) {
    this.x = x;
    this.y = y;
  }

  assignAttacks(attacks: Attacks) {
    this.attacks = attacks;
  }
}

const players = [];

// Endpoints
app.get('/mokepon', (req: Request, res: Response) => res.send(mokepons));

app.get('/mokepon/join', (req: Request, res: Response) => {
  const id: string = `${Math.random()}`;
  const player = new Player(id);

  players.push(player);
  res.send({ id });
});

app.post("/mokepon/:playerId", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const name = req.body.name || '';
  const mokepon = new Mokepon(name);
  const player = players.find(p => p.id === playerId);

  player.assignMokepon(mokepon);
  res.end();
});

app.delete("/mokepon/:playerId", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const player = players.find(p => p.id === playerId);

  player.mokepon = null;
  res.end();
})

app.post("/mokepon/:playerId/position", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const { x, y } = req.body || "";
  const player = players.find(p => p.id === playerId);
  const enemies = players.filter(p => p.id !== playerId);

  player.updatePosition({ x, y });
  res.send({ enemies });
});

app.post("/mokepon/:playerId/attacks", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const { attacks } = req.body || [];
  const player = players.find(p => p.id === playerId);

  player.assignAttacks(attacks);
  res.end();
});

app.get("/mokepon/:playerId/attacks", (req, res) => {
  const playerId = req.params.playerId || '';
  const player = players.find(p => p.id === playerId);

  res.send({ attacks: player.attacks || [] });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})
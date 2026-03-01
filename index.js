import express from 'express';
import { createServer } from 'node:http';
import { join } from 'node:path';
import { scramjetPath } from '@mercuryworkshop/scramjet';

const app = express();
const server = createServer(app);

app.use(express.static(join(process.cwd(), 'public')));
app.use('/scramjet/', express.static(scramjetPath));

app.use('/service/', (req, res) => {
    res.status(200).send(); 
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`vo!d online ! port: ${port}`);
});

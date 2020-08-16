import express from 'express';
import { index } from './routes';
const app = express();

app.get('/', index);
app.listen(3333, () => console.log('server started!'));

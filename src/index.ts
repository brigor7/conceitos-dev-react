import express from 'express';
import { index } from './routes';
import CreateUsers from './services/CreateUsers';
const app = express();

const user = CreateUsers('Bruno', 'brigor7@empresa.com', '123456');

app.get('/', index);
app.listen(3333, () => console.log('server started!'));

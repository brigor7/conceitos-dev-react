import express from 'express';
import { index } from './routes';
import CreateUsers from './services/CreateUsers';
const app = express();

const user = CreateUsers({
  name: 'Bruno',
  email: 'brigor7@empresa.com',
  password: '123456',
  techs: ['Javascript', 'Typescript', { title: 'Node', experience: 50 }],
});

app.get('/', index);
app.listen(3333, () => console.log('server started!'));

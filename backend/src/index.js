import express from 'express';
import cors from 'cors';
import routes from '../routes/routes.js';

const app = express();
app.use(cors({
	'origin':['http://localhost:3333','http://localhost:8080']
}));
app.use(routes);

app.listen(3333, () => {
  console.log('✔ server started!');
});

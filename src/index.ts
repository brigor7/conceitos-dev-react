import express from 'express';
const app = express();

app.get('/', (_, res) => res.send({ sucess: 'Page conected in backend' }));
app.listen(3333, () => console.log('server started!'));

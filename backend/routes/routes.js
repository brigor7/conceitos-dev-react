import express from 'express';

const routes = express.Router();

/**Middleware: Interceptador de requisições, interrompendo ou alterando dados da requisição
 * O middlare é uma função que possui parametros de request, response e next.
 */
function logRequests(req, res, next) {
  const { method, url } = req;
  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);
  return next();
}

routes.use(express.json());
/**Usando o middleare logRequest para rotas especificas */
//routes.use('/:id', logRequests);

/**Usando o middleare logRequest para todas as todas */
routes.use(logRequests);
const projects = [];
let id = 0;

/**Usando o middleare logRequest para rota especifica */
//routes.get('/', logRequest, (_, res) => res.status(200).json(projects));
routes.get('/', (_, res) => res.status(200).json(projects));

routes.get('/query', (req, res) => {
  const { title } = req.query;
  const newProjects = projects.filter((project) => {
    return project.title === title;
  });
  res.status(200).json(newProjects);
});

routes.post('/', (req, res) => {
  id = id + 1;
  const { title, owner } = req.body;
  const project = {
    id,
    title,
    owner,
  };
  projects.push(project);
  res.status(201).json(project);
});

routes.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, owner }= req.body;
  const index = projects.findIndex((project) => project.id == Number(id));
  if (index < 0) {
    return res.status(400).json({ 'error:': 'Project not found' });
  }

  const project = {
    id,
    title,
    owner
  };

  projects[index] = project;

  return res.status(200).send(project);
});

routes.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = projects.findIndex((project) => project.id == Number(id));
  projects.splice(index, 1);

  res.status(204).send();
});

routes.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const index = projects.findIndex((project) => project.id == Number(id));
  projects[index].title = title;
  res.status(203).send(projects[index]);
});

export default routes;

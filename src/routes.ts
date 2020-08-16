import { Request, Response } from 'express';

const index = (_: Request, res: Response) =>
  res.send({ sucess: 'Page conected in backend' });

export { index };

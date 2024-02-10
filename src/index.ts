import { middleware, WebhookEvent } from '@line/bot-sdk';
import express, { Application, Request, Response } from 'express';
import { load } from 'ts-dotenv';
import { middlewareConfig } from './config';
import { handleEvent } from './handlers';

const env = load({
  PORT: Number,
});
const PORT = env.PORT || 3000;

const app: Application = express();

app.get('/', async (_: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'success',
  });
});

app.post('/webhook', middleware(middlewareConfig), async (req: Request, res: Response): Promise<Response> => {
  const events: WebhookEvent[] = req.body.events;
  await Promise.all(
    events.map(async (event: WebhookEvent) => {
      try {
        await handleEvent(event);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err);
        }
        return res.status(500);
      }
    })
  );
  return res.status(200);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});

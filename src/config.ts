import { load } from 'ts-dotenv';
import { ClientConfig, Client, MiddlewareConfig } from '@line/bot-sdk';

const env = load({
  CHANNEL_ACCESS_TOKEN: String,
  CHANNEL_SECRET: String,
});

const config = {
  channelAccessToken: env.CHANNEL_ACCESS_TOKEN || '',
  channelSecret: env.CHANNEL_SECRET || '',
};
const clientConfig: ClientConfig = config;
export const middlewareConfig: MiddlewareConfig = config;
export const lineClient = new Client(clientConfig);

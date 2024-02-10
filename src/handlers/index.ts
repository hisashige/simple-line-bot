import { WebhookEvent } from '@line/bot-sdk';
import { handleMessage } from './handleMessage';

export const handleEvent = async function (event: WebhookEvent) {
  if (event.type == 'message' && event.message.type == 'text') {
    return handleMessage(event);
  }
  if (event.type == 'postback') {
    // return handlePost(event);
  }
  if (event.type == 'follow') {
    // return handleFollow(event);
  }
};

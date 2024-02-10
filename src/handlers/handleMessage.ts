import { WebhookEvent, TextMessage, MessageAPIResponseBase, FlexMessage } from '@line/bot-sdk';
import { lineClient as client } from '../config';

export const handleMessage = async (event: WebhookEvent): Promise<MessageAPIResponseBase | undefined> => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  const userMessage = event.message.text;

  if (userMessage === 'A') {
    // Flex Messageの例
    const flexMessage: FlexMessage = {
      type: 'flex',
      altText: '業務内容',
      contents: {
        type: 'bubble',
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'ここに業務内容の詳細を記載',
            },
          ],
        },
      },
    };
    return client.replyMessage(event.replyToken, flexMessage);
  } else if (userMessage === 'B') {
    // 特定のテキストメッセージに対する返信
    const replyText: TextMessage = { type: 'text', text: '特定のテキストメッセージに対する返信' };
    return client.replyMessage(event.replyToken, replyText);
  }

  // その他のテキストメッセージに対する返信はオウム返し
  const { replyToken } = event;
  const { text } = event.message;
  const response: TextMessage = {
    type: 'text',
    text: text,
  };
  await client.replyMessage(replyToken, response);
};

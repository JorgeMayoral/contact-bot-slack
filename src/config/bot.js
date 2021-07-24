const { WebClient } = require('@slack/web-api');

const newMessage = async (message) => {
  const TOKEN = process.env.SLACK_TOKEN;
  const channelId = 'C02920MA2LS';

  const web = new WebClient(TOKEN);

  //const spam = message.isSpam ? '✅' : '❌';
  const read = message.read ? '✅' : '❌';
  const answered = message.answered ? '✅' : '❌';

  const text = `*New message received:*\n*From:*\n${message.contactName} (${message.contactEmail})\n\n*Subject:*\n${message.subject}\n\n${message.body}\n\n*Message ID:* ${message._id}\n*Read:* ${read}\n*Answered:* ${answered}\n\n${message.createdAt}\n`;

  try {
    await web.chat.postMessage({
      channel: channelId,
      text: text,
      blocks: [
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: text,
          },
        },
        {
          type: 'divider',
        },
        {
          type: 'actions',
          elements: [
            {
              type: 'button',
              text: {
                type: 'plain_text',
                emoji: true,
                text: 'Mark as read',
              },
              value: 'click_me_123',
            },
            {
              type: 'button',
              text: {
                type: 'plain_text',
                emoji: true,
                text: 'Mark as answered',
              },
              value: 'click_me_123',
            },
          ],
        },
      ],
    });
    console.log('New message sent:', message._id);
    return true;
  } catch (error) {
    console.error('ERROR:', error);
    return false;
  }
};

module.exports = { newMessage };

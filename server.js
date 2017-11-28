const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '423708409:AAHD1sfmbG4PDSoFro92hqgIFoeIIyBfI2w', // Required. Telegram Bot API token.
    polling: { // Optional. Use polling.
        interval: 5000, // Optional. How often check updates (in ms).
        timeout: 0, // Optional. Update polling timeout (0 - short polling).
        limit: 100, // Optional. Limits the number of updates to be retrieved.
        retryTimeout: 10000, // Optional. Reconnecting timeout (in ms).
        // proxy: 'http://username:password@yourproxy.com:8080' // Optional. An HTTP proxy to be used.
    },
    webhook: { // Optional. Use webhook instead of polling.
        key: 'key.pem', // Optional. Private key for server.
        cert: 'cert.pem', // Optional. Public key.
        url: 'https://....', // HTTPS url to send updates to.
        host: '0.0.0.0', // Webhook server host.
        port: 443, // Server port.
        maxConnections: 40 // Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
    },
    allowedUpdates: [], // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates.
    usePlugins: ['askUser'], // Optional. Use user plugins from pluginFolder.
    pluginFolder: '../plugins/', // Optional. Plugin folder location.
    pluginConfig: { // Optional. Plugin configuration.
        // myPluginName: {
        //   data: 'my custom value'
        // }
    }
});

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    return bot.sendMessage(msg.from.id, text, { replyToMessage: msg.message_id });
});

bot.on('edit', (msg) => {
    return msg.reply.text('I saw it! You edited message!', { asReply: true });
});

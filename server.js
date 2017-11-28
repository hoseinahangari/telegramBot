const TeleBot = require('telebot');

const bot = new TeleBot('423708409:AAHD1sfmbG4PDSoFro92hqgIFoeIIyBfI2w');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();
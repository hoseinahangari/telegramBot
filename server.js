const TeleBot = require('telebot');

const bot = new TeleBot('423708409:AAHD1sfmbG4PDSoFro92hqgIFoeIIyBfI2w');

// On every text message
bot.on('text', msg => {
    console.log(msg)
    let text = msg.text;
    return msg.reply.text(`again: ${text}`);
});

bot.on('text', msg => {
    let id = '-1001353079241';
    return  bot.sendMessage(id, 'salam')
})

bot.on(['/rules', '/myAds'], msg => {

    let replyMarkup = bot.keyboard([
        ['/buttons', '/inlineKeyboard'],
        ['/start', '/hide']
    ], { resize: true });

    return bot.sendMessage(msg.from.id, 'Keyboard example.', { replyMarkup });

});
// Buttons
bot.on('/buttons', msg => {
    
        let replyMarkup = bot.keyboard([
            [bot.button('contact', 'Your contact'), bot.button('location', 'Your location')],
            ['/back', '/hide']
        ], {resize: true});
    
        return bot.sendMessage(msg.from.id, 'Button example.', {replyMarkup});
    
    });
// Hide keyboard
bot.on('/hide', msg => {
    return bot.sendMessage(
        msg.from.id, 'Hide keyboard example. Type /back to show.', { replyMarkup: 'hide' }
    );
});


bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://www.freeiconspng.com/uploads/real-brown-eye-png-10.png', { asReply: true });
});

// bot.on('channelChatCreated', (arg)=>{
//     console.log(arg)
// })


bot.connect();
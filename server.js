const TelegramBot = require('node-telegram-bot-api');
const token = '536702114:AAE5PxXtTmrZD4z8GWXAOeqYybxAEcrD93I';
const bot = new TelegramBot(token, { polling: true });

const myid = '131434744';
const rules = `📣 جهت ارسال داده در کانال "منابع فرهنگی خارجی" به نکات زیر توجه فرمایید:
داده ها، مطابق قوانین باشد
مطالب، طبقه بندی شده قرار داده شود
`;
const welcome = `سلام 😊
از طرف تیم پشتیبانی کانال فرهنگی، بهت خوش آمد میگم ✋️`;
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// MongoClient.connect(url, function (err, db) {
//     if (err) console.log(err);
//     console.log("Database created!");
//     db.close();
// });

bot.onText(/\/start/, (msg) => {

    const opts = {
        // reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['🖊 مشاهده قوانین ارسال داده فرهنگی', '📜 ارسال انتقادات و پیشنهادات'],
                ['📁  ارسال داده','📞 ارتباط با تیم پشتیبانی']
            ],
            one_time_keyboard: true,

        })
    };
    bot.sendMessage(msg.chat.id, welcome
        , opts).then(resault => {
            // console.log(resault)
            last_keyboard_msgid = resault.message_id
            console.log('end')
        });
    console.log(msg.chat.id)

});
bot.onText(/📜 ارسال انتقادات و پیشنهادات/, msg => {
    const opts = {
        reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'لطفا انتقادات و پیشنهادات در حیطه قوانین را ارسال کنید، متشکرم🙏', opts);
})
bot.onText(/📁  ارسال داده/, msg => {
    const opts = {
        reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'لطفا در ارسال داده به موارد زیر دقت فرمایید و سپس داده را ارسال فرمایید', opts);
    bot.sendMessage(msg.chat.id, rules, )
})

// console.log(bot.getChatMembersCount())

bot.onText(/🖊 مشاهده قوانین ارسال داده فرهنگی/, (msg) => {
    const chatId = msg.chat.id;
    const op = {
        reply_to_message_id: msg.message_id,
    };

    bot.sendMessage(chatId, rules, op)
});

bot.onText(/ارتباط با تیم پشتیبانی/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_to_message_id: msg.message_id,
        remove_keyboard: true
    };
    bot.sendMessage(chatId, `
    پل ارتباطی : @hosein_ahangari
    `, options);
})


// bot.on('channel_post', (msg) => {
//     console.log(msg)
//     const chatId = msg.chat.id;
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'someone joined');
//     bot.getChatMember(chatId, myid).then(resault => bot.sendMessage(myid, JSON.stringify(resault)));
// });

// Matches /love
// bot.onText(/\/love/, function onLoveText(msg) {
//     const opts = {
//         reply_markup: JSON.stringify({
//             keyboard: [
//                 ['Yes, you are the bot of my life ❤'],
//                 ['No, sorry there is another one...']
//             ]
//         })
//     };
//     bot.sendMessage(msg.chat.id, 'Do you love me?', opts);
// });
// bot.on('callback_query', function onCallbackQuery(callbackQuery) {
//     const action = callbackQuery.data;
//     const msg = callbackQuery.message;
//     const opts = {
//         chat_id: msg.chat.id,
//         message_id: msg.message_id,
//     };
//     let text;

//     if (action === 'edit') {
//         text = 'Edited Text';
//     }

//     bot.editMessageText(text, opts);
// });
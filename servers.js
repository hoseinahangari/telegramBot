const TelegramBot = require('node-telegram-bot-api');
const token = '536702114:AAE5PxXtTmrZD4z8GWXAOeqYybxAEcrD93I';
const bot = new TelegramBot(token, { polling: true });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";
// MongoClient.connect(url, function (err, db) {
//     if (err) console.log(err);
//     console.log("Database created!");
//     db.close();
// });





var last_keyboard_msgid = 0;
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message

//     const chatId = msg.chat.id;
//     const resp = match[2]; // the captured "whatever"
//     // const resp = 'salam'
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
// });
bot.onText(/\/start/, (msg) => {

    const opts = {
        // reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['🖊 مشاهده قوانین ارسال آگهی', '📞 ارتباط با تیم پشتیبانی'],
                ['📁  ارسال آگهی',]
            ],
            one_time_keyboard: true,

        })
    };
    bot.sendMessage(msg.chat.id, `✅  عرض سلام و احترام\n🔸 ربات تعاملی یاران پویای مفید به شما خیر مقدم عرض میکند`
        , opts).then(resault => {
            // console.log(resault)
            last_keyboard_msgid = resault.message_id
            console.log('end')
        });

});

bot.onText(/📁  ارسال آگهی/, msg => {
    const opts = {
        reply_to_message_id: msg.message_id,
    };
    bot.sendMessage(msg.chat.id, 'لطفا در ارسال آگهی به موارد زیر دقت فرمایید و سپس آگهی را ارسال فرمایید', opts);
    bot.sendMessage(msg.chat.id, `📣 جهت ارسال آگهی در کانال "یاران پویای مفید" به نکات زیر توجه فرمایید:
    
    https://t.me/yaranpoyamofid
    
    🔹متن آگهی ها, خوانا و شفاف باشد
    🔸اطلاعات کافی جهت ارتباط با متقاضیان مشخص شده باشد 
    🔹 مشخصات فردی به طور کامل ذکر شده باشد (نام - دوره - مدرسه - پل ارتباطی)
    🔸 آگهی ها مجاز باشد و همسو با قوانین جمهوری اسلامی ایران باشد 
    🔹فایل عکس ها (در صورت وجود) با فرمت های عکس باشد 
    
    📞 جهت کسب اطلاعات بیشتر میتوانید با id زیر ارتباط حاصل فرمایید:
    @yaranpuyaymofid
    
    شرکت تعاونی مفید یاران پویا ؛کیانپور‍‍‍`, )
})

// console.log(bot.getChatMembersCount())

bot.onText(/مشاهده قوانین ارسال آگهی/, (msg) => {
    const chatId = msg.chat.id;
    const op = {
        reply_to_message_id: msg.message_id,
    };

    bot.sendMessage(chatId, `📣 جهت ارسال آگهی در کانال "یاران پویای مفید" به نکات زیر توجه فرمایید:
    
    https://t.me/yaranpoyamofid
    
    🔹متن آگهی ها, خوانا و شفاف باشد
    🔸اطلاعات کافی جهت ارتباط با متقاضیان مشخص شده باشد 
    🔹 مشخصات فردی به طور کامل ذکر شده باشد (نام - دوره - مدرسه - پل ارتباطی)
    🔸 آگهی ها مجاز باشد و همسو با قوانین جمهوری اسلامی ایران باشد 
    🔹فایل عکس ها (در صورت وجود) با فرمت های عکس باشد 
    
    📞 جهت کسب اطلاعات بیشتر میتوانید با id زیر ارتباط حاصل فرمایید:
    @yaranpuyaymofid
    
    شرکت تعاونی مفید یاران پویا ؛کیانپور‍‍‍`, op)
});

bot.onText(/ارتباط با تیم پشتیبانی/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_to_message_id: msg.message_id,
        remove_keyboard: true
    };
    bot.sendMessage(chatId, `
    تیم فنی کانال : @hosein_ahangari
    تیم بازرگانی :  @MK_KIAN4
    `, options);
})



bot.on('channel_post', (msg) => {
    console.log(msg)
    // const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their message
    // bot.sendMessage(chatId, 'Received your message');
});

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
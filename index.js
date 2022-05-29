require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TOKEN;
const express = require('express');
const app = express();

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(
//         '@Shb_TheBestTeam',
//         "Salom " + msg.from.first_name + " botimizga xush kelibsiz"
//     );
// });

bot.on('message', (msg) => {
    if (msg.from.id == 981288955 && msg.chat.id != -1001268783396) {
        console.log(msg);
        bot.sendMessage(-1001268783396, msg.text);
    }
});

app.listen(process.env.PORT || 8080, console.log(8080));

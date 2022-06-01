require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TOKEN;
const express = require('express');
const app = express();

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

app.get('/', (req, res) => {
    try {
        var { lat, long } = req.body;
        if (lat && long) {
            bot.sendLocation(1771234776, lat, long);
        }
        res.send('ok');
    } catch (error){
        console.log(error.message)
    }
    
});

app.listen(process.env.PORT || 8080, console.log(8080));

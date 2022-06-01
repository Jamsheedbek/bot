require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.TOKEN;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

app.post('/', (req, res) => {
    try {
        console.log(req.body)
        var { lat, long } = req.body;
        if (lat && long) {
            console.log(lat,long)
            bot.sendLocation(1771234776, lat, long);
        }
        res.json(lat, long);
    } catch (error) {
        res.json(error.message);
    }
});

app.listen(process.env.PORT || 8080, console.log(8080));

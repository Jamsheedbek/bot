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

app.get('/', (req, res) => {
    try {
        var { lat, long } = req.body;
        if (lat && long) {
            bot.sendLocation(1771234776, lat, long);
        }
<<<<<<< HEAD
        res.json(lat, long);
    } catch (error) {
        res.json(error.message);
    }
=======
        res.send('ok');
    } catch (error){
        console.log(error.message)
    }
    
>>>>>>> 95e98f84bb0a1caac0a3e773c356e4c1109c57d8
});

app.listen(process.env.PORT || 8080, console.log(8080));

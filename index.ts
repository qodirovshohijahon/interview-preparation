import { Telegraf, Router, Markup} from "telegraf";
//import { Extra } from "telegraf/extra";
import dotenv from "dotenv"
import schedule from 'node-schedule';
import sayHello from "./hello"

require("dotenv").config();
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
let time = 2
const job = schedule.scheduleJob(
  `*/${time} * * * * *`, 
  sayHello
)

bot.command('start', ctx => {
  console.log('from----', ctx.from)
//  let userInfo = ctx.chat.username || ctx.chat.username
  let username = ctx.from.username || ctx.from.first_name;
  bot.telegram.sendMessage(ctx.chat.id, `Assalamu aleykum hurmatli *${username}*`, {
     reply_markup: {
            inline_keyboard: [
                [{
                        text: "Bot haqida",
                        callback_data: 'about'
                    },
                    {
                        text: "Ob-havo",
                        callback_data: 'weather'
                    }
                ],

            ]
        }
    })
})
bot.action('about', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "~/Desktop/folder/4_.png "
    })

})

bot.launch()

const env = require('./.env')
const Telegraf = require('telegraf')


// Iniciando bot

const bot = new Telegraf(env.token)
let 
bot.start(content => {
    const from = content.update.message.from

    console.log(from)

    content.reply(`Oh o, ${from.first_name}!`)
})

bot.on('text', (content, next) => {
    content.reply(`É muito baitola mesmo!`)
    next()
})

bot.startPolling()
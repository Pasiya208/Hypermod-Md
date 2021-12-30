const fetch = require("node-fetch");

const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `අහ්.. කෝ url එක?\n\nඋදාහරණයක්:\n${usedPrefix + command} https://t.me/addstickers/namapack`

    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `url salah`

    let packName = args[0].replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })

    if (!gas.ok) throw eror

    let json = await gas.json()

    m.reply(`*සම්පූර්ණ ස්ටිකර් ගණන:* ${json.result.stickers.length}

*වේලාව:* ${json.result.stickers.length * 1.5} second`.trim())

    for (let i = 0; i < json.result.stickers.length; i++) {

        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()

        // conn.sendMessage(m.chat, { url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path }, MessageType.sticker)

        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)

        await conn.sendFile(m.chat, stiker, '','')

        await delay(1500)

    }

    m.reply('_*ඔන්න එවලා ඉවරයි බොසා*_')

}

handler.help = ['stickertele <url>']

handler.tags = ['sticker']

handler.command = /^(stic?kertele(gram)?)$/i

handler.limit = 1

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))

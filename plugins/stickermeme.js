const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [on, under] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `විධානය සමඟ පිළිතුරු රූපය\n\n${usedPrefix + command} <${on ? on : 'text on'}>|<${under ? under : 'text under'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*meme ${mime} සහාය නොදක්වයි!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(on ? on : '')}/${encodeURIComponent(under ? under : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
     conn.sendFile(m.chat, stiker, '','',m)

}
handler.help = ['stikermeme <text on>|<text under>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = true

module.exports = handler
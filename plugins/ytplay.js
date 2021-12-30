let limit = 100
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
memeq = Math.floor(Math.random() * 99999999)
  if (!text) throw 'ඔයා බලමින් සිටින්නේ කුමක් ද?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'සොයා ගත නොහැක '
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
let buttons = [
  {buttonId: '/yta '+vid.url, buttonText: {displayText: 'සින්දුව 🎵'}, type: 1},
  {buttonId: '/ytv '+vid.url, buttonText: {displayText: 'වීඩියෝව 360p🎈'}, type: 1},
  {buttonId: '/donasi ', buttonText: {displayText: 'HYPER MOD🎈'}, type: 1},
]


const buttonsMessage = {
    image: {url: thumb},
    caption:`HYPERMOD !
අවශ්‍ය මාධ්‍ය පහත බටන් අතරින් තෝරන්න`.trim(),    footerText: 'Filesize : '+filesizeF,
    buttons: buttons,
     headerType: 4
}
let sendMsg =  await conn.sendMessage(m.chat, buttonsMessage)
}
handler.help = ['song'].map(v => v + ' <search>')
handler.tags = ['downloader']
handler.command = /^(play|song)$/i

handler.exp = 0
handler.limit = false
handler.premium = false
module.exports = handler

async function getBuffer(url) {
ff = await fetch(url)
fff = await ff.buffer()
return fff
}

async function bitly(urls) {
fet = require('axios')
heh = await fet.get(`https://tobz-api.herokuapp.com/api/bitly?url=${urls}&apikey=Tobzzz17`)

return heh.data.result
}

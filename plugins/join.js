let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {

    let [_, code] = text.match(linkRegex) || []

    if (!code) throw 'වැරදි ලින්ක් එක'

    let res = await conn.acceptInvite(code)

    m.reply(`Berhasil join grup ${res.gid}`).then(() => {

        var jumlahHari = 86400000 * 0.5

        var now = new Date() * 1

        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari

        else global.db.data.chats[res.gid].expired = now + jumlahHari

    })

    await conn.sendButton(res.gid, `

*${conn.user.name}*  bot whatsapp *${conn.user.name}*  @${m.sender.split`@`[0]}

    

වර්ගය *${usedPrefix}menu* විධාන ලැයිස්තුවක් බැලීමට`.trim(), '© HYPER MOD', 'Menu', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })

}

handler.help = ['join <chat.whatsapp.com>']

handler.tags = ['owner']

handler.command = /^join$/i

handler.premium = false

module.exports = handler

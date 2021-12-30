let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `ඔබ දෝෂ පණිවිඩයක් සොයා ගන්නේ නම්, මෙම විධානය භාවිතා කර එය වාර්තා කරන්න,`
    if (text.length < 10) throw `අවම වචන ප්‍රමානය 10කි!`
    if (text.length > 1000) throw `උපරිම වචන ප්‍රමානය 100කි!`
    let teks = `*${command.toUpperCase()}!*\n\nපුද්ගලයා : *@${m.sender.split`@`[0]}*\n\nවාර්තාව : ${text}\n`
    conn.reply(global.owner[0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_bot හි හිමිකරු වෙත පණිවිඩයක් යවන ලදී, නම්._`)
}
handler.help = ['report', 'request'].map(v => v + ' <text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
module.exports = handler

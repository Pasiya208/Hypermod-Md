let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    m.reply(`
${conn.getName(m.sender)} එයා දැන් ඕෆ්ලයින් 🌝${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [හේතුව]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler

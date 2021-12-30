let handler = async (m, { text, usedPrefix }) => {
    let salah = `පවතින විකල්ප\n\nකතුර, කඩදාසි, ගල\n\n${usedPrefix}suit කතුර\n\nඅවකාශයට ආදරය කරන්න!`
    if (!text) throw වැරදි
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'ගල'
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'කතුර'
    } else {
        astro = 'කඩදාසි'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nඔබ: ${text}\nBot: ${astro}`)
    } else if (text == 'ගල') {
        if (astro == 'කතුර') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`ඔබ දිනුම්! +Rp1000\nඔබ: ${text}\nබොට්: ${astro}`)
        } else {
            m.reply(`ඔබ පැරදුණා!\nඔබ: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'කතුර') {
        if (astro == 'කඩදාසි') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`ඔබ දිනුම්! +Rp1000\nඔබ: ${text}\nබොට්: ${astro}`)
        } else {
            m.reply(`ඔබ පරාදයි!\nඔබ: ${text}\nබොට්: ${astro}`)
        }
    } else if (text == 'කඩදාසි') {
        if (astro == 'ගල') {
            global.db.data.users[m.sender].money += 1000
            m.reply(`ඔබ දිනුම්! +Rp1000\nඔබට: ${text}\nබොට්: ${astro}`)
        } else {
            m.reply(`ඔබ පරාදයි!\nඔයා: ${text}\nබොට්: ${astro}`)
        }
    } else {
        throw වැරදි
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i

module.exports = handler

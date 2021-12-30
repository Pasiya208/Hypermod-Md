const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Lakshitha;;;'
                    + 'FN:Lakshitha\n' // full name
                    + 'ORG:Lakshitha:\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=94767043432:+94 76-704-3432\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Lakshitha', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

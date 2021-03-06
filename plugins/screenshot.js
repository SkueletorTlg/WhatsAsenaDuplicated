/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${match[1]}&output=image&file_type=png&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})

    }));
    
    const sh = "Genera rostros humanos que antes no existían con inteligencia artificial."
Asena.addCommand({pattern: 'faceai', fromMe: true, desc: sh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Esta persona no existe, fue creada con inteligencia artificial.\n\nHecho por *Skueletor*'})

}));

const dh = "Genera caras de anime que no existían antes con inteligencia artificial."
Asena.addCommand({pattern: 'animai', fromMe: true, desc: dh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/&output=image&width=1000&height=1000&retina=true&full_page=false', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Este anime no existe, fue creado con inteligencia artificial.\n\nHecho por *Skueletor*'})

}));

}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://screenshotapi.net/api/v1/screenshot?url=${match[1]}&output=image&full_page=true&delay=400`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})

    }));
    Asena.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.LİNK);

        var webimage = await axios.get(`https://shot.screenshotapi.net/screenshot?&url=${match[1]}&output=image&file_type=png&wait_for_event=load`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})

    }));
    
    const sh = "Genera rostros humanos que antes no existían con inteligencia artificial."
Asena.addCommand({pattern: 'faceai', fromMe: false, desc: sh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://thispersondoesnotexist.com/&output=image&width=1000&height=1000', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Esta persona no existe, fue creada con inteligencia artificial.\n\nHecho por *Skueletor*'})

}));

const dh = "Genera caras de anime que no existían antes con inteligencia artificial."
Asena.addCommand({pattern: 'animai', fromMe: false, desc: dh}, (async (message, match) => {

    var webimage = await axios.get('https://screenshotapi.net/api/v1/screenshot?url=https://www.thiswaifudoesnotexist.net/&output=image&width=1000&height=1000&retina=true&full_page=false', { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Este anime no existe, fue creado con inteligencia artificial.\n\nHecho por *Skueletor*'})

}));
}

<p align="center">
<img src="https://telegra.ph/file/06db0eb84b88d11d76e6a.jpg" alt="HYPER BOT" width="500"/>


</p>
<p align="center">
<a href="#"><img title="HYPER BOT MULTI DEVICE" src="https://img.shields.io/badge/HYPER BOT MULTI DEVICE-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/HYPER-MOD/Hypermod-Md"><img title="Author" src="https://img.shields.io/badge/Author-Lakshitha-red.svg?style=for-the-badge&logo=github"></a>
</p>
<p align="center">
<a href="https://github.com/HYPER-MOD/Hypermod-Md"><img title="Followers" src="https://img.shields.io/github/followers/Hypermod-Md?color=blue&style=flat-square"></a>
<a href="https://github.com/HYPER-MOD/Hypermod-Md"><img title="Stars" src="https://img.shields.io/github/stars/HYPER-MOD/Hypermod-Md/?color=red&style=flat-square"></a>
<a href="https://github.com/HYPER-MOD/Hypermod-Md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/HYPER-MOD/Hypermod-Md/?color=red&style=flat-square"></a>
<a href="https://github.com/HYPER-MOD/Hypermod-Md/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/HYPER-MOD/Hypermod-Md/?label=Watchers&color=blue&style=flat-square"></a>
</p>

---

# HYPER BOT Whatsapp MD
## Information
> HyperBot whatsapp using a Baileys library. > If you find some sort of bug, hope to be understood while > > • NOTE: Make sure your network device smoothly and nice guys: v, > > • If you use termux it might take a long time to respond, I suggest using heroku > > • If want to add features create a new file [here] (https://github.com/HYPER-MOD/Hypermod-Md/tree/main/plugins) * Example * tebakgambar.js


<h3 align="center">Made by :</h3>
<p align="center">
  <a href="https://github.com/Hypermod-Md"><img src="https://github.com/Hypermod-Md.png?size=128" height="128" width="128" /></a>
  <a href="https://github.com/BochilGaming"><img src="https://github.com/BochilGaming.png?size=128" height="128" width="128" /></a>
</p>

## How To Change Menu Display
----
### Gif Menu Display
```ts
 let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4'), gifPlayback: true }, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Image Menu Display
```ts
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/shiraori.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{
```

### Location Menu Display
```ts
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: text.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/shiraori.jpg') },
           hydratedFooterText: wm,
           hydratedButtons: [{       
```

### Video Menu Display
```ts
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./media/shiro.mp4')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           videoMessage: message.videoMessage,
           hydratedContentText: text.trim(),
           hydratedFooterText: wm,
           hydratedButtons: [{           	
```
----           


## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `web: node . --db 'mongourl'`
* Example `web: node . -- db 'mongodb+srv://Ilman:<password>@cluster0.iiede.mongodb.net/ShiraoriBOT?retryWrites=true&w=majority'`


## FOR WINDOWS/VPS/RDP USERS 
* Download & Install Git [`Click Here`](https://git-scm.com/downloads) 
* Download & Install NodeJS [`Click Here`](https://nodejs.org/en/download) 
* Download & Install FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Don't Forget to Add FFmpeg to PATH environment variable**) 
* Download & Install ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/HYPER-MOD/Hypermod-Md
cd Hypermod-Md
npm install
npm update
npm index
```

---------

## FOR TERMUX USERS
```bash
pkg update && pkg upgrade
pkg install git
pkg install nodejs
pkg install ffmpeg
pkg install imagemagick
pkg install yarn
git clone https://github.com/HYPER-MOD/Hypermod-Md
cd Hypermod-Md
yarn
node .
```

## FOR HEROKU USERS

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick.git*

## Installing the FFmpeg for Windows 
* Download one of the available versions of FFmpeg by clicking [here](https://www.gyan.dev/ffmpeg/builds/). * Extract files to `C:\` path. 
* Rename the extracted folder to `ffmpeg`. 
* Run Command Prompt as Administrator. 
* Run the following command::
```cmd
> setx /m PATH "C:\ffmpeg\bin;%PATH%"
```
If successful, it will give you a message like: `SUCCESS: specified value was saved`. 
* Now that you have FFmpeg installed, verify that it worked by running this command to see the version: ``` cmd > ffmpeg -version
```

# Thanks to
 [![Nurutomo](https://github.com/Nurutomo.png?size=150)](https://github.com/Nurutomo) | [![Lakshitha](https://github.com/Hypermod-Md.png?size=150)](https://github.com/Hypermod-Md) | [![Istikmal](https://github.com/BochilGaming.png?size=150)](https://github.com/BochilGaming)
----|----|----
[Nurutomo](https://github.com/Nurutomo) | [Lakshitha](https://github.com/Hypermod-Md) | [Istikmal](https://github.com/BochilGaming)
 Author | Recode | who often helps 😅

## Donate
- [Saweria](https://saweria.co/Hypermod-Md)

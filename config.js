const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_40_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTWYxVnhUWG9IbmVCalFBYXNHZ3BsR245ODh6UEVzcnlzbWxMb1hLb0RZST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEZPRlVET2hRTS1fbkRvTUxsMWZEZ1wiLFxuICBcInBob25lSWRcIjogXCJlODA3OTk3ZC01YmNjLTRhNDktOGNjZC04NTkwNjEyMjdjMzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ1LFxuICAgICAgNzMsXG4gICAgICAxMzksXG4gICAgICA0MyxcbiAgICAgIDkxLFxuICAgICAgMTIsXG4gICAgICAyNDYsXG4gICAgICAzMyxcbiAgICAgIDIyOCxcbiAgICAgIDEyLFxuICAgICAgMzMsXG4gICAgICAyNCxcbiAgICAgIDIzNixcbiAgICAgIDE4NyxcbiAgICAgIDIwLFxuICAgICAgNTgsXG4gICAgICA4NCxcbiAgICAgIDE0NixcbiAgICAgIDEyMSxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICA2OCxcbiAgICAgIDE5MCxcbiAgICAgIDIxNixcbiAgICAgIDEwNCxcbiAgICAgIDk2LFxuICAgICAgMTc1LFxuICAgICAgMTgwLFxuICAgICAgMTUwLFxuICAgICAgMjAxLFxuICAgICAgNTUsXG4gICAgICAxMjEsXG4gICAgICA1NSxcbiAgICAgIDE1NixcbiAgICAgIDE3OCxcbiAgICAgIDE0MyxcbiAgICAgIDI0MCxcbiAgICAgIDIwNSxcbiAgICAgIDI0MCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHVxMmRjUEVJdlovYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxTVFkWlpHc0J2VTFqSDRYTHAwVWRkb2p5cDhuYlpZTVRJU21BcVY4SGdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9VVVVUaEpURU14aVp1amo4OG5EMVFSVmFTckpsNXhLN29ZOTN3VUgvOHVEa2Zpc1NFcXg2WThEOFhlN1VmcjRGbmxIL0Q1eElrQ1BXMlhMWW80dEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhaa05HTHQycjN2NHFtNUdpN0kzOVpVYnlUNHRNVkk2ZjVTMTZTZkw3UzFIbURWR2t5WUxCUm04YzBZLzFyUjRUU21ONWpkWS9OaVhxM3NTNHR5UGdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2MjY2OTU5MTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc1MDE5OTc2NDEzMjIwOjYzQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MjY2OTU5MTo2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3MjQwNDZcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

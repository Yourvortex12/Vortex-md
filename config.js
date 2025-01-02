const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Yourvortex93@gmail.com "
global.location="Multan,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Yourvortex12";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Aisha-MD-Info" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03478351899";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,03478351899";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "03478351899,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_48_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY3LFxuICAgICAgICA2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MyxcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlMdm1sZW9qdDc3RG10bE5yZW53MmJiWkxvbDEyY2YveWxUSmlMRnhaUVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDc4MzUxODk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQTBEQUE4MzVDQjlDNEY0OTEyRURDODBENThBQjA1OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU4MzY1MDhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0NzgzNTE4OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI3ODBCQjFGNkMzQkY0NTc2N0MxMTlBMEU3MzQ1RkUwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTgzNjUwOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoaDlVekZoUFRlRzRHa3J2eFlINWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5NWIwNmJkLWZkZjktNDk0OS1iZGJkLTkxMTc5ZGI1MDczZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxNSxcbiAgICAgIDE2OSxcbiAgICAgIDE0NSxcbiAgICAgIDUyLFxuICAgICAgMTEsXG4gICAgICAxMDgsXG4gICAgICAzNSxcbiAgICAgIDIwNyxcbiAgICAgIDcyLFxuICAgICAgMjUyLFxuICAgICAgMjU1LFxuICAgICAgODMsXG4gICAgICAxNTcsXG4gICAgICAxNzAsXG4gICAgICAyMzgsXG4gICAgICAxOTksXG4gICAgICAyNDgsXG4gICAgICAxOTMsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTQ3LFxuICAgICAgNDYsXG4gICAgICA0NSxcbiAgICAgIDE1NSxcbiAgICAgIDIwLFxuICAgICAgMTU5LFxuICAgICAgMTU2LFxuICAgICAgNDksXG4gICAgICAxOSxcbiAgICAgIDE5OSxcbiAgICAgIDU4LFxuICAgICAgMTk1LFxuICAgICAgMTU4LFxuICAgICAgMTEzLFxuICAgICAgODAsXG4gICAgICA0OCxcbiAgICAgIDE0MyxcbiAgICAgIDIyNCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0Q0c5QjREMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDc4MzUxODk5OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWU9VUiBWT1JURVhcIixcbiAgICBcImxpZFwiOiBcIjE0NjE0MTA2MDU3NTI2NTozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQamMwYVVERU5hRzI3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjBKVmN4NkRyN0VmOHJrVE1FMjhYMWIwUFBEZ0l5eDdOVks5aHNqeTl5RWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiT05yTUxvR3dlQkNaK1ZBZmcrd0Y2bjhVR0RKRFR3ditzK2lxdmZUcHI1VUpBLzQvQ2dHQU5yU2U4aGR3NCtPT3FBaStHcjNmb1hwTEVON1ZLdW54QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWTQwdHZUOVpyNEtrcGNSSndGWWlqd1pUbXdCbTRVd2pBMElTNVU4dXg2VDlIelRoM01wWTlBdFU5VlNiNGxpZm54WGpQTXFKVTRsdTJlOU1ObEQraFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDc4MzUxODk5OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODM2NTA1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRStVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFK1UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZUkFndzVCVG52K0lvNkRXSXBaTmF4YWxtMTFUN2ZmbTgwUVo2L3dob1BRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4NDIzOTk5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1ODM2NTA5NDY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Aisha-MD",
  ownername:process.env.OWNER_NAME|| "Your-Vortex",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

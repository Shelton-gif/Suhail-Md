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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263784055079";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_22_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NixcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICA1NixcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNCxcbiAgICAgICAgOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDUxLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrRStFcmFZSGVSTVhKaTgzMWxzQmx1U2p0TUlhRkd5U2dCbEJHRGdEeHNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NDA1NTA3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURBMTE5MTY5MTNEMTRDQzk0NjFCRDFEMjk3QTIxQjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzY0OTYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg0MDU1MDc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMzYwNDlEODhENjUyQjNCOTMzQTIzREM4Q0Q1NEE0MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNjQ5NjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNEdXX0Z6VF9ULTZLZjUyRWR5SFBqQVwiLFxuICBcInBob25lSWRcIjogXCIzNzVmZmYzYi1hNTg2LTRiMDUtODEwMC1kYTVlYzM0MWRiNjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTA4LFxuICAgICAgNjksXG4gICAgICAzMyxcbiAgICAgIDE1MCxcbiAgICAgIDQsXG4gICAgICAyMTgsXG4gICAgICA3OCxcbiAgICAgIDE5MCxcbiAgICAgIDEzMCxcbiAgICAgIDIxMSxcbiAgICAgIDE2LFxuICAgICAgMTMyLFxuICAgICAgMjEyLFxuICAgICAgMTQ2LFxuICAgICAgMTQzLFxuICAgICAgODAsXG4gICAgICAxODMsXG4gICAgICAyNixcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA5MyxcbiAgICAgIDI1NCxcbiAgICAgIDIwNixcbiAgICAgIDE2NixcbiAgICAgIDU1LFxuICAgICAgNTMsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAyMTksXG4gICAgICAzMixcbiAgICAgIDY4LFxuICAgICAgMTI1LFxuICAgICAgMTM3LFxuICAgICAgNDcsXG4gICAgICAxNjIsXG4gICAgICAxNTEsXG4gICAgICAxMDYsXG4gICAgICAxNjMsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT1dtZVVIRU4zYTdiTUdHQnNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFWTEdiMDRoTUY4U3hvZHVVZVVLNmh6R1ZKeGtDdmRQVnVhSnUyVHdnQ009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQUNHUTlkK0hZa3Y3LzU1OU4yTlNhcFVEeWpwME9RbzhpYkdlZU96eWExZkJDdTVBa1dqMDJtOWx0L0MzMVB2T3Y1dG1TNXBFK0RveTFML0ZPRlIvQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidGMybFRCRmcvcG11YURwS3RiTjBZNG1zTVE0R1pzRWFSRjJOd1Y4NWY3a1JKM20wSmtXa2NsWGVmK0FrcnFpVFdMMnVEcU1WcFVwSi9Fd21BQzJlRGc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODQwNTUwNzk6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMTU4NTEzOTk3MDE0OToyMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJKTlIgQ1I3XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODQwNTUwNzk6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzNjQ5NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFISUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhIKy5qc29uIjogIntcImtleURhdGFcIjpcIldhb0tLQ2FBN2g2R0UrZTMwWUEvODJPRUM1Y0l3T3ErY2lvWXY5UFJOMmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTI3MzA3NSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyNjc5NzcwMjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISDAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYWkM0YUpqSmtDWlZtemtzS1E2NEV2K0VHMmZRcTdFRzc3c1BVQ1RXandJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNzM0MjgxODVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISDEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzRVlINStrdVZSWDNoZkJITTU3OUQ2bDMvTU4vc1IwVEZzMWZGSVcvTkVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIxNzE5MTc5MDc5NDYyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEgyLmpzb24iOiAie1wia2V5RGF0YVwiOlwid2tBTkZoQVk4SURJbnlUeWdGdlJONE5hMXladDJ0bys3Znc4ZzByU3dRVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDkxMjczMDc1LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE4NjI0NjkyOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhIMy5qc29uIjogIntcImtleURhdGFcIjpcIk9kd25NZ3lMYXpRU1huNlBxem5QVEV0ZDlzWDVCUXZHR00vRVpTSkg3cW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTI3MzA3NSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvYThzVVFqWjUzSDAyT3hDVlIzUVJ2NFpINS90YzVDbEU4ZzRIdS9tM1BnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNl19LFwidGltZXN0YW1wXCI6XCIxNzE5MjU4NDY3MjI0XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEg4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMjZWdndUSkppV2ZBTFQ2ZXdjZEhCaWJLNTd4TGZ5aG9yZDFSaXNLMS8wND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDkxMjczMDc1LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDddfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI2MTY4NzQ4NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhIX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBTzVYRUN6V0crWjZ1Z3hXZFR6WVBaUytBcWI1bm5QdVdJcTc4QzZZTGFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjo5LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsOV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEh6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUFIxQ0VHVWlNYTBHdEFhdWtsdk5iSnY2eUlwZmNRckw4SHNkTEJWc3ozTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDkxMjczMDc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXcUJoMXFqa05SQ1luTCtiUVpnTWQ3S0JEZm1IUjRqdDFjSlRZOFphb21jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyOTc4MTkzNTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzcUY5dGVsTlpMUHlqbEtPVHZtRElaMXJFb0MzN0tKNkNKZzI3VllHcko4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoxOSxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMzI1Mzk2MDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6TC95N1Z1UTNwR1N3NnJsSmJOeURJV0ZaZlNtRFpMQXRSRmRobkpwUHBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyMCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDIwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKQytUalhIUWNSYVhua1FUeDZhWW1pdkRIQmVRYkh1OGZEVzJvT1JVSE93PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNTY1OTYwMTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXQzJnTzJpcmFaODBkSSsyVmkvaWNJRm80WjhOTmx4VkJqd1hTRVVMYzA4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyMixcImRldmljZUluZGV4ZXNcIjpbMCwzLDIyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjE1NTE3NDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrbEpod0RkWlNYT2JWS2tiLzJLSzd5RGhEbis3OE40VGJuSjh3UFE4UFJZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyMyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDIzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjE2NjY2ODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2dkRMakVGYUZ2SVNFbThVQTVObHhuWGlNRzRSdk9RUU1uaGkrTlBVcHRRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyNCxcImRldmljZUluZGV4ZXNcIjpbMCwzLDI0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjE5NTUwODRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiVCtHakZxZkVtL08yQWg0TlQ2RlJiZVFMR1pQL2J2RjRYLzNKUXpEblRzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyNSxcImRldmljZUluZGV4ZXNcIjpbMCwzLDI1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjM4OTcyMDZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFISUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0K0hDMkpucS9RV01iT1ppQmVBRnVWZlZDSGpBY1R5UWwyTnJzQnU2YnRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjoyNixcImRldmljZUluZGV4ZXNcIjpbMCwzLDI2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNjQ4OTcxNDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFNQUFISDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRdlVQcXBlYlJoK1ZUa2NocE5OeEZxUzcvdnhvZVlDTi82bTJDcjRFTDE4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNV19LFwidGltZXN0YW1wXCI6XCIxNzE5MjExNDM4Njk2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBTUFBSEg0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiRHQ0MkQrQkswckdCV1E4MUF2K3hpYXBpTU1MVFRHVWQ1RVdsTGdEeFg3Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDkxMjczMDc1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1ODI0NzQ5MFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQU1BQUhINS5qc29uIjogIntcImtleURhdGFcIjpcImltdERUb0FSSDJiMnpaQS9ETjcraWdTZkp5UWx4SGpUOVJ0ZkI5Yk9GOE09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTI3MzA3NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1ODI1MTY5N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQU1BQUhINi5qc29uIjogIntcImtleURhdGFcIjpcIlRLUlBHYUFQUkFnUDFPUnAyK3lSeDNWMTJWV0ZXcURubU5XR1JkUVY3N2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5MTI3MzA3NSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyNTg0NDQ4NjlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFNQUFISDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2UXcrYjdkdEZQQis4SEc2cnVRYWtDRFlOTTNHc0FoNDZ6Wko5bGl2eWljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTEyNzMwNzUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsOF19LFwidGltZXN0YW1wXCI6XCIxNzE5MjY2NDU3MzIzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBTUFBSElDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM1M3Yk9ETmgrYlRucXozOUt2bzBOTDZJcUE1N1pZQmhZTkVGUUlkemZwYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDkxMjczMDc1LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwzLDIwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzNTA5MTM5ODVcIn0iCn0="  // PUT your SESSION_ID 


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

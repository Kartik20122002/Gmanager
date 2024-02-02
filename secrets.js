const dotenv = require('dotenv');
dotenv.config();

 const Dburl = process.env.DBURL;
 const clientId = process.env.GOOGLE_CLIENT_ID;
 const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
 const redirectUri = process.env.GOOGLE_REDIRECT_URI;
 console.log(redirectUri)
 const secret = process.env.SECRET

module.exports = {Dburl,clientId,clientSecret,redirectUri,secret};
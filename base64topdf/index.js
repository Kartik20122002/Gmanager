`use strict`
const fs = require('fs');


module.exports = {
   
    base64Encode: (file) => {
        // read binary data
        var bitmap = fs.readFileSync(file);
        // convert binary data to base64 encoded string
        return new Buffer(bitmap).toString('base64');
    },
    
    base64Decode: (base64str, file,email) => {
        // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
        var bitmap = new Buffer(base64str, 'base64');
        // write buffer to file
        fs.writeFileSync(`public/pdfs/${email}/`+file, bitmap);
    },
    
    rtfToText: (rtfStr) => {
        //converting rtf data into normal text data
        let convertedText = rtfStr.replace(/\\par[d]?/g, "");
        convertedText = convertedText.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "").trim();
        return convertedText;
    },
    
    textToRtf: (textStr) => {
        textStr = textStr.replace(/\n/g, "\\par\n");
        //converting text into rtf
        return "{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang2057{\\fonttbl{\\f0\\fnil\\fcharset0 Microsoft Sans Serif;}}\n\\viewkind4\\uc1\\pard\\f0\\fs17 " + textStr + "\\par\n}";
    },
    
    strToBase64: (str) =>{
        return new Buffer(str).toString('base64')
    },
    
    base64ToStr: (base64Str) =>{
        return new Buffer(base64Str, 'base64').toString('ascii')
    }
};




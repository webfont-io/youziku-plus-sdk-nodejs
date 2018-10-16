var youziku = require("../src/index.js")

var youzikuPlusClient = new youziku.youzikuPlusClient("xxx");


var json = {
    AccessKey: 'xxx',
    Content: '有字库反爬虫nodejs-sdk测试例子',
    // UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        RanNumber: false,
        RanEnglish: true,
        RanChinese: true
    }
};
 

//全格式【ALL】
// youzikuPlusClient.getFontFace(json).then(a => {
//     console.log(a);
// }, error => {
//     console.log(error);
// });

//全格式【WOFF】

//json.Content+="WOFF【ALL】";
// youzikuPlusClient.getWoffFontFace(json).then(a => {
//     console.log(a);
// }, error => {
//     console.log(error);
// });



var scopeJson = {
    AccessKey: 'xxx',
    Content: '有字库反爬虫nodejs-sdk测试例子',
    // UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        RanNumber: true,
        RanEnglish: true,
        RanChinese: true
    },
    Text:"nodejs-sdk"
};

//指定内容【全格式】
// youzikuPlusClient.getScopeFontFace(scopeJson).then(a => {
//     console.log(a);
// }, error => {
//     console.log(error);
// });

//指定内容【全格式】
// scopeJson.Content+="WOFF【Scope】";
// youzikuPlusClient.getScopeWoffFontFace(scopeJson).then(a => {
//     console.log(a);
// }, error => {
//     console.log(error);
// });
# 一、介绍

## 1．SDK适用语言<br/>
SDK适用于在Nodejs中调用<a  target="_blank"  href="http://service.youziku.com">service.youziku.com</a>中的反爬虫api<br/>

## 2.工作流程<br/>　　
    ①用户用后端程序调用SDK，提交动态内容到有字库的反爬虫服务器 </br>
   ②服务器接收到所提交内容后，根据内容生成反爬虫策略文件</br>
   ③服务器将所有文件上传至阿里云CDN，并返回@font-face语句和混淆后的内容</br>
   ④内容显示时，只需要显示混淆后的内容即可，@font-face语句会让内容还原成可阅读状态</br>

## 3.@font-face语句<br/>
SDK的返回值主要内容是@font-face语句，@font-face语句是CSS3中的一个功能模块，是所有浏览器天然支持的CSS语句。它的作用是将一个远程字体文件加载到当前页面，并且定义成一个字体，前端页面能够像使用本地字体一样使用该字体。@font-face语句是实现在线字体效果的核心代码。<br/>

## 4. 显示字体效果
用户<a href="#user-content-4自定义路径生成模式">自定义字体存放路径</a>，当需要显示字体效果时，可以根据自己所定义的路径<a href="http://service.youziku.com/index.html#format" target="_blank" style="color: #ff7e00;">拼组出@font-face语句</a>，然后将语句输出到前端页面，即可使内容显示字体效果。


# 二、引用
## npm安装
``` npm
npm install youziku-plus@1.0.0
```

# 三、Sample
## 1.初始化YouzikuClient
``` node
var youziku =require("youziku-plus");
var youzikuPlusClient = new youziku.youzikuPlusClient("xxx");//apikey
```
## 2.调用接口
### 2.1.处理全部文本-所有格式
``` node

let json = {
    AccessKey: 'xxx',
    Content: '有字库，让中文跃上云端！',
    //标识使用系统生成的随机fontfamily
    UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        //处理数字
        RanNumber: true,
        //处理字母
        RanEnglish: true,
        //处理汉字
        RanChinese: true
    }
};

 youzikuPlusClient.getFontFace(json).then(result => {
    //处理后的新文本
    console.log(result.NewContent);
    console.log(result.FontFamily);
    console.log(result.FontFace);
    console.log(result.Code);
    console.log(result.Tag);
    console.log(result.ErrorMessage);
}, error => {
   //出错
    console.log(error);
});
 
```

### 2.2.处理全部文本-WOFF
``` node

let json = {
    AccessKey: 'xxx',
    Content: '有字库，让中文跃上云端！',
    //标识使用系统生成的随机fontfamily
    UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        //处理数字
        RanNumber: true,
        //处理字母
        RanEnglish: true,
        //处理汉字
        RanChinese: true
    }
};

 youzikuPlusClient.getWoffFontFace(json).then(result => {
    //处理后的新文本
    console.log(result.NewContent);
    console.log(result.FontFamily);
    console.log(result.FontFace);
    console.log(result.Code);
    console.log(result.Tag);
    console.log(result.ErrorMessage);
}, error => {
   //出错
    console.log(error);
});
 
```
### 2.3.处理指定文本-所有格式
``` node
let scopeJson = {
    AccessKey: 'xxx',
    Content: '有字库，让中文跃上云端！',
    //标识使用系统生成的随机fontfamily
    UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        //处理数字
        RanNumber: true,
        //处理字母
        RanEnglish: true,
        //处理汉字
        RanChinese: true
    },
    Text:"有字库"
};

 youzikuPlusClient.getScopeFontFace(scopeJson).then(result => {
    //指定文本处理后的新文本
    console.log(result.NewContent);
    console.log(result.FontFamily);
    console.log(result.FontFace);
    console.log(result.Code);
    console.log(result.Tag);
    console.log(result.ErrorMessage);
}, error => {
    //出错
     console.log(error);
 });
```

### 2.4.处理指定文本-WOFF
``` node
let scopeJson = {
    AccessKey: 'xxx',
    Content: '有字库，让中文跃上云端！',
    //标识使用系统生成的随机fontfamily
    UseRanFontFamily:true,
    Tag: ".class-1",
    Option: {
        //处理数字
        RanNumber: true,
        //处理字母
        RanEnglish: true,
        //处理汉字
        RanChinese: true
    },
    Text:"有字库"
};

 youzikuPlusClient.getScopeWoffFontFace(scopeJson).then(result => {
    //指定文本处理后的新文本
    console.log(result.NewContent);
    console.log(result.FontFamily);
    console.log(result.FontFace);
    console.log(result.Code);
    console.log(result.Tag);
    console.log(result.ErrorMessage);
}, error => {
    //出错
     console.log(error);
 });
```

/**
 *@description Youziku Plus SDK -Nodejs
 *@author gaobingbing
 *@description use axios module
 *@lastModifyDate 2018-10-16
 */

exports.youzikuPlusClient = youzikuPlusClient;
/**
 * @description import modules
 * @author gaobingbing
 */
var axios = require('axios');

/**
 * @description youzikuPlusClient
 * @author gaobingbing
 */
function youzikuPlusClient(apiKey, host) {

    //global setting
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    //网络模块
    function NetModuleImpl() {
        /**
         *@description youziku request common method
         *@author gaobingbing 
         */
        this.request = function (path, obj, callback) {

            var rq = axios.post(path, obj).then(function (res) {

                if (callback) {
                    callback(res.data);
                }

            }).catch(function (err) {
                console.log(err);
            })

        }
    }

    //核心模块
    function CoreModuleImpl() {


        /**
         *@description Single label interface universal method
         *@author gaobingbing 
         */
        this.getFontFace = function (apikey, obj, path, callback) {
            obj["ApiKey"] = apikey;
            youzikuConfig.NetModule.request(path, obj, function (data) {

                callback(data);
            });
        }
    }

    //内部模块
    function HandlerModuleImpl() {
        //GetFontfaceCommon
        this.getFontface = function (jsonObj, apiKey, url) {

            return new Promise(function (resolve, reject) {

                youzikuConfig.CoreModule.getFontFace(apiKey, jsonObj, url, function (result) {
                    if (result.Code !== 200)
                        reject(result)
                    else
                        resolve(result);
                });

            });

        };

    }



    //有字库配置项
    let youzikuConfig = {
        CoreModule: new CoreModuleImpl(),
        HandlerModule: new HandlerModuleImpl(),
        NetModule: new NetModuleImpl()
    };

    let client = {
        ApiKey: apiKey,
        Host: "http://service.youziku.com",
        /**
         * ALL (全格式)
         */
        getFontFace: function (jsonObj) {
            let url = this.Host + '/ramUnicodeWebFont/getFontFace'
            return youzikuConfig.HandlerModule.getFontface(jsonObj, this.ApiKey, url);
        },
        /**
        * ALL (WOFF)
        */
        getWoffFontFace: function (jsonObj) {
            let url = this.Host + '/ramUnicodeWebFont/getWoffFontFace'
            return youzikuConfig.HandlerModule.getFontface(jsonObj, this.ApiKey, url);
        },

        /**
          * Scope (全格式)
         */
        getScopeFontFace: function (jsonObj) {
            let url = this.Host + '/ramUnicodeScopeWebFont/getFontFace'
            return youzikuConfig.HandlerModule.getFontface(jsonObj, this.ApiKey, url);
        },
        /**
        * Scope (WOFF)
        */
        getScopeWoffFontFace: function (jsonObj) {
            let url = this.Host + '/ramUnicodeScopeWebFont/getWoffFontFace'
            return youzikuConfig.HandlerModule.getFontface(jsonObj, this.ApiKey, url);
        },


    };

    if (host) {
        client.Host = host;
    }
    return client;

}
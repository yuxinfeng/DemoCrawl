/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-12-6
 * Time: 下午2:23
 * To change this template use File | Settings | File Templates.
 */
var Urls = require('./url.js').Urls;
var async = require('async');
var startUrl = 'http://cnodejs.org/?page=';
var urls = new Urls(startUrl);

urls.next(function(err,topics){
     var items = [];
    async.filter(topics,function(topic,cb){
        items.push(urls.parseTopic(topic));
        cb(null);
    },function(err){
        console.log("abc"+items);
        urls.Pipeline(items);
    })

})  ;


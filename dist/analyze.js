"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var version="0.5";var serverPath="";var ops="";var Ajax=function Ajax(url,data,callback){var xhr=new XMLHttpRequest;xhr.open("post",url,true);xhr.responseType="json";xhr.onload=function(){callback&&callback(xhr.response)};xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var dataStr=[];if(data){for(var k in data){dataStr.push(k+"="+encodeURIComponent(data[k]))}}dataStr=dataStr.join("&");xhr.send(dataStr)};var genUuid=function genUuid(len,radix){var chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var uuid=[],i;radix=radix||chars.length;if(len){for(i=0;i<len;i++){uuid[i]=chars[0|Math.random()*radix]}}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]="-";uuid[14]="4";for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=chars[i==19?r&3|8:r]}}}return uuid.join("")};var exp={};exp.Mark=function(options,callback){options.version=version;options.timestamp=Date.now();options.url=currentUrl;options.page=currentPage;options.appId=ops.appId;options.uuid=markInit(ops);if(ops.env){options.env=ops.env}Ajax(serverPath+"/service/mark",options,callback)};exp.markPicker=function(target,callback){var actionType="pick";exp.Mark({actionType:actionType,target:target},callback)};var currentUrl="";var currentPage="";exp.markPage=function(url,page,callback){currentUrl=url;currentPage=page;var actionType="enter";exp.Mark({actionType:actionType},callback)};exp.markInit=function(_ops){if((typeof _ops==="undefined"?"undefined":_typeof(_ops))!="object"){_ops={appId:_ops}}ops=_ops;if(!localStorage.shanyinUuid){localStorage.shanyinUuid=genUuid(16)}return localStorage.shanyinUuid};if((typeof module==="undefined"?"undefined":_typeof(module))==="object"){module.exports=exp}else{for(var k in exp){window[k]=exp[k]}}

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.install = factory());
}(this, (function () { 'use strict';


var storage = window.localStorage
var timeStorage = {
    get:function(name){
      if(!name) throw 'no arguments name'
      var item = storage.getItem(name)

      if(item) return getValue(item,name)

      return item
    },
    set:function(name,value,time){
      if(!name) throw 'no argument name'
      if(!value) throw 'no arguments value'
      if(time) return setValue(arguments)

      storage.setItem(name,JSON.stringify(value))
    },
    remove:function(name){
      storage.removeItem(name)
    },
    clear:function(){
      storage.clear()
    }
}


function isObject(obj){
   return Object.prototype.toString.call(obj) === '[object Object]'
}

function getValue(item,name){
   var value = JSON.parse(item)

   if(isObject(value) && value.timeStorageTime !== undefined){
     var nowDate = +new Date
     if(value.timeStorageTime - nowDate > 0) return value.value
     else {
       storage.removeItem(name)
       return null
     }
   }

   return value

}

function setValue(args){
  var nowDate = +new Date,endDate = nowDate + args[2] * 1000

  storage.setItem(args[0],JSON.stringify({value:args[1],timeStorageTime:endDate}))
}


return timeStorage;




})));

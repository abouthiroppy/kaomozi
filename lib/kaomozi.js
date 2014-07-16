'use strict';

// kaomozi site -> http://kaomoji.n-at.me
//GitHub https://github.com/tatat/kaomoji.html
// this source https://github.com/abouthiroppy/kaomozi/

var FQDN = 'http://kaomoji.n-at.me/';

// Records
/*///////////////////////////////////////////////////////////////////////////////////
Resource URL
GET http://kaomoji.n-at.me/kaomoji.json

filter              (optional)   Returns results that match a specified value.
Example Values: ω

since               (optional)   Returns results that created since a specified value (unix timestamp).
Example Values: 1351567940

include_created_at  (optional)   Returns results that include created_at. Default to false
Example Values: true
///////////////////////////////////////////////////////////////////////////////////*/
var records = function(obj,callback){
  var url = FQDN + 'kaomoji.json';
  var propertyArray = ['filter','since','include_created_at'];
  var urlParams = '';

  try{
    if(typeof obj !== 'object'){
      throw null;
    }
  }catch(e){
    return errorHandler("invalid property value");
  }
  for(var index in obj){
    try{
      if(propertyArray.indexOf(index) === -1){
        throw null;
      }
      else{
        if(urlParams.length !== 0){
          urlParams += '&';
        }
        else{
          urlParams += '?';
        }
        urlParams += (index + '=' + obj[index]);
      }
    }catch(e){
      return errorHandler("invalid property value");
    }
  }
  return getJSON(url + urlParams,callback);
};

//Record
/*///////////////////////////////////////////////////////////////////////////////////
Resource URL
GET http://kaomoji.n-at.me/:id.json

include_created_at  (optional)   Returns results that include created_at. Default to false
Example Values: true
///////////////////////////////////////////////////////////////////////////////////*/
var record = function(id,callback){
  try{
    if(id === undefined){
      throw null;
    }
  }catch(e){
    return errorHandler("Insufficient arguments for record-function");
  }
  return getJSON(FQDN + id + '.json',callback);
};

//Ramdom
/*///////////////////////////////////////////////////////////////////////////////////
Resource URL
GET http://kaomoji.n-at.me/random.json

include_created_at  (optional)   Returns results that include created_at. Default to false
Example Values: true
///////////////////////////////////////////////////////////////////////////////////*/
var random = function(callback){
  var url = FQDN + 'random.json';
  return getJSON(url,callback);
};

var getJSON = function(url,callback){
  var http = require('http');

  http.get(url, function(res){
    res.setEncoding('utf8');
    res.on('data', function(data){
      callback(false,data);
    });
    res.on('end', function(res){

    });
  }).on('error', function(e){
    return errorHandler("cannot get data");
  });
};

var errorHandler = function(message){
  return console.log(message);
};

module.exports = {
  records : records,
  record  : record ,
  random  : random
};


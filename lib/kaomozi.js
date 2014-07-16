'use strict';

// kaomozi site -> http://kaomoji.n-at.me
//GitHub https://github.com/tatat/kaomoji.html
// this source

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
var records = function(obj){
  var url = FQDN + 'kaomoji.json';
  var propertyArray = ['filter','since','include_created_at'];
  var urlParams = '?';

  for(var index in obj){
    console.log(index);
    try{
      if(propertyArray.indexOf(index) === -1)
        throw null;
      else{
        if(urlParams.length !== 1)
          urlParams += '&';
        urlParams += (index + '=' + obj[index]);
      }
    }catch(e){
      return {"error" : "invalid property value"};
    }
  }
  console.log(urlParams);
}

//Record
/*///////////////////////////////////////////////////////////////////////////////////
Resource URL
GET http://kaomoji.n-at.me/:id.json

include_created_at  (optional)   Returns results that include created_at. Default to false
Example Values: true
///////////////////////////////////////////////////////////////////////////////////*/
var record = function(id){
  try{
    if(id === undefined)
      throw null;
  }catch(e){
    return {"error" : "Insufficient arguments for record-function"};
  }
}

//Ramdom
/*///////////////////////////////////////////////////////////////////////////////////
Resource URL
GET http://kaomoji.n-at.me/random.json

include_created_at  (optional)   Returns results that include created_at. Default to false
Example Values: true
///////////////////////////////////////////////////////////////////////////////////*/
var random = function(){
  var url = FQDN + 'random.json';
}


module.exports = {
  records : records,
  record  : record ,
  random  : random
}
(function() {
  var kaomozi = require('../lib/kaomozi');
  var assert = require('assert');
  var jsonData;
  //Records
  ///////////////////////////////////////////////
  //{filter:"aa",since:1351567940,include_created_at:true}
  // kaomozi.records({},function(err,data){
  //   console.log(data);
  // });
  ///////////////////////////////////////////////

  //Record
  ///////////////////////////////////////////////
  // kaomozi.record(1111,function(err,data){
  //   console.log(data);
  // });
  ///////////////////////////////////////////////

  //Random
  ///////////////////////////////////////////////
  // kaomozi.random(function(err,data){
  //   console.log(data);
  // });
  ///////////////////////////////////////////////

  describe('API response test', function(){
    it('Records', function(done){
      kaomozi.records({},function(err,data){
        jsonData = data;
      });
      setTimeout(function() {
        // if(typeof jsonData === 'object'){
        //   assert.ok(true);
        // }
        if(jsonData.length >= 100){
          assert.ok(true);
        }
        else{
          assert.ok(false);
        }
        done();
      },4000);
    });
  });

})();
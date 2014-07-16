(function() {
  var kaomozi = require('../lib/kaomozi');
  var records = kaomozi.records({filter:"aa",since:1351567940,include_created_at:true});
  var record  = kaomozi.record(1);
  var random  = kaomozi.random();

  // console.log(record);

})();
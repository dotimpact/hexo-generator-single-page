module.exports = function(locals){
  var config = this.config;
  var singlePageConfig = config.single_page;
  var results = [];

  singlePageConfig.forEach(function(v,k) {
    results = results.concat({
      path: v  + "/index.html",
      layout: [v]
    });
  });

  return results;
};

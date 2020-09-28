(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movieHome'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>The Movie Store!</h2>\n	<div style=\"text-align: center;\"> <a href=\"javascript:void(0);\" onclick=\"movies().showHide('add')\">Add New Movie</a> <a>/</a> <a href=\"javascript:void(0);\" onclick=\"movies().showHide('search')\"> Search Movies</a> </div>\n	<!-- Add Movie -->\n	<div id=\"add_div\" style=\"display: none;\"> </div>\n	<!-- Search Movie -->\n	<div id=\"search_div\" style=\"display: none;\"> </div>\n	<p style=\"margin-top: 100px\"></p>\n	<h2>Movies List</h2>\n	<hr>\n	<div id=\"movies\" style=\"padding-top: 10px\"> </div>\n	<p style=\"text-align: center;\" id=\"noMovieFound\">No Movies Found!!!</p>";
},"useData":true});
})();
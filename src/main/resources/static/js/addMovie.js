(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addMovie'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<b>Add New Movie:</b>\n<div id=\"addMovies\" style=\"margin: 0 auto;\">\n	<input type=\"text\" id=\"addNewMovie\" placeholder=\"Name..\">\n	<label for=\"releaseDate\">Release Date:</label>\n	<input type=\"date\" id=\"release_dae\" name=\"releaseDate\">\n	<button type=\"submit\" onclick=\"movies().addMovie()\">Add Movie</button>\n	<div class=\"selectBox\" style=\"width: 55%\" onclick=\"movies().toggleCheckBox('addNewMovie_checkboxes')\">\n		<select>\n			<option type=\"placeholder\">Category</option>\n		</select>\n		<div class=\"overSelect\"></div>\n	</div>\n	<div id=\"addNewMovie_checkboxes\" style=\"position: absolute\"> </div>\n</div>\n";
},"useData":true});
})();
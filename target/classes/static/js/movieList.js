(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['movieList'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n		<tr>\n			<td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</td>\n			<td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"categories") : depth0), depth0))
    + "</td>\n			<td>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"new_date") : depth0), depth0))
    + "</td>\n		</tr> ";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table>\n	<thead>\n		<tr>\n			<th>Movie Name</th>\n			<th>Categories</th>\n			<th>Release Date</th>\n		</tr>\n	</thead>\n	<tbody> "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":9},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + " </tbody>\n</table>";
},"useData":true});
})();
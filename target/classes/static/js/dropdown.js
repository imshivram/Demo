(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['dropdown'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<label for=\""
    + alias2(alias1(depth0, depth0))
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\">\n	<input type=\"checkbox\" id=\""
    + alias2(alias1(depth0, depth0))
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"action") : depths[1]), depth0))
    + "\" name=\""
    + alias2(alias1(depth0, depth0))
    + "\" />"
    + alias2(alias1(depth0, depth0))
    + " </label> \n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"category") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":4,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();
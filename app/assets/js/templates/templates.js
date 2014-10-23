this["JST"] = this["JST"] || {};

this["JST"]["app/templates/articles/article-post-single.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "            <article data-article-id=\""
    + escapeExpression(((helper = (helper = helpers.articleId || (depth0 != null ? depth0.articleId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleId","hash":{},"data":data}) : helper)))
    + "\" class=\"article-single lo-full\">  \n                <h1>"
    + escapeExpression(((helper = (helper = helpers.articleTitle || (depth0 != null ? depth0.articleTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleTitle","hash":{},"data":data}) : helper)))
    + "</h1>\n                <p>Publisert den "
    + escapeExpression(((helper = (helper = helpers.articlePublishedDate || (depth0 != null ? depth0.articlePublishedDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articlePublishedDate","hash":{},"data":data}) : helper)))
    + " klokken "
    + escapeExpression(((helper = (helper = helpers.articlePublishedTime || (depth0 != null ? depth0.articlePublishedTime : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articlePublishedTime","hash":{},"data":data}) : helper)))
    + " av <a href=\"http://hiof.no/nor/om-hogskolen/sok-pa-sidene/profil/?&displayitem="
    + escapeExpression(((helper = (helper = helpers.authorId || (depth0 != null ? depth0.authorId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorId","hash":{},"data":data}) : helper)))
    + "&module=admin\" title=\"Se "
    + escapeExpression(((helper = (helper = helpers.authorName || (depth0 != null ? depth0.authorName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorName","hash":{},"data":data}) : helper)))
    + " sin profil\">"
    + escapeExpression(((helper = (helper = helpers.authorName || (depth0 != null ? depth0.authorName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorName","hash":{},"data":data}) : helper)))
    + "</a></p>\n                <img src=\"http://hiof.no/neted/services/file/?hash="
    + escapeExpression(((helper = (helper = helpers.articleImage || (depth0 != null ? depth0.articleImage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleImage","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.articleImageAltText || (depth0 != null ? depth0.articleImageAltText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleImageAltText","hash":{},"data":data}) : helper)))
    + "\" class=\"picture\" />\n                <p class=\"intro\">"
    + escapeExpression(((helper = (helper = helpers.articleIntro || (depth0 != null ? depth0.articleIntro : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleIntro","hash":{},"data":data}) : helper)))
    + "</p>\n                ";
  stack1 = ((helper = (helper = helpers.articleContent || (depth0 != null ? depth0.articleContent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleContent","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                <p>Sist oppdatert "
    + escapeExpression(((helper = (helper = helpers.articleUpdated || (depth0 != null ? depth0.articleUpdated : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleUpdated","hash":{},"data":data}) : helper)))
    + " av <a href=\"http://hiof.no/nor/om-hogskolen/sok-pa-sidene/profil/?&displayitem="
    + escapeExpression(((helper = (helper = helpers.authorId || (depth0 != null ? depth0.authorId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorId","hash":{},"data":data}) : helper)))
    + "&module=admin\" title=\"Se "
    + escapeExpression(((helper = (helper = helpers.authorName || (depth0 != null ? depth0.authorName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorName","hash":{},"data":data}) : helper)))
    + " sin profil\">"
    + escapeExpression(((helper = (helper = helpers.authorName || (depth0 != null ? depth0.authorName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"authorName","hash":{},"data":data}) : helper)))
    + "</a></p>                \n                <h2>Kategorier</h2>\n                <ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.category : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </ul>\n                <h2>Relaterte artikkler</h2>\n \n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.relatedArticles : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </article>\n";
},"2":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        <li><a href=\"#/articles/category/"
    + escapeExpression(lambda((data && data.key), depth0))
    + "\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</a></li>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <div class=\"lo-half\">\n                            <article data-article-id=\""
    + escapeExpression(lambda((depth0 != null ? depth0.articleId : depth0), depth0))
    + "\" class=\"article article-entry ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.articleExternal : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <a href=\"#/articles/"
    + escapeExpression(lambda((depth0 != null ? depth0.articleId : depth0), depth0))
    + "\" title=\"Link til "
    + escapeExpression(((helper = (helper = helpers.articleTitle || (depth0 != null ? depth0.articleTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"articleTitle","hash":{},"data":data}) : helper)))
    + "\">\n                                    <img src=\"http://staging.hiof.no/neted/services/file/?hash="
    + escapeExpression(lambda((depth0 != null ? depth0.articleImage : depth0), depth0))
    + "\" alt=\""
    + escapeExpression(lambda((depth0 != null ? depth0.articleImageAltText : depth0), depth0))
    + "\" class=\"picture\" />\n                                 <h3>"
    + escapeExpression(lambda((depth0 != null ? depth0.articleTitle : depth0), depth0))
    + "</h3>\n                                 <p class=\"lead-paragraph\">"
    + escapeExpression(lambda((depth0 != null ? depth0.articleIntro : depth0), depth0))
    + "</p>\n                                </a>\n                            </article>\n                        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  return "article-external";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<script id=\"article-post-single\" type=\"text/x-handlebars-template\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.posts : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</script>";
},"useData":true});
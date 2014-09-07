angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('footer.html',
    "<nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\"><div class=\"containter\"><p class=\"navbar-text\">&copy; Nichlos Incardone</p></div></nav>"
  );


  $templateCache.put('header.html',
    "<div class=\"navbar hidden-xs navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"container\" style=\"background-color: #f8f8f8\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Java FX Tutorial</a></div><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><!--<li><a href=\"#\">Home</a></li>--><li class=\"active\"><a ui-sref=\"resume\">Home</a></li><li class=\"dropdown\"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Lessons<b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li><a ui-sref=\"#\">Lesson 1</a></li><li><a ui-sref=\"#\">Lesson 2</a></li><li><a href=\"#\">Lesson 3</a></li></ul></li><!--<li><a href=\"#contact\">Contact</a></li>--></ul></div><!--/.nav-collapse --></div></div><div class=\"navbar visible-xs navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header pull-left\"><a class=\"navbar-brand\" href=\"#\">Java FX Tutorial</a></div><div class=\"navbar-header pull-right\"><ul class=\"nav navbar-nav\"><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><b>Menu</b> <b class=\"caret\"></b></a><ul class=\"dropdown-menu\"><li class=\"active\"><a href=\"#\">Lesson 1</a></li><li><a href=\"#\">Lesson 2</a></li></ul></li></ul></div></div></div>"
  );


  $templateCache.put('home.html',
    "<div id=\"example\" class=\"container video-container\"><div class=\"row\"><div class=\"lessons-nav col-md-2\"><div class=\"btn\">Lesson 1</div><div class=\"btn\">Lesson 2</div><div class=\"btn\">Lesson 3</div><div class=\"btn\">Lesson 4</div><div class=\"btn\">Lesson 5</div><div class=\"btn\">Lesson 6</div></div><div class=\"video-panel col-md-10\"><center><iframe width=\"420\" height=\"315\" src=\"//www.youtube.com/embed/a1Y73sPHKxw\" frameborder=\"0\" allowfullscreen></iframe></center></div></div></div>"
  );

}]);

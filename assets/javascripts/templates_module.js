angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('example.html',
    "<div id=\"example\" class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><br><br><br><br><form><div class=\"form-group\"><label for=\"exampleInputEmail1\">Email address*</label><input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\" ng-model=\"email\" ni-validator=\"required email\"></div><div class=\"form-group\"><label for=\"exampleInputPassword1\">Password*</label><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" ng-model=\"password\" ni-validator=\"required password\"></div><div class=\"form-group\"><label for=\"exampleInputPassword2\">Password Confirmation*</label><input type=\"password\" class=\"form-control\" id=\"exampleInputPassword2\" placeholder=\"Confirm Password\" ng-model=\"passwordConfirmation\" ni-confirm=\"password\"></div><div class=\"form-group\"><label for=\"exampleInputPhone\">Phone number</label><input type=\"text\" class=\"form-control\" id=\"exampleInputPhone\" placeholder=\"XXX-XXX-XXXX\" ng-model=\"phone\" ni-validator=\"phoneNumber\"></div><div class=\"form-group\"><label for=\"exampleInputUrl\">Personal URL</label><input type=\"url\" class=\"form-control\" id=\"exampleInputUrl\" placeholder=\"URL\" ng-model=\"url\" ni-validator=\"url\"></div></form></div></div></div>"
  );


  $templateCache.put('footer.html',
    "<nav class=\"navbar navbar-default navbar-fixed-bottom\" role=\"navigation\"><div class=\"containter\"><p class=\"navbar-text\">&copy; Nichlos Incardone</p></div></nav>"
  );


  $templateCache.put('header.html',
    "<nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">Nichlos Incardone</a></div><div class=\"collapse navbar-collapse\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"#\">Link</a></li><li><a href=\"#\">Link</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li><a href=\"#\">Separated link</a></li><li class=\"divider\"></li><li><a href=\"#\">One more separated link</a></li></ul></li></ul><form class=\"navbar-form navbar-left\" role=\"search\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" placeholder=\"Search\"></div><button type=\"submit\" class=\"btn btn-default\">Submit</button></form><ul class=\"nav navbar-nav navbar-right\"><li><a href=\"#\">Link</a></li><li class=\"dropdown\"><a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li class=\"divider\"></li><li><a href=\"#\">Separated link</a></li></ul></li></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav>"
  );

}]);

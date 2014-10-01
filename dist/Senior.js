
// assets/javascripts/video/video_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [

  ];

  angular.module('ni.Video', dependencies);

})(angular);

// assets/javascripts/video/video_controller.js
(function (angular) {

  var
    definitions;

  definitions = [
    '$scope',
    '$sce',
    videoController
  ];

  angular.module('ni.Video')
    .controller('videoController', definitions);

  function videoController($scope, $sce) {
    $scope.currentVideo = 0;

    $scope.videos = [
      {
        'title': 'JavaFX Tutorial 1',
        'src': '//www.youtube.com/embed/Phog21DF4xk',
        'subheading': 'Installation and Hello World with Scene Builder',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 2',
        'src': '//www.youtube.com/embed/a1Y73sPHKxw',
        'subheading': 'Subheading of Video 2',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 3',
        'src': '//www.youtube.com/embed/l-gQLqv9f4o',
        'subheading': 'Subheading of Video 3',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 4',
        'src': '//www.youtube.com/embed/5WkZUXq9KPc',
        'subheading': 'Subheading of Video 4',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        'title': 'JavaFX Tutorial 5',
        'src': '//www.youtube.com/embed/AYxu_MQSTTY',
        'subheading': 'Subheading of Video 5',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ];

    $scope.videoUrl = function (vidUrl) {
      return $sce.trustAsResourceUrl(vidUrl);
    };

    $scope.setCurrentVideo = function (index) {
      $scope.currentVideo = index;
    };

    $scope.nextVideo = function () {
      $scope.currentVideo++;
    };

    $scope.previousVideo = function () {
      $scope.currentVideo--;
    };

  }

})(angular);

// assets/javascripts/text/text_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [

  ];

  angular.module('ni.Text', dependencies);

})(angular);

// assets/javascripts/text/text_controller.js
(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    textController
  ];

  angular.module('ni.Text')
    .controller('textController', definitions);

  function textController($scope) {
  

  }

})(angular);

// assets/javascripts/states/states_module.js
(function(angular) {
  var
    dependencies;

  dependencies = [
    'ui.router'
  ];

  angular.module('ni.States', dependencies);

})(angular);

// assets/javascripts/states/states_config.js
(function(angular) {
  var
    definition;

  definition = [
    '$stateProvider',
    '$urlRouterProvider',
    statesConfig
  ];

  angular.module('ni.States')
    .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/video');

    $stateProvider
      .state('video', {
        url: '/video',
        views: {
          '': {
            templateUrl: 'video.html',
            controller: 'videoController'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      })
      .state('text', {
        url: '/text',
        abstract: true,
        views: {
          '': {
            templateUrl: 'text.html',
            controller: 'textController'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      })
      .state('text.tutorials', {
        url: '/tutorials',
        templateUrl: 'tutorials.html'
      })
      .state('text.tutorial0', {
        url: '/tutorials/0',
        templateUrl: '0.html'
      })
      .state('about', {
        url: '/about',
        views: {
          '': {
            templateUrl: 'about.html'
          },
          'header': {
            templateUrl: 'header.html'
          }
        }
      });
  }
})(angular);

// assets/javascripts/templates_module.js
angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('about.html',
    "<div id=\"example\" class=\"container content-container\"><div class=\"row\"><div class=\"jumbotron\"><h1>CS 4911 Senior Design</h1><p class=\"lead\">This site was created for our Georgia Tech Senior Design course</p><a class=\"btn\" href=\"https://github.com/nickincardone/Senior-Design-Site\">Code on GitHub</a></div></div><div class=\"row\"><div class=\"collaborators\"><h2>Group Members</h2><ul><li>Nichlos Incardone</li><li>Philip Johnson</li><li>Prahlad Venkatesh</li><li>Steven James Moore</li></ul></div></div></div>"
  );


  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" ui-sref=\"about\">JavaFX Tutorial</a></div><div class=\"navbar-collapse collapse\"><ul class=\"nav navbar-nav navbar-right\"><li><a ui-sref=\"video\">Video</a></li><li><a ui-sref=\"text.tutorials\">Text</a></li></ul></div><!--/.nav-collapse --></div></div>"
  );


  $templateCache.put('text.html',
    "<div id=\"example\" class=\"container content-container\"><div style=\"margin-left: 0px\" class=\"row\"><div ui-view></div></div></div>"
  );


  $templateCache.put('tutorials.html',
    "<div class=\"jumbotron\"><h1>JavaFX Tutorials</h1><p class=\"lead\">Tutorials Originally Designed for CS 2340 at Georgia Tech</p></div><div class=\"tutorial-list\"><ul class=\"tutorials\"><li><a ui-sref=\"text.tutorial0\">Tutorial Zero</a><p>Description of Video</p></li><li><a ui-sref=\"\">Tutorial One</a><p>Description of Video</p></li><li><a ui-sref=\"\">Tutorial One</a><p>Description of Video</p></li><li><a ui-sref=\"\">Tutorial One</a><p>Description of Video</p></li><li><a ui-sref=\"\">Tutorial One</a><p>Description of Video</p></li></ul></div>"
  );


  $templateCache.put('0.html',
    "<body style=\"background-color: #CCFFBB; align-content:center\"><h1 style=\"text-align: center\">Java FX Hello World Tutorial</h1><div style=\"background-color: #F0F0F0; width: 50%; margin: 0 auto; padding-bottom: 10px\"><h2 style=\"background-color: #CCCCCC\">What is Java FX?</h2><ul style=\"font-size: 1.5em\"><li>Java FX is a software platform for creating and developing rich internet applications that can run across a wide variety of devices.</li><li>Java FX is popularly known as an enhanced version of Swing.</li></ul></div><div style=\"background-color: #F0F0F0; width: 50%; margin: 0 auto; padding-bottom: 10px\"><h2 style=\"background-color: #CCCCCC\">Model-View-Controller (MVC)</h2><ul style=\"font-size: 1.5em\"><li>Java FX incorporates the MVC design pattern.</li><li>For a high level overview of the MVC pattern, look at the figure below:</li></ul><center><img style=\"background-color: white\" src=\"https://lh5.googleusercontent.com/3ugbbJPsAkq7z1yYlOo10NKfD-c_g9X9usf4SiIJAC-x5pFOgJTwgSvlLvj-V-Px4rlbM-7EfhzIpBMkpLQ-p9z9VrCWD4cgjkVJmyWqcKzk6COiYESak8hGS3bxhRTH3A\" width=\"200\" height=\"220\"></center></div><div style=\"background-color: #F0F0F0; width: 50%; margin: 0 auto; padding-bottom: 10px\"><h2 style=\"background-color: #CCCCCC\">Software Installation</h2><ul style=\"font-size: 1.5em\"><li>Downloaded and install NetBeans via <a href=\"http://www.oracle.com/technetwork/java/javase/downloads/index.html\">this link</a>.</li><li>Next, download and intall SceneBuilder via <a href=\"http://www.oracle.com/technetwork/java/javase/downloads/sb2download-2177776.html\">this link</a>.</li><ul style=\"padding-left: 15px\"><li>Note: Choose to install SceneBuilder in the default location for use during this tutorial.</li></ul><li>Then, in NetBeans, go to <i>File</i> -&gt; <i>New Project</i> -&gt; <i>Java FX</i> -&gt; <i>Java FXML Application</i> -&gt; Name the project as <b>OurFirstProject</b>.</li><li>After doing this, you should see three files pop up in the navigator on the left hand side of the screen.</li><li>In the file OurFirstProject.java, you will see the start() method. this is the entry point for Java FX applications</li></ul><p style=\"font-size: 1.5em\">We will now learn how to use these files to make a simple UI which allows a user to click a button and generate the text �Hello World!�.</p></div><div style=\"background-color: #F0F0F0; width: 50%; margin: 0 auto; padding-bottom: 10px\"><h2 style=\"background-color: #CCCCCC\">Developing the Hello World UI</h2><ul style=\"font-size: 1.5em\"><li>Right click on the file <b>FXMLDocument.fxml</b> and click <i>Open</i>.</li><li>A dialog box will pop up, which contains a user interface to allow the user to create any kind of layout they want.</li><ul style=\"padding-left: 15px\"><li>Note: This UI is provided by SceneBuilder, which we installed earlier.</li></ul><li>By default, the layout contains a button labelled <i>Click Me!</i>.</li><li>On the left, you can see AnchorPane, which is the root of the UI.</li><li>The AnchorPane contains the Button we see displayed.</li></ul><center><img src=\"https://lh3.googleusercontent.com/2lEfTtawJnucmIQXgwgTGWBiqiFjB_9q_XmDiMCw_zKUYx6HwTm8qr5Z3cTB4HtHb2Zen29FzTqaS4U0DM8Mct-_qO1_BwwktuTcjEUXIPscrSsHBRBNzg8Dhn1qqZa4TQ\" width=\"624\" height=\"369\"></center><p style=\"font-size: 1.5em\">Our task now is to somehow control what happens when we click on the button!</p><ul style=\"font-size: 1.5em\"><li>The first step in doing this is to create a known ID for the button.</li><li>On the right hand side of the SceneBuilder window, collapse the Properties tab and click on the Code tab.</li><li>Change the field corresponding to fx:id to <i>helloButton</i></li><li>You will also see that the <i>On Action</i> field is defaulted to <i>handleButtonAction()</i>.</li><li>To understand this, go to the class FXMLController, where you can see the method handleButtonAction().</li><li>This method performs the actions you need to be performed when the button is clicked.</li><li>When creating labels, buttons or handler methods, don�t forget to include the @FXML tag above the statements or methods doing this.</li><li>The <i>handleButtonAction()</i> does two things: it prints something to the console, and it sets the text of a pre-created label to <i>Hello World!</i>.</li><li>This is what causes <i>Hello World!</i> to be displayed on the screen.</li><li>We now hit run, which is the green play button below the menu bar.</li></ul><p style=\"font-size: 1.5em\">You can now see the output, as shown below:</p><center><img src=\"https://lh5.googleusercontent.com/V7uDd-EmosSPu0-fX_qPJQYqEWs7UdO7y_I2yLoreRlkR1M22EU4QuOwvobtpxAHDqWpJlHyjO51Wg7M8_0sj1kgI7qgGeFvhLtKjRkgKBrDNxAkzc62QO66VNrHkaRZuw\" width=\"336\" height=\"236\"></center></div></body>"
  );


  $templateCache.put('video.html',
    "<div id=\"example\" class=\"container video-container\"><div class=\"row\"><div class=\"lessons-nav col-md-3 col-xs-12\"><div ng-repeat=\"video in videos\"><div ng-class=\"{active: (currentVideo == $index)}\" ng-click=\"setCurrentVideo($index)\" class=\"btn\">{{video.title}}</div></div></div><center><div class=\"video-panel col-md-9 col-xs-12\"><div class=\"video-title\"><h3>{{videos[currentVideo].title}}</h3></div><iframe width=\"420\" height=\"315\" ng-src=\"{{videoUrl(videos[currentVideo].src)}}\" frameborder=\"0\" allowfullscreen></iframe><div class=\"video-subtitle\"><h4>{{videos[currentVideo].subheading}}</h4></div><div class=\"video-description\">{{videos[currentVideo].description}}</div><div class=\"bottom-nav\"><div ng-disabled=\"currentVideo == 0\" ng-click=\"previousVideo()\" class=\"pull-left btn\">Previous</div><a ui-sref=\"text.tutorials\" class=\"btn\">View Lesson's Text</a><div ng-disabled=\"currentVideo == videos.length - 1\" ng-click=\"nextVideo()\" class=\"pull-right btn\">Next</div></div></div></center></div></div>"
  );

}]);


// assets/javascripts/main_module.js
(function(angular) {

  var
    dependencies;

  dependencies = [
    'ni.States',
    'ni.Templates',
    'ni.Video',
    'ni.Text'
  ];

  angular.module('ni.SeniorDesign', dependencies);

})(angular);

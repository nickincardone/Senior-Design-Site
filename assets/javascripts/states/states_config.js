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
      .state('text.tutorial1', {
        url: '/tutorials/1',
        templateUrl: '1.html'
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
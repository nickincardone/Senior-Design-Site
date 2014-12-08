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
      .state('text.tutorial2', {
        url: '/tutorials/2',
        templateUrl: '2.html'
      })
      .state('text.tutorial3', {
        url: '/tutorials/3',
        templateUrl: '3.html'
      })
      .state('text.tutorial4', {
        url: '/tutorials/4',
        templateUrl: '4.html'
      })
      .state('text.tutorial5', {
        url: '/tutorials/5',
        templateUrl: '5.html'
      })
      .state('text.tutorial6', {
        url: '/tutorials/6',
        templateUrl: '6.html'
      })
      .state('text.tutorial7', {
        url: '/tutorials/7',
        templateUrl: '7.html'
      })
      .state('text.tutorial8', {
        url: '/tutorials/8',
        templateUrl: '8.html'
      })
      .state('text.tutorial9', {
        url: '/tutorials/9',
        templateUrl: '9.html'
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
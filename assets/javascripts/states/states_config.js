(function (angular) {
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
    .state('video',  {
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
    });


    
  }


})(angular);

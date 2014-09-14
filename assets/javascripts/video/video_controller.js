(function(angular) {

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
    $scope.videos = [{
      'title': 'JavaFX Tutorial 1',
      'src': '//www.youtube.com/embed/Phog21DF4xk',
      'subheading': 'Installation and Hello World with Scene Builder',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }];

    $scope.videoUrl = function() {
      return $sce.trustAsResourceUrl($scope.videos[0].src);
    }

  }

})(angular);
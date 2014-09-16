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
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
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 2',
        'src': '//www.youtube.com/embed/Co0Kw5IBSvQ',
        'subheading': 'Setting Up Our Database',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager/tree/bc003a502d02c0cc6f6ca18220b7a17d8f0fd07e'
      },
      {
        'title': 'JavaFX Tutorial 3',
        'src': '//www.youtube.com/embed/LDVztNtJWOo',
        'subheading': 'Changing Between Scenes',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 4',
        'src': '//www.youtube.com/embed/SCyZdWZi7C0',
        'subheading': 'Login Page Using SQLite Database',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager/tree/23c3b32ea0827b7bc4ff6bfe34b750e3614f6c93'
      },
      {
        'title': 'JavaFX Tutorial 5',
        'src': '//www.youtube.com/embed/cqZRe9iKzo8',
        'subheading': 'CSS with JavaFX',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager/tree/27b3afc57e817093aa6bf115c659b6d2cdb8273b'
      },
      {
        'title': 'JavaFX Tutorial 6',
        'src': '//www.youtube.com/embed/ZtemWZ5IQeM',
        'subheading': 'VMore feature for our ToDoapp - Tasks DB',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 7',
        'src': '//www.youtube.com/embed/eq5Sup5vFL4',
        'subheading': 'Insert Features for our App',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager/tree/afb1bfb6c2b5ca50755ac103cb66abdc55e93065'
      },
      {
        'title': 'JavaFX Tutorial 8',
        'src': '//www.youtube.com/embed/332b94pl6lg',
        'subheading': 'Remove and Organize features',
        'description': ''
      },
      {
        'title': 'JavaFX Tutorial 9',
        'src': '//www.youtube.com/embed/0yF3FYQ6P-c',
        'subheading': 'Edit Features',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager/tree/c0c843a1c477c8e212348dbca22141eda59f231d'
      },
      {
        'title': 'JavaFX Tutorial 10',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'Dialog Boxes and Wrap-Up',
        'description': 'https://github.com/nickincardone/Senior-Design-Task-Manager'
      }  /**,
      {
        'title': 'JavaFX Tutorial 11',
        'src': '//www.youtube.com/embed/arCkmFn0fo0',
        'subheading': 'fkdkf',
        'description': ''
      } */
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
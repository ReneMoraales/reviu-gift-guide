(function() {

  angular.module('ReviuGuide', ['firebase', 'duScroll']);

  angular
    .module('ReviuGuide')
    .controller('GuideCtrl', function($scope, $firebaseArray, $document, $window) {
      var ref = firebase.database().ref().child("picks");
      $scope.picks = $firebaseArray(ref);

      angular.element($window).bind("scroll", function() {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        var cardHeight = document.getElementById('guide-header').offsetHeight;
        console.log(top, cardHeight);
        if ( top >= cardHeight ) {
          $document.find('body').addClass('fixed-nav');
        } else {
          $document.find('body').removeClass('fixed-nav');
        }
      });
    });

})();
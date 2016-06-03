angular.module('starter.directives', ['ionic'])
.directive('ngCalculator', function(){
  return{
    restrict: 'E',
    templateUrl:'templates/keypad.html'
  }
})
.directive('ngWelcome', function(){
  return{
    restrict:'E',
    // require: '^ngknaye',
    templateUrl:'templates/welcome.html'
  }
})
.directive('ngKanye', function(){
  return{
    // transclude:true,
    restrict:"E",
    templateUrl:'templates/kanyeDisplay.html'
  }
})
.directive('ngOutputAnswer', function(){
  return{
    restrict:"E",
    // require:'^ngKanye',
    templateUrl:"templates/kanyeOutput.html"
  }
})
.directive('ngRest', function(){
  return{
    restrict: "E",
    templateUrl:"templates/kanyeRest.html"
  }
})

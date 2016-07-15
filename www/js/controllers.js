angular.module('starter.controllers', ['ionic'])
.controller('KeyboardCtrl', function($scope, calculatorService){
  $scope.answer="";
  $scope.keypress= function(stringKey){
    calculatorService.keypress(stringKey);
  }
  $scope.operator=function(stringOperator){
    calculatorService.operator(stringOperator);
  }
  $scope.equals=function(){
    calculatorService.equals();
  }
  $scope.clearMem=function(){
    calculatorService.clearMem();
  }
})
.controller('outputCtrl', function($scope, calculatorService, $ionicSlideBoxDelegate){
  // $ionicSlideBoxDelegate.
  $scope.cards=[];
  $scope.card={
    imgPath:"",
    quote:"",
    answer:null,
    theGuess:null,
    res:{
      guessProbability:null,
      bool:null
    },
    guess: function(){
      return Math.floor(Math.random()*20);
    },
    outcome: function(){
      this.res.guessProbability =Math.floor(Math.random()*32);
      this.res.bool = this.res.guessProbability >= 10;

    },
    determineResponse: function(){
      $scope.card.outcome();
      var success = $scope.card.res;
      this.quote=arrQuoteText[$scope.card.res.guessProbability][0];
      if($scope.card.res.bool){
        this.imgPath="img/happyKanye.png";
        this.answer=calculatorService._answer;
      }else{
        this.imgPath="img/kanyeConfused.png"
        this.answer="";
        this.theGuess=this.guess();
      }
    }

  }
  $scope.makeCard=function(){
    $scope.card.determineResponse();
    $scope.cards.push($scope.card);
    console.log($scope.cards);
    console.log($scope.cards.length);


  }
  $scope.updateSlider=function(){
    $ionicSlideBoxDelegate.update();
  }
  $scope.cardsIsNull=function(){
    return $scope.cards.length ==0;
  }
});
// .controller('soundCtrl', function($scope,sounds){
//   var getSounds = function() {
//         console.log('getSounds called');
//         Sounds.get().then(function(sounds) {
//             console.dir(sounds);
//             $scope.sounds = sounds;
//         });
//     }
//     $scope.play = function(x) {
//         console.log('play', x);
//         Sounds.play(x);
//     }
// })

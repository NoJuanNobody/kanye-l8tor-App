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
    // outputCtrl.makeCard();
  }
  $scope.clearMem=function(){
    calculatorService.clearMem();
  }
})
.controller('outputCtrl', function($scope, calculatorService, $ionicSlideBoxDelegate){
  $scope.cards=[];
  $scope.card={
    imgPath:"",
    quote:"",
    answer:null,
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
      this.quote=arrQuoteText[success.guessProbability][0];
      if(success.bool){
        this.imgPath="img/happyKanye.png";
        this.answer=calculatorService._answer;
      }else{
        this.imgPath="img/kanyeConfused.png"
        this.answer="";
      }
      console.log(this.imgPath);
      console.log(this.quote);
      console.log("probabiliy: "+this.res.guessProbability);
      console.log("guess: "+this.guess());
    }

  }
  $scope.makeCard=function(){
    $scope.cards.push($scope.card.determineResponse());
    console.log("cards "+$scope.cards.length);
    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.slide($scope.cards.length, 1000);
    $scope.card.imgPath="";
    $scope.quote="";
    $scope.answer=null;
    $scope.res={
      guessProbability:null,
      bool:null
    };
  }
  $scope.cardsIsNull=function(){
    return $scope.cards.length ==0;
  }
})

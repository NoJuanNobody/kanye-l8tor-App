angular.module('starter.services', ['ionic'])
  .service('calculatorService', function() {
    var _answer=null;
    var _equation = new Array();
    var _eqPart = {
      number: "",
      operand: ""
    };
    var _currentNumber = new Array();
    var display = {
      view: ""
    }

    this.keypress = function(stringKey) {
      _currentNumber.push(stringKey);

      if (document.getElementById('calculator-display').innerHTML.toUpperCase() == "TYPE SOMETHING") {
        document.getElementById('calculator-display').innerHTML = "";
      }
      document.getElementById('calculator-display').innerHTML += stringKey;
    }
    this.operator = function(stringOperator) {
      if (_currentNumber != "") {
        _answer=null;
        _eqPart.number = _currentNumber.join("");
        _eqPart.operand = stringOperator;
      }
      _equation.push(_eqPart);
      _currentNumber = new Array();
      _eqPart = {
        number: "",
        operand: ""
      }
      switch (stringOperator) {
        case '*':
          stringOperator = '&#xD7;';
          break;
        case "/":
          stringOperator = '&#xF7;';
          break;
        default:
          break;
      }
      document.getElementById('calculator-display').innerHTML += stringOperator;
    }
    this.concatEq = function() {
      if (_currentNumber != "") {
        _eqPart.number = _currentNumber.join("");
        _eqPart.operand = "";
      }
      _equation.push(_eqPart);
      var concatEquation = "";
      for (var i = 0; i <= _equation.length - 1; i++) {
        concatEquation += _equation[i].number + _equation[i].operand;
      }
      return concatEquation;
    }
    this.equals = function() {
      var equation = this.concatEq();
      this._answer=eval(equation);
      console.log(this._answer);
    }
    this.clearMem = function() {
      document.getElementById('calculator-display').innerHTML = "";
      _equation = new Array();
      _eqPart = {
        number: "",
        operand: ""
      }
      _currentNumber = new Array();
      _display = {
        view: ''
      }
    }
  });
// .factory("sounds", function(){
//   var getSounds = function() {
//         var deferred = $q.defer();
//         var sounds = [];
//
//         if(localStorage.mysoundboard) {
//             sounds = JSON.parse(localStorage.mysoundboard);
//         }
//         deferred.resolve(sounds);
//
//         return deferred.promise;
//     }
//   var playSound = function(x) {
//       getSounds().then(function(sounds) {
//           var sound = sounds[x];
//
//           /*
//           Ok, so on Android, we just work.
//           On iOS, we need to rewrite to ../Library/NoCloud/FILE'
//           */
//           var mediaUrl = sound.file;
//           if(device.platform.indexOf("iOS") >= 0) {
//               mediaUrl = "../Library/NoCloud/" + mediaUrl.split("/").pop();
//           }
//           var media = new Media(mediaUrl, function(e) {
//               media.release();
//           }, function(err) {
//               console.log("media err", err);
//           });
//           media.play();
//       });
//   }
//   return {
//     get:getSounds,
//     play:playSound
//   }
// })

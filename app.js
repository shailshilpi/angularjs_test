(function)(){
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController',function($scope){
$scope.name ="";
$scope.totalValue =0;
$scope.displayNumeric =function(){
  var totalNameValue =calculatenumericForString($scope.name);
  $scope.totalValue = totalNameValue;
};

function calculatenumericForString(string){
  var totalStringValue =0;
  for(var i =0 ;i<string.length;i++){
    totalStringValue+= string.char(i);
  }
  return totalStringValue;
}
});
})();

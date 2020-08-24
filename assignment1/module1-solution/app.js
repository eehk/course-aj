(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunch_menu = "";
  $scope.msg = "";

  $scope.checkItems = function () {
    var items = $scope.lunch_menu.split(',');
    $scope.msg = checkNumberOfItems(items);
    //$scope.msg = items;
  };

  function checkNumberOfItems(string) {
    var n = skipEmptyItems(string);
    if (n == 0)
      return "Please enter data first"
    else if (n < 4)
      return "Enjoy!"
    else
      return "Too much!"
  };

  function skipEmptyItems(string) {
    var n = 0;
    for(var i = 0; i < string.length; i++) {
      if (string[i] != "")
        n++;
    }
    return n;
  };

});

})();
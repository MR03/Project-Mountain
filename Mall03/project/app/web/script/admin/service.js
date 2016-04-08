angular.module('myApp.services', [])
.factory('usersService', function($http) {

        var usersaAllRequest = function(url) {
            return $http.get(url);
        }

        return {
            usersaAllRequest: usersaAllRequest
        };
});
'use strict';

angular.module('myApp.services', []).factory('usersService', function ($http) {

    var usersaAllRequest = function usersaAllRequest(url) {
        return $http.get(url);
    };

    return {
        usersaAllRequest: usersaAllRequest
    };
});
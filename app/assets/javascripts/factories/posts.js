angular.module('postsFactory', [])
       .factory('posts', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'posts.json'
      }).success(callback);
    }
  };
});

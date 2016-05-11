'use strict';

angular.module('rails4Mongoid', ['postsFactory'])
  .controller('PostsController', function ($scope, posts) {
    posts.list(function(posts) {
      $scope.posts = posts;
    });
  }
);

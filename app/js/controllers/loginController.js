angular.module('MetronicApp').controller('loginController', function($rootScope, $scope, $http, $timeout,$state) {
    /*$scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();
    });*/
    $scope.userName = "";
    $scope.password = "";
    $rootScope.loginPage = "login";
    // set sidebar closed and body solid layout mode
    /*$rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;*/
    $(function(){
    	$(".page-sidebar-wrapper").hide();
    	$(".page-header").hide();
    	$(".quick-nav").hide();
    	$(".page-toolbar").hide();
    })
    $scope.login = function(){
    	if($scope.userName == "admin" && $scope.password == "admin"){
    		$(".page-sidebar-wrapper").show();
    		$(".page-header").show();
    		$(".quick-nav").show();
    		$(".page-toolbar").show();
    		$(".loginArea").hide();
    		$(".page-container").show();
    		$state.go('adminDashboard');
    	}
    	if($scope.userName == "user" && $scope.password == "user"){
    		$state.go('userDashboard');
    		$(".page-sidebar-wrapper").show();
    		$(".page-header").show();
    		$(".quick-nav").show();
    		$(".page-toolbar").show();
    		$(".loginArea").hide();
    		$(".page-container").show();
    	}
    	//$rootScope.loginPage = "not";
    }
});
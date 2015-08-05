/// <reference path="../../typings/angularjs/angular.d.ts"/>

(function () {
	var userModel = {
		name : "Pablo Guillenea"
	}
	
	function testCtrl($mdDialog){
		var self = this;
		self.userModel = userModel;
		self.showAlert = function(ev) {
		    // Appending dialog to document.body to cover sidenav in docs app
		    // Modal dialogs should fully cover application
		    // to prevent interaction outside of dialog
		    $mdDialog.show(
		      $mdDialog.alert()
		        .parent(angular.element(document.body))
		        .title('This is an alert title')
		        .content('You can specify some description text in here.')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(ev)
		    );
		  };
	}
	
	
	
	angular
		.module("amdApp", ['ngMaterial'])
		.controller('testCtrl', testCtrl);
	
})();
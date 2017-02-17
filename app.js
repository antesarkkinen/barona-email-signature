var app = angular.module('App', ['ngAnimate']);

app.controller('emailCtrl', function($scope) {
	$scope.data = {
		someWebsite: '',
		someWebsiteUrl: '',
		someLinkedIn: '',
		someTwitter: '',
		someFacebook: '',
		someInstagram: ''
	};
});
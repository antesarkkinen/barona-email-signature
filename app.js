var app = angular.module('App', []);

app.controller('emailCtrl', function($scope) {
	$scope.data = {
		yourAddress: 'Töölönlahdenkatu 3B, 00100 Helsinki, Finland',
		someWebsite: '',
		someWebsiteUrl: '',
		someLinkedIn: '',
		someTwitter: '',
		someFacebook: '',
		someInstagram: ''
	};
});
(function () {
	'use strict'

	angular
		.module('starwars')
		.config(config);

	config.$inject = ['$routeProvider']

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				template: `<character category="'people'" id="4"></character>`
			})
			.when('/planets', {
				template: `<character category="'planets'" id="2"></character>`
			})
			.otherwise({
				redirectTo: '/'
			})
	}
})();

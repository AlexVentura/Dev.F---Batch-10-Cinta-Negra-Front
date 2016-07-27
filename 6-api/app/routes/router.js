(function () {
	'use strict'

	angular
		.module('clash')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				template: `<player id="574f2fd02d36dd0f00f651a7"></player>`
			})
			.when('/players', {
				template: `<player id="574f2fd02d36dd0f00f651a7"></player>`
			})
			.otherwise({
				redirectTo: '/'
			})
	}
})();

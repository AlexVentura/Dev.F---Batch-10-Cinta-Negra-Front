(function () {
	'use strict';

	var card =

	angular
		.module('palindromoApp', [])
		.component('card', card)
		.config(david)

		function david($routeProvider) {
			$routeProvider
				.when('/', {
					template: '<card></card>'
				})
				.when('/texto', {
					template: '<h1>texto</h1>'
				})
				.otherwise('/', {
					redirectTo: '/'
				})
		}

})();

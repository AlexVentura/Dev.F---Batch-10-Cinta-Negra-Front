(function () {
	'use strict'

	angular
		.module('clash')
		.factory('clashApi', clashApi);

	function clashApi($resource) {
		return $resource('http://www.clashapi.xyz/api/players/:id');
	}
})();

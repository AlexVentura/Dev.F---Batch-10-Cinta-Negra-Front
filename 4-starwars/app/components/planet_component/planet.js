(function () {
	'use strict'

	var planet = {
		bindings: {
			category: '=',
			id: '='
		},
		controller: planetsCtrl,
		templateUrl: 'app/components/planet_component/planet.html'
	}

	function planetsCtrl(starwarsApi) {
		var plan = this;

		plan.planets = starwarsApi.get({
			category: char.category,
			id: plan.id
		})
	}

	angular
		.module('starwars')
		.component('planet', planet)
})();

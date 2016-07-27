(function () {
	'use strict'

	angular
		.module('marvel')
		.directive('marvelComponent', marvelComponent);

	function marvelComponent() {
		var directive = {
			restrict: 'EA',
			templateUrl: "app/directives/marvel.html",
			controller: marverCtrl,
			controllerAs: 'hero',
			binToController: true,
		};

		return directive;
	}

	function marverCtrl(marvelData) {
		var marvel = this;

		marvel.superHeros = null;

		marvelData.get()
		.$promise
			.then(function (response) {
				marvel.superHeros = response.data.results;
				console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸', marvel.superHeros);
			});
	}
})();

(function () {
	'use strict'

	var esemero = {
		controller: pracCtrl,
		template: `
			<h1 style="color: red;">hola component</h1>
		`,
	}

	var lmxcard = {
		controller: pracCtrl,
		templateUrl: 'card.html',
	}

	angular
		.module('practica2', [])
		.component('eseMero', esemero)
		.component('lmxCard', lmxcard)

	function appController() {
		var prac = this;
	}

})();

(function () {
	'use strict'

	var header = {
		controller: headerCtrl,
		templateUrl: "app/components/header_component/header.html"
	}

	function headerCtrl() {
		var header = this;
	}

	angular
		.module('goodreads')
		.component('homeHeader', header);
})();

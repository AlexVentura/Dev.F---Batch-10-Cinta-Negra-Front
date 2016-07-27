(function () {
	'use strict'

	var slider = {
		controller: sliderCtrl,
		templateUrl: "app/components/slider_component/slider.html"
	}

	function sliderCtrl() {
		var slider = this;


	}

	angular
		.module('pracRoutes')
		.component('slider', slider);
})();

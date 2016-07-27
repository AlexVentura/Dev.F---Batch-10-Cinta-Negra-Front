(function () {
	'use strict'

	var signup = {
		controller: signupCtrl,
		templateUrl: "app/components/signup_component/signup.html"
	}

	function signupCtrl() {
		var signup = this;
	}

	angular
		.module('goodreads')
		.component('signup', signup);
})();

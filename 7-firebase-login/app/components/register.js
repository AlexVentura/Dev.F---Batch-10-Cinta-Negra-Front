(function(){
	'use strict'

	var register={
		controller:registerCtrl,
		templateUrl:"components/register.html"
	}

	function registerCtrl(Auth,$location){
		var registra=this;
		
		registra.register=function(){
			Auth.$createUser({
				email:registra.email,
				password:registra.password
			}).then(function(userData) {
				console.log('user created with uid',userData)
				$location.path('/')
			}).catch(function (error) {
				console.log(error)
			})
		}
	}

	angular
		.module('login')
		.component('register',register);

})();
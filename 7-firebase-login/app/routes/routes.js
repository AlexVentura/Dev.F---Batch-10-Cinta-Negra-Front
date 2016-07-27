(function(){
	'use strict'

	angular
		.module('login')
		.config(config);

		config.$inject=['$routeProvider'];

		function config($routeProvider){
			$routeProvider
			.when('/',{
				template:`<log></log>`
			})
			.when('/data',{
				template:`<list></list>`
			})
			.when('/agregar',{
				template:`<add></add>`
			})
			.when('/registrar',{
				template:`<register></register>`
			})
			.otherwise({
				redirectTo:"/"
			})
		}
})();
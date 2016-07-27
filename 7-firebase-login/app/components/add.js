(function(){
	'use strict'

	var add={
		controller:addCtrl,
		templateUrl:"components/add.html"
	}

	function addCtrl($firebaseArray){
		var agregar=this;
		var ref=new Firebase('https://practicabatch10.firebaseio.com/data');
		agregar.data=$firebaseArray(ref)
		agregar.add=add;

		function add(){

			agregar.data.$add({
				nombre:agregar.name,
				correo:agregar.email,
				message:agregar.text
			})
			agregar.name="";
			agregar.email="";
			agregar.text="";
		}
	}

	angular
		.module('login')
		.component('add',add);

		})();
(function(){
	'use strict'

	var list={
		controller:listCtrl,
		templateUrl:"components/list.html"
	}

	function listCtrl($firebaseArray){
		var lista=this;
		var ref=new Firebase('https://practicabatch10.firebaseio.com/data');
		lista.data=$firebaseArray(ref)

		$('.collapsible').collapsible({
           accordion : false
        });
	}

	angular
		.module('login')
		.component('list',list);

})();
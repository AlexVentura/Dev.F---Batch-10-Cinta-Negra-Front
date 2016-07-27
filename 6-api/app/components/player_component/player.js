(function () {
	'use strict'

	var player = {
		bindings: {
			id: '=',
			name: '=',
			maxExp: '='
		},
		controller: playerCtrl,
		templateUrl: 'app/components/player_component/player.html'
	}

	function playerCtrl(clashApi) {
		var player = this;

		player.players = clashApi.get({
			id: player._id,
			name: player.idName,
			maxExp: player.maxExp
		});

		console.log('▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸▸', player.players);
	}

	angular
		.module('clash')
		.component('player', player);
})();

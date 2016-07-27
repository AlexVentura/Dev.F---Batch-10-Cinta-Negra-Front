(function () {
	'use strict'

	var chat = {
		controller: chatCtrl,
		templateUrl: "app/components/chat_component/chat.html"
	}

	function chatCtrl(chatData) {
		var chat = this;

		chat.messages = chatData; // obtenemos la data de firebase
		chat.addMessage = addMessage; // funcion constructora para agregar data a firebase

		function addMessage() {
			chat.messages.$add({
				user: chat.user,
				message: chat.message
			});
			chat.message = "";
		}

	}

	angular
		.module('chat')
		.component('chat', chat);
})();

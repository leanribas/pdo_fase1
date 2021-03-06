define(function(){

return {
	$ui:{
		view: "submenu",
		id: "profilePopup",
		width: 200,
		padding:0,
		data: [
			{id: 1, icon: "user", value: "Meu Perfil"},
			{id: 2, icon: "lock", value: "Travar Tela"},			
			{ $template:"Separator" },
			{id: 4, icon: "sign-out", value: "Logout"}
		],
		type:{
			template: function(obj){
				if(obj.type)
					return "<div class='separator'></div>";
				return "<span class='webix_icon alerts fa-"+obj.icon+"'></span><span>"+obj.value+"</span>";
			}
		}

	}
};

});
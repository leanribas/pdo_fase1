define([	
	"views/menus/profile",
	"views/menus/sidebar",
	"views/webix/icon"
],function(profile, menu){

        webix.i18n.parseFormatDate = webix.Date.strToDate("%d/%m/%Y");

	//Top toolbar
	var mainToolbar = {
		view: "toolbar",
		height: 75,
                css: 'top-toolbar',
		elements:[
			{view: "label", label: "<img class='photo photo2' src='assets/imgs/logo.png' />", width: 56},
                        {
                          rows: [
                                {
                                    view:'label',
                                    label: 'Sistema Teste',
                                    css: 'title-header-system'
                                },
                                {
                                    view:'label',
                                    height:25,
                                    label: 'SIS',
                                    css:'sub-title-system'
                                }
                          ]
                        },        
                        {height: 60, id: "person_template", css: "header_person", borderless: true, width: 145, data: {id: 3, name: "Oliver Parr"},
                            template: function (obj) {
                                var html = "<div style='cursor:pointer; margin-top: 12px; height:100%;width:100%; vertical-align:middle' onclick='webix.$$(\"profilePopup\").show(this)'>";
                                html += "<img class='photo' src='assets/imgs/photos/" + obj.id + ".png' /><span class='name logged-name'>" + obj.name + "</span>";
                                html += "<span class='webix_icon fa-angle-down'></span></div>";
                                return html;                                
                            }
                        }

		]
	};

	var body = {
                type: 'clean',
		rows:[
			{ height: 49, id: "title", css: "title", borderless:true , template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>", data: {text: "",title: ""}},
			{
				view: "scrollview", scroll:"native-y",
				body:{ cols:[{ $subview:true}] }
			}
		]
	};

	var layout = {   
                id:"a5",
                rows: [
                    
                    {
                        
                        responsive:'a5',
                        rows:[
                                mainToolbar,
                                {
                                        type:'space',
                                        css:'main-body',
                                        cols:[
                                                {                                            
                                                    rows:[
                                                        {                                                    
                                                            height:51,                                                                                                        
                                                            cols:[
                                                                {
                                                                    template:'<div><span class="webix_icon_btn fa-bars" onclick="$$(\'app:menu\').toggle();"></span></div>',
                                                                    css: "app-button"
                                                                }                                                        

                                                            ]
                                                        },
                                                        menu
                                                    ]
                                                },
                                                body
                                        ]
                                }
                        ]                        
                        
                    }
                    
                    
                ]
                

                
		
	};

	return {
		$ui:layout,
		$menu:"app:menu",
		$oninit:function(view, scope){
			scope.ui(profile.$ui);
		}
	};
	
});
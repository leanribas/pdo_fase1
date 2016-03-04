webix.protoUI({
	name:"am-chart",
	defaults:{
		config:{},
		require: {
			charts: false,
			powercharts: false,
			widgets: false,
			gantt: false,
			maps: false
		}
	},
	$init:function(config){
		webix.delay(webix.bind(this._render_once, this));
	},
	_render_once: function(){
                webix.codebase = "./";
		webix.require("libs/amcharts/amcharts.js", webix.bind(function() {
		
			// require additional js files
			var requires = [this.config.config.type + ".js"];
//			for (var req in this.config.require) {
//				if (this.config.require[req]) {
//					requires.push(req + ".js");
//				}
//			}
			
			// require theme js files
			if (this.config.config.theme) {
				var themes = this.config.config.theme.split(",");
				for (var i in themes) {
					requires.push("themes/" + themes[i].trim() + ".js");
				}
			}
			
			var loadrequires = (function() {
				if (requires.length == 0) {
					var config = this.config.config;
					config.renderAt = this.$view;
					this.amcharts = new AmCharts.makeChart(this.$view,config);
				} else {
					var nreq = requires.shift();
					webix.require("libs/amcharts/" + nreq, webix.bind(loadrequires, this));
				}
			});
			
			loadrequires.call(this);
		}, this));
	},
	$setSize:function(x,y){
		if (webix.ui.view.prototype.$setSize.call(this,x,y)){
			if (this.amcharts) {
				//this.amcharts.resizeTo(this.$width, this.$height);
			}
		}
	},
	getChart:function(){
		return this.amcharts;
	},
}, webix.EventSystem, webix.ui.view );
/*
 * Jerry 2015-11-01 8:34AM 
 * http://scn.sap.com/community/fiori/blog/2015/10/28/how-i-do-self-study-on-a-given-fiori-control--part-9
 sap.ui.controller("buttontutorial.view.simple", { 
 */


sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller){
	"use strict";
	return Controller.extend("buttontutorial.view.simple",{
	onInit : function() {
	},
	
	onBeforeRendering: function() {
	},
	
	onPress: function(){
		var image = this.byId("jerryImage");
		this.loadImageWithProxy(image);
	},
	
	injectProxy: (function(){
		var imgCache = new Image();

        return function(img, src){
            imgCache.onload = function(){
            	debugger;
            	
        		img.setSrc(this.src);
            };
            // var oDom = img.getDomRef();
            img.setSrc("buttontutorial/view/loading.gif");
            // oDom.src = "http://localhost:9098/2014-12-30-FioriODataTest/buttontutorial/view/loading.gif";
            imgCache.src = src;
        };
	})(),
	loadImageNormal: function(){
		var image = this.byId("jerryImage");
		image.setSrc("https://cloud.githubusercontent.com/assets/5669954/24836808/7d78976e-1d58-11e7-9c28-2c76d90c9e12.png");
		debugger;
	}, 
	loadImageWithProxy: function(){
		var image = this.byId("jerryImage");
		this.injectProxy(image, "https://cloud.githubusercontent.com/assets/5669954/24836808/7d78976e-1d58-11e7-9c28-2c76d90c9e12.png");
    },
	onAfterRendering: function() {
		
		var oButton = this.getButtonReference();
		var oDom = oButton.getDomRef();
		jQuery.sap.require("sap.ui.core.theming.Parameters");
		oDom.style.color = sap.ui.core.theming.Parameters.get("sapUiAccent2");
		oDom.style.backgroundColor = sap.ui.core.theming.Parameters.get("sapUiErrorBG");
	},
	
	getButtonReference: function() {
		return this.getView().byId("jerryButton");
	}
  });}
);

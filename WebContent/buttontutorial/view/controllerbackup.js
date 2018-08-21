/*
 * Jerry 2015-11-01 8:34AM 
 * http://scn.sap.com/community/fiori/blog/2015/10/28/how-i-do-self-study-on-a-given-fiori-control--part-9
 sap.ui.controller("buttontutorial.view.simple", { */


sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller){
	"use strict";
	return Controller.extend("buttontutorial.view.simple",{
	onInit : function() {
		var oButton = this.getButtonReference();
		var oDom = oButton.getDomRef();
	},
	
	onBeforeRendering: function() {
		var oButton = this.getButtonReference();
		var oDom = oButton.getDomRef();
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

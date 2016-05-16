jQuery.sap.require("wenxin.util.tool");

sap.ui.jsview("wenxin.sapui5.MyView", {

	getControllerName : function() {
		return "wenxin.sapui5.MyView";
	},

	createContent : function(oController) {
		var myButton = new sap.ui.commons.Button("btn",{
			text: "press me~"
		});
		
		var handler = function(oEvent){
			oController.onPress(oEvent);
		};
		myButton.attachPress(wenxin.util.tool.methodHook(handler));
		
		return myButton;
	}

});

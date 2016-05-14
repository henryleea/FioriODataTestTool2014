sap.ui.jsview("wenxin.sapui5.MyView", {

	getControllerName : function() {
		return "wenxin.sapui5.MyView";
	},

	createContent : function(oController) {
		var myButton = new sap.ui.commons.Button("btn",{
			text: "press me~"
		});
		var myButton2 = new sap.ui.commons.Button("btn",{
			text: "press me~"
		});
		myButton.attachPress(function(){
			oController.onPress();
		});
		return myButton;
	}

});

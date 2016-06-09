jQuery.sap.require("wenxin.util.tool");

sap.ui.jsview("wenxin.sapui5.MyView", {

	getControllerName : function() {
		return "wenxin.sapui5.MyView";
	},

	createContent : function(oController) {
		// 
		var myButton = new sap.ui.commons.Button("btn",{});
		/* 2016-06-07 19:19PM add by Jerry to demonstrate how to implement
	     event handler for _change
		 */
		myButton.attachEvent("_change", function(oEvent){
			console.log("Hello， I am changed, new Value: " + oEvent.getParameter("newValue"));
		});
		
		// wenxin.util.tool.injectFireEvent();
		myButton.setText("Press me");
		
		var handler = function(oEvent){
			oController.onPress(oEvent);
		};
		myButton.attachPress(wenxin.util.tool.methodHook(handler));

		
		return myButton;
	}

});

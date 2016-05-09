
sap.ui.controller("tableautofix.JsonDemo", {
	
	onInit: function() {
		
	},
	onAfterRendering: function() {
		var oView = this.getView();
		var iCanvasHeight = oView.oTable.$().parent().height();
		debugger;
		var iRows = oView.oTable._calculateRowsToDisplay(iCanvasHeight);
		console.log("Jerry visible row: " + iRows );
	}
});
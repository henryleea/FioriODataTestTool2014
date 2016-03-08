sap.ui.jsview("rtl.view.App", {

	getControllerName: function () {
		return "rtl.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// this.app = new sap.m.SplitApp();
		this.app = new sap.m.App();
		
		var master = sap.ui.xmlview("Master", "rtl.view.Master");
		this.app.addPage(master, true);
		
		return this.app;
	}
});
jQuery.sap.declare("rtl.Component");

sap.ui.core.UIComponent.extend("rtl.Component", {

	createContent : function() {

		// create root view
		// Jerry 2015-02-18 14:02PM
		var oView = sap.ui.view({
			id : "app11", // Jerry test
			viewName : "rtl.view.App",
			type : "JS",
			viewData : { component : this, jerryTest: "Jerrytest" }
		});
		return oView;
	}
});
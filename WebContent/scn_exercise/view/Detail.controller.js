jQuery.sap.require("scn_exercise.util.Formatter");
jQuery.sap.require("sap.m.MessageBox"); 
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("scn_exercise.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},
	onBeforeRendering:function(){ 
		this.byId("SupplierForm").bindElement("BusinessPartner"); 
	},
	
	onInit: function() {
		
	},
	handleApprove : function (evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					var eventBus = sap.ui.getCore().getEventBus();
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					sap.m.MessageToast.show(successMsg);
					
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});
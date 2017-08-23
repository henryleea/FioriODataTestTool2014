jQuery.sap.require("scn_exercise.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("scn_exercise.view.Detail", {

	handleNavButtonPress : function(evt) {
		this.nav.back("Master");
	},
	onBeforeRendering : function() {
		this.byId("SupplierForm").bindElement("BusinessPartner");
	},

	onOrderApproved : function(sChannelId, sEventId, oData) {
		console.log("Channel id: " + sChannelId + " eventId: " + sEventId
				+ " event parameter: " + oData);
	},
	onInit : function() {
		var eventBus = sap.ui.getCore().getEventBus();
		eventBus.subscribe("jerry.sap", "OrderApproved", this.onOrderApproved,
				this);
	},

	formatAttribute : function (sValue) {
		jQuery.sap.require("sap.ui.core.format.FileSizeFormat");
		if (jQuery.isNumeric(sValue)) {
			return sap.ui.core.format.FileSizeFormat.getInstance({
				binaryFilesize : false,
				maxFractionDigits : 1,
				maxIntegerDigits : 3
			}).format(sValue);
		} else {
			return sValue;
		}
	},
	
	onUploadComplete : function(oEvent) {
		debugger;
		var oData = this.getView().byId("UploadCollection").getModel()
				.getData();
		var aItems = jQuery.extend(true, {}, oData).items;
		var oItem = {};
		var sUploadedFile = oEvent.getParameter("files")[0].fileName;
		// at the moment parameter fileName is not set in IE9
		if (!sUploadedFile) {
			var aUploadedFile = (oEvent.getParameters().getSource()
					.getProperty("value")).split(/\" "/);
			sUploadedFile = aUploadedFile[0];
		}
		oItem = {
			"documentId" : jQuery.now().toString(), // generate Id,
			"fileName" : sUploadedFile,
			"mimeType" : "",
			"thumbnailUrl" : "",
			"url" : "",
			"attributes" : [ {
				"title" : "Uploaded By",
				"text" : "You"
			}, {
				"title" : "Uploaded On",
				"text" : new Date(jQuery.now()).toLocaleDateString()
			}, {
				"title" : "File Size",
				"text" : "505000"
			} ]
		};

		if (this.getView().byId("modeSwitch").getState()) {
			oItem.visibleEdit = false;
			oItem.visibleDelete = false;
		} else {
			oItem.visibleEdit = true;
			oItem.visibleDelete = true;
		}
		aItems.unshift(oItem);
		this.getView().byId("UploadCollection").getModel().setData({
			"items" : aItems
		});
		// Sets the text to the label
		this.getView().byId("attachmentTitle").setText(
				this.getAttachmentTitleText());
		// delay the success message for to notice onChange message
		setTimeout(function() {
			MessageToast.show("UploadComplete event triggered.");
		}, 4000);
	},

	onSeparatorsChange : function(oEvent) {
		var oUploadCollection = this.getView().byId("UploadCollection");
		oUploadCollection.setShowSeparators(oEvent.getParameters().selectedItem
				.getProperty("key"));
	},
	handleApprove : function(evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(bundle.getText("ApproveDialogMsg"), function(
				oAction) {
			if (sap.m.MessageBox.Action.OK === oAction) {
				var eventBus = sap.ui.getCore().getEventBus();
				eventBus.publish("jerry.sap", "OrderApproved", {
					"name" : "Jerry"
				});
				var successMsg = bundle.getText("ApproveDialogSuccessMsg");
				sap.m.MessageToast.show(successMsg);

			}
		},

		bundle.getText("ApproveDialogTitle"));
	},

	handleLineItemPress : function(evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});
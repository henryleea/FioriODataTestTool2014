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
	
	bindAttachment: function(){
		var data = {
				OpportunityAttachments: []
			};
		var length = 2;
			for (var i = 0; i < length; i++) {
                
				var value = {
					Name: "File Name" + i,
					CreatedBy: "Contributor" + i,
					MimeType: "txt",
					DocumentId: "123",
					CreatedAt: new Date(1503484205000) // "/Date(1503484205000)/"
				};
				
				var o = {
					name: value.Name,
					uploadedDate: value.CreatedAt,
					contributor: value.CreatedBy,
					fileExtension: value.MimeType,
					fileId: value.DocumentId,
					size: 100
				};
				data.OpportunityAttachments.push(o);
			}

			this.byId('fileupload').setModel(new sap.ui.model.json.JSONModel(data));
			
			var oFileUploadCol = this.byId("fileupload");
			if(oFileUploadCol) {
			
				if(!oFileUploadCol.getBindingInfo("items")) {
					var oFileUploadItem = new sap.m.UploadCollectionItem({
				          contributor : "{contributor}",
					      documentId : "{fileId}",
					      fileName : "{name}",
					      fileSize : "{size}",
					      mimeType : "{fileExtension}",
					      thumbnailUrl : "",
					      uploadedDate : "{path: 'uploadedDate', type: 'sap.ui.model.type.Date', formatOptions: { style: 'medium'}}",
					      url : "{url}",
					      enableEdit : true,
					      enableDelete : true,
					      visibleEdit :  true,
					      visibleDelete :true
					});
					
					
					oFileUploadCol.bindAggregation("items", {
						path : "/OpportunityAttachments",
						template : oFileUploadItem,
						sorter : new sap.ui.model.Sorter("uploadedDate", true, false)
					}); 
				}
			}
	}, 
	onUploadComplete : function(oEvent) {
		debugger;
		this.bindAttachment();
		
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
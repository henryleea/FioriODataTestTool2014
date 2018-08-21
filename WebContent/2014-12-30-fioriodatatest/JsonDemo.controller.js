jQuery.sap.require("2014-12-30-fioriodatatest.reuselib.reuse");
jQuery.sap.require("2014-12-30-fioriodatatest.util.schema");

sap.ui.controller("2014-12-30-fioriodatatest.JsonDemo", {

	ODATA_BASEURL:"/sap/opu/odata/sap/CRM_OPPORTUNITY/",
	
	onInit: function() {
<<<<<<< HEAD
		// debugger;
		
		// this.readviaPromise().then(this.renderResultInUI);
		
		this.normalRead();
		
		// this.readViaES2017();
=======
		//this.testNoteDelete();
		//this.testNoteRead();
		this.testFilter();
>>>>>>> gh-pages
	},
	
	/* Jerry 2017-06-11 4:27PM
	 * cannot support for the moment 
	readViaES2017: function(){
		function issueRequest(){
			var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
			var oConfig = { json: true, loadMetadataAsync: false };
			var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
				
			oModel.read( sPath, null, null, true, function(odata, response) {
				return response;
			});
		}
		const makeRequest = async function(){
			
			  //this.renderResultInUI(await issueRequest());
		};
		makeRequest();
	},
	*/
	
	renderResultInUI:function(response){
		console.log("Jerry Render response: " + response.body.length);
	}, 
	
	normalRead: function(){
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		this.sPath = "Opportunities?$skip=0&$top=20&$filter=substringof(%27Jerry%27,Description)&$select=Guid%2cId%2cDescription%2cClosingDate%2cExpectedSalesVolume%2cCurrencyCode%2cProspectNumber%2cProspectName%2cUserStatusCode%2cUserStatusText&$inlinecount=allpages&sap-client=001";
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		
		oModel.read( this.sPath, null, null, true,
			jQuery.proxy(function(odata, response) {
				this.renderResultInUI(response);
			},this));
	}, 
	readviaPromise: function(){
		var sPath = "Opportunities?$skip=0&$top=20&$filter=substringof(%27Jerry%27,Description)&$select=Guid%2cId%2cDescription%2cClosingDate%2cExpectedSalesVolume%2cCurrencyCode%2cProspectNumber%2cProspectName%2cUserStatusCode%2cUserStatusText&$inlinecount=allpages&sap-client=001";
		/*
		 * Jerry: 2017-06-11 14:54PM oModel.read signature is fixed so that
		 * I cannot redesign it via promise? */
		return (function issueRequest(){
			var p = new Promise(function(resolve, reject){
				var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
				var oConfig = { json: true, loadMetadataAsync: false };
				var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
				
				oModel.read( sPath, null, null, true, function(odata, response) {
					resolve(response);
				});
		    });
		    return p;   
		})();
	}, 
	testOppheaderUpdate: function() {
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		var oConfig = { json: true, loadMetadataAsync: false };
		this.oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		this.sBackendVersion = SchemaUtil._getServiceSchemaVersion(this.oModel,
			"Opportunity");	 
		this.sPath = Opp_GUID_5576QHD504;
		
		this.oModel.clearBatch();
		var nBackendVersion = parseFloat(this.sBackendVersion);
	    var oETag = null;
	    // hard code ETAG
	    var tag = "W/" + "\"" + "'F8473B351669B7222ABB93C923227B5639D2E9A5'" + "\"";
	    if(nBackendVersion >= 4.0) {
			oETag = {sETag : tag};
		}
	    else{
	    	console.log("backend not available!!!");
	    }
	    this.requestNumber = 0;
		this.bBasketUpdate = false;
		var changeSet = []; 
		var headerGuid = "FA163EEF-573D-1EE4-A0DA-B5AB963752D5"; // 888 in AG3/001
		var entry = {
				Guid : headerGuid,
				Description: "Jerry"
		};
		var batchOperation = this.oModel.createBatchOperation("Opportunities(guid'"+headerGuid+"')","MERGE",entry,oETag);
		
		changeSet.push(batchOperation);
		this.oModel.addBatchChangeOperations(changeSet);
		var x = this.oModel.submitBatch(function(oResponses){
			console.log("response: " + oResponses);
		},
		function(oError){
			console.log("error: " + oError);						
		});
	},
	
	testNoteUpdate: function() {
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		var Opp_GUID_5576QHD504 = "Opportunities(guid'3440B5B1-73AE-1EE4-A2B1-7DA4E5BD5129')";
		var oConfig = { json: true, loadMetadataAsync: false };
		this.oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		this.sBackendVersion = SchemaUtil._getServiceSchemaVersion(this.oModel,
			"Opportunity");	 
		this.sPath = Opp_GUID_5576QHD504;
		
		this.oModel.clearBatch();
		var nBackendVersion = parseFloat(this.sBackendVersion);
	    var oETag = null;
	    // hard code ETAG
	    var tag = "W/" + "\"" + "'20150120084735'" + "\"";
	    
	    var newTag;
	    if(nBackendVersion >= 4.0) {
			oETag = {sETag : tag};
		}
	    else{
	    	console.log("backend not available!!!");
	    }
	    this.requestNumber = 0;
		this.bBasketUpdate = false;
		var changeSet = []; 
		var headerGuid = "3440B5B1-72DE-1ED4-A2D1-EE7101F391CB"; // 2025 in AG3/001
		var entry = {
				HeaderGuid : headerGuid,
				Content: "Jerry"
		};
		var noteType = "A002";
		var language = "ZH";
		var updatePath = "/Opportunities(guid'" + headerGuid + "')" + "/OpportunityComplexNotesSet("
        + "TextObjectID='" + noteType + "',TextLanguageID='" + language + "')";

		var newPath = "/OpportunityComplexNotesSet(HeaderGuid=guid'" + headerGuid + "',TextObjectID='" + 
		noteType + "'" + ",TextLanguageID='" + language + "')";
		// name must be entitySet: OpportunityComplexNotesSet
		//var batchOperation = this.oModel.createBatchOperation(newPath,"MERGE",entry,oETag);
		var batchOperation = this.oModel.createBatchOperation(newPath,"MERGE",entry, oETag);
		
		changeSet.push(batchOperation);
		this.oModel.addBatchChangeOperations(changeSet);
		var x = this.oModel.submitBatch(function(oResponses){
			console.log("response: " + oResponses);
		},
		function(oError){
			console.log("error: " + oError);						
		});
	},
	sendRequestInLoop: function(){
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		this.sPath = "Opportunities?$skip=0&$top=20&$filter=substringof(%27Jerry%27,Description)&$select=Guid%2cId%2cDescription%2cClosingDate%2cExpectedSalesVolume%2cCurrencyCode%2cProspectNumber%2cProspectName%2cUserStatusCode%2cUserStatusText&$inlinecount=allpages&sap-client=001";
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		
		for( var i = 0; i < 10; i++) {
			oModel.read( this.sPath, null, null, true,
				jQuery.proxy(function(odata, response) {
					console.log("OData response: " + response.body.length);
				},this),
				jQuery.proxy(function(oError){
					console.error("OData error occurred: " + oError);
				},this));
		}
	},
	
	testNoteRead: function () {
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
<<<<<<< HEAD
		var Opp_GUID_5576QHD504 = "Opportunities(guid'FA163EE5-6C3A-1ED6-9DC1-A73EEF634C10')";
=======
		var Opp_GUID_5576QHD504 = "Opportunities(guid'3440B5B1-73AE-1ED4-8D89-9796FCC30B06')";
>>>>>>> gh-pages
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		this.sPath = Opp_GUID_5576QHD504;
		
		var controller = this;
		for( var i = 0; i < 100; i++){
		oModel.read(
				this.sPath,
				null,
				[ "$expand=ComplexNotes" ],
				true,
				jQuery.proxy(function(odata, response) {
<<<<<<< HEAD
					console.log("OData response: " + response.body);
					var view = controller.getView();
=======
					// response.body is a json stream
					// console.log("OData response: " + response.body);
					console.log("Odata request finished successfully");
					var view = controller.getView(); 
					
					var oTableModel = view.oTableModel;
					var oData = oTableModel.oData;
			        oData.OpportunityNotesSet = response.data.ComplexNotes.results;
					oTableModel.updateBindings();
					//jQuery.sap.JerryTrace("2015-01-01");
				
				},this),
				jQuery.proxy(function(oError){
					
					console.error("OData error occurred: " + oError);
				},this));
		}
	},
	
	testFilter: function () {
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		var Opp_GUID_5576QHD504 = "/Opportunities?$skip=0&$top=20&$filter=substringof(%27sept%27,Description)&$select=Guid%2cId%2cDescription%2cClosingDate%2cExpectedSalesVolume%2cCurrencyCode%2cProspectNumber%2cProspectName%2cUserStatusCode%2cUserStatusText&$inlinecount=allpages&sap-client=001";
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		this.sPath = Opp_GUID_5576QHD504;
		
		var controller = this;
		for( var i = 0; i < 100; i++){
		oModel.read(
				this.sPath,
				null,
				//[ "$expand=ComplexNotes" ],
				null,
				true,
				jQuery.proxy(function(odata, response) {
					// response.body is a json stream
					// console.log("OData response: " + response.body);
					console.log("Odata request finished successfully");
					var view = controller.getView(); 
>>>>>>> gh-pages
					
					var oTableModel = view.oTableModel;
					var oData = oTableModel.oData;
			        oData.OpportunityNotesSet = response.data.ComplexNotes.results;
					oTableModel.updateBindings();
					//jQuery.sap.JerryTrace("2015-01-01");
				
				},this),
				jQuery.proxy(function(oError){
					
					console.error("OData error occurred: " + oError);
				},this));
		}
	},

	testNoteDelete: function () {
		var baseURL = "/sap/opu/odata/sap/CRM_OPPORTUNITY/";
		var Opp_GUID_5576QHD504 = "Opportunities(guid'3440B5B1-72DE-1ED4-A2D1-EE7101F391CB')";
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(baseURL, oConfig);
		
		var noteType = "A002";
		var language = "EN";
		var headerGuid = "3440B5B1-72DE-1ED4-A2D1-EE7101F391CB";
		var deletePath = "/OpportunityComplexNotesSet("
            + "HeaderGuid=guid'" + headerGuid + "',TextObjectID='" + noteType + "',TextLanguageID='" + language + "')";

		var oEntry = {
                HeaderGuid : headerGuid,
                TextLanguageID : language,
                TextObjectID : noteType
          };

	    // hard code ETAG
	    var tag = "W/" + "\"" + "'20150121064817'" + "\"";
	    var oETag = null;
		oETag = {sETag : tag};
	    
		this.sPath = deletePath;
		
		var parameter = {
			oContext: null,
			fnSuccess: function() {
				console.log("delete successful");
			},
			fnError: function() {
				console.log("delete failed");
			},
			sETag: tag
		};
		oModel.remove(this.sPath, parameter);
	},
	
	testBackendSearch:function () {

		var Opp_Search_5576QHD504 = "Opportunities?$skip=0&$top=1&$filter=substringof(%275576%27,Description)";
		var oConfig = { json: true, loadMetadataAsync: false };
		var oModel = new sap.ui.model.odata.ODataModel(this.ODATA_BASEURL, oConfig);
		this.sPath = Opp_Search_5576QHD504;
		oModel.read(
				this.sPath,
				null,
				null,
				true,
				jQuery.proxy(function(odata, response) {
					// response.body is a json stream
					console.log("OData response: " + response.body);
				},this),
				jQuery.proxy(function(oError){
					console.error("OData error occurred: " + oError);
				},this));
	},
	
	testBatchRequest: function() {
		var Opp_batch_5576QHD504 = "Opportunities(guid'3440B5B1-73AE-1EE4-A2B1-7DA4E5BD5129')";
		var oConfig = { json: true, loadMetadataAsync: false };
		this.oModel = new sap.ui.model.odata.ODataModel(this.ODATA_BASEURL, oConfig);
		
		this.sPath = Opp_batch_5576QHD504;
		this.oModel.clearBatch();
		this.oModel.addBatchReadOperations([this.oModel.createBatchOperation(this.sPath + "?$expand=ChangeDocs,Competitors,OpportunityLogSet","GET")]);
        this.oModel.addBatchReadOperations([this.oModel.createBatchOperation(this.sPath + "/Products","GET")]);

        this.oModel.submitBatch(jQuery.proxy(function(aResponses) {
        	console.log("Response: " + aResponses.__batchResponses.length );
        },this),
        
        jQuery.proxy( function() {
        	console.log("error occurred during batch request");
        },this))
	}
});
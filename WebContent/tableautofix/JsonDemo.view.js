

sap.ui.jsview("tableautofix.JsonDemo", {

	getControllerName : function() {
		return "tableautofix.JsonDemo";
	},
	
	createTable: function() {

        var oTable = new sap.ui.table.Table({
               title : "Opportunity notes",
               visibleRowCountMode : sap.ui.table.VisibleRowCountMode.Auto
        });
        
        var oCreatorColumn = new sap.ui.table.Column({
            label : new sap.ui.commons.Label({ text : "Creator"}),
            template: new sap.ui.commons.TextView({
    					text: {
    						path : "Creator", 
    						formatter : function dateShort(name){
    							var newName = "(" + name + ")";
    							 return newName;
    						},
    					},
    				}),
            sortProperty: "Creator",       
            filterProperty: "Creator",
            width : "100px" });
        oTable.addColumn(oCreatorColumn);
        
        // Second column 
        oTable.addColumn(new sap.ui.table.Column({
               label : new sap.ui.commons.Label({
                     text : "Created Time"
               }),
               template : new sap.ui.commons.TextView().bindProperty("text",
                            "CreatedAt"),
               width : "100px"
        }));

        // Third column 
        var sortedColumn = new sap.ui.table.Column({
            label : new sap.ui.commons.Label({
                text : "Content"
          }),
          template : new sap.ui.commons.TextView().bindProperty("text", "Content"),
          sortProperty: "Content",       
          filterProperty: "Content",    
          width : "100px" });
        oTable.addColumn(sortedColumn);
        
        return oTable;
	},
	
	createSampleData: function() {
		
		var NUM = 1;
		var sample = {
				OpportunityNotesSet: {
				}
		};
		sample.OpportunityNotesSet = [];

		for( var i = 0 ; i < NUM; i++){
			var object = {
					Creator: "Jerry" + i,
					CreatedAt: "2016",
					Content: "Test"
			};
			sample.OpportunityNotesSet.push(object);
		}
		return sample;
	},
	createTableJsonModel:function() {
		
		this.oTableModel = new sap.ui.model.json.JSONModel(this.createSampleData());
		return this.oTableModel;
	},
	
	createContent : function(oController) {

         this.oTable = this.createTable();
         var oTable = this.oTable;
         var oTableModel = this.createTableJsonModel();
         oTable.setModel(oTableModel);
         oTable.bindRows("/OpportunityNotesSet");
         oTable.setMinAutoRowCount(1);
         var oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
        	 content:[oTable]
         });
         // oLayout.placeAt("content");
         oTable.placeAt("content");
	}
});

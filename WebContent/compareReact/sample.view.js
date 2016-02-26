sap.ui.jsview("compareReact.sample", {
	_NUMBER: 100,
	_textAreas: [],
	
	getControllerName : function() {
		return "compareReact.sample";
	},

	createContent : function(oController) {

		var that = this;
		var oInput1 = new sap.ui.commons.TextField('input1');
		oInput1.setValue("Hello!");
		oInput1.attachLiveChange(function(event){
			// console.log('Text changed to :'+ oInput1.getValue());
			for( var i = 0; i < that._NUMBER; i++){
					that._textAreas[i].setValue(event.getParameter("liveValue"));
			}
			}
		);
		this.oLayout = new sap.ui.layout.VerticalLayout("Layout1", {
        	 content:[oInput1]
        });
		
		for( var i = 0; i < this._NUMBER; i++){
			var oInput = new sap.ui.commons.TextArea('text' + i);
			this.oLayout.addContent(oInput);
			this._textAreas.push(oInput);
		}
		return this.oLayout;
	}
});

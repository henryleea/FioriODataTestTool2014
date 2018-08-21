jQuery.sap.declare("wenxin.util.tool");

wenxin.util.tool = {
	display: function(){
		debugger;
	},
	_alertNoDebugger : function() {

		if (this._bAlertNoDebugger) {
			return; // show alert only one time
		}

		var text = "Please open your debugger.";

		this._bAlertNoDebugger = true;
		/*eslint-disable no-alert */
		alert("There is no debugger attached.\n\n" + text);
		/*eslint-enable no-alert */
	},
	
	injectFireEvent: function(){
		var oldFn = EventProvider.prototype.fireEvent;

		EventProvider.prototype.fireEvent = function(sEventId, mParameters, bAllowPreventDefault, bEnableEventBubbling) {

		    oldFn.call(this, sEventId, mParameters, bAllowPreventDefault, bEnableEventBubbling);
		};
	},
	methodHook:function(method) {
		var that = this;

		return function() {

			var time = (new Date()).getTime();

			/*eslint-disable no-debugger */
			debugger;
			/*eslint-enable no-debugger */

			if ((new Date().getTime()) - time < 50) {
				that._alertNoDebugger();
			}

			// Step into the statement below
			return method.apply(this, arguments);
		};
	}
};
var Reflux=require("reflux");
var actions=require("./actions");
var SelectStore=Reflux.createStore({
	listenables:actions
	,data:[]
	,onDoSearch:function(str) {
		this.trigger(str); 
	}
});

module.exports=SelectStore;
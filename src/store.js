var Reflux=require("reflux");
var actions=require("./actions");
var dictdata=require("./gugu_dict");
var store=Reflux.createStore({
	listenables:actions
	,data:[]
	,onShowDef:function(termpos) {
		var def=dictdata[termpos].tdefinitions[0].tdef;
		this.trigger(def); 
	}
});

module.exports=store;
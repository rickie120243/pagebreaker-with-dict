var React=require("react");
var Reflux=require("reflux");
var search=require("./search");
var actions=require("./actions");
var selectstore=require("./selectstore");
var styles={
	item:{textDecoration:"underline",
	"cursor":"pointer"}
}
var TermSearch=React.createClass({
	mixins:[Reflux.listenTo(selectstore,"onStore")]
	,getInitialState:function() {
		return {
			tofind:""
			,matches:[" term1"," term2"]
		};
	}
	,showdef:function(e) {
		var termpos=e.target.dataset.idx;
		actions.showDef(termpos);
	}
	,renderItem : function(item) {
		return <div 
		style={styles.item} onClick={this.showdef} data-idx={item[1]}>{item[0]}</div>
	}
	,onStore:function(str) {
		this.setState({tofind:str});
	}
	,search:function() {
		var matches=search(this.state.tofind);
		this.setState({matches:matches});
	}
	,oninput:function() {
//		this.setState({tofind:e.target.value});
		console.log(this.state.tofind);
		clearTimeout(this.timer);
		this.timer=setTimeout(function(){
			this.search();
		}.bind(this),500);
	}
	,render : function() {
		return <div>
			{this.oninput()}
			{this.state.tofind}
			{this.state.matches.map(this.renderItem)}
		</div>
	}
});
module.exports=TermSearch;
var dictdata=require("./dict");
var search=function(tofind) {
	var out=[];
	if(tofind.length<1) return out;
	for (var i=0;i<dictdata.length;i++) {
		var entry=dictdata[i].entry;
		if (~entry.indexOf(tofind)) out.push([entry,i]);
	}
	return out;
}
module.exports=search;
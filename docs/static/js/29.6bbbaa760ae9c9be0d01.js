(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1061:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},count:{type:"PropTypes.number",desc:"The total of data.",default:"0"},page:{type:"PropTypes.number",desc:"The valid page.",default:"0"},total:{type:"PropTypes.number",desc:"The page count.",default:"0"},pageSize:{type:"PropTypes.number",desc:"The number of per page.",default:"10"},pageSizes:{type:"PropTypes.array",desc:"The array of pageSize.",default:"[5, 10, 15, 20]"},selectedCount:{type:"PropTypes.number",desc:"The total count of selected.",default:"0"},selectedCountVisible:{type:"PropTypes.bool",desc:"If true,the selectedCount will show.",default:"false"},pageSizeVisible:{type:"PropTypes.bool",desc:"If false, the pageSize choice box will not show.",default:"true"},paggingPrevIconCls:{type:"PropTypes.string",desc:"Use this property to set prev button icon.",default:"fas fa-angle-left"},paggingNextIconCls:{type:"PropTypes.string",desc:"Use this property to set next button icon.",default:"fas fa-angle-right"},onChange:{type:"PropTypes.func",desc:"Callback function fired when Pagging component change."}}},1272:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return S});var n=t(55),r=t.n(n),s=t(14),l=t.n(s),p=t(9),i=t.n(p),o=t(13),c=t.n(o),g=t(7),d=t.n(g),u=t(8),h=t.n(u),f=t(1),m=t.n(f),y=t(990),v=t(921),b=t(920),P=t(29),x=t(918),T=t(1061),S=function(e){function a(e){i()(this,a);var t=d()(this,(a.__proto__||l()(a)).call(this,e));return t.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],t.state={pagging:{pageSize:10,page:0}},t.pageChangedHandler=t.pageChangedHandler.bind(t),t.generateData=t.generateData.bind(t),t}return h()(a,e),c()(a,[{key:"generateData",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,a=[],t=0;t<e;t++)a.push({id:t,name:"firstName"+t});return a.length}},{key:"pageChangedHandler",value:function(e){var a=this;"object"===r()(e.pageSize)&&(e.pageSize=e.pageSize.value),this.setState({pagging:e},function(){a.resetPage(a.generateData(100),e)})}},{key:"resetPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.generateData(100),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.pagging,t=a.page,n=a.pageSize,r=Math.ceil(e/n);t+1>r&&this.setState({pagging:{pageSize:n,page:P.a.range(r-1,0)}})}},{key:"render",value:function(){var e=this.state.pagging,a=Math.ceil(this.generateData()/e.pageSize);return m.a.createElement("div",{className:"example brief-pagging-examples"},m.a.createElement("h2",{className:"example-title"},"BriefPagging"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"BriefPagging")," element used for dividing long list, each time only loads a page."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(v.a,null,m.a.createElement(b.a,{className:"example-header",title:"With selectedCountVisible"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,"A simple ",m.a.createElement("code",null,"BriefPagging")," example."),m.a.createElement(y.a,{selectedCountVisible:!0,page:e.page,count:this.generateData(),total:a,pageSize:e.pageSize,pageSizes:this.pageSizes,onChange:this.pageChangedHandler}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(x.a,{data:T}))}}]),a}(f.Component)},916:function(e,a,t){(e.exports=t(134)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},917:function(e,a,t){var n=t(916);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(133)(n,r);n.locals&&(e.exports=n.locals)},918:function(e,a,t){"use strict";var n=t(6),r=t.n(n),s=t(14),l=t.n(s),p=t(9),i=t.n(p),o=t(13),c=t.n(o),g=t(7),d=t.n(g),u=t(8),h=t.n(u),f=t(1),m=t.n(f),y=t(0),v=t.n(y),b=t(919),P=(t(917),function(e){function a(e){i()(this,a);var t=d()(this,(a.__proto__||l()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return h()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return m.a.createElement("div",{className:"prop-type-desc-table-wrapper"},m.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(f.Component));P.propTypes={data:v.a.object},P.defaultProps={data:null},a.a=P}}]);
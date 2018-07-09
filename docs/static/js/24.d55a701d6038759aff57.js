(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{424:function(e,t,a){(e.exports=a(184)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},425:function(e,t,a){var n=a(424);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(183)(n,r);n.locals&&(e.exports=n.locals)},426:function(e,t,a){"use strict";var n=a(10),r=a.n(n),s=a(112),p=a.n(s),l=a(111),o=a.n(l),i=a(110),g=a.n(i),c=a(109),u=a.n(c),d=a(108),f=a.n(d),h=a(0),m=a.n(h),y=a(427),v=(a(425),function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||p()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),g()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return m.a.createElement("div",{className:"prop-type-desc-table-wrapper"},m.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(h.Component));v.defaultProps={data:null},t.a=v},615:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},count:{type:"PropTypes.number",desc:"The total of data.",default:"0"},page:{type:"PropTypes.number",desc:"The valid page.",default:"0"},total:{type:"PropTypes.number",desc:"The page count.",default:"0"},pageSize:{type:"PropTypes.number",desc:"The number of per page.",default:"10"},pageSizes:{type:"PropTypes.array",desc:"The array of pageSize.",default:"[5, 10, 15, 20]"},selectedCount:{type:"PropTypes.number",desc:"The total count of selected.",default:"0"},selectedCountVisible:{type:"PropTypes.bool",desc:"If true,the selectedCount will show.",default:"false"},pageSizeVisible:{type:"PropTypes.bool",desc:"If false, the pageSize choice box will not show.",default:"true"},paggingPrevIconCls:{type:"PropTypes.string",desc:"Use this property to set prev button icon.",default:"fas fa-angle-left"},paggingNextIconCls:{type:"PropTypes.string",desc:"Use this property to set next button icon.",default:"fas fa-angle-right"},paggingFirstIconCls:{type:"PropTypes.string",desc:"Use this property to set first button icon.",default:"fas fa-angle-double-left"},paggingLastIconCls:{type:"PropTypes.string",desc:"Use this property to set last button icon.",default:"fas fa-angle-double-right"},paggingCountRenderer:{type:"PropTypes.func"},onChange:{type:"PropTypes.func",desc:"Callback function fired when Pagging component change."}}},851:function(e,t,a){"use strict";a.r(t);var n=a(113),r=a.n(n),s=a(112),p=a.n(s),l=a(111),o=a.n(l),i=a(110),g=a.n(i),c=a(109),u=a.n(c),d=a(108),f=a.n(d),h=a(0),m=a.n(h),y=a(556),v=a(428),b=a(429),P=a(426),T=a(615),x=a(446),S=function(e){function t(e){o()(this,t);var a=u()(this,(t.__proto__||p()(t)).call(this,e));return a.generateData=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],a=0;a<e;a++)t.push({id:a,name:"firstName"+a});return t.length},a.pageChangedHandler=function(e){"object"===r()(e.pageSize)&&(e.pageSize=e.pageSize.value),a.setState({pagging:e},function(){a.resetPage(a.generateData(100),e)})},a.resetPage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.generateData(100),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.pagging,n=t.page,r=t.pageSize,s=Math.ceil(e/r);n+1>s&&a.setState({pagging:{pageSize:r,page:x.a.range(s-1,0)}})},a.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],a.state={pagging:{pageSize:30,page:0}},a}return f()(t,e),g()(t,[{key:"render",value:function(){var e=this.state.pagging,t=Math.ceil(this.generateData()/e.pageSize);return m.a.createElement("div",{className:"example pagging-examples"},m.a.createElement("h2",{className:"example-title"},"Pagging"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"Pagging")," element used for dividing long list, each time only loads a page."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(v.a,null,m.a.createElement(b.a,{className:"example-header",title:"With "}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("p",null,"A simple ",m.a.createElement("code",null,"Pagging")," example."),m.a.createElement(y.a,{selectedCountVisible:!0,page:e.page,count:this.generateData(),total:t,pageSize:e.pageSize,pageSizes:this.pageSizes,onChange:this.pageChangedHandler})))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(P.a,{data:T}))}}]),t}(h.Component);t.default=S}}]);
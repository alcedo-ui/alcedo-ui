(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{351:function(e,a,t){"use strict";var n=t(6),r=t.n(n),s=t(75),p=t.n(s),l=t(76),i=t.n(l),o=t(77),g=t.n(o),c=t(78),d=t.n(c),u=t(79),f=t.n(u),h=t(11),m=t.n(h),y=t(0),v=t.n(y),b=t(1),P=t.n(b),T=t(356),S=(t(352),function(e){function a(e){var t,n;return p()(this,a),(n=g()(this,d()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(t=m()(m()(n)),n.generateData).bind(t),n}return f()(a,e),i()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(T.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(y.Component));S.propTypes={data:P.a.object},S.defaultProps={data:null},a.a=S},352:function(e,a,t){var n=t(353);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(136)(n,r);n.locals&&(e.exports=n.locals)},353:function(e,a,t){(e.exports=t(135)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},729:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},total:{type:"PropTypes.number",desc:"The total of data.",default:"0"},page:{type:"PropTypes.number",desc:"The valid page.",default:"0"},pageSize:{type:"PropTypes.number",desc:"The number of per page.",default:"10"},pageSizes:{type:"PropTypes.array",desc:"The array of pageSize.",default:"[5, 10, 15, 20]"},pageSizeValueField:{type:"PropTypes.string",desc:'The value field name of PageSize. (default: "value")',default:"value"},pageSizeDisplayField:{type:"PropTypes.string",desc:'The display field name of PageSize. (default: "text")',default:"text"},selectedCount:{type:"PropTypes.number",desc:"The total count of selected.",default:"0"},selectedCountVisible:{type:"PropTypes.bool",desc:"If true,the selectedCount will show.",default:"false"},pageSizeVisible:{type:"PropTypes.bool",desc:"If false, the pageSize choice box will not show.",default:"true"},pageSizeRightIconCls:{type:"PropTypes.string",desc:"Use this property to set page size right icon.",default:"fas fa-angle-down"},paggingPrevIconCls:{type:"PropTypes.string",desc:"Use this property to set prev button icon.",default:"fas fa-angle-left"},paggingNextIconCls:{type:"PropTypes.string",desc:"Use this property to set next button icon.",default:"fas fa-angle-right"},paggingCountRenderer:{type:"PropTypes.func"},onChange:{type:"PropTypes.func",desc:"Callback function fired when Pagging component change."}}},853:function(e,a,t){"use strict";t.r(a);var n=t(137),r=t.n(n),s=t(75),p=t.n(s),l=t(76),i=t.n(l),o=t(77),g=t.n(o),c=t(78),d=t.n(c),u=t(79),f=t.n(u),h=t(11),m=t.n(h),y=t(19),v=t.n(y),b=t(0),P=t.n(b),T=t(489),S=t(358),x=t(357),z=t(375),w=t(351),C=t(729),E=function(e){function a(e){var t;return p()(this,a),t=g()(this,d()(a).call(this,e)),v()(m()(m()(t)),"generateData",function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,a=[],t=0;t<e;t++)a.push({id:t,name:"firstName".concat(t)});return a.length}),v()(m()(m()(t)),"pageChangedHandler",function(e){console.log("Page Changed::",e),"object"===r()(e.pageSize)&&(e.pageSize=e.pageSize.value),t.setState({pagging:e},function(){t.resetPage(t.generateData(100),e)})}),v()(m()(m()(t)),"resetPage",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.generateData(100),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.pagging,n=a.page,r=a.pageSize,s=Math.ceil(e/r);n+1>s&&t.setState({pagging:{pageSize:r,page:z.a.range(s-1,0)}})}),t.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],t.state={pagging:{pageSize:10,page:0}},t}return f()(a,e),i()(a,[{key:"render",value:function(){var e=this.state.pagging;return P.a.createElement("div",{className:"example brief-pagging-examples"},P.a.createElement("h2",{className:"example-title"},"BriefPagging"),P.a.createElement("p",null,"A ",P.a.createElement("span",null,"BriefPagging")," element used for dividing long list, each time only loads a page."),P.a.createElement("h2",{className:"example-title"},"Examples"),P.a.createElement(S.a,null,P.a.createElement(x.a,{className:"example-header",title:"With selectedCountVisible"}),P.a.createElement("div",{className:"widget-content"},P.a.createElement("div",{className:"example-content"},P.a.createElement("div",{className:"examples-wrapper"},P.a.createElement("p",null,"A simple ",P.a.createElement("code",null,"BriefPagging")," example."),P.a.createElement(T.a,{selectedCountVisible:!0,page:e.page,total:this.generateData(),pageSize:e.pageSize,pageSizes:this.pageSizes,onChange:this.pageChangedHandler}))))),P.a.createElement("h2",{className:"example-title"},"Properties"),P.a.createElement(w.a,{data:C}))}}]),a}(b.Component);a.default=E}}]);
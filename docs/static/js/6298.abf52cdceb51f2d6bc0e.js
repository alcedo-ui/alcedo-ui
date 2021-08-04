"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6298],{59141:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=r},68226:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(23645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,".example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}.popover-dialog-content-scroller .pagging{width:800px}",""]);const o=r},1116:(e,t,a)=>{a.d(t,{Z:()=>O});var n=a(15671),r=a(43144),o=a(97326),l=a(60136),s=a(82963),i=a(61120),p=a(4942),c=a(37699),u=a(45697),g=a.n(u),d=a(82996),f=a(93379),h=a.n(f),y=a(7795),m=a.n(y),P=a(90569),b=a.n(P),v=a(3565),Z=a.n(v),S=a(19216),T=a.n(S),z=a(44589),E=a.n(z),w=a(59141),x={};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}x.styleTagTransform=E(),x.setAttributes=Z(),x.insert=b().bind(null,"head"),x.domAPI=m(),x.insertStyleElement=T(),h()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;var N=function(e){(0,l.Z)(g,e);var t,a,u=(t=g,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function g(e){var t;return(0,n.Z)(this,g),t=u.call(this,e),(0,p.Z)((0,o.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(R({name:a},t.props.data[a]));return e})),t}return(0,r.Z)(g,[{key:"render",value:function(){return c.createElement("div",{className:"prop-type-desc-table-wrapper"},c.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),g}(c.Component);N.propTypes={data:g().object};const O=N},31228:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(15671),r=a(43144),o=a(97326),l=a(60136),s=a(82963),i=a(61120),p=a(4942),c=a(37699),u=a(59315),g=a(24471),d=a(50704),f=a(22944),h=a(65460),y=a(25681),m=a(1116);const P=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"pageSizeClassName":{"type":"PropTypes.string"},"pageSizeTriggerClassName":{"type":"PropTypes.string"},"pageSizePopupClassName":{"type":"PropTypes.string"},"total":{"type":"PropTypes.number","desc":"The total of data.","default":"0"},"page":{"type":"PropTypes.number","desc":"The valid page.","default":"0"},"pageSize":{"type":"PropTypes.number","desc":"The number of per page.","default":"10"},"pageSizes":{"type":"PropTypes.array","desc":"The array of pageSize.","default":"[5, 10, 15, 20]"},"pageSizeValueField":{"type":"PropTypes.string","desc":"The value field name of PageSize. (default: \\"value\\")","default":"value"},"pageSizeDisplayField":{"type":"PropTypes.string","desc":"The display field name of PageSize. (default: \\"text\\")","default":"text"},"selectedCount":{"type":"PropTypes.number","desc":"The total count of selected.","default":"0"},"selectionVisible":{"type":"PropTypes.bool","desc":"If true, the selectedCount will show.","default":"false"},"totalVisible":{"type":"PropTypes.bool","desc":"If true, the total will show.","default":"true"},"pageVisible":{"type":"PropTypes.bool","desc":"If false, the pageSize choice box will not show.","default":"true"},"pageSizeVisible":{"type":"PropTypes.bool","desc":"If false, the pageSizes selection will not show.","default":"true"},"pageSizeRightIconCls":{"type":"PropTypes.string","desc":"Use this property to set page size right icon.","default":"fas fa-angle-down"},"prevIconCls":{"type":"PropTypes.string","desc":"Use this property to set prev button icon.","default":"fas fa-angle-left"},"nextIconCls":{"type":"PropTypes.string","desc":"Use this property to set next button icon.","default":"fas fa-angle-right"},"firstIconCls":{"type":"PropTypes.string","desc":"Use this property to set first button icon.","default":"fas fa-angle-double-left"},"lastIconCls":{"type":"PropTypes.string","desc":"Use this property to set last button icon.","default":"fas fa-angle-double-right"},"selectionRenderer":{"type":"PropTypes.func"},"totalRenderer":{"type":"PropTypes.func"},"parentEl":{"type":"PropTypes.object"},"onChange":{"type":"PropTypes.func"},"onPageChange":{"type":"PropTypes.func"},"onPageSizeChange":{"type":"PropTypes.func"}}');var b=a(93379),v=a.n(b),Z=a(7795),S=a.n(Z),T=a(90569),z=a.n(T),E=a(3565),w=a.n(E),x=a(19216),C=a.n(x),R=a(44589),N=a.n(R),O=a(68226),D={};D.styleTagTransform=N(),D.setAttributes=w(),D.insert=z().bind(null,"head"),D.domAPI=S(),D.insertStyleElement=C(),v()(O.Z,D),O.Z&&O.Z.locals&&O.Z.locals;const j=function(e){(0,l.Z)(v,e);var t,a,b=(t=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(a){var r=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function v(e){var t;return(0,n.Z)(this,v),t=b.call(this,e),(0,p.Z)((0,o.Z)(t),"show",(function(e){var a=t.state.PaginationVisible;a[e]=!0,t.setState({PaginationVisible:a})})),(0,p.Z)((0,o.Z)(t),"hide",(function(e){var a=t.state.PaginationVisible;a[e]=!1,t.setState({PaginationVisible:a})})),(0,p.Z)((0,o.Z)(t),"generateData",(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],a=0;a<e;a++)t.push({id:a,name:"firstName".concat(a)});return t.length})),(0,p.Z)((0,o.Z)(t),"handlePageChange",(function(e){console.log("Page Changed::",e),t.setState({page:e},(function(){t.resetPage(t.generateData(100),e,t.state.pageSize.value)}))})),(0,p.Z)((0,o.Z)(t),"handlePageSizeChange",(function(e){console.log("Page Size Changed::",e),t.setState({pageSize:e},(function(){t.resetPage(t.generateData(100),t.state.page,e.value)}))})),(0,p.Z)((0,o.Z)(t),"resetPage",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.generateData(100),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.page,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.state.pageSize,r=Math.ceil(e/n);a+1>r&&t.setState({pagging:{pageSize:n,page:y.Z.range(r-1,0)}})})),t.pageSizes=[{value:10,text:"10"},{value:20,text:"20"},{value:30,text:"30"},{value:40,text:"40"},{value:50,text:"50"}],t.state={page:0,pageSize:30,PaginationVisible:{}},t}return(0,r.Z)(v,[{key:"render",value:function(){var e=this,t=this.state,a=t.page,n=t.pageSize,r=t.PaginationVisible;return c.createElement("div",{className:"example pagging-examples"},c.createElement("h2",{className:"example-title"},"Pagination"),c.createElement("p",null,"A ",c.createElement("span",null,"Pagination")," element used for dividing long list, each time only loads a page."),c.createElement("h2",{className:"example-title"},"Examples"),c.createElement(g.Z,null,c.createElement(d.Z,{className:"example-header",title:"With "}),c.createElement("div",{className:"widget-content"},c.createElement("div",{className:"example-content"},c.createElement("p",null,"A simple ",c.createElement("code",null,"Pagination")," example."),c.createElement(u.Z,{countVisible:!0,page:a,total:this.generateData(),pageSize:n.value,pageSizes:this.pageSizes,onPageChange:this.handlePageChange,onPageSizeChange:this.handlePageSizeChange})))),c.createElement(g.Z,null,c.createElement(d.Z,{className:"example-header",title:"In Dialog"}),c.createElement("div",{className:"widget-content"},c.createElement("div",{className:"example-content"},c.createElement("p",null,"A simple ",c.createElement("code",null,"Pagination")," example."),c.createElement(f.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),c.createElement(h.Z,{visible:r[1],onRequestClose:function(){return e.hide(1)}},(function(t){return c.createElement("div",{className:"popover-dialog-content-scroller"},c.createElement(u.Z,{countVisible:!0,parentEl:t,page:a,total:e.generateData(),pageSize:n.value,pageSizes:e.pageSizes,onChange:e.handlePageChange}))}))))),c.createElement("h2",{className:"example-title"},"Properties"),c.createElement(m.Z,{data:P}))}}]),v}(c.Component)}}]);
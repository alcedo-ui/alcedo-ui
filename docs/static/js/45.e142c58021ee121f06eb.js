(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{426:function(e,a,t){"use strict";var n=t(10),r=t.n(n),o=t(108),l=t.n(o),s=t(109),d=t.n(s),i=t(110),c=t.n(i),p=t(111),u=t.n(p),m=t(112),f=t.n(m),h=t(0),v=t.n(h),w=t(430),y=(t(427),function(e){function a(e){d()(this,a);var t=u()(this,(a.__proto__||l()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return f()(a,e),c()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(h.Component));y.defaultProps={data:null},a.a=y},427:function(e,a,t){var n=t(428);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(184)(n,r);n.locals&&(e.exports=n.locals)},428:function(e,a,t){(e.exports=t(183)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},567:function(e,a,t){"use strict";var n=t(108),r=t.n(n),o=t(109),l=t.n(o),s=t(110),d=t.n(s),i=t(111),c=t.n(i),p=t(112),u=t.n(p),m=t(0),f=t.n(m),h=function(e){function a(e){var t;l()(this,a);for(var n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];var d=c()(this,(t=a.__proto__||r()(a)).call.apply(t,[this,e].concat(o)));return d.download=function(){d.setState({key:d.state.key+1})},d.loadedHandler=function(e){var a=d.props.onLoad,t=d.refs.iframe;t&&a&&a(e,t.contentDocument?t.contentDocument.body.innerText:void 0)},d.state={key:0},d}return u()(a,e),d()(a,[{key:"shouldComponentUpdate",value:function(e,a){return a.key!==this.state.key}},{key:"render",value:function(){var e=this.props.url,a=this.state.key;return a>0?f.a.createElement("iframe",{key:a,ref:"iframe",className:"download-field",onLoad:this.loadedHandler,onError:this.loadedHandler,src:a>0?e:null}):null}}]),a}(m.Component);h.defaultProps={url:null};var v=h;t.d(a,"a",function(){return v})},706:function(e){e.exports={url:{type:"PropTypes.string",desc:"Download url.",default:"null"},onLoad:{type:"PropTypes.func",desc:"Loaded callback."}}},707:function(e,a,t){var n=t(708);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(184)(n,r);n.locals&&(e.exports=n.locals)},708:function(e,a,t){(e.exports=t(183)(!1)).push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""])},875:function(e,a,t){"use strict";t.r(a);var n=t(108),r=t.n(n),o=t(109),l=t.n(o),s=t(110),d=t.n(s),i=t(111),c=t.n(i),p=t(112),u=t.n(p),m=t(0),f=t.n(m),h=t(437),v=t(567),w=t(432),y=t(431),E=t(426),k=t(706),x=(t(707),function(e){function a(e){l()(this,a);var t=c()(this,(a.__proto__||r()(a)).call(this,e));return t.downloadFieldRef=Object(m.createRef)(),t.download=function(){t.downloadFieldRef.current.download()},t}return u()(a,e),d()(a,[{key:"render",value:function(){return f.a.createElement("div",{className:"example download-field-examples"},f.a.createElement("h2",{className:"example-title"},"DownloadField"),f.a.createElement("p",null,f.a.createElement("span",null,"DownloadField")," allow users to download a file."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(w.a,null,f.a.createElement(y.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement(v.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,a){console.log(e,a)}}),f.a.createElement(h.a,{value:"Download NodeJs",theme:h.a.Theme.PRIMARY,onClick:this.download}))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(E.a,{data:k}))}}]),a}(m.Component));a.default=x}}]);
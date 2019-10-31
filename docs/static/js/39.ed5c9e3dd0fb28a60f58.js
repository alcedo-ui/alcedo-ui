(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{282:function(e,n,t){"use strict";var a=t(54),r=t.n(a),o=t(55),l=t.n(o),d=t(56),s=t.n(d),i=t(57),c=t.n(i),p=t(20),u=t.n(p),f=t(58),m=t.n(f),h=t(7),w=t.n(h),y=t(0),v=t.n(y),b=t(277),g=t.n(b),E=t(289);t(283);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){w()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=function(e){function n(e){var t;return r()(this,n),t=s()(this,c()(n).call(this,e)),w()(u()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(x({name:n},t.props.data[n]));return e})),t}return m()(n,e),l()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),n}(y.Component);R.propTypes={data:g.a.object},n.a=R},283:function(e,n,t){var a=t(284);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};t(109)(a,r);a.locals&&(e.exports=a.locals)},284:function(e,n,t){(e.exports=t(108)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},434:function(e,n,t){"use strict";var a=t(54),r=t.n(a),o=t(55),l=t.n(o),d=t(56),s=t.n(d),i=t(57),c=t.n(i),p=t(20),u=t.n(p),f=t(58),m=t.n(f),h=t(7),w=t.n(h),y=t(0),v=t.n(y),b=t(277),g=t.n(b),E=function(e){function n(e){var t,a;r()(this,n);for(var o=arguments.length,l=new Array(o>1?o-1:0),d=1;d<o;d++)l[d-1]=arguments[d];return a=s()(this,(t=c()(n)).call.apply(t,[this,e].concat(l))),w()(u()(a),"download",(function(){a.setState({downloading:!0})})),w()(u()(a),"handleLoaded",(function(e){a.setState({downloading:!1},(function(){var n=a.props.onLoad,t=a.iframe&&a.iframe.current;t&&n&&n(e,t.contentDocument?t.contentDocument.body.innerText:void 0)}))})),a.iframe=Object(y.createRef)(),a.state={downloading:!1},a}return m()(n,e),l()(n,[{key:"shouldComponentUpdate",value:function(e,n){return n.downloading!==this.state.downloading}},{key:"render",value:function(){var e=this.props.url,n=this.state.downloading;return n?v.a.createElement("iframe",{ref:this.iframe,className:"download-field",onLoad:this.handleLoaded,onError:this.handleLoaded,src:n?e:null}):null}}]),n}(y.Component);E.propTypes={url:g.a.string,onLoad:g.a.func},E.defaultProps={url:null};var O=E;t.d(n,"a",(function(){return O}))},600:function(e){e.exports=JSON.parse('{"url":{"type":"PropTypes.string","desc":"Download url.","default":"null"},"onLoad":{"type":"PropTypes.func","desc":"Loaded callback."}}')},601:function(e,n,t){var a=t(602);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};t(109)(a,r);a.locals&&(e.exports=a.locals)},602:function(e,n,t){(e.exports=t(108)(!1)).push([e.i,".download-field-examples .raised-button {\n  width: auto; }\n",""])},791:function(e,n,t){"use strict";t.r(n);var a=t(54),r=t.n(a),o=t(55),l=t.n(o),d=t(56),s=t.n(d),i=t(57),c=t.n(i),p=t(20),u=t.n(p),f=t(58),m=t.n(f),h=t(7),w=t.n(h),y=t(0),v=t.n(y),b=t(285),g=t(434),E=t(287),O=t(286),x=t(282),R=t(600),D=(t(601),function(e){function n(e){var t;return r()(this,n),t=s()(this,c()(n).call(this,e)),w()(u()(t),"downloadFieldRef",Object(y.createRef)()),w()(u()(t),"download",(function(){t.downloadFieldRef.current.download()})),t}return m()(n,e),l()(n,[{key:"render",value:function(){return v.a.createElement("div",{className:"example download-field-examples"},v.a.createElement("h2",{className:"example-title"},"DownloadField"),v.a.createElement("p",null,v.a.createElement("span",null,"DownloadField")," allow users to download a file."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(E.a,null,v.a.createElement(O.a,{className:"example-header",title:"Basic"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement(g.a,{ref:this.downloadFieldRef,url:"https://nodejs.org/dist/v9.0.0/node-v9.0.0.pkg",onLoad:function(e,n){console.log(e,n)}}),v.a.createElement(b.a,{value:"Download NodeJs",theme:b.a.Theme.PRIMARY,onClick:this.download}))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(x.a,{data:R}))}}]),n}(y.Component));n.default=D}}]);
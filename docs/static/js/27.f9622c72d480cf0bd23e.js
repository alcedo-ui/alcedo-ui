(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1002:function(e,t,a){"use strict";var n,r,l=a(10),s=a.n(l),i=a(14),o=a.n(i),c=a(9),p=a.n(c),m=a(13),d=a.n(m),u=a(7),h=a.n(u),y=a(8),f=a.n(y),T=a(1),v=a.n(T),E=a(0),x=a.n(E),N=a(11),g=a.n(N),_=(r=n=function(e){function t(e){var a;p()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return h()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(r)))}return f()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.date,n=e.theme,r=e.type,l=e.headerText,i=e.contentText,o=e.hasBorder,c=e.style,p=g()("time-line-item",s()({},t,t));return v.a.createElement("li",{className:p,style:c},r&&"header"==r?v.a.createElement("div",{className:"time-line-item-header"},l):r&&"title"==r?v.a.createElement("div",{className:"time-line-item-title time-line-item-title-"+n},v.a.createElement("span",{className:"tl-date"},a),o?v.a.createElement("div",{className:"tl-content panel panel-"+n},v.a.createElement("span",{className:"triangle triangle-"+n}," "),v.a.createElement("span",{className:"tag tag-"+n}," "),v.a.createElement("div",null,i)):v.a.createElement("div",{className:"tl-content"},i)):null)}}]),t}(T.Component),n.Type={HEADER:"header",TITLE:"title"},r);_.propTypes={className:x.a.string,style:x.a.object},_.defaultProps={className:"",style:null};var b,w,B=_,P=a(4),k=a(5),C=(w=b=function(e){function t(e){var a;p()(this,t);for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return h()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(r)))}return f()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.style,n=e.className,r=g()("time-line",s()({},n,n));return v.a.createElement("ul",{className:r,style:a},t&&t.map(function(e,t){return v.a.createElement(B,{key:t,theme:e.theme,type:e.type,title:e.title,date:e.date,hasBorder:e.hasBorder,contentText:e.contentText,headerText:e.headerText})}))}}]),t}(T.Component),b.Type=B.Type,b.Theme=P.a,w);C.propTypes={className:x.a.string,style:x.a.object,data:x.a.arrayOf(x.a.shape({theme:x.a.oneOf(k.a.enumerateValue(P.a)),type:x.a.string,headerText:x.a.string,date:x.a.string,hasBorder:x.a.bool,contentText:x.a.string})).isRequired},C.defaultProps={className:"",style:null,hasBorder:!0,title:"",type:""};var R=C;a.d(t,"a",function(){return R})},1059:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},data:{type:"PropTypes.array",desc:"The items data."}}},1270:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return x});var n=a(14),r=a.n(n),l=a(9),s=a.n(l),i=a(13),o=a.n(i),c=a(7),p=a.n(c),m=a(8),d=a.n(m),u=a(1),h=a.n(u),y=a(1002),f=a(921),T=a(920),v=a(918),E=a(1059),x=function(e){function t(e){return s()(this,t),p()(this,(t.__proto__||r()(t)).call(this,e))}return d()(t,e),o()(t,[{key:"render",value:function(){var e=[{type:"header",headerText:"Now"},{theme:y.a.Theme.PRIMARY,type:"title",contentText:"just a title.",hasBorder:!1,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.HIGHLIGHT,type:"title",hasBorder:!0,contentText:"just a title.",date:"2017-05-03 15:16:34"},{theme:y.a.Theme.SUCCESS,type:"title",contentText:"just a title.",hasBorder:!0,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.WARNING,type:"title",hasBorder:!0,contentText:"example content.",date:"2017-05-06 12:52:12"},{theme:y.a.Theme.ERROR,type:"title",hasBorder:!0,contentText:"welcome to China.",date:"2017-05-03 15:16:34"},{type:"header",headerText:"2016"}];return h.a.createElement("div",{className:"example time-line-examples"},h.a.createElement("h2",{className:"example-title"},"TimeLine"),h.a.createElement("p",null,"The TimeLine is used to display time flow information vertically."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(f.a,null,h.a.createElement(T.a,{className:"example-header",title:"TimeLine Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("p",null,"A simple TimeLine example."),h.a.createElement(y.a,{data:e})))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(v.a,{data:E}))}}]),t}(u.Component)},916:function(e,t,a){(e.exports=a(134)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},917:function(e,t,a){var n=a(916);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(133)(n,r);n.locals&&(e.exports=n.locals)},918:function(e,t,a){"use strict";var n=a(6),r=a.n(n),l=a(14),s=a.n(l),i=a(9),o=a.n(i),c=a(13),p=a.n(c),m=a(7),d=a.n(m),u=a(8),h=a.n(u),y=a(1),f=a.n(y),T=a(0),v=a.n(T),E=a(919),x=(a(917),function(e){function t(e){o()(this,t);var a=d()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return f.a.createElement("div",{className:"prop-type-desc-table-wrapper"},f.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(y.Component));x.propTypes={data:v.a.object},x.defaultProps={data:null},t.a=x}}]);
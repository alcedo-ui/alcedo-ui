(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{351:function(e,t,a){"use strict";var n=a(6),r=a.n(n),l=a(75),s=a.n(l),i=a(76),c=a.n(i),o=a(77),p=a.n(o),m=a(78),d=a.n(m),h=a(79),u=a.n(h),y=a(11),T=a.n(y),f=a(0),v=a.n(f),E=a(1),x=a.n(E),N=a(356),g=(a(352),function(e){function t(e){var a,n;return s()(this,t),(n=p()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=T()(T()(n)),n.generateData).bind(a),n}return u()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(N.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));g.propTypes={data:x.a.object},g.defaultProps={data:null},t.a=g},352:function(e,t,a){var n=a(353);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(136)(n,r);n.locals&&(e.exports=n.locals)},353:function(e,t,a){(e.exports=a(135)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},450:function(e,t,a){"use strict";var n=a(75),r=a.n(n),l=a(76),s=a.n(l),i=a(77),c=a.n(i),o=a(78),p=a.n(o),m=a(79),d=a.n(m),h=a(19),u=a.n(h),y=a(0),T=a.n(y),f=a(1),v=a.n(f),E=a(348),x=a.n(E),N=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,l=new Array(n>1?n-1:0),s=1;s<n;s++)l[s-1]=arguments[s];return c()(this,(a=p()(t)).call.apply(a,[this,e].concat(l)))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.date,n=e.theme,r=e.type,l=e.headerText,s=e.contentText,i=e.hasBorder,c=e.style,o=x()("time-line-item",u()({},t,t));return T.a.createElement("li",{className:o,style:c},r&&"header"==r?T.a.createElement("div",{className:"time-line-item-header"},l):r&&"title"==r?T.a.createElement("div",{className:"time-line-item-title time-line-item-title-".concat(n)},T.a.createElement("span",{className:"tl-date"},a),i?T.a.createElement("div",{className:"tl-content panel panel-".concat(n)},T.a.createElement("span",{className:"triangle triangle-".concat(n)}," "),T.a.createElement("span",{className:"tag tag-".concat(n)}," "),T.a.createElement("div",null,s)):T.a.createElement("div",{className:"tl-content"},s)):null)}}]),t}(y.Component);u()(N,"Type",{HEADER:"header",TITLE:"title"}),N.propTypes={className:v.a.string,style:v.a.object};var g=N,w=a(350),b=a(349),B=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,l=new Array(n>1?n-1:0),s=1;s<n;s++)l[s-1]=arguments[s];return c()(this,(a=p()(t)).call.apply(a,[this,e].concat(l)))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.style,n=e.className,r=x()("time-line",u()({},n,n));return T.a.createElement("ul",{className:r,style:a},t&&t.map(function(e,t){return T.a.createElement(g,{key:t,theme:e.theme,type:e.type,title:e.title,date:e.date,hasBorder:e.hasBorder,contentText:e.contentText,headerText:e.headerText})}))}}]),t}(y.Component);u()(B,"Type",g.Type),u()(B,"Theme",w.a),B.propTypes={className:v.a.string,style:v.a.object,data:v.a.arrayOf(v.a.shape({theme:v.a.oneOf(b.a.enumerateValue(w.a)),type:v.a.string,headerText:v.a.string,date:v.a.string,hasBorder:v.a.bool,contentText:v.a.string})).isRequired},B.defaultProps={hasBorder:!0,title:"",type:""};var k=B;a.d(t,"a",function(){return k})},731:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},data:{type:"PropTypes.array",desc:"The items data."}}},855:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a.n(n),l=a(76),s=a.n(l),i=a(77),c=a.n(i),o=a(78),p=a.n(o),m=a(79),d=a.n(m),h=a(0),u=a.n(h),y=a(450),T=a(358),f=a(357),v=a(351),E=a(731),x=function(e){function t(e){var a;return r()(this,t),(a=c()(this,p()(t).call(this,e))).data=[{type:"header",headerText:"Now"},{theme:y.a.Theme.PRIMARY,type:"title",contentText:"just a title.",hasBorder:!1,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.HIGHLIGHT,type:"title",hasBorder:!0,contentText:"just a title.",date:"2017-05-03 15:16:34"},{theme:y.a.Theme.SUCCESS,type:"title",contentText:"just a title.",hasBorder:!0,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.WARNING,type:"title",hasBorder:!0,contentText:"example content.",date:"2017-05-06 12:52:12"},{theme:y.a.Theme.ERROR,type:"title",hasBorder:!0,contentText:"welcome to China.",date:"2017-05-03 15:16:34"},{type:"header",headerText:"2016"}],a}return d()(t,e),s()(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"example time-line-examples"},u.a.createElement("h2",{className:"example-title"},"TimeLine"),u.a.createElement("p",null,"The TimeLine is used to display time flow information vertically."),u.a.createElement("h2",{className:"example-title"},"Examples"),u.a.createElement(T.a,null,u.a.createElement(f.a,{className:"example-header",title:"TimeLine Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("p",null,"A simple TimeLine example."),u.a.createElement(y.a,{data:this.data})))),u.a.createElement("h2",{className:"example-title"},"Properties"),u.a.createElement(v.a,{data:E}))}}]),t}(h.Component);t.default=x}}]);
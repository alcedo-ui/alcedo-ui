(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{282:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(51),s=a.n(l),i=a(52),o=a.n(i),c=a(53),p=a.n(c),m=a(54),d=a.n(m),h=a(19),u=a.n(h),y=a(55),f=a.n(y),T=a(18),v=a.n(T),E=a(0),x=a.n(E),N=a(276),b=a.n(N),g=a(288),w=(a(283),function(e){function t(e){var a;return s()(this,t),a=p()(this,d()(t).call(this,e)),v()(u()(a),"generateData",function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(r()({name:t},a.props.data[t]));return e}),a}return f()(t,e),o()(t,[{key:"render",value:function(){return x.a.createElement("div",{className:"prop-type-desc-table-wrapper"},x.a.createElement(g.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(E.Component));w.propTypes={data:b.a.object},t.a=w},283:function(e,t,a){var n=a(284);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(107)(n,r);n.locals&&(e.exports=n.locals)},284:function(e,t,a){(e.exports=a(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},374:function(e,t,a){"use strict";var n=a(51),r=a.n(n),l=a(52),s=a.n(l),i=a(53),o=a.n(i),c=a(54),p=a.n(c),m=a(55),d=a.n(m),h=a(18),u=a.n(h),y=a(0),f=a.n(y),T=a(276),v=a.n(T),E=a(277),x=a.n(E),N=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,l=new Array(n>1?n-1:0),s=1;s<n;s++)l[s-1]=arguments[s];return o()(this,(a=p()(t)).call.apply(a,[this,e].concat(l)))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.date,n=e.theme,r=e.type,l=e.headerText,s=e.contentText,i=e.hasBorder,o=e.style;return f.a.createElement("li",{className:x()("time-line-item",u()({},t,t)),style:o},r&&"header"==r?f.a.createElement("div",{className:"time-line-item-header"},l):r&&"title"==r?f.a.createElement("div",{className:"time-line-item-title time-line-item-title-".concat(n)},f.a.createElement("span",{className:"tl-date"},a),i?f.a.createElement("div",{className:"tl-content panel panel-".concat(n)},f.a.createElement("span",{className:"triangle triangle-".concat(n)}),f.a.createElement("span",{className:"tag tag-".concat(n)}),f.a.createElement("div",null,s)):f.a.createElement("div",{className:"tl-content"},s)):null)}}]),t}(y.Component);u()(N,"Type",{HEADER:"header",TITLE:"title"}),N.propTypes={className:v.a.string,style:v.a.object};var b=N,g=a(279),w=a(278),R=function(e){function t(e){var a;r()(this,t);for(var n=arguments.length,l=new Array(n>1?n-1:0),s=1;s<n;s++)l[s-1]=arguments[s];return o()(this,(a=p()(t)).call.apply(a,[this,e].concat(l)))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.style,n=e.className;return f.a.createElement("ul",{className:x()("time-line",u()({},n,n)),style:a},t&&t.map(function(e,t){return f.a.createElement(b,{key:t,theme:e.theme,type:e.type,title:e.title,date:e.date,hasBorder:e.hasBorder,contentText:e.contentText,headerText:e.headerText})}))}}]),t}(y.Component);u()(R,"Type",b.Type),u()(R,"Theme",g.a),R.propTypes={className:v.a.string,style:v.a.object,data:v.a.arrayOf(v.a.shape({theme:v.a.oneOf(w.a.enumerateValue(g.a)),type:v.a.string,headerText:v.a.string,date:v.a.string,hasBorder:v.a.bool,contentText:v.a.string})).isRequired},R.defaultProps={hasBorder:!0,title:"",type:""};var B=R;a.d(t,"a",function(){return B})},709:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},data:{type:"PropTypes.array",desc:"The items data."}}},839:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a.n(n),l=a(52),s=a.n(l),i=a(53),o=a.n(i),c=a(54),p=a.n(c),m=a(55),d=a.n(m),h=a(0),u=a.n(h),y=a(374),f=a(287),T=a(286),v=a(282),E=a(709),x=function(e){function t(e){var a;return r()(this,t),(a=o()(this,p()(t).call(this,e))).data=[{type:"header",headerText:"Now"},{theme:y.a.Theme.PRIMARY,type:"title",contentText:"just a title.",hasBorder:!1,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.HIGHLIGHT,type:"title",hasBorder:!0,contentText:"just a title.",date:"2017-05-03 15:16:34"},{theme:y.a.Theme.SUCCESS,type:"title",contentText:"just a title.",hasBorder:!0,date:"2017-05-03 15:16:34"},{theme:y.a.Theme.WARNING,type:"title",hasBorder:!0,contentText:"example content.",date:"2017-05-06 12:52:12"},{theme:y.a.Theme.ERROR,type:"title",hasBorder:!0,contentText:"welcome to China.",date:"2017-05-03 15:16:34"},{type:"header",headerText:"2016"}],a}return d()(t,e),s()(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"example time-line-examples"},u.a.createElement("h2",{className:"example-title"},"TimeLine"),u.a.createElement("p",null,"The TimeLine is used to display time flow information vertically."),u.a.createElement("h2",{className:"example-title"},"Examples"),u.a.createElement(f.a,null,u.a.createElement(T.a,{className:"example-header",title:"TimeLine Example"}),u.a.createElement("div",{className:"widget-content"},u.a.createElement("div",{className:"example-content"},u.a.createElement("p",null,"A simple TimeLine example."),u.a.createElement(y.a,{data:this.data})))),u.a.createElement("h2",{className:"example-title"},"Properties"),u.a.createElement(v.a,{data:E}))}}]),t}(h.Component);t.default=x}}]);
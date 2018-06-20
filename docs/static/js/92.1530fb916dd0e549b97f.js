(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{405:function(e,t,a){(e.exports=a(169)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},406:function(e,t,a){var n=a(405);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(168)(n,l);n.locals&&(e.exports=n.locals)},407:function(e,t,a){"use strict";var n=a(0),l=a.n(n),i=a(109),o=a.n(i),r=a(10),s=a.n(r),c=a(108),p=a.n(c),h=a(7),m=a.n(h),u=a(9),d=a.n(u),f=a(1),b=a.n(f),g=a(408),y=(a(406),function(e){function t(e){s()(this,t);var a=m()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return d()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(l()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));y.defaultProps={data:null},t.a=y},450:function(e,t,a){"use strict";var n,l,i=a(0),o=a.n(i),r=a(387),s=a.n(r),c=a(388),p=a.n(c),h=a(109),m=a.n(h),u=a(10),d=a.n(u),f=a(108),b=a.n(f),g=a(7),y=a.n(g),E=a(9),v=a.n(E),N=a(1),x=a.n(N),T=a(402),w=a.n(T),C=a(471),P=a(482),_=a(404),k=a(419),z=(a(403),l=n=function(e){function t(e){var a;d()(this,t);for(var n=arguments.length,l=Array(n>1?n-1:0),i=1;i<n;i++)l[i-1]=arguments[i];var o=y()(this,(a=t.__proto__||m()(t)).call.apply(a,[this,e].concat(l)));return o.clickHandler=function(e){var t=o.props,a=t.disabled,n=t.isLoading,l=t.onClick;!a&&!n&&l&&l(e)},o.startRipple=function(e){o.refs.touchRipple.addRipple(e)},o.endRipple=function(){o.refs.touchRipple.removeRipple()},o}return v()(t,e),b()(t,[{key:"render",value:function(){var e,t=this.props,a=t.className,n=t.theme,l=t.iconCls,i=t.disabled,r=t.isLoading,c=t.tip,h=t.tipPosition,m=p()(t,["className","theme","iconCls","disabled","isLoading","tip","tipPosition"]),u=w()("icon-anchor",(e={},s()(e,"theme-"+n,n),s()(e,a,a),e));return x.a.createElement(k.a,{text:c,position:h},x.a.createElement("a",o()({},m,{className:u,disabled:i||r,onClick:this.clickHandler}),r?x.a.createElement(C.a,{size:"small"}):l?x.a.createElement("i",{className:"icon-anchor-icon "+l,"aria-hidden":"true"}):null,i||r?null:x.a.createElement(P.a,{ref:"touchRipple",className:i||r?"hidden":"",displayCenter:!0})))}}]),t}(N.Component),n.Theme=_.a,l);z.defaultProps={theme:_.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",tipPosition:k.a.Position.BOTTOM};var S=z;a.d(t,"a",function(){return S})},745:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The button theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},disabled:{type:"PropTypes.bool",desc:"Disables the button if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the button will be have loading effect.",default:"false"},iconCls:{type:"PropTypes.string",desc:"The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon."},href:{type:"PropTypes.string",desc:"The URL to link to when the button is clicked.",default:"javascript:void(0)"},target:{type:"PropTypes.string",desc:"How to open the linked document.The value can be _blank,_self,_parent or _top.",default:"_blank"},alt:{type:"PropTypes.string"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"TipProvider.Position.BOTTOM"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."}}},901:function(e,t,a){"use strict";a.r(t);var n=a(109),l=a.n(n),i=a(10),o=a.n(i),r=a(108),s=a.n(r),c=a(7),p=a.n(c),h=a(9),m=a.n(h),u=a(1),d=a.n(u),f=a(450),b=a(410),g=a(409),y=a(407),E=a(745),v=function(e){function t(e){return o()(this,t),p()(this,(t.__proto__||l()(t)).call(this,e))}return m()(t,e),s()(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"example icon-anchor-examples"},d.a.createElement("h2",{className:"example-title"},"Icon Anchor"),d.a.createElement("p",null,"An ",d.a.createElement("span",null,"Icon Anchor")," generates a button element around an icon.Also,Click the button to achieve href address jump."),d.a.createElement("h2",{className:"example-title"},"Examples"),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"Basic"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",d.a.createElement("code",null,"iconCls")," property example."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"With theme and style"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using the ",d.a.createElement("code",null,"style")," property to set size and the",d.a.createElement("code",null,"theme")," property to set different theme."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},theme:"primary",className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},theme:"success",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},theme:"error",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",theme:"highlight",style:{fontSize:"28px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",theme:"warning",style:{fontSize:"32px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement(b.a,null,d.a.createElement(g.a,{className:"example-header",title:"With target"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"examples-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Icon Anchor")," using the ",d.a.createElement("code",null,"target")," property to set where to open the connection href."),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},className:"github-icon",target:"_parent",href:"https://github.com/alcedo-ui/alcedo-ui"}),d.a.createElement(f.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},className:"github-icon",target:"_self",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),d.a.createElement("h2",{className:"example-title"},"Properties"),d.a.createElement(y.a,{data:E}))}}]),t}(u.Component);t.default=v}}]);
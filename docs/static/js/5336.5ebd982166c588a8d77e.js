"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5336],{59141:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=a},58711:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".group-grid-examples .paper{border:1px solid #e4eaf2;overflow:hidden}",""]);const s=a},1116:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(15671),a=n(43144),s=n(97326),c=n(60136),l=n(82963),o=n(61120),i=n(4942),d=n(37699),u=n(45697),p=n.n(u),f=n(82996),h=n(93379),m=n.n(h),y=n(7795),b=n.n(y),g=n(90569),v=n.n(g),Z=n(3565),T=n.n(Z),k=n(19216),C=n.n(k),P=n(44589),E=n.n(P),O=n(59141),x={};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}x.styleTagTransform=E(),x.setAttributes=T(),x.insert=v().bind(null,"head"),x.domAPI=b(),x.insertStyleElement=C(),m()(O.Z,x),O.Z&&O.Z.locals&&O.Z.locals;var R=function(e){(0,c.Z)(p,e);var t,n,u=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function p(e){var t;return(0,r.Z)(this,p),t=u.call(this,e),(0,i.Z)((0,s.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(I({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(p,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(d.Component);R.propTypes={data:p().object};const D=R},30423:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(15671),a=n(43144),s=n(97326),c=n(60136),l=n(82963),o=n(61120),i=n(4942),d=n(37699),u=n(23350),p=n(24471),f=n(50704),h=n(11253),m=n(1116);const y=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item select radio or checkbox.","default":"Theme.DEFAULT"},"data":{"type":"PropTypes.array","desc":"Children passed into the ListItem.","default":"[]"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the list will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the list will be at loading status."},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.Can be normal,checkbox.","default":"SelectMode.SINGLE_SELECT"},"radioUncheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check"},"radioCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the list-item select."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the list changed."}}');var b=n(93379),g=n.n(b),v=n(7795),Z=n.n(v),T=n(90569),k=n.n(T),C=n(3565),P=n.n(C),E=n(19216),O=n.n(E),x=n(44589),w=n.n(x),I=n(58711),R={};R.styleTagTransform=w(),R.setAttributes=P(),R.insert=k().bind(null,"head"),R.domAPI=Z(),R.insertStyleElement=O(),g()(I.Z,R),I.Z&&I.Z.locals&&I.Z.locals;var D=function(e){(0,c.Z)(g,e);var t,n,b=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function g(e){var t;return(0,r.Z)(this,g),t=b.call(this,e),(0,i.Z)((0,s.Z)(t),"changeHandler",(function(e){console.log(e)})),t.listData=[{name:"socialNetwork",children:[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook",desc:"Here is a Facebook Desc.",checked:"true"},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fab fa-android",value:"Android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fab fa-apple",value:"Apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fab fa-windows",value:"Windows",text:"Windows",desc:"Here is a Windows Desc."}]}],t}return(0,a.Z)(g,[{key:"render",value:function(){return d.createElement("div",{className:"example group-grid-examples"},d.createElement("h2",{className:"example-title"},"GroupGrid"),d.createElement("p",null,d.createElement("span",null,"GroupGrid")," are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(p.Z,null,d.createElement(f.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"GroupGrid")," with isGrouped."),d.createElement(h.Z,null,d.createElement(u.Z,{selectMode:u.Z.SelectMode.MULTI_SELECT,data:this.listData,onChange:this.changeHandler})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(m.Z,{data:y}))}}]),g}(d.Component);const N=D},23350:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(45987),s=n(15671),c=n(43144),l=n(60136),o=n(82963),i=n(61120),d=n(4942),u=n(37699),p=n(45697),f=n.n(p),h=n(74259),m=n(96509),y=n(87712),b=n(59448),g=n(41844),v=n.n(g),Z=n(81540),T=n(57949),k=n(19605),C=["children","className","style","data","disabled"];var P=function(e){(0,l.Z)(f,e);var t,n,p=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function f(e){var t;(0,s.Z)(this,f);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return(t=p.call.apply(p,[this,e].concat(r))).state={value:T.Z.getInitValue(e)},t}return(0,c.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,s=e.style,c=e.data,l=e.disabled,o=(0,a.Z)(e,C),i=this.state.value;return u.createElement("div",{className:v()("group-grid",(0,d.Z)({},n,n)),style:s,disabled:l},c&&c.map((function(e,t){return u.createElement("div",{key:t},u.createElement("div",{className:"group-grid-group-title"},e.name),u.createElement(h.Z,(0,r.Z)({},o,{data:e.children,value:i})))})),t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:T.Z.getInitValue({value:k.Z.getDerivedState(e,t,"value"),selectMode:e.selectMode})}}}]),f}(u.Component);(0,d.Z)(P,"SelectMode",b.Z),(0,d.Z)(P,"Theme",y.Z),P.propTypes={children:f().any,className:f().string,style:f().object,theme:f().oneOf(Z.Z.enumerateValue(y.Z)),selectTheme:f().oneOf(Z.Z.enumerateValue(y.Z)),data:f().arrayOf(f().oneOfType([f().shape({name:f().oneOfType([f().string,f().number]),children:f().arrayOf(f().oneOfType([f().shape({className:f().string,style:f().object,theme:f().oneOf(Z.Z.enumerateValue(y.Z)),value:f().oneOfType([f().string,f().number]),text:f().oneOfType([f().string,f().number]),desc:f().oneOfType([f().string,f().number]),disabled:f().bool,isLoading:f().bool,disableTouchRipple:f().bool,iconCls:f().string,rightIconCls:f().string,tip:f().string,tipPosition:f().oneOf(Z.Z.enumerateValue(m.Z.Position)),rippleDisplayCenter:f().bool,itemRenderer:f().func,onClick:f().func}),f().string,f().number]))}),f().symbol])).isRequired,idField:f().string,valueField:f().string,displayField:f().string,descriptionField:f().string,disabled:f().bool,isLoading:f().bool,selectMode:f().oneOf(Z.Z.enumerateValue(b.Z)),radioUncheckedIconCls:f().string,radioCheckedIconCls:f().string,checkboxUncheckedIconCls:f().string,checkboxCheckedIconCls:f().string,checkboxIndeterminateIconCls:f().string,renderer:f().func,onItemClick:f().func,onChange:f().func},P.defaultProps={theme:y.Z.DEFAULT,selectTheme:y.Z.DEFAULT,data:[],idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,selectMode:b.Z.SINGLE_SELECT,radioUncheckedIconCls:"fas fa-check",radioCheckedIconCls:"fas fa-check",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square"};const E=P}}]);
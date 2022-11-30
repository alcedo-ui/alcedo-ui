"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[7894],{15439:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(15671),l=n(43144),c=n(97326),r=n(60136),o=n(82963),s=n(61120),i=n(4942),u=n(37699),d=n(45697),p=n.n(d),h=n(14659),f=n(93379),m=n.n(f),y=n(7795),b=n.n(y),v=n(90569),k=n.n(v),Z=n(3565),g=n.n(Z),C=n(19216),x=n.n(C),P=n(44589),E=n.n(P),T=n(59141),N={};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}N.styleTagTransform=E(),N.setAttributes=g(),N.insert=k().bind(null,"head"),N.domAPI=b(),N.insertStyleElement=x(),m()(T.Z,N),T.Z&&T.Z.locals&&T.Z.locals;var w=function(e){(0,r.Z)(p,e);var t,n,d=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var l=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,a.Z)(this,p),t=d.call(this,e),(0,i.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(O({name:n},t.props.data[n]));return e})),t}return(0,l.Z)(p,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(h.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(u.Component);w.propTypes={data:p().object};const R=w},52919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(42982),l=n(15671),c=n(43144),r=n(97326),o=n(60136),s=n(82963),i=n(61120),u=n(4942),d=n(37699),p=n(23699),h=n(18989),f=n(81182),m=n(46748),y=n(15439);const b=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The Checkbox theme.","default":"Theme.DEFAULT"},"name":{"type":"PropTypes.string","desc":"The name of the checkbox."},"label":{"type":"PropTypes.any","desc":"Label for checkbox."},"value":{"type":"PropTypes.any","desc":"Value for checkbox.","default":""},"checked":{"type":"PropTypes.bool","desc":"If true,the checkbox will be checked.","default":"false"},"indeterminate":{"type":"PropTypes.bool","default":"false"},"uncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"indeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"disabled":{"type":"PropTypes.bool","desc":"If true, the checkbox will be disabled.","default":"false"},"disableTouchRipple":{"type":"PropTypes.bool","desc":"If true,the element\'s ripple effect will be disabled.","default":"false"},"tip":{"type":"PropTypes.any"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the checkbox status change."},"beforeChange":{"type":"PropTypes.func"},"onClick":{"type":"PropTypes.func"},"onCheck":{"type":"PropTypes.func"},"onUncheck":{"type":"PropTypes.func"}}');const v=function(e){(0,o.Z)(k,e);var t,n,v=(t=k,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var l=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function k(e){var t;return(0,l.Z)(this,k),t=v.call(this,e),(0,u.Z)((0,r.Z)(t),"handleCheck",(function(e){e?console.log("checked::",e):console.log("checked")})),(0,u.Z)((0,r.Z)(t),"handleUncheck",(function(e){e?console.log("unchecked::",e):console.log("unchecked")})),(0,u.Z)((0,r.Z)(t),"handleChange",(function(e){t.setState({checkboxGroupValue:e?(0,a.Z)(t.data):[]})})),(0,u.Z)((0,r.Z)(t),"handleGroupChange",(function(e){console.log("checkbox group changed::",e),t.setState({checkboxGroupValue:e})})),t.state={checkboxGroupValue:[]},t.data=[{id:1,label:"checkbox1",value:1},{id:2,label:"checkbox2",value:2},{id:3,label:"checkbox3",value:3},{id:4,label:"checkbox4",value:4},{id:5,label:"checkbox5",value:5}],t}return(0,c.Z)(k,[{key:"render",value:function(){var e=this.state.checkboxGroupValue;return d.createElement("div",{className:"example checkbox-examples"},d.createElement("h2",{className:"example-title"},"Checkbox"),d.createElement("p",null,"A ",d.createElement("span",null,"Checkbox")," is a control that can be selected multiple times at the same time."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(f.Z,null,d.createElement(m.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Checkbox")," simple example."),d.createElement(p.Z,{label:"Licence",onCheck:this.handleCheck,onUncheck:this.handleUncheck}))))),d.createElement(f.Z,null,d.createElement(m.Z,{className:"example-header",title:"With disabled"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"disabled")," property to true to disable the checkbox."),d.createElement(p.Z,{label:"Licence",disabled:!0}))))),d.createElement(f.Z,null,d.createElement(m.Z,{className:"example-header",title:"CheckboxGroup"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"CheckboxGroup simple example."),d.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,label:"All",checked:e.length===this.data.length,indeterminate:e.length>0&&e.length<this.data.length,onChange:this.handleChange}),d.createElement(h.Z,{theme:h.Z.Theme.HIGHLIGHT,data:this.data,value:e,onChange:this.handleGroupChange,onCheck:this.handleCheck,onUncheck:this.handleUncheck}))))),d.createElement(f.Z,null,d.createElement(m.Z,{className:"example-header",title:"Self Defined Icon"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,label:"Self Defined Icon",uncheckedIconCls:"far fa-window-close",checkedIconCls:"fas fa-window-close"}))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(y.Z,{data:b}))}}]),k}(d.Component)},18989:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(15671),l=n(43144),c=n(97326),r=n(60136),o=n(82963),s=n(61120),i=n(4942),u=n(37699),d=n(45697),p=n.n(d),h=n(23699),f=n(32371),m=n(75717),y=n(50361),b=n.n(y),v=n(1469),k=n.n(v),Z=n(41844),g=n.n(Z),C=n(64997),x=n(62013);var P=function(e){(0,r.Z)(p,e);var t,n,d=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var l=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;(0,a.Z)(this,p);for(var n=arguments.length,l=new Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];return t=d.call.apply(d,[this,e].concat(l)),(0,i.Z)((0,c.Z)(t),"handleChange",(function(e){var n=t.props,a=n.valueField,l=n.labelField,c=b()(t.state.value);if(c&&k()(c)){var r=c.findIndex((function(t){return C.ZP.getValueByValueField(t,a,l)===C.ZP.getValueByValueField(e,a,l)}));r>-1?c.splice(r,1):c.push(e)}else c=[e];t.setState({value:c},(function(){var e,n;return!t.props.disabled&&(null===(e=(n=t.props).onChange)||void 0===e?void 0:e.call(n,c))}))})),t.state={value:e.value},t}return(0,l.Z)(p,[{key:"render",value:function(){var e=this,t=this.props.data;if(!t)return null;var n=this.props,a=n.className,l=n.style,c=n.theme,r=n.name,o=n.disabled,s=n.idField,d=n.valueField,p=n.labelField,f=n.uncheckedIconCls,m=n.checkedIconCls,y=n.indeterminateIconCls,b=n.onCheck,v=n.onUncheck,k=this.state.value;return u.createElement("div",{className:g()("checkbox-group",(0,i.Z)({},a,a)),style:l,disabled:o},t&&t.map((function(t,n){var a=C.ZP.getValueByValueField(t,d,p);return u.createElement(h.Z,{key:t&&s in t?t[s]:n,className:t.className?t.className:"",style:t.style,theme:t.theme||c,uncheckedIconCls:t.uncheckedIconCls||f,checkedIconCls:t.checkedIconCls||m,indeterminateIconCls:t.indeterminateIconCls||y,name:r,label:C.ZP.getTextByDisplayField(t,p,d),value:a,disabled:o||t.disabled,checked:(null==k?void 0:k.findIndex((function(e){return C.ZP.getValueByValueField(e,d,p)===a})))>-1,tip:t.tip,tipPosition:t.tipPosition,onChange:function(){return e.handleChange(t)},onCheck:function(e){return null==b?void 0:b(t,e)},onUncheck:function(e){return null==v?void 0:v(t,e)}})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:x.Z.getDerivedState(e,t,"value")}}}]),p}(u.Component);(0,i.Z)(P,"Theme",f.Z),P.propTypes={className:p().string,style:p().object,theme:p().oneOf(C.ZP.enumerateValue(f.Z)),name:p().string,data:p().arrayOf(p().shape({className:p().string,style:p().object,theme:p().oneOf(C.ZP.enumerateValue(f.Z)),label:p().any,value:p().any,disabled:p().bool,tip:p().any,tipPosition:p().oneOf(C.ZP.enumerateValue(m.Z))})).isRequired,value:p().array,disabled:p().bool,idField:p().oneOfType([p().number,p().string]),valueField:p().string,labelField:p().string,uncheckedIconCls:p().string,checkedIconCls:p().string,indeterminateIconCls:p().string,onChange:p().func,onCheck:p().func,onUncheck:p().func},P.defaultProps={theme:f.Z.DEFAULT,disabled:!1,idField:"id",valueField:"value",labelField:"label"};const E=P},59141:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(8081),l=n.n(a),c=n(23645),r=n.n(c)()(l());r.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=r}}]);
"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[9881],{15439:(e,t,l)=>{l.d(t,{Z:()=>O});var n=l(15671),o=l(43144),a=l(97326),c=l(60136),s=l(82963),r=l(61120),i=l(4942),u=l(37699),p=l(45697),d=l.n(p),f=l(14659),m=l(93379),y=l.n(m),b=l(7795),h=l.n(b),g=l(90569),T=l.n(g),v=l(3565),E=l.n(v),Z=l(19216),C=l.n(Z),P=l(44589),k=l.n(P),x=l(59141),w={};function D(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function B(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?D(Object(l),!0).forEach((function(t){(0,i.Z)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):D(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}w.styleTagTransform=k(),w.setAttributes=E(),w.insert=T().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=C(),y()(x.Z,w),x.Z&&x.Z.locals&&x.Z.locals;var N=function(e){(0,c.Z)(d,e);var t,l,p=(t=d,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,r.Z)(t);if(l){var o=(0,r.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,n.Z)(this,d),t=p.call(this,e),(0,i.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var l in t.props.data)e.push(B({name:l},t.props.data[l]));return e})),t}return(0,o.Z)(d,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(u.Component);N.propTypes={data:d().object};const O=N},59388:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var n=l(15671),o=l(43144),a=l(97326),c=l(60136),s=l(82963),r=l(61120),i=l(4942),u=l(37699),p=l(88550),d=l(51689),f=l(81182),m=l(46748),y=l(74324),b=l(15439);const h=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The css class name of the root element."},"modalClassName":{"type":"PropTypes.string","desc":"The css class name of the modal."},"style":{"type":"PropTypes.object","desc":"The styles of the root element."},"parentEl":{"type":"PropTypes.object","default":"document.body"},"position":{"type":"PropTypes.oneOf","desc":"The dialog alignment.","default":"Position.CENTER"},"disabled":{"type":"PropTypes.bool","desc":"If true,the element will disabled.","default":"false"},"visible":{"type":"PropTypes.bool","desc":"If true,dialog box will display.","default":"false"},"showModal":{"type":"PropTypes.bool","desc":"If true,the pop-up box will be displayed in the mask layer, or the pop-up box will appear below the element.","default":"true"},"title":{"type":"PropTypes.any","desc":"Set the title of dialog."},"isBlurClose":{"type":"PropTypes.bool","desc":"If true,when press down mouse the pop-up box will closed.","default":"false"},"isLoading":{"type":"PropTypes.bool","default":"false"},"okButtonVisible":{"type":"PropTypes.bool","desc":"If true, the OK button will display.","default":"true"},"okButtonText":{"type":"PropTypes.string","desc":"Set the text value of the OK button.","default":"OK"},"okButtonIconCls":{"type":"PropTypes.string","desc":"Set the icon class of the OK button."},"okButtonDisabled":{"type":"PropTypes.bool","desc":"If true, the OK button will disabled.","default":"false"},"okButtonIsLoading":{"type":"PropTypes.bool","desc":"If true, the ok button will have loading effect.","default":"false"},"okButtonTheme":{"type":"PropTypes.oneOf","desc":"Set theme of OK button.","default":"Theme.SUCCESS"},"cancelButtonVisible":{"type":"PropTypes.bool","desc":"If true, the cancel button will display.","default":"true"},"cancelButtonText":{"type":"PropTypes.string","desc":"Set the text value of the cancel button.","default":"Cancel"},"cancelButtonIconCls":{"type":"PropTypes.string","desc":"Set the icon class of the cancel button."},"cancelButtonDisabled":{"type":"PropTypes.bool","desc":"If true, the cancel button will disabled.","default":"false"},"cancelButtonIsLoading":{"type":"PropTypes.bool","desc":"If true, the cancel button will have loading effect.","default":"false"},"cancelButtonTheme":{"type":"PropTypes.oneOf","desc":"Set theme of cancel button.","default":"Theme.DEFAULT"},"closeButtonVisible":{"type":"PropTypes.bool","desc":"If true, the close button in title will display.","default":"true"},"closeIconCls":{"type":"PropTypes.string","default":"fas fa-times"},"isEscClose":{"type":"PropTypes.bool","default":"true"},"buttons":{"type":"PropTypes.any","desc":"The buttons of Dialog."},"onRender":{"type":"PropTypes.func","desc":"The function of dialog render."},"onRequestClose":{"type":"PropTypes.func","desc":"The function that trigger when click submit."},"onOKButtonClick":{"type":"PropTypes.func","desc":"Callback function fired when click the ok button."},"onCancelButtonClick":{"type":"PropTypes.func","desc":"Callback function fired when click the cancel button."},"onCloseButtonClick":{"type":"PropTypes.func","desc":"Callback function fired when click the close button."},"onDestroy":{"type":"PropTypes.func"},"onModalMouseDown":{"type":"PropTypes.func"},"onModalMouseMove":{"type":"PropTypes.func"},"onModalMouseUp":{"type":"PropTypes.func"},"onModalMouseEnter":{"type":"PropTypes.func"},"onModalMouseLeave":{"type":"PropTypes.func"},"onModalClick":{"type":"PropTypes.func"}}');var g=l(93379),T=l.n(g),v=l(7795),E=l.n(v),Z=l(90569),C=l.n(Z),P=l(3565),k=l.n(P),x=l(19216),w=l.n(x),D=l(44589),B=l.n(D),N=l(11950),O={};O.styleTagTransform=B(),O.setAttributes=k(),O.insert=C().bind(null,"head"),O.domAPI=E(),O.insertStyleElement=w(),T()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var R=function(e){(0,c.Z)(T,e);var t,l,g=(t=T,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,r.Z)(t);if(l){var o=(0,r.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function T(e){var t;return(0,n.Z)(this,T),t=g.call(this,e),(0,i.Z)((0,a.Z)(t),"openDialog",(function(e){t.setState((0,i.Z)({},"dialogVisible".concat(e),!0),(function(){2===e&&(document.querySelector(".app").style.filter="blur(10px)")}))})),(0,i.Z)((0,a.Z)(t),"closeDialog",(function(e){t.setState((0,i.Z)({},"dialogVisible".concat(e),!1),(function(){document.querySelector(".app").style.filter=""}))})),(0,i.Z)((0,a.Z)(t),"okHandler",(function(e){console.log("OK button clicked"),e()})),(0,i.Z)((0,a.Z)(t),"cancelHandler",(function(){console.log("Cancel button clicked")})),(0,i.Z)((0,a.Z)(t),"closeHandler",(function(){console.log("Close button clicked")})),t.state={dialogVisible1:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1,dialogVisible5:!1},t}return(0,o.Z)(T,[{key:"render",value:function(){var e=this,t=this.state,l=t.dialogVisible1,n=t.dialogVisible2,o=t.dialogVisible3,a=t.dialogVisible4,c=t.dialogVisible5;return u.createElement("div",{className:"example dialog-examples"},u.createElement("h2",{className:"example-title"},"Dialog"),u.createElement("p",null,u.createElement("span",null,"Dialogs"),"contain text and UI controls focused on a specific task.They inform users about critical information require users to make decisions."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(f.Z,null,u.createElement(m.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"popup-example-wrapper"},u.createElement("p",null,u.createElement("code",null,"Dialog")," example use basic properties."),u.createElement(p.Z,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(1)}}),u.createElement(d.Z,{visible:l,title:"Dialog",okButtonTheme:d.Z.ButtonTheme.PRIMARY,isBlurClose:!0,showModal:!1,onRequestClose:function(){return e.closeDialog(1)},onOKButtonClick:this.okHandler,onCancelButtonClick:this.cancelHandler,onCloseButtonClick:this.closeHandler},u.createElement("div",{className:"dialog-example-content"},"Content")))))),u.createElement(f.Z,null,u.createElement(m.Z,{className:"example-header",title:"Blur Modal"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"popup-example-wrapper"},u.createElement("p",null,u.createElement("code",null,"Dialog")," example use modal."),u.createElement(p.Z,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(2)}}),u.createElement(d.Z,{modalClassName:"blur-modal",visible:n,title:"Dialog",okButtonTheme:d.Z.ButtonTheme.PRIMARY,okButtonText:"OK",okButtonIconCls:"fas fa-check",cancelButtonVisible:!0,cancelButtonText:"CANCEL",cancelButtonIconCls:"fas fa-times",cancelButtonTheme:"error",onRequestClose:function(){return e.closeDialog(2)},onOKButtonClick:this.okHandler,onCancelButtonClick:this.cancelHandler,onCloseButtonClick:this.closeHandler},u.createElement("div",{className:"dialog-example-content"},"Content")))))),u.createElement(f.Z,null,u.createElement(m.Z,{className:"example-header",title:"Customized Buttons"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"popup-example-wrapper"},u.createElement("p",null,u.createElement("code",null,"Dialog")," example use modal."),u.createElement(p.Z,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(3)}}),u.createElement(d.Z,{visible:o,title:"Dialog",buttons:[u.createElement(p.Z,{key:"apply",value:"Apply",disabled:!0}),u.createElement(y.Z,{key:"cancel",value:"Cancel",onClick:function(){return e.closeDialog(3)}})],onRequestClose:function(){return e.closeDialog(3)}},u.createElement("div",{className:"dialog-example-content"},"Content")))))),u.createElement(f.Z,null,u.createElement(m.Z,{className:"example-header",title:"Nexted Dialogs"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"popup-example-wrapper"},u.createElement(p.Z,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(4)}}),u.createElement(d.Z,{visible:a,title:"Dialog",onRequestClose:function(){return e.closeDialog(4)}},u.createElement("div",{className:"dialog-example-content"},u.createElement(p.Z,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(5)}}),u.createElement(d.Z,{visible:c,title:"Dialog",onRequestClose:function(){return e.closeDialog(5)}},u.createElement("div",{className:"dialog-example-content"},"Content")))))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(b.Z,{data:h}))}}]),T}(u.Component);const I=R},59141:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(8081),o=l.n(n),a=l(23645),c=l.n(a)()(o());c.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=c},11950:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(8081),o=l.n(n),a=l(23645),c=l.n(a)()(o());c.push([e.id,".dialog-example-content{width:1000px;height:1000px}.blur-modal{background:rgba(255,255,255,.8)}",""]);const s=c}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{296:function(n,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"e",(function(){return r})),t.d(e,"f",(function(){return l})),t.d(e,"a",(function(){return u})),t.d(e,"g",(function(){return c})),t.d(e,"c",(function(){return s})),t.d(e,"b",(function(){return p})),t.d(e,"i",(function(){return d})),t.d(e,"h",(function(){return m}));var a=t(17),i=function(n){return function(e){e(Object(a.push)(n))}},o=t(3),r=function(){return{type:o.g}},l=function(){return function(n){n({type:o.h}),n({type:o.a})}},u=function(){return{type:o.a}},c=function(){return{type:o.i}},s=function(n){return{type:o.c,menuName:n}},p=function(n){return{type:o.b,route:n}},d=function(n){return{type:o.k,filter:n}},m=function(n){return{type:o.j,activatedMenu:n}}},297:function(n,e,t){"use strict";t.d(e,"a",(function(){return A}));var a=t(217),i=t.n(a),o=t(218),r=t.n(o),l=t(51),u=t.n(l),c=t(52),s=t.n(c),p=t(19),d=t.n(p),m=t(53),f=t.n(m),v=t(36),h=t.n(v),g=t(54),b=t.n(g),x=t(9),y=t.n(x),M=t(0),k=t.n(M),R=t(93),w=t.n(R),E=t(238),N=t.n(E),C=t(305),D=t(329),P=t(253),T=t(240),z=t(239);function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var j=function(n){b()(a,n);var e,t=(e=a,function(){var n,t=h()(e);if(S()){var a=h()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return f()(this,n)});function a(n){var e;u()(this,a);for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return e=t.call.apply(t,[this,n].concat(o)),y()(d()(e),"startRipple",(function(n,t){!e.props.disableTouchRipple&&e.touchRipple&&e.touchRipple.current&&e.touchRipple.current.addRipple(n,t)})),y()(d()(e),"endRipple",(function(){!e.props.disableTouchRipple&&e.touchRipple&&e.touchRipple.current&&e.touchRipple.current.removeRipple()})),y()(d()(e),"triggerRipple",(function(n,t){e.startRipple(n,t),setTimeout((function(){e.endRipple()}),250)})),y()(d()(e),"handleClick",(function(n){var t=e.props,a=t.disabled,i=t.isLoading,o=t.onClick;!a&&!i&&o&&o(n)})),e.touchRipple=Object(M.createRef)(),e}return s()(a,[{key:"render",value:function(){var n,e=this.props,t=e.className,a=e.theme,o=e.iconCls,l=e.disabled,u=e.isLoading,c=e.tip,s=e.tipPosition,p=e.disableTouchRipple,d=e.parentEl,m=r()(e,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple","parentEl"]);return k.a.createElement(P.a,{tipContent:c,parentEl:d,position:s},k.a.createElement("a",i()({},m,{className:N()("icon-anchor",(n={},y()(n,"theme-".concat(a),a),y()(n,t,t),n)),disabled:l||u,onClick:this.handleClick}),u?k.a.createElement(C.a,{size:"small"}):o?k.a.createElement("i",{className:"icon-anchor-icon ".concat(o),"aria-hidden":"true"}):null,p?null:k.a.createElement(D.a,{ref:this.touchRipple,className:l||u?"hidden":"",displayCenter:!0})))}}]),a}(M.Component);y()(j,"Theme",T.a),j.propTypes={className:w.a.string,style:w.a.object,theme:w.a.oneOf(z.a.enumerateValue(T.a)),disabled:w.a.bool,isLoading:w.a.bool,iconCls:w.a.string.isRequired,href:w.a.string,target:w.a.string,alt:w.a.string,disableTouchRipple:w.a.bool,parentEl:w.a.object,tip:w.a.string,tipPosition:w.a.oneOf(z.a.enumerateValue(P.a.Position)),onClick:w.a.func},j.defaultProps={theme:T.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:P.a.Position.BOTTOM};var A=j},311:function(n,e,t){n.exports=t(10)(423)},323:function(n,e,t){"use strict";t.d(e,"a",(function(){return N}));var a=t(51),i=t.n(a),o=t(52),r=t.n(o),l=t(19),u=t.n(l),c=t(53),s=t.n(c),p=t(36),d=t.n(p),m=t(54),f=t.n(m),v=t(9),h=t.n(v),g=t(0),b=t.n(g),x=t(93),y=t.n(x),M=t(238),k=t.n(M),R=t(330);function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var E=function(n){f()(a,n);var e,t=(e=a,function(){var n,t=d()(e);if(w()){var a=d()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return s()(this,n)});function a(n){var e;i()(this,a);for(var o=arguments.length,r=new Array(o>1?o-1:0),l=1;l<o;l++)r[l-1]=arguments[l];return e=t.call.apply(t,[this,n].concat(r)),h()(u()(e),"setLoading",(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=n[t],i=a.width,o=a.timeout,r={};r.width=i+"%",r.transition="width "+o+"ms linear 0ms",e.setState({highlightStyle:r},(function(){t<n.length-1&&(e.clearProgress(),e.progressTimeout=setTimeout((function(){e.setLoading(n,t+1)}),100===i?0:o))}))})),h()(u()(e),"clearProgress",(function(){e.progressTimeout&&clearTimeout(e.progressTimeout)})),h()(u()(e),"handleEnter",(function(){e.clearProgress(),e.setState({highlightStyle:e.defaultHighlightStyle},(function(){e.setLoading()}))})),h()(u()(e),"handleExit",(function(){e.clearProgress(),e.setLoading([{width:100,timeout:e.props.finishDuration}])})),e.progressTimeout=null,e.defaultHighlightStyle={width:0,transition:"width 0s"},e.state={highlightStyle:e.defaultHighlightStyle},e}return r()(a,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var n=this.props,e=n.className,t=n.style,a=n.visible,i=n.duration,o=n.finishDuration,r=n.showStripes,l=this.state.highlightStyle;return(b.a.createElement(R.default,{in:a,timeout:{exit:i+o},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},b.a.createElement("div",{className:k()("page-loading",h()({striped:r},e,e)),style:t},b.a.createElement("div",{className:"page-loading-bar",style:l}))))}}]),a}(g.Component);E.propTypes={className:y.a.string,style:y.a.object,visible:y.a.bool,duration:y.a.number,finishDuration:y.a.number,showStripes:y.a.bool,loadingProgress:y.a.arrayOf(y.a.shape({width:y.a.number,timeout:y.a.number}))},E.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var N=E},331:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/img/alcedo-logo.04a8d36.png"},454:function(n,e,t){n.exports=t(10)(15)},455:function(n,e,t){var a=t(94),i=t(456);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});n.exports=r},456:function(n,e,t){(e=t(95)(!1)).push([n.i,".nav-menu {\n  position: fixed;\n  left: 0;\n  background: #506379;\n  top: 60px;\n  width: 250px;\n  height: calc(100% - 60px);\n  box-sizing: border-box;\n  overflow: hidden;\n  transition-property: width, opacity, transform !important;\n  transition-duration: 250ms !important;\n  transition-timing-function: ease-in-out !important;\n  z-index: 70; }\n  .nav-menu .nav-menu-filter {\n    width: 100%;\n    height: 40px;\n    border-radius: 0;\n    border: none;\n    margin-bottom: 10px;\n    color: rgba(255, 255, 255, 0.7);\n    background: #445467; }\n    .nav-menu .nav-menu-filter .icon-button {\n      margin: 0; }\n  .nav-menu .nav-menu-list {\n    font-size: 12px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: calc(100% - 50px); }\n    .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item {\n      position: relative;\n      box-sizing: border-box;\n      background: #48596d; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link {\n        position: relative;\n        display: block;\n        height: 50px;\n        box-sizing: border-box;\n        padding: 0 15px;\n        color: rgba(255, 255, 255, 0.7);\n        text-decoration: none;\n        cursor: pointer;\n        text-decoration: none;\n        overflow: hidden; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:hover, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:hover {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.05); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:focus, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:focus {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.08); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-name, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-name {\n          opacity: 1;\n          display: block;\n          height: 50px;\n          line-height: 50px;\n          float: left;\n          transition: opacity 50ms ease-in-out 150ms; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button {\n          float: right;\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n          transition: all 250ms ease-in-out; }\n          .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button.collapsed, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button.collapsed {\n            transform: rotate(-90deg); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link.router-link-active {\n        padding: 0 15px 0 12px;\n        border-left: 3px solid #38b1eb;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.08); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-children {\n        overflow: hidden;\n        transition: all 250ms ease-in-out; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.hasChildren {\n        box-shadow: inset rgba(0, 0, 0, 0.05) 0px 3px 1px, inset rgba(0, 0, 0, 0.1) 0px 1px 1px, inset rgba(0, 0, 0, 0.05) 0px -3px 1px, inset rgba(0, 0, 0, 0.1) 0px -1px 1px; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed {\n        background: transparent;\n        box-shadow: none; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed .nav-menu-children {\n          height: 0 !important; }\n\n@media (max-width: 767px) {\n  .app .nav-menu {\n    top: 0 !important;\n    bottom: 0;\n    width: 70%;\n    height: 100%;\n    padding-top: 60px;\n    z-index: 60; }\n  .app.collapsed .nav-menu {\n    transform: translate3d(-100%, 0, 0);\n    opacity: 0; } }\n",""]),n.exports=e},457:function(n,e,t){var a=t(94),i=t(458);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});n.exports=r},458:function(n,e,t){var a=t(95),i=t(224),o=t(331);e=a(!1);var r=i(o);e.push([n.i,".brand {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 250px;\n  height: 60px;\n  font-size: 14px;\n  line-height: 60px;\n  text-align: left;\n  cursor: default;\n  transition: all 250ms ease-in-out;\n  overflow: visible;\n  background: #506379;\n  color: #b8c6d6; }\n  .brand .menu-toggle-button {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    line-height: 0;\n    font-size: 16px;\n    color: #b8c6d6; }\n  .brand .brand-name {\n    margin-left: 18px;\n    box-sizing: border-box;\n    overflow: hidden;\n    height: 60px;\n    text-decoration: none;\n    color: #b8c6d6;\n    transition: color 250ms ease-in-out; }\n    .brand .brand-name .brand-logo {\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 0;\n      width: 30px;\n      height: 30px;\n      margin: 15px 15px 15px 0;\n      background-image: url("+r+");\n      background-size: 30px 30px; }\n    .brand .brand-name:hover {\n      color: #fff; }\n  .brand .github-icon {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    font-size: 20px;\n    color: #b8c6d6; }\n\n@media (max-width: 767px) {\n  .brand {\n    background: #344c67 !important;\n    width: 100% !important;\n    text-align: center; }\n    .brand .menu-toggle-button {\n      display: block; }\n    .brand .brand-name {\n      text-align: center;\n      margin-left: 0; }\n    .brand .github-icon {\n      display: block; } }\n",""]),n.exports=e},459:function(n,e,t){var a=t(94),i=t(460);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});n.exports=r},460:function(n,e,t){(e=t(95)(!1)).push([n.i,".app-nav {\n  height: 60px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 90; }\n  .app-nav .nav-collapse {\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n    width: calc(100% - 250px);\n    background-color: #fff;\n    position: absolute;\n    right: 0;\n    margin-left: 250px;\n    height: 60px;\n    overflow: visible;\n    box-sizing: border-box;\n    transition: all 250ms ease-in-out; }\n    .app-nav .nav-collapse .github-icon {\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      font-size: 24px; }\n\n@media (max-width: 767px) {\n  .app-nav .nav-collapse {\n    width: 0 !important;\n    margin-left: 0 !important;\n    box-shadow: none;\n    overflow: hidden; } }\n",""]),n.exports=e},461:function(n,e,t){var a=t(94),i=t(462);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});n.exports=r},462:function(n,e,t){(e=t(95)(!1)).push([n.i,'.app .app-content {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n  position: relative;\n  background: #fff;\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding: 60px 0 0 250px;\n  transition: all 250ms ease-in-out; }\n  .app .app-content .content-router-view {\n    min-height: 100%; }\n    .app .app-content .content-router-view::before, .app .app-content .content-router-view::after {\n      display: table;\n      content: ""; }\n    .app .app-content .content-router-view::after {\n      clear: both; }\n  .app .app-content .module-loading {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -24px; }\n  .app .app-content .app-content-modal {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n\n@media (max-width: 767px) {\n  .app .app-content {\n    padding-left: 0;\n    transform: translate3d(70%, 0, 0); }\n  .app.collapsed .app-content {\n    transform: translate3d(0, 0, 0); } }\n',""]),n.exports=e},463:function(n,e,t){var a=t(94),i=t(464);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1},r=(a(i,o),i.locals?i.locals:{});n.exports=r},464:function(n,e,t){(e=t(95)(!1)).push([n.i,'.example {\n  padding: 20px 30px 30px; }\n  .example p {\n    padding: 0 0 10px 0;\n    font-size: 14px;\n    line-height: 24px; }\n    .example p span {\n      color: #38b1eb; }\n  .example .example-title {\n    font-size: 18px;\n    cursor: default;\n    padding-bottom: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06); }\n  .example .widget {\n    margin-bottom: 30px; }\n  .example .example-content {\n    padding: 30px; }\n    .example .example-content::before, .example .example-content::after {\n      display: table;\n      content: ""; }\n    .example .example-content::after {\n      clear: both; }\n    .example .example-content code {\n      padding: 5px;\n      margin: 0;\n      background-color: rgba(0, 0, 0, 0.04);\n      border-radius: 3px;\n      font-family: Consolas, Liberation Mono, Menlo, Courier, monospace; }\n  .example .prop-type-desc-table tbody tr td:first-child {\n    color: #38b1eb; }\n  .example .prop-type-desc-table tbody tr td:nth-child(2) {\n    color: #d8534e; }\n  .example .prop-type-desc-table thead tr th {\n    color: #4c637b;\n    font-size: 15px;\n    border: none; }\n\n@media (max-width: 767px) {\n  .example {\n    padding: 8px 16px 16px; }\n    .example .example-content {\n      padding: 16px; } }\n',""]),n.exports=e},821:function(n,e,t){"use strict";t.r(e);var a=t(51),i=t.n(a),o=t(52),r=t.n(o),l=t(53),u=t.n(l),c=t(36),s=t.n(c),p=t(54),d=t.n(p),m=t(0),f=t.n(m),v=t(93),h=t.n(v),g=t(16),b=t(5),x=t(454),y=t(57),M=t(238),k=t.n(M),R=t(296),w=t(259),E=t(19),N=t.n(E),C=t(9),D=t.n(C),P=t(311),T=t(267);function z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var S=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(z()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){var e;return i()(this,a),e=t.call(this,n),D()(N()(e),"menuGroupClickHandler",(function(){var n=e.props,t=n.expandMenuName,a=n.options,i=n.expandMenu;t===a.text?i(""):i(a.text)})),D()(N()(e),"menuClickHandler",(function(){var n=e.props,t=n.options,a=n.depth,i=n.expandMenu,o=n.updateActivatedMenu;0===a&&i(""),o(t)})),e.menuHeight=50,e.subMenuIndent=20,e}return r()(a,[{key:"render",value:function(){var n=this.props,e=n.expandMenuName,t=n.activatedMenu,i=n.options,o=n.depth,r=n.expandMenu,l=n.updateActivatedMenu,u=this.menuHeight,c=this.subMenuIndent,s=e!==i.text,p=i.children&&i.children.length>0;return(f.a.createElement("div",{className:"nav-menu-item ".concat(s?"collapsed":""," ").concat(p?"hasChildren":"")},p?f.a.createElement("div",{className:"nav-menu-item-title",disabled:i.disabled,onClick:this.menuGroupClickHandler},f.a.createElement("div",{className:"nav-menu-item-name"},i.text),f.a.createElement("i",{className:"fas fa-angle-down nav-menu-item-collapse-button\n                                ".concat(s?"collapsed":""),"aria-hidden":"true"}),f.a.createElement(T.a,null)):f.a.createElement(P.Link,{className:k()("nav-menu-item-link",{"router-link-active":t&&t.route===i.route}),to:i.route,disabled:i.disabled,onClick:this.menuClickHandler},f.a.createElement("div",{className:"nav-menu-item-name",style:{marginLeft:o*c}},i.text),f.a.createElement(T.a,null)),p?f.a.createElement("div",{className:"nav-menu-children",style:{height:i.children.length*u}},i&&i.children&&i.children.map((function(n,i){return f.a.createElement(a,{key:i,expandMenuName:e,activatedMenu:t,options:n,depth:o+1,expandMenu:r,updateActivatedMenu:l})}))):null))}}]),a}(m.Component);S.propTypes={expandMenuName:h.a.string,activatedMenu:h.a.object,options:h.a.object,depth:h.a.number,expandMenu:h.a.func,updateActivatedMenu:h.a.func},S.defaultProps={expandMenuName:"",depth:0};var j=S;function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var L=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(A()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){return i()(this,a),t.call(this,n)}return r()(a,[{key:"render",value:function(){var n=this.props,e=n.navMenu,t=n.expandMenuName,a=n.activatedMenu,i=n.expandMenu,o=n.updateActivatedMenu;return(f.a.createElement("div",{className:"nav-menu-list"},f.a.createElement("div",{className:"nav-menu-scroller"},e&&e.map((function(n,e){return f.a.createElement(j,{key:n&&n.text||e,expandMenuName:t,activatedMenu:a,options:n,expandMenu:i,updateActivatedMenu:o})})))))}}]),a}(m.Component);L.propTypes={navMenu:h.a.array,expandMenuName:h.a.string,activatedMenu:h.a.object,expandMenu:h.a.func,updateActivatedMenu:h.a.func};var O=Object(g.connect)((function(n){return{navMenu:n.navMenu.menu,expandMenuName:n.navMenu.expandMenuName,activatedMenu:n.navMenu.activatedMenu}}),(function(n){return Object(b.bindActionCreators)({expandMenu:R.c,updateActivatedMenu:R.h},n)}))(L);t(455);function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var _=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(H()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){return i()(this,a),t.call(this,n)}return r()(a,[{key:"render",value:function(){var n=this.props,e=n.filter,t=n.updateFilter;return(f.a.createElement("div",{className:"nav-menu"},f.a.createElement(w.a,{className:"nav-menu-filter",value:e,rightIconCls:"fas fa-search",onChange:t}),f.a.createElement(O,null)))}}]),a}(m.Component);_.propTypes={filter:h.a.string,updateFilter:h.a.func};var F=Object(g.connect)((function(n){return{filter:n.navMenu.filter}}),(function(n){return Object(b.bindActionCreators)({updateFilter:R.i},n)}))(_),I=t(254),U=t(297);t(457);function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var G=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(B()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){var e;return i()(this,a),e=t.call(this,n),D()(N()(e),"mousedownHandler",(function(n){n.stopPropagation(),e.props.toggleNavMenu()})),e}return r()(a,[{key:"render",value:function(){return f.a.createElement("div",{className:"brand"},f.a.createElement(I.a,{className:"menu-toggle-button",iconCls:"fas fa-bars",onClick:this.mousedownHandler}),f.a.createElement(P.Link,{className:"brand-name",to:"/"},f.a.createElement("i",{className:"brand-logo"}),"Alcedo-UI Examples"),f.a.createElement(U.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"}))}}]),a}(m.Component);G.propTypes={toggleNavMenu:h.a.func};var J=Object(g.connect)((function(n){return{}}),(function(n){return Object(b.bindActionCreators)({toggleNavMenu:R.g},n)}))(G);t(459);function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var q=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(V()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){return i()(this,a),t.call(this,n)}return r()(a,[{key:"render",value:function(){return f.a.createElement("div",{className:"app-nav"},f.a.createElement(J,null),f.a.createElement("div",{className:"nav-collapse floatfix"},f.a.createElement(U.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"})))}}]),a}(m.Component),W=t(323);t(461),t(463);function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var Q=function(n){d()(a,n);var e,t=(e=a,function(){var n,t=s()(e);if(K()){var a=s()(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return u()(this,n)});function a(n){return i()(this,a),t.call(this,n)}return r()(a,[{key:"componentDidMount",value:function(){this.props.expandActivatedMenu(location.hash.slice(1))}},{key:"render",value:function(){var n=this.props,e=n.route,t=n.location,a=n.isDesktop,i=n.navMenuCollapsed,o=n.componentLoading,r=n.collapseNavMenu,l=k()("app",{collapsed:i});return(f.a.createElement("div",{className:l},f.a.createElement(W.a,{visible:o}),f.a.createElement(F,null),f.a.createElement(q,null),f.a.createElement("div",{className:"app-content"},Object(y.renderRoutes)(e.routes),"/components"===t.pathname?f.a.createElement(x.Redirect,{from:"/components",to:"/components/RaisedButton"}):null,a||i?null:f.a.createElement("div",{className:"app-content-modal",onClick:r}))))}}]),a}(m.Component);Q.propTypes={isDesktop:h.a.bool,navMenuCollapsed:h.a.bool,componentLoading:h.a.bool,expandActivatedMenu:h.a.func,collapseNavMenu:h.a.func};e.default=Object(g.connect)((function(n){return{isDesktop:n.device.isDesktop,navMenuCollapsed:n.navMenu.navMenuCollapsed,componentLoading:n.loadComponent.loading}}),(function(n){return Object(b.bindActionCreators)({expandActivatedMenu:R.b,collapseNavMenu:R.a},n)}))(Q)}}]);
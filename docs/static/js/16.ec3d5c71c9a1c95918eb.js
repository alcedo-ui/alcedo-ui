(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(n,e,t){"use strict";var a=t(15),i=function(n){return function(e){e(Object(a.push)(n))}},o=t(2),r=function(){return{type:o.g}},l=function(){return function(n){n({type:o.h}),n({type:o.a})}},u=function(){return{type:o.a}},s=function(){return{type:o.i}},p=function(n){return{type:o.c,menuName:n}},c=function(n){return{type:o.b,route:n}},m=function(n){return{type:o.k,filter:n}},d=function(n){return{type:o.j,activatedMenu:n}};t.d(e,"d",function(){return i}),t.d(e,"e",function(){return r}),t.d(e,"f",function(){return l}),t.d(e,"a",function(){return u}),t.d(e,"g",function(){return s}),t.d(e,"c",function(){return p}),t.d(e,"b",function(){return c}),t.d(e,"i",function(){return m}),t.d(e,"h",function(){return d})},370:function(n,e,t){"use strict";var a=t(315),i=t.n(a),o=t(296),r=t.n(o),l=t(55),u=t.n(l),s=t(56),p=t.n(s),c=t(57),m=t.n(c),d=t(58),v=t.n(d),h=t(19),f=t.n(h),b=t(59),g=t.n(b),x=t(6),y=t.n(x),k=t(0),M=t.n(k),w=t(311),E=t.n(w),N=t(312),C=t.n(N),R=t(376),T=t(404),z=t(328),j=t(314),A=t(313),P=function(n){function e(n){var t,a;u()(this,e);for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];return a=m()(this,(t=v()(e)).call.apply(t,[this,n].concat(o))),y()(f()(a),"startRipple",function(n,e){!a.props.disableTouchRipple&&a.touchRipple&&a.touchRipple.current&&a.touchRipple.current.addRipple(n,e)}),y()(f()(a),"endRipple",function(){!a.props.disableTouchRipple&&a.touchRipple&&a.touchRipple.current&&a.touchRipple.current.removeRipple()}),y()(f()(a),"triggerRipple",function(n,e){a.startRipple(n,e),setTimeout(function(){a.endRipple()},250)}),y()(f()(a),"handleClick",function(n){var e=a.props,t=e.disabled,i=e.isLoading,o=e.onClick;!t&&!i&&o&&o(n)}),a.touchRipple=Object(k.createRef)(),a}return g()(e,n),p()(e,[{key:"render",value:function(){var n,e=this.props,t=e.className,a=e.theme,o=e.iconCls,l=e.disabled,u=e.isLoading,s=e.tip,p=e.tipPosition,c=e.disableTouchRipple,m=e.parentEl,d=r()(e,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple","parentEl"]);return M.a.createElement(z.a,{tipContent:s,parentEl:m,position:p},M.a.createElement("a",i()({},d,{className:C()("icon-anchor",(n={},y()(n,"theme-".concat(a),a),y()(n,t,t),n)),disabled:l||u,onClick:this.handleClick}),u?M.a.createElement(R.a,{size:"small"}):o?M.a.createElement("i",{className:"icon-anchor-icon ".concat(o),"aria-hidden":"true"}):null,c?null:M.a.createElement(T.a,{ref:this.touchRipple,className:l||u?"hidden":"",displayCenter:!0})))}}]),e}(k.Component);y()(P,"Theme",j.a),P.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(A.a.enumerateValue(j.a)),disabled:E.a.bool,isLoading:E.a.bool,iconCls:E.a.string.isRequired,href:E.a.string,target:E.a.string,alt:E.a.string,disableTouchRipple:E.a.bool,parentEl:E.a.object,tip:E.a.string,tipPosition:E.a.oneOf(A.a.enumerateValue(z.a.Position)),onClick:E.a.func},P.defaultProps={theme:j.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:z.a.Position.BOTTOM};var L=P;t.d(e,"a",function(){return L})},382:function(n,e,t){n.exports=t(7)(407)},395:function(n,e,t){"use strict";var a=t(55),i=t.n(a),o=t(56),r=t.n(o),l=t(57),u=t.n(l),s=t(58),p=t.n(s),c=t(19),m=t.n(c),d=t(59),v=t.n(d),h=t(6),f=t.n(h),b=t(0),g=t.n(b),x=t(311),y=t.n(x),k=t(312),M=t.n(k),w=t(405),E=function(n){function e(n){var t,a;i()(this,e);for(var o=arguments.length,r=new Array(o>1?o-1:0),l=1;l<o;l++)r[l-1]=arguments[l];return a=u()(this,(t=p()(e)).call.apply(t,[this,n].concat(r))),f()(m()(a),"setLoading",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props.loadingProgress,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=n[e],i=t.width,o=t.timeout,r={};r.width=i+"%",r.transition="width "+o+"ms linear 0ms",a.setState({highlightStyle:r},function(){e<n.length-1&&(a.clearProgress(),a.progressTimeout=setTimeout(function(){a.setLoading(n,e+1)},100===i?0:o))})}),f()(m()(a),"clearProgress",function(){a.progressTimeout&&clearTimeout(a.progressTimeout)}),f()(m()(a),"handleEnter",function(){a.clearProgress(),a.setState({highlightStyle:a.defaultHighlightStyle},function(){a.setLoading()})}),f()(m()(a),"handleExit",function(){a.clearProgress(),a.setLoading([{width:100,timeout:a.props.finishDuration}])}),a.progressTimeout=null,a.defaultHighlightStyle={width:0,transition:"width 0s"},a.state={highlightStyle:a.defaultHighlightStyle},a}return v()(e,n),r()(e,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var n=this.props,e=n.className,t=n.style,a=n.visible,i=n.duration,o=n.finishDuration,r=n.showStripes,l=this.state.highlightStyle;return g.a.createElement(w.default,{in:a,timeout:{exit:i+o},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},g.a.createElement("div",{className:M()("page-loading",f()({striped:r},e,e)),style:t},g.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),e}(b.Component);E.propTypes={className:y.a.string,style:y.a.object,visible:y.a.bool,duration:y.a.number,finishDuration:y.a.number,showStripes:y.a.bool,loadingProgress:y.a.arrayOf(y.a.shape({width:y.a.number,timeout:y.a.number}))},E.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var N=E;t.d(e,"a",function(){return N})},406:function(n,e,t){n.exports=t.p+"static/img/alcedo-logo.fd3fc21.png"},530:function(n,e,t){n.exports=t(7)(14)},531:function(n,e,t){var a=t(532);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(124)(a,i);a.locals&&(n.exports=a.locals)},532:function(n,e,t){(n.exports=t(123)(!1)).push([n.i,".nav-menu {\n  position: fixed;\n  left: 0;\n  background: #506379;\n  top: 60px;\n  width: 250px;\n  height: calc(100% - 60px);\n  box-sizing: border-box;\n  overflow: hidden;\n  transition-property: width, opacity, transform !important;\n  transition-duration: 250ms !important;\n  transition-timing-function: ease-in-out !important;\n  z-index: 70; }\n  .nav-menu .nav-menu-filter {\n    width: 100%;\n    height: 40px;\n    border-radius: 0;\n    border: none;\n    margin-bottom: 10px;\n    color: rgba(255, 255, 255, 0.7);\n    background: #445467; }\n    .nav-menu .nav-menu-filter .icon-button {\n      margin: 0; }\n  .nav-menu .nav-menu-list {\n    font-size: 12px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: calc(100% - 50px); }\n    .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item {\n      position: relative;\n      box-sizing: border-box;\n      background: #48596d; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link {\n        position: relative;\n        display: block;\n        height: 50px;\n        box-sizing: border-box;\n        padding: 0 15px;\n        color: rgba(255, 255, 255, 0.7);\n        text-decoration: none;\n        cursor: pointer;\n        text-decoration: none;\n        overflow: hidden; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:hover, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:hover {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.05); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title:focus, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link:focus {\n          color: #fff;\n          background: rgba(0, 0, 0, 0.08); }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-name, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-name {\n          opacity: 1;\n          display: block;\n          height: 50px;\n          line-height: 50px;\n          float: left;\n          transition: opacity 50ms ease-in-out 150ms; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button {\n          float: right;\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n          transition: all 250ms ease-in-out; }\n          .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-title .nav-menu-item-collapse-button.collapsed, .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link .nav-menu-item-collapse-button.collapsed {\n            transform: rotate(-90deg); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-item-link.router-link-active {\n        padding: 0 15px 0 12px;\n        border-left: 3px solid #38b1eb;\n        color: #fff;\n        background: rgba(0, 0, 0, 0.08); }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item .nav-menu-children {\n        overflow: hidden;\n        transition: all 250ms ease-in-out; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.hasChildren {\n        box-shadow: inset rgba(0, 0, 0, 0.05) 0px 3px 1px, inset rgba(0, 0, 0, 0.1) 0px 1px 1px, inset rgba(0, 0, 0, 0.05) 0px -3px 1px, inset rgba(0, 0, 0, 0.1) 0px -1px 1px; }\n      .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed {\n        background: transparent;\n        box-shadow: none; }\n        .nav-menu .nav-menu-list .nav-menu-scroller .nav-menu-item.collapsed .nav-menu-children {\n          height: 0 !important; }\n\n@media (max-width: 767px) {\n  .app .nav-menu {\n    top: 0 !important;\n    bottom: 0;\n    width: 70%;\n    height: 100%;\n    padding-top: 60px;\n    z-index: 60; }\n  .app.collapsed .nav-menu {\n    transform: translate3d(-100%, 0, 0);\n    opacity: 0; } }\n",""])},533:function(n,e,t){var a=t(534);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(124)(a,i);a.locals&&(n.exports=a.locals)},534:function(n,e,t){e=n.exports=t(123)(!1);var a=t(303)(t(406));e.push([n.i,".brand {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 250px;\n  height: 60px;\n  font-size: 14px;\n  line-height: 60px;\n  text-align: left;\n  cursor: default;\n  transition: all 250ms ease-in-out;\n  overflow: visible;\n  background: #506379;\n  color: #b8c6d6; }\n  .brand .menu-toggle-button {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    line-height: 0;\n    font-size: 16px;\n    color: #b8c6d6; }\n  .brand .brand-name {\n    margin-left: 18px;\n    box-sizing: border-box;\n    overflow: hidden;\n    height: 60px;\n    text-decoration: none;\n    color: #b8c6d6;\n    transition: color 250ms ease-in-out; }\n    .brand .brand-name .brand-logo {\n      display: inline-block;\n      vertical-align: middle;\n      border-radius: 0;\n      width: 30px;\n      height: 30px;\n      margin: 15px 15px 15px 0;\n      background-image: url("+a+");\n      background-size: 30px 30px; }\n    .brand .brand-name:hover {\n      color: #fff; }\n  .brand .github-icon {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: none;\n    z-index: 1;\n    font-size: 20px;\n    color: #b8c6d6; }\n\n@media (max-width: 767px) {\n  .brand {\n    background: #344c67 !important;\n    width: 100% !important;\n    text-align: center; }\n    .brand .menu-toggle-button {\n      display: block; }\n    .brand .brand-name {\n      text-align: center;\n      margin-left: 0; }\n    .brand .github-icon {\n      display: block; } }\n",""])},535:function(n,e,t){var a=t(536);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(124)(a,i);a.locals&&(n.exports=a.locals)},536:function(n,e,t){(n.exports=t(123)(!1)).push([n.i,".app-nav {\n  height: 60px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 90; }\n  .app-nav .nav-collapse {\n    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n    width: calc(100% - 250px);\n    background-color: #fff;\n    position: absolute;\n    right: 0;\n    margin-left: 250px;\n    height: 60px;\n    overflow: visible;\n    box-sizing: border-box;\n    transition: all 250ms ease-in-out; }\n    .app-nav .nav-collapse .github-icon {\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      font-size: 24px; }\n\n@media (max-width: 767px) {\n  .app-nav .nav-collapse {\n    width: 0 !important;\n    margin-left: 0 !important;\n    box-shadow: none;\n    overflow: hidden; } }\n",""])},537:function(n,e,t){var a=t(538);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(124)(a,i);a.locals&&(n.exports=a.locals)},538:function(n,e,t){(n.exports=t(123)(!1)).push([n.i,'.app .app-content {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 1px, rgba(0, 0, 0, 0.1) 0px 1px 1px;\n  position: relative;\n  background: #fff;\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding: 60px 0 0 250px;\n  transition: all 250ms ease-in-out; }\n  .app .app-content .content-router-view {\n    min-height: 100%; }\n    .app .app-content .content-router-view::before, .app .app-content .content-router-view::after {\n      display: table;\n      content: ""; }\n    .app .app-content .content-router-view::after {\n      clear: both; }\n  .app .app-content .module-loading {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin: -24px; }\n  .app .app-content .app-content-modal {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n\n@media (max-width: 767px) {\n  .app .app-content {\n    padding-left: 0;\n    transform: translate3d(70%, 0, 0); }\n  .app.collapsed .app-content {\n    transform: translate3d(0, 0, 0); } }\n',""])},539:function(n,e,t){var a=t(540);"string"==typeof a&&(a=[[n.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(124)(a,i);a.locals&&(n.exports=a.locals)},540:function(n,e,t){(n.exports=t(123)(!1)).push([n.i,'.example {\n  padding: 20px 30px 30px; }\n  .example p {\n    padding: 0 0 10px 0;\n    font-size: 14px;\n    line-height: 24px; }\n    .example p span {\n      color: #38b1eb; }\n  .example .example-title {\n    font-size: 18px;\n    cursor: default;\n    padding-bottom: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.06); }\n  .example .widget {\n    margin-bottom: 30px; }\n  .example .example-content {\n    padding: 30px; }\n    .example .example-content::before, .example .example-content::after {\n      display: table;\n      content: ""; }\n    .example .example-content::after {\n      clear: both; }\n    .example .example-content code {\n      padding: 5px;\n      margin: 0;\n      background-color: rgba(0, 0, 0, 0.04);\n      border-radius: 3px;\n      font-family: Consolas, Liberation Mono, Menlo, Courier, monospace; }\n  .example .prop-type-desc-table tbody tr td:first-child {\n    color: #38b1eb; }\n  .example .prop-type-desc-table tbody tr td:nth-child(2) {\n    color: #d8534e; }\n  .example .prop-type-desc-table thead tr th {\n    color: #4c637b;\n    font-size: 15px;\n    border: none; }\n\n@media (max-width: 767px) {\n  .example {\n    padding: 8px 16px 16px; }\n    .example .example-content {\n      padding: 16px; } }\n',""])},894:function(n,e,t){"use strict";t.r(e);var a=t(55),i=t.n(a),o=t(56),r=t.n(o),l=t(57),u=t.n(l),s=t(58),p=t.n(s),c=t(59),m=t.n(c),d=t(0),v=t.n(d),h=t(311),f=t.n(h),b=t(14),g=t(3),x=t(530),y=t(63),k=t(312),M=t.n(k),w=t(369),E=t(336),N=t(19),C=t.n(N),R=t(6),T=t.n(R),z=t(382),j=t(341),A=function(n){function e(n){var t;return i()(this,e),t=u()(this,p()(e).call(this,n)),T()(C()(t),"menuGroupClickHandler",function(){var n=t.props,e=n.expandMenuName,a=n.options,i=n.expandMenu;e===a.text?i(""):i(a.text)}),T()(C()(t),"menuClickHandler",function(){var n=t.props,e=n.options,a=n.depth,i=n.expandMenu,o=n.updateActivatedMenu;0===a&&i(""),o(e)}),t.menuHeight=50,t.subMenuIndent=20,t}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,t=n.expandMenuName,a=n.activatedMenu,i=n.options,o=n.depth,r=n.expandMenu,l=n.updateActivatedMenu,u=this.menuHeight,s=this.subMenuIndent,p=t!==i.text,c=i.children&&i.children.length>0;return v.a.createElement("div",{className:"nav-menu-item ".concat(p?"collapsed":""," ").concat(c?"hasChildren":"")},c?v.a.createElement("div",{className:"nav-menu-item-title",disabled:i.disabled,onClick:this.menuGroupClickHandler},v.a.createElement("div",{className:"nav-menu-item-name"},i.text),v.a.createElement("i",{className:"fas fa-angle-down nav-menu-item-collapse-button\n                                ".concat(p?"collapsed":""),"aria-hidden":"true"}),v.a.createElement(j.a,null)):v.a.createElement(z.Link,{className:M()("nav-menu-item-link",{"router-link-active":a&&a.route===i.route}),to:i.route,disabled:i.disabled,onClick:this.menuClickHandler},v.a.createElement("div",{className:"nav-menu-item-name",style:{marginLeft:o*s}},i.text),v.a.createElement(j.a,null)),c?v.a.createElement("div",{className:"nav-menu-children",style:{height:i.children.length*u}},i&&i.children&&i.children.map(function(n,i){return v.a.createElement(e,{key:i,expandMenuName:t,activatedMenu:a,options:n,depth:o+1,expandMenu:r,updateActivatedMenu:l})})):null)}}]),e}(d.Component);A.propTypes={expandMenuName:f.a.string,activatedMenu:f.a.object,options:f.a.object,depth:f.a.number,expandMenu:f.a.func,updateActivatedMenu:f.a.func},A.defaultProps={expandMenuName:"",depth:0};var P=A,L=function(n){function e(n){return i()(this,e),u()(this,p()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,e=n.navMenu,t=n.expandMenuName,a=n.activatedMenu,i=n.expandMenu,o=n.updateActivatedMenu;return v.a.createElement("div",{className:"nav-menu-list"},v.a.createElement("div",{className:"nav-menu-scroller"},e&&e.map(function(n,e){return v.a.createElement(P,{key:n&&n.text||e,expandMenuName:t,activatedMenu:a,options:n,expandMenu:i,updateActivatedMenu:o})})))}}]),e}(d.Component);L.propTypes={navMenu:f.a.array,expandMenuName:f.a.string,activatedMenu:f.a.object,expandMenu:f.a.func,updateActivatedMenu:f.a.func};var O=Object(b.connect)(function(n){return{navMenu:n.navMenu.menu,expandMenuName:n.navMenu.expandMenuName,activatedMenu:n.navMenu.activatedMenu}},function(n){return Object(g.bindActionCreators)({expandMenu:w.c,updateActivatedMenu:w.h},n)})(L),S=(t(531),function(n){function e(n){return i()(this,e),u()(this,p()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){var n=this.props,e=n.filter,t=n.updateFilter;return v.a.createElement("div",{className:"nav-menu"},v.a.createElement(E.a,{className:"nav-menu-filter",value:e,rightIconCls:"fas fa-search",onChange:t}),v.a.createElement(O,null))}}]),e}(d.Component));S.propTypes={filter:f.a.string,updateFilter:f.a.func};var H=Object(b.connect)(function(n){return{filter:n.navMenu.filter}},function(n){return Object(g.bindActionCreators)({updateFilter:w.i},n)})(S),D=t(329),I=t(370),F=(t(533),function(n){function e(n){var t;return i()(this,e),t=u()(this,p()(e).call(this,n)),T()(C()(t),"mousedownHandler",function(n){n.stopPropagation(),t.props.toggleNavMenu()}),t}return m()(e,n),r()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"brand"},v.a.createElement(D.a,{className:"menu-toggle-button",iconCls:"fas fa-bars",onClick:this.mousedownHandler}),v.a.createElement(z.Link,{className:"brand-name",to:"/"},v.a.createElement("i",{className:"brand-logo"}),"Alcedo-UI Examples"),v.a.createElement(I.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"}))}}]),e}(d.Component));F.propTypes={toggleNavMenu:f.a.func};var U=Object(b.connect)(function(n){return{}},function(n){return Object(g.bindActionCreators)({toggleNavMenu:w.g},n)})(F),B=(t(535),function(n){function e(n){return i()(this,e),u()(this,p()(e).call(this,n))}return m()(e,n),r()(e,[{key:"render",value:function(){return v.a.createElement("div",{className:"app-nav"},v.a.createElement(U,null),v.a.createElement("div",{className:"nav-collapse floatfix"},v.a.createElement(I.a,{className:"github-icon",iconCls:"fab fa-github",href:"https://github.com/alcedo-ui/alcedo-ui"})))}}]),e}(d.Component)),G=t(395),J=(t(537),t(539),function(n){function e(n){return i()(this,e),u()(this,p()(e).call(this,n))}return m()(e,n),r()(e,[{key:"componentDidMount",value:function(){this.props.expandActivatedMenu(location.hash.slice(1))}},{key:"render",value:function(){var n=this.props,e=n.route,t=n.location,a=n.isDesktop,i=n.navMenuCollapsed,o=n.componentLoading,r=n.collapseNavMenu,l=M()("app",{collapsed:i});return v.a.createElement("div",{className:l},v.a.createElement(G.a,{visible:o}),v.a.createElement(H,null),v.a.createElement(B,null),v.a.createElement("div",{className:"app-content"},Object(y.renderRoutes)(e.routes),"/components"===t.pathname?v.a.createElement(x.Redirect,{from:"/components",to:"/components/RaisedButton"}):null,a||i?null:v.a.createElement("div",{className:"app-content-modal",onClick:r})))}}]),e}(d.Component));J.propTypes={isDesktop:f.a.bool,navMenuCollapsed:f.a.bool,componentLoading:f.a.bool,expandActivatedMenu:f.a.func,collapseNavMenu:f.a.func};e.default=Object(b.connect)(function(n){return{isDesktop:n.device.isDesktop,navMenuCollapsed:n.navMenu.navMenuCollapsed,componentLoading:n.loadComponent.loading}},function(n){return Object(g.bindActionCreators)({expandActivatedMenu:w.b,collapseNavMenu:w.a},n)})(J)}}]);
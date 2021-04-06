(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5686],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const l=a},24427:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".circular-loading-examples .circular-loading{margin-right:25px}\n",""]);const l=a},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(6610),a=n(5991),l=n(63349),c=n(10379),i=n(46070),o=n(77608),s=n(96156),p=n(37699),u=n(45697),m=n.n(u),d=n(82996),f=n(93379),h=n.n(f),g=n(59141);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var Z=function(e){(0,c.Z)(m,e);var t,n,u=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,i.Z)(this,e)});function m(e){var t;return(0,r.Z)(this,m),t=u.call(this,e),(0,s.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(E({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(m,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(p.Component);Z.propTypes={data:m().object};const v=Z},61747:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y});var r=n(6610),a=n(5991),l=n(10379),c=n(46070),i=n(77608),o=n(37699),s=n(65059),p=n(24471),u=n(50704),m=n(1116);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"size":{"type":"PropTypes.oneOf","desc":"Set the size of loading,can use small or large.","default":"CircularLoading.Size.DEFAULT"},"theme":{"type":"PropTypes.oneOf","desc":"Set the theme of loading,can use highlight,success,error,warning.","default":""},"weight":{"type":"PropTypes.number","desc":"Set the CircularLoading border-width."},"type":{"type":"PropTypes.string","desc":"Set the border style of CircularLoading,can use solid,dotted.","default":"solid"}}');var f=n(93379),h=n.n(f),g=n(24427);h()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const y=function(e){(0,l.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){return(0,r.Z)(this,h),f.call(this,e)}return(0,a.Z)(h,[{key:"render",value:function(){return o.createElement("div",{className:"example circular-loading-examples"},o.createElement("h2",{className:"example-title"},"CircularLoading"),o.createElement("p",null,o.createElement("span",null,"CircularLoading"),"use to show pages and blocks loading status."),o.createElement("h2",{className:"example-title"},"Examples"),o.createElement(p.Z,null,o.createElement(u.Z,{className:"example-header",title:"CircularLoading Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("p",null,"A simple CircularLoading example."),o.createElement(s.Z,{spanning:!0})))),o.createElement(p.Z,null,o.createElement(u.Z,{className:"example-header",title:"CircularLoading Size Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("p",null,"Set the size property to small or large for different size CircularLoading."),o.createElement(s.Z,{spanning:!0,size:"small"}),o.createElement(s.Z,{spanning:!0}),o.createElement(s.Z,{spanning:!0,size:"large"})))),o.createElement(p.Z,null,o.createElement(u.Z,{className:"example-header",title:"CircularLoading Theme Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("p",null,"Set the theme property for different theme CircularLoading."),o.createElement(s.Z,{spanning:!0}),o.createElement(s.Z,{spanning:!0,theme:s.Z.Theme.SUCCESS}),o.createElement(s.Z,{spanning:!0,theme:s.Z.Theme.ERROR}),o.createElement(s.Z,{spanning:!0,theme:s.Z.Theme.WARNING}),o.createElement(s.Z,{spanning:!0,theme:s.Z.Theme.HIGHLIGHT})))),o.createElement(p.Z,null,o.createElement(u.Z,{className:"example-header",title:"CircularLoading Type Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("p",null,"Set the type property for different border-style CircularLoading."),o.createElement(s.Z,{spanning:!0}),o.createElement(s.Z,{spanning:!0,type:"dotted"})))),o.createElement(p.Z,null,o.createElement(u.Z,{className:"example-header",title:"CircularLoading Weight Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("p",null,"Set the weight property for different border-width CircularLoading."),o.createElement(s.Z,{spanning:!0,weight:4,size:s.Z.Size.LARGE}),o.createElement(s.Z,{spanning:!0,weight:2,type:"dotted"})))),o.createElement("h2",{className:"example-title"},"Properties"),o.createElement(m.Z,{data:d}))}}]),h}(o.Component)}}]);
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[980],{4852:function(e){"use strict";e.exports=Object.assign},3338:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Je}});var r,o,i,a,c=n(7294),l=n(5697),s=n.n(l),u=n(3524),p=n.n(u),d=n(9590),f=n.n(d),m=n(4852),h=n.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),x="cssText",C="href",E="http-equiv",T="innerHTML",S="itemprop",k="name",_="property",A="rel",j="src",O="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",N="encodeSpecialCharacters",P="onChangeClientState",B="titleTemplate",q=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,w.TITLE),n=$(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},V=function(e){return $(e,P)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===A&&"canonical"===e[n].toLowerCase()||l===A&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==T&&c!==x&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;le(w.BODY,r),le(w.HTML,o),ce(p,d);var f={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+z+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,o=pe(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+" "+z+'="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+" "+z+'="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===T||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+" "+z+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(y,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,s,r),title:de(w.TITLE,{title:p,titleAttributes:d},r)}},me=p()((function(e){return{baseTag:G([C,O],e),bodyAttributes:Z(g,e),defer:$(e,M),encode:$(e,N),htmlAttributes:Z(y,e),linkTags:X(w.LINK,[A,C],e),metaTags:X(w.META,[k,v,E,_,S],e),noscriptTags:X(w.NOSCRIPT,[T],e),onChangeClientState:V(e),scriptTags:X(w.SCRIPT,[j,T],e),styleTags:X(w.STYLE,[x],e),title:J(e),titleAttributes:Z(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),fe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return R(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case w.BODY:return U({},o,{bodyAttributes:U({},i)});case w.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},D(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ge=n(4480),ye=n(2788);var be=(0,ye.createGlobalStyle)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;word-break:keep-all;word-wrap:break-word;}menu,ol,ul{}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}body{font-family:'Noto Sans KR',sans-serif;font-size:16px;background-color:",";color:",";line-height:1.2;}a{text-decoration:none;color:inherit;}html{scroll-behavior:smooth;}:root{--vh:100%;}"],(e=>e.theme.colors.bgColor),(e=>e.theme.colors.textColor));const we={colors:{ownColor:"#00a8ff",ownColorHover:"#0086cc",bgColor:"#ffffff",textColor:"#000000",subTextColor:"#666666",tabColor:"#eeeeee",boxColor:"#ffffff",boxTabColor:"#eeeeee",boxTextColor:"#666666",selectBoxColor:"#1a1a1a",postDateColor:"#333333",postContentColor:"#666666",footerBgColor:"#ffffff",footerBorderColor:"#ebebeb"},device:{mobile:"screen and (max-width: 767px)",tablet:"screen and (max-width: 1023px)",laptop:"screen and (max-width: 1439px)"}},ve={colors:{ownColor:"#00a8ff",ownColorHover:"#0086cc",bgColor:"#000000",textColor:"#ffffff",subTextColor:"#777777",tabColor:"#333333",boxColor:"#333333",boxTabColor:"#444444",boxTextColor:"#999999",selectBoxColor:"#ffffff",postDateColor:"#a8a8a8",postContentColor:"#a8a8a8",footerBgColor:"#111111",footerBorderColor:"#111111"},device:{mobile:"screen and (max-width: 767px)",tablet:"screen and (max-width: 1023px)",laptop:"screen and (max-width: 1439px)"}};var xe=n(4489),Ce=n(1883);function Ee(){const[e,t]=(0,ge.FV)(xe.J),n=(0,ge.Zl)(xe._),{0:r,1:o}=(0,c.useState)(!1);return(0,c.useEffect)((()=>{const e=document.createElement("div");document.body.prepend(e);const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?o(!1):o(!0)}))}));return t.observe(e),()=>{t.disconnect()}})),c.createElement(Ie,{isBorder:r},c.createElement(Oe,null,c.createElement(Ce.rU,{to:"/"},c.createElement(je,null,"won")),c.createElement(Ae,null,Le.map(((e,t)=>c.createElement(Ce.rU,{to:e.link,activeStyle:{color:"#00a8ff"},partiallyActive:!0,key:t},c.createElement(_e,null,e.title))))),c.createElement(ke,null,c.createElement(Se,null,c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}))),c.createElement(Se,{onClick:()=>t((e=>!e))},e?c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})):c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}))),c.createElement(Te,{onClick:()=>n((e=>!e))},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"}))))))}const Te=ye.default.li.withConfig({displayName:"Header__S_SidebarIcon",componentId:"sc-l8jipn-0"})(["display:none;width:24px;height:24px;cursor:pointer;list-style:none;&:hover{opacity:0.5;}@media ","{display:block;width:28px;height:28px;}"],(e=>e.theme.device.tablet)),Se=ye.default.li.withConfig({displayName:"Header__S_Icon",componentId:"sc-l8jipn-1"})(["width:24px;height:24px;cursor:pointer;list-style:none;&:hover{opacity:0.5;}@media ","{width:28px;height:28px;}"],(e=>e.theme.device.tablet)),ke=ye.default.ul.withConfig({displayName:"Header__S_IconList",componentId:"sc-l8jipn-2"})(["display:flex;align-items:center;gap:10px;"]),_e=ye.default.li.withConfig({displayName:"Header__S_Menu",componentId:"sc-l8jipn-3"})(["list-style:none;line-height:72px;font-weight:700;padding:0 28px;&:hover{opacity:0.5;}@media ","{line-height:60px;}"],(e=>e.theme.device.tablet)),Ae=ye.default.ul.withConfig({displayName:"Header__S_MenuList",componentId:"sc-l8jipn-4"})(["display:flex;@media ","{display:none;}"],(e=>e.theme.device.tablet)),je=ye.default.span.withConfig({displayName:"Header__S_Home",componentId:"sc-l8jipn-5"})(["width:66px;font-size:28px;line-height:72px;font-weight:700;cursor:pointer;&:hover{opacity:0.5;}@media ","{line-height:60px;}"],(e=>e.theme.device.tablet)),Oe=ye.default.div.withConfig({displayName:"Header__S_HeaderContainerList",componentId:"sc-l8jipn-6"})(["max-width:1296px;height:72px;margin:0 auto;display:flex;justify-content:space-between;@media ","{max-width:952px;}@media ","{height:60px;max-width:630px;}@media ","{max-width:412px;padding:0 24px;}"],(e=>e.theme.device.laptop),(e=>e.theme.device.tablet),(e=>e.theme.device.mobile)),Ie=ye.default.header.withConfig({displayName:"Header__S_HeaderContainer",componentId:"sc-l8jipn-7"})(["position:fixed;width:100%;top:0;z-index:2000;background-color:",";border-bottom:",";"],(e=>e.theme.colors.bgColor),(e=>e.isBorder?"1px solid "+e.theme.colors.tabColor:"none")),Le=[{title:"Project",link:"/project"},{title:"Study Blog",link:"/study-blog"}];function Me(){const[e,t]=(0,ge.FV)(xe._);return c.createElement(qe,{isSidebar:e},c.createElement(Be,{onClick:()=>t((e=>!e))},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2"},c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))),c.createElement(Pe,null,c.createElement(Ce.rU,{to:"/"},c.createElement(Ne,{onClick:()=>t((e=>!e))},"Home")),c.createElement(Ce.rU,{to:"/project"},c.createElement(Ne,{onClick:()=>t((e=>!e))},"Project")),c.createElement(Ce.rU,{to:"/study-blog"},c.createElement(Ne,{onClick:()=>t((e=>!e))},"Study Blog"))))}const Ne=ye.default.li.withConfig({displayName:"Sidebar__S_Menu",componentId:"sc-1pojqly-0"})(["font-size:36px;line-height:52px;font-weight:700;letter-spacing:-0.8px;list-style:none;cursor:pointer;&:hover{opacity:0.5;}"]),Pe=ye.default.ul.withConfig({displayName:"Sidebar__S_MenuList",componentId:"sc-1pojqly-1"})(["margin-top:100px;display:flex;flex-direction:column;gap:36px;"]),Be=ye.default.div.withConfig({displayName:"Sidebar__S_CloseIcon",componentId:"sc-1pojqly-2"})(["width:28px;height:28px;position:absolute;top:18px;right:18px;cursor:pointer;&:hover{opacity:0.5;}"]),qe=ye.default.div.withConfig({displayName:"Sidebar__S_Container",componentId:"sc-1pojqly-3"})(["position:fixed;top:0;right:0;height:100%;width:calc(100% - 45px);padding:0 24px;background:",";transform:",";transition:all 0.4s;z-index:3000;"],(e=>e.theme.colors.bgColor),(e=>e.isSidebar?"translateX(0%)":"translateX(200%)"));function He(){return c.createElement(Ke,null,c.createElement(We,null,c.createElement(Ye,null,"Wonjong Jang"),c.createElement(Ue,null,"bjlaancgk@naver.com"),c.createElement(De,null,c.createElement(Re,null,c.createElement(Fe,{viewBox:"0 0 32.6 31.8",onClick:()=>window.open("https://github.com/wonjongjang")},c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5 c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4 C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7 c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5 c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"})),c.createElement(Fe,{viewBox:"0 0 40.2 40.3",onClick:()=>window.open("https://www.instagram.com/1xong/")},c.createElement("g",null,c.createElement("path",{d:"M20.2,3.6c5.4,0,6,0,8.2,0.1c2,0.1,3,0.4,3.7,0.7C33,4.8,33.7,5.3,34.4,6s1.1,1.4,1.5,2.3 c0.3,0.7,0.6,1.8,0.7,3.7c0.1,2.1,0.1,2.8,0.1,8.2s0,6-0.1,8.2c-0.1,2-0.4,3-0.7,3.7c-0.4,0.9-0.8,1.6-1.5,2.3s-1.4,1.1-2.3,1.5 c-0.7,0.3-1.8,0.6-3.7,0.7c-2.1,0.1-2.8,0.1-8.2,0.1s-6,0-8.2-0.1c-2-0.1-3-0.4-3.7-0.7c-0.9-0.4-1.6-0.8-2.3-1.5S4.9,33,4.5,32.1 c-0.3-0.7-0.6-1.8-0.7-3.7c-0.1-2.1-0.1-2.8-0.1-8.2s0-6,0.1-8.2c0.1-2,0.4-3,0.7-3.7C4.8,7.3,5.3,6.7,6,6s1.4-1.1,2.3-1.5 C9,4.2,10.1,3.8,12,3.8C14.2,3.7,14.8,3.6,20.2,3.6 M20.2,0c-5.5,0-6.2,0-8.3,0.1C9.7,0.2,8.2,0.6,7,1.1C5.6,1.6,4.5,2.3,3.4,3.4 S1.6,5.6,1.1,7c-0.5,1.3-0.8,2.8-0.9,4.9C0,14,0,14.7,0,20.2s0,6.2,0.1,8.3s0.4,3.6,0.9,4.9c0.5,1.3,1.2,2.5,2.3,3.6 s2.2,1.8,3.6,2.3c1.3,0.5,2.8,0.8,4.9,0.9c2.2,0.1,2.8,0.1,8.3,0.1s6.2,0,8.3-0.1s3.6-0.4,4.9-0.9c1.3-0.5,2.5-1.2,3.6-2.3 s1.8-2.2,2.3-3.6c0.5-1.3,0.8-2.8,0.9-4.9c0.1-2.2,0.1-2.8,0.1-8.3s0-6.2-0.1-8.3S39.7,8.3,39.2,7S38,4.5,36.9,3.4 s-2.2-1.8-3.6-2.3c-1.3-0.5-2.8-0.8-4.9-0.9C26.3,0,25.7,0,20.2,0L20.2,0L20.2,0z"}),c.createElement("path",{d:"M20.2,9.8c-5.7,0-10.4,4.6-10.4,10.4s4.6,10.4,10.4,10.4S30.6,26,30.6,20.2S25.9,9.8,20.2,9.8L20.2,9.8z M20.2,26.9c-3.7,0-6.7-3-6.7-6.7s3-6.7,6.7-6.7s6.7,3,6.7,6.7C26.9,23.9,23.9,26.9,20.2,26.9L20.2,26.9z"}),c.createElement("path",{d:"M33.4,9.4c0,1.3-1.1,2.4-2.4,2.4s-2.4-1.1-2.4-2.4s1-2.4,2.3-2.4C32.2,7,33.4,8.1,33.4,9.4L33.4,9.4z"})))),c.createElement(ze,null,"© 2023 Wonjong Jang. Built with Gatsby."))))}const ze=ye.default.span.withConfig({displayName:"Footer__S_Copy",componentId:"sc-bgv804-0"})(["font-size:12px;"]),Fe=ye.default.svg.withConfig({displayName:"Footer__S_Icon",componentId:"sc-bgv804-1"})(["width:24px;height:24px;fill:#888888;cursor:pointer;:hover{opacity:0.5;}"]),Re=ye.default.div.withConfig({displayName:"Footer__S_IconWrapper",componentId:"sc-bgv804-2"})(["display:flex;align-items:center;gap:24px;"]),De=ye.default.div.withConfig({displayName:"Footer__S_BottomWrapper",componentId:"sc-bgv804-3"})(["display:flex;justify-content:space-between;align-items:center;margin-top:36px;@media ","{flex-direction:column;align-items:flex-start;gap:8px;}"],(e=>e.theme.device.mobile)),Ue=ye.default.p.withConfig({displayName:"Footer__S_Email",componentId:"sc-bgv804-4"})(["margin-top:12px;font-size:14px;font-weight:400;line-height:20px;letter-spacing:-0.2px;"]),Ye=ye.default.p.withConfig({displayName:"Footer__S_Name",componentId:"sc-bgv804-5"})(["font-size:14px;font-weight:700;line-height:20px;letter-spacing:-0.2px;"]),We=ye.default.div.withConfig({displayName:"Footer__S_Wrapper",componentId:"sc-bgv804-6"})(["max-width:1296px;margin:0 auto;padding:37px 0 48px;@media ","{max-width:952px;padding-top:36px;}@media ","{max-width:630px;}@media ","{max-width:412px;padding-left:24px;padding-right:24px;}"],(e=>e.theme.device.laptop),(e=>e.theme.device.tablet),(e=>e.theme.device.mobile)),Ke=ye.default.footer.withConfig({displayName:"Footer__S_Container",componentId:"sc-bgv804-7"})(["width:100%;background-color:",";border-top:1px solid ",";color:#888888;"],(e=>e.theme.colors.footerBgColor),(e=>e.theme.colors.footerBorderColor));function Je(e){let{title:t,description:n,url:r,children:o}=e;const i=(0,ge.sJ)(xe.J),[a,l]=(0,ge.FV)(xe._);return c.createElement(c.Fragment,null,c.createElement(he,null,c.createElement("title",null,t),c.createElement("meta",{name:"description",content:n}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.createElement("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:title",content:t}),c.createElement("meta",{property:"og:description",content:n}),c.createElement("meta",{property:"og:url",content:r}),c.createElement("meta",{property:"og:site_name",content:t}),c.createElement("meta",{name:"twitter:card",content:"summary"}),c.createElement("meta",{name:"twitter:title",content:t}),c.createElement("meta",{name:"twitter:description",content:n}),c.createElement("meta",{name:"twitter:site",content:"@사용자이름"}),c.createElement("meta",{name:"twitter:creator",content:"@사용자이름"}),c.createElement("meta",{name:"google-site-verification",content:"lz6jkkwIl4-59M3vpHwBjlxhAswmWkwYjhHevpmfT9g"}),c.createElement("meta",{name:"naver-site-verification",content:"3f64aa84fd909733696623e2e7c97e84d3cb1233"}),c.createElement("html",{lang:"ko"})),c.createElement(ye.ThemeProvider,{theme:i?ve:we},c.createElement(be,null),c.createElement(Ee,null),c.createElement(Ge,null,c.createElement(Ze,null,o)),c.createElement(He,null),c.createElement(Me,null),c.createElement(Ve,{isSidebar:a,onClick:()=>l((e=>!e))})))}const Ve=ye.default.div.withConfig({displayName:"Layout__S_Backdrop",componentId:"sc-1up8qu8-0"})(["position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.7);display:",";z-index:2000;"],(e=>e.isSidebar?"block":"none")),Ze=ye.default.div.withConfig({displayName:"Layout__S_PageContainer",componentId:"sc-1up8qu8-1"})(["padding-top:72px;@media ","{padding-top:48px;}"],(e=>e.theme.device.tablet)),Ge=ye.default.main.withConfig({displayName:"Layout__S_Content",componentId:"sc-1up8qu8-2"})(["max-width:1296px;padding:72px 0 172px;margin:0 auto;@media ","{max-width:952px;}@media ","{max-width:630px;padding:60px 0 172px;}@media ","{max-width:412px;padding:60px 24px 172px;}"],(e=>e.theme.device.laptop),(e=>e.theme.device.tablet),(e=>e.theme.device.mobile));ye.default.div.withConfig({displayName:"Layout__S_Container",componentId:"sc-1up8qu8-3"})(["height:100%;display:flex;flex-direction:column;"])},4489:function(e,t,n){"use strict";n.d(t,{J:function(){return i},_:function(){return a}});var r=n(4480);const o=(0,r.nZ)({key:"themeSelector",get:()=>"undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches}),i=(0,r.cn)({key:"theme",default:o}),a=(0,r.cn)({key:"sidebar",default:!1})},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}}}]);
//# sourceMappingURL=840420542dd93dc6ceeaa84699e92c1989439ec9-85f17d6234d66eb0721f.js.map
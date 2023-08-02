"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[765,691],{5868:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var n={};r.r(n),r.d(n,{exclude:function(){return j},extract:function(){return w},parse:function(){return C},parseUrl:function(){return E},pick:function(){return v},stringify:function(){return k},stringifyUrl:function(){return I}});var o=r(7294);const a="%[a-f0-9]{2}",i=new RegExp("("+a+")|([^%]+?)","gi"),c=new RegExp("("+a+")+","gi");function s(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],s(r),s(n))}function l(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=s(t,r).join("")).match(i)||[];return e}}function u(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=c.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=l(r[0]);e!==r[0]&&(t[r[0]]=e)}r=c.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function p(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function d(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const f=Symbol("encodeFragmentIdentifier");function m(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function y(e,t){return t.decode?u(e):e}function h(e){return Array.isArray(e)?e.sort():"object"==typeof e?h(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function x(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function w(e){const t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function C(e,t){m((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&y(r,e).includes(e.arrayFormatSeparator);r=a?y(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>y(t,e))):null===r?r:y(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?y(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>y(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:y(i,t),r(y(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=b(r,t);else n[o]=b(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=h(r):e[t]=r,e}),Object.create(null))}function k(e,t){if(!e)return"";m((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[g(t,e),"[",o,"]"].join("")]:[...r,[g(t,e),"[",g(o,e),"]=",g(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[g(t,e),"[]"].join("")]:[...r,[g(t,e),"[]=",g(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[g(t,e),":list="].join("")]:[...r,[g(t,e),":list=",g(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(r,e),t,g(o,e)].join("")]:[[n,g(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,g(t,e)]:[...r,[g(t,e),"=",g(n,e)].join("")]}}(t),o={};for(const[i,c]of Object.entries(e))r(i)||(o[i]=c);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?g(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":o.reduce(n(r),[]).join("&"):g(r,t)+"="+g(o,t)})).filter((e=>e.length>0)).join("&")}function E(e,t){t={decode:!0,...t};let[r,n]=p(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:C(w(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:y(n,t)}:{}}}function I(e,t){t={encode:!0,strict:!0,[f]:!0,...t};const r=x(e.url).split("?")[0]||"";let n=k({...C(w(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[f]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function v(e,t,r){r={parseFragmentIdentifier:!0,[f]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=E(e,r);return I({url:n,query:d(o,t),fragmentIdentifier:a},r)}function j(e,t,r){return v(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var F=n,N=r(7200),_=r(9973),O=r(1883),S=r(2788);function P(e){let{selectedCategory:t,categoryList:r}=e;return o.createElement(R,null,Object.entries(r).map((e=>{let[r,n]=e;return o.createElement(A,{to:"/frontend/?category="+r,active:r===t,key:r},r)})))}const A=(0,S.default)((e=>{let{active:t,...r}=e;return o.createElement(O.rU,r)})).withConfig({displayName:"CategoryList__CategoryItem",componentId:"sc-lh18xs-0"})(["margin-right:10px;height:37px;padding:0 17px;font-size:14px;line-height:37px;border-radius:30px;letter-spacing:-0.5px;cursor:pointer;&:hover{color:",";background:",";}color:",";background:",";@media screen and (min-width:1024px){height:44px;padding:0 20px;font-size:16px;line-height:43px;}"],(e=>e.theme.bgColor),(e=>e.theme.selectBoxColor),(e=>e.active?e.theme.bgColor:e.theme.textColor),(e=>e.active?e.theme.selectBoxColor:e.theme.tabColor)),R=S.default.div.withConfig({displayName:"CategoryList__CategoryListWrapper",componentId:"sc-lh18xs-1"})(["display:flex;"]);function U(e){let{title:t,date:r,categories:n,summary:a,link:i}=e;return o.createElement(D,{to:i},o.createElement(T,null,n.map((e=>o.createElement(z,{key:e},e)))),o.createElement(L,null,t),o.createElement($,null,r))}const $=S.default.div.withConfig({displayName:"PostItem__Date",componentId:"sc-5ns4u1-0"})(["font-size:13px;line-height:19px;font-weight:300;"]),L=S.default.div.withConfig({displayName:"PostItem__Title",componentId:"sc-5ns4u1-1"})(["font-size:22px;font-weight:700;line-height:32px;margin-top:13px;"]),z=S.default.div.withConfig({displayName:"PostItem__CategoryItem",componentId:"sc-5ns4u1-2"})(["height:34px;padding:0 13px;border-radius:13px;font-size:13px;line-height:34px;background-color:",";"],(e=>e.theme.boxTabColor)),T=S.default.div.withConfig({displayName:"PostItem__Category",componentId:"sc-5ns4u1-3"})(["display:flex;flex-wrap:wrap;gap:5px;"]),D=(0,S.default)(O.rU).withConfig({displayName:"PostItem__PostItemWrapper",componentId:"sc-5ns4u1-4"})(["border-radius:14px;cursor:pointer;padding:25px 24px;box-shadow:4px 12px 30px 6px rgb(0 0 0 / 9%);transition:0.3s box-shadow;&:hover{box-shadow:4px 12px 30px 6px rgb(0 0 0 / 18%);transform:translateY(-2px);}background-color:",";"],(e=>e.theme.boxColor));function q(e){let{selectedCategory:t,posts:r}=e;console.log(t),console.log(r);const{containerRef:n,postList:a}=function(e,t){const r=(0,o.useRef)(null),{0:n,1:a}=(0,o.useState)(1),i=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]),c=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(a((e=>e+1)),t.disconnect())}));return(0,o.useEffect)((()=>a(1)),[e]),(0,o.useEffect)((()=>{10*n>=i.length||null===r.current||0===r.current.children.length||c.observe(r.current.children[r.current.children.length-1])}),[n,e]),{containerRef:r,postList:i.slice(0,10*n)}}(t,r);return o.createElement(B,{ref:n},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return o.createElement(U,Object.assign({},n,{link:r,key:t}))})))}const B=S.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-lmlr4q-0"})(["margin-top:36px;display:flex;flex-direction:column;gap:15px;@media screen and (min-width:1024px){margin-top:48px;}"]);function M(e){let{location:{pathname:t,search:r,href:n},data:{allMarkdownRemark:{edges:a}}}=e;const i=F.parse(location.search),c="string"==typeof i.category&&i.category?i.category:"All",s=a.filter((e=>"frontend"===e.node.frontmatter.page)),l=(0,o.useMemo)((()=>s.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return o.createElement(_.Z,{title:"Frontend",description:"프론트엔드의 모든 것",url:n},o.createElement("div",null,o.createElement(N.PageTitle,null,"Frontend"),o.createElement(N.PageDescript,null,"프론트엔드의 모든 것")),o.createElement(N.Section,null,o.createElement(P,{selectedCategory:c,categoryList:l}),o.createElement(q,{selectedCategory:c,posts:s})))}},7200:function(e,t,r){r.r(t),r.d(t,{PageDescript:function(){return s},PageTitle:function(){return l},Section:function(){return c},default:function(){return i}});var n=r(7294),o=r(2788),a=r(9973);function i(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:o,siteUrl:i}}}}=e;return n.createElement(a.Z,{title:r,description:o,url:i},n.createElement(l,null,"I'm Wonjong Jang,"),n.createElement(l,null,"a Frontend Developer."),n.createElement(s,null,"프론트엔드 개발자 장원종입니다."))}const c=o.default.div.withConfig({displayName:"pages__Section",componentId:"sc-12s69b8-0"})(["margin-top:48px;@media screen and (min-width:1024px){margin-top:72px;}"]),s=o.default.p.withConfig({displayName:"pages__PageDescript",componentId:"sc-12s69b8-1"})(["margin-top:4px;font-size:22px;font-weight:400;color:",";@media screen and (min-width:1024px){font-size:28px;}"],(e=>e.theme.subTextColor)),l=o.default.p.withConfig({displayName:"pages__PageTitle",componentId:"sc-12s69b8-2"})(["font-size:30px;font-weight:700;@media screen and (min-width:1024px){font-size:36px;}"])}}]);
//# sourceMappingURL=component---src-pages-frontend-index-tsx-012ac2276985fdc51256.js.map
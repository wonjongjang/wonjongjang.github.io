"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[859],{2991:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var o=n(7294),a=n(6685),l=n(2612),r=n(3338),i=n(3153),s=n(2788),p=n(6485),c=n(1883);function d(e){let{title:t,date:n,categories:a,page:l,link:r}=e;return o.createElement(x,{to:r},o.createElement(u,null,null==a?void 0:a.map((e=>o.createElement(f,{key:e},e)))),o.createElement(m,null,t),o.createElement(g,null,n))}const g=s.default.div.withConfig({displayName:"BlogItem__S_Date",componentId:"sc-1w41fvw-0"})(["font-size:13px;line-height:19px;font-weight:300;"]),m=s.default.div.withConfig({displayName:"BlogItem__S_Title",componentId:"sc-1w41fvw-1"})(["font-size:22px;font-weight:700;line-height:32px;margin-top:13px;"]),f=s.default.li.withConfig({displayName:"BlogItem__S_CategoryItem",componentId:"sc-1w41fvw-2"})(["height:34px;padding:0 15px;border-radius:34px;font-size:13px;line-height:34px;background-color:",";list-style:none;"],(e=>e.theme.colors.boxTabColor)),u=s.default.ul.withConfig({displayName:"BlogItem__S_CategoryList",componentId:"sc-1w41fvw-3"})(["display:flex;flex-wrap:wrap;gap:5px;"]),x=(0,s.default)(c.rU).withConfig({displayName:"BlogItem__S_Container",componentId:"sc-1w41fvw-4"})(["border-radius:14px;cursor:pointer;padding:25px 24px;box-shadow:4px 12px 30px 6px rgb(0 0 0 / 9%);transition:0.3s box-shadow;background-color:",";&:hover{box-shadow:4px 12px 30px 6px rgb(0 0 0 / 18%);transform:translateY(-2px);}"],(e=>e.theme.colors.boxColor));function h(e){let{selectedCategory:t,posts:n}=e;const{containerRef:a,postList:l}=(0,p.Z)(t,n);return o.createElement(w,{ref:a},l.map((e=>{let{node:{id:t,fields:{slug:n},frontmatter:a}}=e;return o.createElement(d,Object.assign({},a,{link:n,key:t}))})))}const w=s.default.div.withConfig({displayName:"BlogList__S_Container",componentId:"sc-qlk59t-0"})(["margin-top:48px;display:flex;flex-direction:column;gap:15px;@media ","{margin-top:36px;}"],(e=>e.theme.device.tablet));function y(e){let{location:{pathname:t,search:n,href:s},data:{allMarkdownRemark:{edges:p}}}=e;const c=a.Z.parse(n),d="string"==typeof c.category&&c.category?c.category:"All",g=p.filter((e=>"study-blog"===e.node.frontmatter.page)),m=(0,o.useMemo)((()=>g.reduce(((e,t)=>{let{node:{frontmatter:{categories:n}}}=t;return null==n||n.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return o.createElement(r.ZP,{title:"Study Blog",description:"개발하면서 남긴 기록",url:s},o.createElement(l.S_FadeInAnimation,null,o.createElement(l.S_PageTitle,null,"Study Blog"),o.createElement(l.S_PageDescript,null,"공부하면서 남긴 기록")),o.createElement(l.S_Section,null,o.createElement(i.Z,{page:g[0].node.frontmatter.page,selectedCategory:d,categoryList:m}),o.createElement(h,{selectedCategory:d,posts:g})))}}}]);
//# sourceMappingURL=component---src-pages-study-blog-index-tsx-1d462450e9e3a913d8df.js.map
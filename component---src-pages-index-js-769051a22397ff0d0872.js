"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{887:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(7294),n=a(1597),l=a(4518),c=a(1536),s=a(9230),m=function(e){var t=e.post,a=(0,s.c)(t.frontmatter.thumbnailImage);return r.createElement(r.Fragment,null,r.createElement("div",{id:"post-list"},r.createElement(n.Link,{to:t.frontmatter.path,className:"post-list-wrapper"},r.createElement("div",{className:"image-wrapper"},r.createElement(s.G,{image:a,alt:t.frontmatter.category})),r.createElement("div",{className:"text-wrapper"},r.createElement("span",{className:"post-list-date"},t.frontmatter.category,t.frontmatter.date),r.createElement("h3",{className:"post-list-title"},t.frontmatter.title),r.createElement("p",{className:"post-list-excerpt"},t.excerpt)))))},o=function(e){var t=e.data.allMarkdownRemark.nodes,a=r.useState(""),s=a[0],o=a[1],i=r.useState(!0),u=i[0],p=i[1],f=(s?t.filter((function(e){var t=e.excerpt,a=e.frontmatter;return[a.title,a.category,t].map((function(e){return null!==e.match(new RegExp(s,"i"))})).includes(!0)})):t).map((function(e){return r.createElement(m,{key:e.frontmatter.path,post:e})}));return r.createElement(l.Z,{searchbar:{useSearch:u,setUseSearch:p,query:s,setQuery:o},contents:r.createElement("main",null,r.createElement(c.Z,null),r.createElement("div",{className:"toggle-box"},r.createElement(n.Link,{to:"/",className:"current-view"},"All"),r.createElement(n.Link,{to:"/category"},"Category")),f)})}}}]);
//# sourceMappingURL=component---src-pages-index-js-769051a22397ff0d0872.js.map
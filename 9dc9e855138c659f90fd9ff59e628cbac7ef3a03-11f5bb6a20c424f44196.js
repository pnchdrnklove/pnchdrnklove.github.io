"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[396],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},9230:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return m},M:function(){return x},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,i,o,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);var d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}var p,f=["children"],g=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,a=o(e,f);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,d=o(e,h);return r.createElement("img",s({},d,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=o(e,y),d=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,s({},c,t,{sizes:d,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:d})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],E=function(e){var t=e.fallback,a=o(e,b);return t?r.createElement(w,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(p=w.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(w,s({},e)),r.createElement("noscript",null,r.createElement(w,s({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;var A,C,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:i().object.isRequired,alt:L},R=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],S=new Set,N=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,d=e.backgroundColor,u=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=o(e,R),y=i.width,v=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,w),E=b.style,x=b.className,L=o(b,T),k=(0,r.useRef)(),N=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(u=p);var P=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,v);return(0,r.useEffect)((function(){A||(A=Promise.all([a.e(774),a.e(36)]).then(a.bind(a,9036)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=k.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void S.add(N)):C&&S.has(N)?void 0:(A.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;k.current.innerHTML=r(s({isLoading:!0,isLoaded:S.has(N),image:i},h)),S.has(N)||(e=requestAnimationFrame((function(){k.current&&(t=n(k.current,N,S,c,f,g,m))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){S.has(N)&&C&&(k.current.innerHTML=C(s({isLoading:S.has(N),isLoaded:S.has(N),image:i},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,s({},L,{style:s({},E,c,{backgroundColor:d}),className:x+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(N,e):null}));P.propTypes=k,P.displayName="GatsbyImage";var U,z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],I=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},M=new Set(["fixed","fullWidth","constrained"]),G={src:i().string.isRequired,alt:L,width:I,height:I,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!M.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},H=(U=P,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=o(e,z);return n&&console.warn(n),a?r.createElement(U,s({image:a},i)):(console.warn("Image not loaded",t),null)});H.displayName="StaticImage",H.propTypes=G},1536:function(e,t,a){var r=a(7294),n=a(9230),i=a(262);t.Z=function(){return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:"Home"}),r.createElement("div",{className:"about-wrapper"},r.createElement(n.S,{className:"profile-image",src:"../images/profile.png",alt:"",width:128,height:128,placeholder:"blurred",__imageData:a(6329)}),r.createElement("div",{className:"profile-wrapper"},r.createElement("div",{className:"profile-text"},r.createElement("h3",null,"pnchdrnklove 블로그"),r.createElement("span",null,"처절한 삽질로그")),r.createElement("a",{href:"https://github.com/pnchdrnklove"},r.createElement("svg",{className:"profile-icon",width:"10",height:"10",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 480 512"},r.createElement("path",{d:"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"}))))),r.createElement("hr",null))}},6329:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVQ4yyXRa1SUBR7H8efsvtiNFg2QRKRlVtbMyiw96k6ezUIgV000ZTGkEQVvS2leUOyYl6jTsauV2GV3zaMF7VEXTNCAlhYRRxRwBhGGGWBg7jPPXJ7LXGD31HcP7Lv/q8/5fc9faO/20NUr0tUncqdPpNsUwDwkMeKQcXnCeMUowVAMWRlFDY+iqqPISgxZjiJJEUS/jBr9mX9eukrRxo0Ixn4Ro1nkrsWPsc9PV48Py1AQh1vFI0YIhKITgKLGiITHiETGiEbHUNUYihzFJ0qo4Z+4VNfA9q1bEIwWke5xsF+k1xLAYg1ic8l4/RGC0iiSHEMNx4hERyegWGyMaGQUKRTGLyp4PUEU9b/UX2liZ+kOhG6LfwIyDY5jAUacMnfNbgwmJ+ZhLyE5OrFuYlU4RiAURlWjhNUoUkgl4JeJRP5DY2MzB/fuRrhn8WMaCjBgCzLsCGF3KRj6HVidQXoHnASkMMo4EP5/tscnMzDix2oLEPAr+Lwh/IEojU0tvPl6OULfgB+zNcCgLYjVPg7KdPZacXplglIMcTxNChOSwkiSihRScLqDGPsc3Ot3Yrd78PkUmv7VxtHyMoS+QR/3BrxYhv1Y7UHsbgmj2YbNFcLllfEFFAIhhZCkMjr208R33Z4goqjg98t4vQpud5Cb7QYOl+1HsLkV+od89Ixn2sdTfFxpbpu4XT4Vt0/GK4ZwekKc+/oCP/6o58ZtI19V11D3g55vaqsYcSh0GHrYtXstQk3DdU58c5W9n1RTduo8Byu/pfKrKpweiX6zjb5+Ox7/KCe/qCLnkVRaPj3K2UsN5GwrYffhA6wpSuW9T4/y1olyFq7+BUJW/jaeLtjN4q1H0Ja8gVa3n33HPuDbc1Uc31dKxZ7NnKx8h9cqdHyuW0Bvw2W2H9rM7NW/JfOVNSxfn8z8rHi0y5PIWCwgaP+0lgUvbCA1M49Jf1xN+tIX+XNBAetyV/KaLoe9hwspLMtDm/cHKnJn8cmul1iy5hHmPa8hs+BZlqycyeLsNDKXz2HF+myEl3V5bN72Krr1G9l/pJwNpUW8sqmA4xVvcPz9Yxyu2ECuLosHpkwlZ97vyZyjYeGSReQX6FiR+xKbtm5jf3k5WzZtJzd3A8K+ow+x74iG1996isovX6Tiw1W8U1nIuYsH+Ef92/xlZz6/y0hjxsw0pmvSePTJOWgyprG1RIehqxN9mx5D5x2679xFf02P8PfTOzj49iJK9iaxbotA1iaB7GKBpRsFlm4RmPn4fcT/5n6mJE9mRsZ0Zs1OZ2pKMouyUjn02RPs+Wg+Bz7SUnEqh4/PFiBIA2ZEUw9DXa3caa2mrvYYZ04Xc/zEEor3pJGumUpCYhyTJscxLTWBaQ8lseCxh6k8VsSK0l/yXKHAsrUCOXkCT68TEPo7ruEwtCD23EAyGwlbTYStZn72DlH1xbskJE9msXYuCYnxpKQkkJgUz/zZUzh1SMvq0jjWbI9jVXEcL5TEs+zlBIShG1ew327Coa/HebMeV2cTLmML0qCB9sYantc+Sv6qbJJTHkCTMZ0HpyYwd+4MzpzZMVHx6sEM1u+MZ1mxQGaRgDDQXM1wywXs12txtNXi1H+HaxzuaMJj6sBy8UM+LyskPiGedE0KD89OZ+GCx7B1tRMdNuG528bgrcvcvPox58/uROi5/Dd6r5zG3PQ1Q83V2FovYr9ew0hrLY6OZgabz3PtzWIWPj6LpORJaGY8yHPPzMOs/x6x9xa+e+0ETZ3IZiOquRuh88JJDBdPYqw5Rc+lz+ir+yuWxnNY/30e2/U6Blvr6TzzAfkrs0lMTuRX9/2aXSU6FNNtRvQNuG7/gPPW99jb63HcvMr/AABmffzq/GbXAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/c21a75add66df4992ea1c52f26850ffa/bf8e1/profile.png","srcSet":"/static/c21a75add66df4992ea1c52f26850ffa/914ee/profile.png 32w,\\n/static/c21a75add66df4992ea1c52f26850ffa/1c9ce/profile.png 64w,\\n/static/c21a75add66df4992ea1c52f26850ffa/bf8e1/profile.png 128w,\\n/static/c21a75add66df4992ea1c52f26850ffa/acb7c/profile.png 256w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/static/c21a75add66df4992ea1c52f26850ffa/ef6ff/profile.webp 32w,\\n/static/c21a75add66df4992ea1c52f26850ffa/8257c/profile.webp 64w,\\n/static/c21a75add66df4992ea1c52f26850ffa/6766a/profile.webp 128w,\\n/static/c21a75add66df4992ea1c52f26850ffa/22bfc/profile.webp 256w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=9dc9e855138c659f90fd9ff59e628cbac7ef3a03-11f5bb6a20c424f44196.js.map
!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";var n,o,a,i,s,l;
/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(r){if("string"==typeof r.data&&r.data.substr(0,e.length)===e){r.stopImmediatePropagation();var n=parseInt(r.data.substr(e.length),36);t[n]&&(t[n](),t[n]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(r){var n=t.length;return t.push(r),window.postMessage(e+n.toString(36),"*"),n}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),o=this,a=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e&&e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),i=function(){if(a){for(var t,e,r=document.createElement("canvas").getContext("2d"),n=20;n;){if(r.font=n.toString(10)+"px sans-serif",r.measureText("Ｗ").width===t&&r.measureText("m").width===e)return n+1;t=r.measureText("Ｗ").width,e=r.measureText("m").width,n--}return 0}}(),s=function(t){for(var e,r,n=t.length;n;e=Math.floor(Math.random()*n),r=t[--n],t[n]=t[e],t[e]=r);return t},(l=function(t,e){if(a){Array.isArray(t)||(t=[t]),t.forEach((function(e,r){if("string"==typeof e){if(t[r]=document.getElementById(e),!t[r])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."}));var r={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var n in e)n in r&&(r[n]=e[n]);if("function"!=typeof r.weightFactor){var o=r.weightFactor;r.weightFactor=function(t){return t*o}}if("function"!=typeof r.shape)switch(r.shape){case"circle":default:r.shape="circle";break;case"cardioid":r.shape=function(t){return 1-Math.sin(t)};break;case"diamond":r.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":r.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":r.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":r.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":r.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":r.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}r.gridSize=Math.max(Math.floor(r.gridSize),4);var l,f,u,c,d,h,m,v,w=r.gridSize,g=w-r.maskGapWidth,p=Math.abs(r.maxRotation-r.minRotation),M=Math.abs(Math.floor(r.rotationSteps)),b=Math.min(r.maxRotation,r.minRotation);switch(r.color){case"random-dark":m=function(){return L(10,50)};break;case"random-light":m=function(){return L(50,90)};break;default:"function"==typeof r.color&&(m=r.color)}"function"==typeof r.fontWeight&&(v=r.fontWeight);var x=null;"function"==typeof r.classes&&(x=r.classes);var y,T=!1,I=[],k=function(t){var e,r,n=t.currentTarget,o=n.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,r=t.touches[0].clientY):(e=t.clientX,r=t.clientY);var a=e-o.left,i=r-o.top,s=Math.floor(a*(n.width/o.width||1)/w),l=Math.floor(i*(n.height/o.height||1)/w);return I[s][l]},C=function(t){var e=k(t);y!==e&&(y=e,e?r.hover(e.item,e.dimension,t):r.hover(void 0,void 0,t))},S=function(t){var e=k(t);e&&(r.click(e.item,e.dimension,t),t.preventDefault())},E=[],P=function(t){if(E[t])return E[t];var e=8*t,n=e,o=[];for(0===t&&o.push([c[0],c[1],0]);n--;){var a=1;"circle"!==r.shape&&(a=r.shape(n/e*2*Math.PI)),o.push([c[0]+t*a*Math.cos(-n/e*2*Math.PI),c[1]+t*a*Math.sin(-n/e*2*Math.PI)*r.ellipticity,n/e*2*Math.PI])}return E[t]=o,o},O=function(){return r.abortThreshold>0&&(new Date).getTime()-h>r.abortThreshold},R=function(e,r,n,o,a){e>=f||r>=u||e<0||r<0||(l[e][r]=!1,n&&t[0].getContext("2d").fillRect(e*w,r*w,g,g),T&&(I[e][r]={item:a,dimension:o}))},F=function e(n){var o,a,c;Array.isArray(n)?(o=n[0],a=n[1]):(o=n.word,a=n.weight,c=n.attributes);var h=0===r.rotateRatio?0:Math.random()>r.rotateRatio?0:0===p?b:M>0?b+Math.floor(Math.random()*M)*p/(M-1):b+Math.random()*p,g=function(t,e,n){var o=r.weightFactor(e);if(o<=r.minSize)return!1;var a,s=1;o<i&&(s=function(){for(var t=2;t*o<i;)t+=2;return t}()),a=v?v(t,e,o):r.fontWeight;var l=document.createElement("canvas"),f=l.getContext("2d",{willReadFrequently:!0});f.font=a+" "+(o*s).toString(10)+"px "+r.fontFamily;var u=f.measureText(t).width/s,c=Math.max(o*s,f.measureText("m").width,f.measureText("Ｗ").width)/s,d=u+2*c,h=3*c,m=Math.ceil(d/w),g=Math.ceil(h/w);d=m*w,h=g*w;var p=-u/2,M=.4*-c,b=Math.ceil((d*Math.abs(Math.sin(n))+h*Math.abs(Math.cos(n)))/w),x=Math.ceil((d*Math.abs(Math.cos(n))+h*Math.abs(Math.sin(n)))/w),y=x*w,T=b*w;l.setAttribute("width",y),l.setAttribute("height",T),f.scale(1/s,1/s),f.translate(y*s/2,T*s/2),f.rotate(-n),f.font=a+" "+(o*s).toString(10)+"px "+r.fontFamily,f.fillStyle="#000",f.textBaseline="middle",f.fillText(t,p*s,(M+.5*o)*s);var I=f.getImageData(0,0,y,T).data;if(O())return!1;for(var k,C,S,E=[],P=x,R=[b/2,x/2,b/2,x/2];P--;)for(k=b;k--;){S=w;t:for(;S--;)for(C=w;C--;)if(I[4*((k*w+S)*y+(P*w+C))+3]){E.push([P,k]),P<R[3]&&(R[3]=P),P>R[1]&&(R[1]=P),k<R[0]&&(R[0]=k),k>R[2]&&(R[2]=k);break t}}return{mu:s,occupied:E,bounds:R,gw:x,gh:b,fillTextOffsetX:p,fillTextOffsetY:M,fillTextWidth:u,fillTextHeight:c,fontSize:o}}(o,a,h);if(!g)return!1;if(O())return!1;if(!r.drawOutOfBound){var y=g.bounds;if(y[1]-y[3]+1>f||y[2]-y[0]+1>u)return!1}for(var I=d+1,k=function(e){var i=Math.floor(e[0]-g.gw/2),s=Math.floor(e[1]-g.gh/2);return g.gw,g.gh,!!function(t,e,n,o,a){for(var i=a.length;i--;){var s=t+a[i][0],c=e+a[i][1];if(s>=f||c>=u||s<0||c<0){if(!r.drawOutOfBound)return!1}else if(!l[s][c])return!1}return!0}(i,s,0,0,g.occupied)&&(function(e,n,o,a,i,s,l,f,u){var c,d,h,g=o.fontSize;c=m?m(a,i,g,s,l):r.color,d=v?v(a,i,g):r.fontWeight,h=x?x(a,i,g):r.classes;var p=o.bounds;p[3],p[0],p[1],p[3],p[2],p[0],t.forEach((function(t){if(t.getContext){var i=t.getContext("2d"),s=o.mu;i.save(),i.scale(1/s,1/s),i.font=d+" "+(g*s).toString(10)+"px "+r.fontFamily,i.fillStyle=c,i.translate((e+o.gw/2)*w*s,(n+o.gh/2)*w*s),0!==f&&i.rotate(-f),i.textBaseline="middle",i.fillText(a,o.fillTextOffsetX*s,(o.fillTextOffsetY+.5*g)*s),i.restore()}else{var l=document.createElement("span"),m="";m="rotate("+-f/Math.PI*180+"deg) ",1!==o.mu&&(m+="translateX(-"+o.fillTextWidth/4+"px) scale("+1/o.mu+")");var v={position:"absolute",display:"block",font:d+" "+g*o.mu+"px "+r.fontFamily,left:(e+o.gw/2)*w+o.fillTextOffsetX+"px",top:(n+o.gh/2)*w+o.fillTextOffsetY+"px",width:o.fillTextWidth+"px",height:o.fillTextHeight+"px",lineHeight:g+"px",whiteSpace:"nowrap",transform:m,webkitTransform:m,msTransform:m,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var p in c&&(v.color=c),l.textContent=a,v)l.style[p]=v[p];if(u)for(var M in u)l.setAttribute(M,u[M]);h&&(l.className+=h),t.appendChild(l)}}))}(i,s,g,o,a,d-I,e[2],h,c),function(e,n,o,a,i,s){var l,c,d=i.occupied,h=r.drawMask;if(h&&((l=t[0].getContext("2d")).save(),l.fillStyle=r.maskColor),T){var m=i.bounds;c={x:(e+m[3])*w,y:(n+m[0])*w,w:(m[1]-m[3]+1)*w,h:(m[2]-m[0]+1)*w}}for(var v=d.length;v--;){var g=e+d[v][0],p=n+d[v][1];g>=f||p>=u||g<0||p<0||R(g,p,h,c,s)}h&&l.restore()}(i,s,0,0,g,n),!0)};I--;){var C=P(d-I);if(r.shuffle&&(C=[].concat(C),s(C)),C.some(k))return!0}return!!r.shrinkToFit&&(Array.isArray(n)?n[1]=3*n[1]/4:n.weight=3*n.weight/4,e(n))},A=function(e,r,n){if(r)return!t.some((function(t){var r=new CustomEvent(e,{detail:n||{}});return!t.dispatchEvent(r)}),this);t.forEach((function(t){var r=new CustomEvent(e,{detail:n||{}});t.dispatchEvent(r)}),this)};!function(){var e=t[0];if(e.getContext)f=Math.ceil(e.width/w),u=Math.ceil(e.height/w);else{var n=e.getBoundingClientRect();f=Math.ceil(n.width/w),u=Math.ceil(n.height/w)}if(A("wordcloudstart",!0)){var o,a,i,s,m;if(c=r.origin?[r.origin[0]/w,r.origin[1]/w]:[f/2,u/2],d=Math.floor(Math.sqrt(f*f+u*u)),l=[],!e.getContext||r.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=r.backgroundColor,e.clearRect(0,0,f*(w+1),u*(w+1)),e.fillRect(0,0,f*(w+1),u*(w+1))}else t.textContent="",t.style.backgroundColor=r.backgroundColor,t.style.position="relative"})),o=f;o--;)for(l[o]=[],a=u;a--;)l[o][a]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=r.backgroundColor,v.fillRect(0,0,1,1);var g,p,M=v.getImageData(0,0,1,1).data,b=e.getContext("2d").getImageData(0,0,f*w,u*w).data;for(o=f;o--;)for(l[o]=[],a=u;a--;){p=w;t:for(;p--;)for(g=w;g--;)for(i=4;i--;)if(b[4*((a*w+p)*f*w+(o*w+g))+i]!==M[i]){l[o][a]=!1;break t}!1!==l[o][a]&&(l[o][a]=!0)}b=v=M=void 0}if(r.hover||r.click){for(T=!0,o=f+1;o--;)I[o]=[];r.hover&&e.addEventListener("mousemove",C),r.click&&(e.addEventListener("click",S),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",C),e.removeEventListener("click",S),y=void 0}))}i=0,0!==r.wait?(s=window.setTimeout,m=window.clearTimeout):(s=window.setImmediate,m=window.clearImmediate);var x=function(e,r){t.forEach((function(t){t.removeEventListener(e,r)}),this)},k=function t(){x("wordcloudstart",t),m(E)};!function(e,r){t.forEach((function(t){t.addEventListener(e,r)}),this)}("wordcloudstart",k);var E=s((function t(){if(i>=r.list.length)return m(E),A("wordcloudstop",!1),void x("wordcloudstart",k);h=(new Date).getTime();var e=F(r.list[i]),n=!A("wordclouddrawn",!0,{item:r.list[i],drawn:e});if(O()||n)return m(E),r.abort(),A("wordcloudabort",!1),A("wordcloudstop",!1),void x("wordcloudstart",k);i++,E=s(t,r.wait)}),r.wait)}}()}function L(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=a,l.minFontSize=i,o.WordCloud=l,void 0===(n=function(){return l}.apply(e,[]))||(t.exports=n)},function(t,e,r){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();t.exports=e=n.fetch,e.default=n.fetch.bind(n),e.Headers=n.Headers,e.Request=n.Request,e.Response=n.Response},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(1),a=r.n(o);let i;function s(t,e,r,n,o){const a=i.find(e=>e.gsx$color.$t==t);return a?a.gsx$hex.$t:"#330033"}!async function(){await async function(){return new Promise((t,e)=>{a()("https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json",{}).then(t=>t.json()).then(e=>{i=e.feed.entry,t()}).catch((function(t){console.log("err="+t)}))})}(),n(document.getElementById("cloud_canvas"),{list:i.map(t=>[t.gsx$color.$t,64]),color:s})}()}]);
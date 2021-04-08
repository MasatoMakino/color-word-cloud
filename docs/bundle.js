/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={41:(t,e)=>{var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();t.exports=e=r.fetch,r.fetch&&(e.default=r.fetch.bind(r)),e.Headers=r.Headers,e.Request=r.Request,e.Response=r.Response},548:function(t,e){var r,n,a,o,i,s;window.setImmediate||(window.setImmediate=window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message";return window.addEventListener("message",(function(r){if("string"==typeof r.data&&r.data.substr(0,e.length)===e){r.stopImmediatePropagation();var n=parseInt(r.data.substr(e.length),36);t[n]&&(t[n](),t[n]=void 0)}}),!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},function(r){var n=t.length;return t.push(r),window.postMessage(e+n.toString(36),"*"),n}}()||function(t){window.setTimeout(t,0)}),window.clearImmediate||(window.clearImmediate=window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}),a=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return!!(e&&e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push)}(),o=function(){if(a){for(var t,e,r=document.createElement("canvas").getContext("2d"),n=20;n;){if(r.font=n.toString(10)+"px sans-serif",r.measureText("Ｗ").width===t&&r.measureText("m").width===e)return n+1;t=r.measureText("Ｗ").width,e=r.measureText("m").width,n--}return 0}}(),i=function(t){for(var e,r,n=t.length;n;)e=Math.floor(Math.random()*n),r=t[--n],t[n]=t[e],t[e]=r;return t},(s=function(t,e){if(a){Array.isArray(t)||(t=[t]),t.forEach((function(e,r){if("string"==typeof e){if(t[r]=document.getElementById(e),!t[r])throw new Error("The element id specified is not found.")}else if(!e.tagName&&!e.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")}));var r={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e)for(var s in e)s in r&&(r[s]=e[s]);if("function"!=typeof r.weightFactor){var l=r.weightFactor;r.weightFactor=function(t){return t*l}}if("function"!=typeof r.shape)switch(r.shape){case"circle":default:r.shape="circle";break;case"cardioid":r.shape=function(t){return 1-Math.sin(t)};break;case"diamond":r.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"square":r.shape=function(t){return Math.min(1/Math.abs(Math.cos(t)),1/Math.abs(Math.sin(t)))};break;case"triangle-forward":r.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":r.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":r.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":r.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}r.gridSize=Math.max(Math.floor(r.gridSize),4);var c,f,u,d,h,m,w,v,g=r.gridSize,p=g-r.maskGapWidth,M=Math.abs(r.maxRotation-r.minRotation),x=Math.abs(Math.floor(r.rotationSteps)),b=Math.min(r.maxRotation,r.minRotation);switch(r.color){case"random-dark":w=function(){return L(10,50)};break;case"random-light":w=function(){return L(50,90)};break;default:"function"==typeof r.color&&(w=r.color)}"function"==typeof r.fontWeight&&(v=r.fontWeight);var y=null;"function"==typeof r.classes&&(y=r.classes);var T,I=!1,k=[],C=function(t){var e,r,n=t.currentTarget,a=n.getBoundingClientRect();t.touches?(e=t.touches[0].clientX,r=t.touches[0].clientY):(e=t.clientX,r=t.clientY);var o=e-a.left,i=r-a.top,s=Math.floor(o*(n.width/a.width||1)/g),l=Math.floor(i*(n.height/a.height||1)/g);return k[s][l]},S=function(t){var e=C(t);T!==e&&(T=e,e?r.hover(e.item,e.dimension,t):r.hover(void 0,void 0,t))},E=function(t){var e=C(t);e&&(r.click(e.item,e.dimension,t),t.preventDefault())},P=[],R=function(t){if(P[t])return P[t];var e=8*t,n=e,a=[];for(0===t&&a.push([d[0],d[1],0]);n--;){var o=1;"circle"!==r.shape&&(o=r.shape(n/e*2*Math.PI)),a.push([d[0]+t*o*Math.cos(-n/e*2*Math.PI),d[1]+t*o*Math.sin(-n/e*2*Math.PI)*r.ellipticity,n/e*2*Math.PI])}return P[t]=a,a},F=function(){return r.abortThreshold>0&&(new Date).getTime()-m>r.abortThreshold},O=function(e,r,n,a,o){e>=f||r>=u||e<0||r<0||(c[e][r]=!1,n&&t[0].getContext("2d").fillRect(e*g,r*g,p,p),I&&(k[e][r]={item:o,dimension:a}))},A=function e(n){var a,s,l;Array.isArray(n)?(a=n[0],s=n[1]):(a=n.word,s=n.weight,l=n.attributes);var d=0===r.rotateRatio||Math.random()>r.rotateRatio?0:0===M?b:x>0?b+Math.floor(Math.random()*x)*M/(x-1):b+Math.random()*M,m=function(t){if(Array.isArray(t)){var e=t.slice();return e.splice(0,2),e}return[]}(n),p=function(t,e,n,a){var i=r.weightFactor(e);if(i<=r.minSize)return!1;var s,l=1;i<o&&(l=function(){for(var t=2;t*i<o;)t+=2;return t}()),s=v?v(t,e,i,a):r.fontWeight;var c=document.createElement("canvas"),f=c.getContext("2d",{willReadFrequently:!0});f.font=s+" "+(i*l).toString(10)+"px "+r.fontFamily;var u=f.measureText(t).width/l,d=Math.max(i*l,f.measureText("m").width,f.measureText("Ｗ").width)/l,h=u+2*d,m=3*d,w=Math.ceil(h/g),p=Math.ceil(m/g);h=w*g,m=p*g;var M=-u/2,x=.4*-d,b=Math.ceil((h*Math.abs(Math.sin(n))+m*Math.abs(Math.cos(n)))/g),y=Math.ceil((h*Math.abs(Math.cos(n))+m*Math.abs(Math.sin(n)))/g),T=y*g,I=b*g;c.setAttribute("width",T),c.setAttribute("height",I),f.scale(1/l,1/l),f.translate(T*l/2,I*l/2),f.rotate(-n),f.font=s+" "+(i*l).toString(10)+"px "+r.fontFamily,f.fillStyle="#000",f.textBaseline="middle",f.fillText(t,M*l,(x+.5*i)*l);var k=f.getImageData(0,0,T,I).data;if(F())return!1;for(var C,S,E,P=[],R=y,O=[b/2,y/2,b/2,y/2];R--;)for(C=b;C--;){E=g;t:for(;E--;)for(S=g;S--;)if(k[4*((C*g+E)*T+(R*g+S))+3]){P.push([R,C]),R<O[3]&&(O[3]=R),R>O[1]&&(O[1]=R),C<O[0]&&(O[0]=C),C>O[2]&&(O[2]=C);break t}}return{mu:l,occupied:P,bounds:O,gw:y,gh:b,fillTextOffsetX:M,fillTextOffsetY:x,fillTextWidth:u,fillTextHeight:d,fontSize:i}}(a,s,d,m);if(!p)return!1;if(F())return!1;if(!r.drawOutOfBound&&!r.shrinkToFit){var T=p.bounds;if(T[1]-T[3]+1>f||T[2]-T[0]+1>u)return!1}for(var k=h+1,C=function(e){var o=Math.floor(e[0]-p.gw/2),i=Math.floor(e[1]-p.gh/2);return p.gw,p.gh,!!function(t,e,n,a,o){for(var i=o.length;i--;){var s=t+o[i][0],l=e+o[i][1];if(s>=f||l>=u||s<0||l<0){if(!r.drawOutOfBound)return!1}else if(!c[s][l])return!1}return!0}(o,i,0,0,p.occupied)&&(function(e,n,a,o,i,s,l,c,f,u){var d,h,m,p=a.fontSize;d=w?w(o,i,p,s,l,u):r.color,h=v?v(o,i,p,u):r.fontWeight,m=y?y(o,i,p,u):r.classes,t.forEach((function(t){if(t.getContext){var i=t.getContext("2d"),s=a.mu;i.save(),i.scale(1/s,1/s),i.font=h+" "+(p*s).toString(10)+"px "+r.fontFamily,i.fillStyle=d,i.translate((e+a.gw/2)*g*s,(n+a.gh/2)*g*s),0!==c&&i.rotate(-c),i.textBaseline="middle",i.fillText(o,a.fillTextOffsetX*s,(a.fillTextOffsetY+.5*p)*s),i.restore()}else{var l=document.createElement("span"),u="";u="rotate("+-c/Math.PI*180+"deg) ",1!==a.mu&&(u+="translateX(-"+a.fillTextWidth/4+"px) scale("+1/a.mu+")");var w={position:"absolute",display:"block",font:h+" "+p*a.mu+"px "+r.fontFamily,left:(e+a.gw/2)*g+a.fillTextOffsetX+"px",top:(n+a.gh/2)*g+a.fillTextOffsetY+"px",width:a.fillTextWidth+"px",height:a.fillTextHeight+"px",lineHeight:p+"px",whiteSpace:"nowrap",transform:u,webkitTransform:u,msTransform:u,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};for(var v in d&&(w.color=d),l.textContent=o,w)l.style[v]=w[v];if(f)for(var M in f)l.setAttribute(M,f[M]);m&&(l.className+=m),t.appendChild(l)}}))}(o,i,p,a,s,h-k,e[2],d,l,m),function(e,n,a,o,i,s){var l,c,d=i.occupied,h=r.drawMask;if(h&&((l=t[0].getContext("2d")).save(),l.fillStyle=r.maskColor),I){var m=i.bounds;c={x:(e+m[3])*g,y:(n+m[0])*g,w:(m[1]-m[3]+1)*g,h:(m[2]-m[0]+1)*g}}for(var w=d.length;w--;){var v=e+d[w][0],p=n+d[w][1];v>=f||p>=u||v<0||p<0||O(v,p,h,c,s)}h&&l.restore()}(o,i,0,0,p,n),!0)};k--;){var S=R(h-k);if(r.shuffle&&(S=[].concat(S),i(S)),S.some(C))return!0}return!!r.shrinkToFit&&(Array.isArray(n)?n[1]=3*n[1]/4:n.weight=3*n.weight/4,e(n))},z=function(e,r,n){if(r)return!t.some((function(t){var r=new CustomEvent(e,{detail:n||{}});return!t.dispatchEvent(r)}),this);t.forEach((function(t){var r=new CustomEvent(e,{detail:n||{}});t.dispatchEvent(r)}),this)};!function(){var e=t[0];if(e.getContext)f=Math.ceil(e.width/g),u=Math.ceil(e.height/g);else{var a=e.getBoundingClientRect();f=Math.ceil(a.width/g),u=Math.ceil(a.height/g)}if(z("wordcloudstart",!0)){var o,i,s,l,w;if(d=r.origin?[r.origin[0]/g,r.origin[1]/g]:[f/2,u/2],h=Math.floor(Math.sqrt(f*f+u*u)),c=[],!e.getContext||r.clearCanvas)for(t.forEach((function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=r.backgroundColor,e.clearRect(0,0,f*(g+1),u*(g+1)),e.fillRect(0,0,f*(g+1),u*(g+1))}else t.textContent="",t.style.backgroundColor=r.backgroundColor,t.style.position="relative"})),o=f;o--;)for(c[o]=[],i=u;i--;)c[o][i]=!0;else{var v=document.createElement("canvas").getContext("2d");v.fillStyle=r.backgroundColor,v.fillRect(0,0,1,1);var p,M,x=v.getImageData(0,0,1,1).data,b=e.getContext("2d").getImageData(0,0,f*g,u*g).data;for(o=f;o--;)for(c[o]=[],i=u;i--;){M=g;t:for(;M--;)for(p=g;p--;)for(s=4;s--;)if(b[4*((i*g+M)*f*g+(o*g+p))+s]!==x[s]){c[o][i]=!1;break t}!1!==c[o][i]&&(c[o][i]=!0)}b=v=x=void 0}if(r.hover||r.click){for(I=!0,o=f+1;o--;)k[o]=[];r.hover&&e.addEventListener("mousemove",S),r.click&&(e.addEventListener("click",E),e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),e.addEventListener("wordcloudstart",(function t(){e.removeEventListener("wordcloudstart",t),e.removeEventListener("mousemove",S),e.removeEventListener("click",E),T=void 0}))}s=0,0!==r.wait?(l=window.setTimeout,w=window.clearTimeout):(l=window.setImmediate,w=window.clearImmediate);var y=function(e,r){t.forEach((function(t){t.removeEventListener(e,r)}),this)},C=function t(){y("wordcloudstart",t),w(n)};!function(e,r){t.forEach((function(t){t.addEventListener("wordcloudstart",r)}),this)}(0,C),n=l((function t(){if(s>=r.list.length)return w(n),z("wordcloudstop",!1),void y("wordcloudstart",C);m=(new Date).getTime();var e=A(r.list[s]),a=!z("wordclouddrawn",!0,{item:r.list[s],drawn:e});if(F()||a)return w(n),r.abort(),z("wordcloudabort",!1),z("wordcloudstop",!1),void y("wordcloudstart",C);s++,n=l(t,r.wait)}),r.wait)}}()}function L(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}}).isSupported=a,s.minFontSize=o,s.stop=function(){n&&window.clearImmediate(n)},this.WordCloud=s,void 0===(r=function(){return s}.apply(e,[]))||(t.exports=r)}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(548),e=r(41),n=r.n(e);let a,o;function i(t,e,r,n,o){const i=a.find((e=>e.gsx$color.$t==t));return i?i.gsx$hex.$t:"#330033"}function s(t=1,e=320){return o.map((r=>{const n=Math.min(e,r[1]*t);return[r[0],n]}))}!async function(){await async function(){return new Promise(((t,e)=>{n()("https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json",{}).then((t=>t.json())).then((e=>{a=e.feed.entry,t()})).catch((function(t){console.log("err="+t)}))}))}(),await async function(){return fetch("trend.json",{}).then((t=>t.json())).then((t=>{o=t})).catch((function(t){console.log("err="+t)}))}(),t(document.getElementById("cloud_canvas"),{list:s(.05),color:i,backgroundColor:"#444",minSize:1})}()})()})();
"use strict";(()=>{function g(){var t;let e=document.querySelectorAll("[p-click]");for(let o in e){if(typeof e[o]!="object")continue;let n=(t=e[o].getAttribute("p-click"))!==null&&t!==void 0?t:"";e[o].addEventListener("click",()=>window.eval(n)),e[o].removeAttribute("p-click")}}function x(){var t;let e=document.querySelectorAll("[p-clickonce]");for(let n in e){let l=function(){window.eval(i),e[n].removeEventListener("click",l)};var o=l;if(typeof e[n]!="object")continue;let i=(t=e[n].getAttribute("p-clickonce"))!==null&&t!==void 0?t:"";e[n].addEventListener("click",l),e[n].removeAttribute("p-clickonce")}}function b(){var t,e,o,n,i,l,p,s;let c=/\\?{{[^}]+}}/g,m=new RegExp("(?<!\\\\){{[^}]+}}","g"),f=/\\{{[^}]+}}/g,r=[],h,A=[],E=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null);for(;h=E.nextNode();)r.push(h);for(let u in r){if(!(!((t=r[u].textContent)===null||t===void 0)&&t.match(c)))continue;let a=((e=r[u].textContent)!==null&&e!==void 0?e:"").match(c);for(let d in a)a[d].match(m)?r[u].textContent=(i=(o=r[u].textContent)===null||o===void 0?void 0:o.replace(a[d],((n=window[a[d].slice(2,-2).trim()])!==null&&n!==void 0?n:"")+""))!==null&&i!==void 0?i:"":a[d].match(f)&&(r[u].textContent=(s=(l=r[u].textContent)===null||l===void 0?void 0:l.replace(a[d],(p=a[d].substring(1))!==null&&p!==void 0?p:""))!==null&&s!==void 0?s:"")}}function k(){var t,e,o;let n=new RegExp("(?<!\\\\){{[^}]+}}","g"),i=[],l,p=[],s=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null);for(;l=s.nextNode();)if((l==null?void 0:l.attributes)!==void 0)for(let c in l.attributes)l.attributes[c].value!==void 0&&l.attributes[c].value.match(n)&&i.push(l.attributes[c]);for(let c in i){let f=((t=i[c].value)!==null&&t!==void 0?t:"").match(n);for(let r in f)i[c].value=(o=i[c].value.replace(f[r],((e=window[f[r].slice(2,-2).trim()])!==null&&e!==void 0?e:"")+""))!==null&&o!==void 0?o:""}}function v(t,e){var o;let n="click",i=!1;switch(t.tagName){case"input":n="change";break;case"textarea":n="change";break;case"form":n="submit";break;default:n="click"}t.getAttribute("p-trigger")&&((o=t.getAttribute("p-trigger"))===null||o===void 0||o.split(/ /).forEach(l=>{l.toLowerCase()==="once"?i=!0:n=l})),t.addEventListener(n,e,{once:i})}function w(){var t;let e=document.querySelectorAll("[p-post]");for(let o in e){if(typeof e[o]!="object")continue;let n=(t=e[o].getAttribute("p-post"))!==null&&t!==void 0?t:"";v(e[o],()=>{let i=new XMLHttpRequest;i.open("POST",n),i.send()})}}function _(){var t;let e=document.querySelectorAll("[p-get]");for(let o in e){if(typeof e[o]!="object")continue;let n=(t=e[o].getAttribute("p-get"))!==null&&t!==void 0?t:"";v(e[o],()=>{let i=new XMLHttpRequest;i.open("GET",n),i.send()})}}window.Puffer={render(){g(),x(),b(),k(),w(),_()}};window.addEventListener("load",()=>{window.Puffer.render()});})();

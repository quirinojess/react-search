import{g as N}from"./index-59a318b1.js";function $(f,b){for(var t=0;t<b.length;t++){const p=b[t];if(typeof p!="string"&&!Array.isArray(p)){for(const c in p)if(c!=="default"&&!(c in f)){const g=Object.getOwnPropertyDescriptor(p,c);g&&Object.defineProperty(f,c,g.get?g:{enumerable:!0,get:()=>p[c]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var O,S;function B(){if(S)return O;S=1,O=f,f.displayName="jsTemplates",f.aliases=[];function f(b){(function(t){var p=t.languages.javascript["template-string"],c=p.pattern.source,g=p.inside.interpolation,L=g.inside["interpolation-punctuation"],M=g.pattern.source;function j(e,a){if(t.languages[e])return{pattern:RegExp("((?:"+a+")\\s*)"+c),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}t.languages.javascript["template-string"]=[j("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),j("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),j("svg",/\bsvg/.source),j("markdown",/\b(?:markdown|md)/.source),j("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),j("sql",/\bsql/.source),p].filter(Boolean);function R(e,a){return"___"+a.toUpperCase()+"_"+e+"___"}function w(e,a,n){var r={code:e,grammar:a,language:n};return t.hooks.run("before-tokenize",r),r.tokens=t.tokenize(r.code,r.grammar),t.hooks.run("after-tokenize",r),r.tokens}function D(e){var a={};a["interpolation-punctuation"]=L;var n=t.tokenize(e,a);if(n.length===3){var r=[1,1];r.push.apply(r,w(n[1],t.languages.javascript,"javascript")),n.splice.apply(n,r)}return new t.Token("interpolation",n,g.alias,e)}function G(e,a,n){var r=t.tokenize(e,{interpolation:{pattern:RegExp(M),lookbehind:!0}}),v=0,y={},u=r.map(function(s){if(typeof s=="string")return s;for(var o=s.content,i;e.indexOf(i=R(v++,n))!==-1;);return y[i]=o,i}).join(""),d=w(u,a,n),m=Object.keys(y);v=0;function l(s){for(var o=0;o<s.length;o++){if(v>=m.length)return;var i=s[o];if(typeof i=="string"||typeof i.content=="string"){var k=m[v],_=typeof i=="string"?i:i.content,z=_.indexOf(k);if(z!==-1){++v;var x=_.substring(0,z),J=D(y[k]),q=_.substring(z+k.length),h=[];if(x&&h.push(x),h.push(J),q){var E=[q];l(E),h.push.apply(h,E)}typeof i=="string"?(s.splice.apply(s,[o,1].concat(h)),o+=h.length-1):i.content=h}}else{var A=i.content;Array.isArray(A)?l(A):l([A])}}}return l(d),new t.Token(n,d,"language-"+n,e)}var H={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};t.hooks.add("after-tokenize",function(e){if(!(e.language in H))return;function a(n){for(var r=0,v=n.length;r<v;r++){var y=n[r];if(typeof y!="string"){var u=y.content;if(!Array.isArray(u)){typeof u!="string"&&a([u]);continue}if(y.type==="template-string"){var d=u[1];if(u.length===3&&typeof d!="string"&&d.type==="embedded-code"){var m=T(d),l=d.alias,s=Array.isArray(l)?l[0]:l,o=t.languages[s];if(!o)continue;u[1]=G(m,o,s)}}else a(u)}}}a(e.tokens)});function T(e){return typeof e=="string"?e:Array.isArray(e)?e.map(T).join(""):T(e.content)}})(b)}return O}var C=B();const F=N(C),U=$({__proto__:null,default:F},[C]);export{U as j};

import{g as s}from"./index-c72d5631.js";function g(a,r){for(var e=0;e<r.length;e++){const t=r[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in a)){const n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(a,o,n.get?n:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var l,u;function i(){if(u)return l;u=1,l=a,a.displayName="flow",a.aliases=[];function a(r){(function(e){e.languages.flow=e.languages.extend("javascript",{}),e.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,alias:"tag"}]}),e.languages.flow["function-variable"].pattern=/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,delete e.languages.flow.parameter,e.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(e.languages.flow.keyword)||(e.languages.flow.keyword=[e.languages.flow.keyword]),e.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,lookbehind:!0})})(r)}return l}var f=i();const p=s(f),c=g({__proto__:null,default:p},[f]);export{c as f};

import{g as u}from"./index-c72d5631.js";function c(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function d(){if(l)return i;l=1,i=e,e.displayName="monkey",e.aliases=[];function e(n){n.languages.monkey={string:/"[^"\r\n]*"/,comment:[{pattern:/^#Rem\s+[\s\S]*?^#End/im,greedy:!0},{pattern:/'.+/,greedy:!0}],preprocessor:{pattern:/(^[ \t]*)#.+/m,lookbehind:!0,alias:"comment"},function:/\w+(?=\()/,"type-char":{pattern:/(\w)[?%#$]/,lookbehind:!0,alias:"variable"},number:{pattern:/((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,lookbehind:!0},keyword:/\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,operator:/\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,punctuation:/[.,:;()\[\]]/}}return i}var s=d();const p=u(s),f=c({__proto__:null,default:p},[s]);export{f as m};

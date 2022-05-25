"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3887],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},o=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=u(n),c=a,g=o["".concat(d,".").concat(c)]||o[c]||k[c]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},7693:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={},d="\u7f16\u5199\u6d88\u606f\u7f16\u89e3\u7801\u811a\u672c",u={unversionedId:"gateway/script",id:"gateway/script",title:"\u7f16\u5199\u6d88\u606f\u7f16\u89e3\u7801\u811a\u672c",description:"\u89e3\u7801\u811a\u672c",source:"@site/docs/gateway/script.md",sourceDirName:"gateway",slug:"/gateway/script",permalink:"/docs/gateway/script",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gateway/script.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/gateway/architecture"}},m={},k=[{value:"\u89e3\u7801\u811a\u672c",id:"\u89e3\u7801\u811a\u672c",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"\u7f16\u7801\u811a\u672c",id:"\u7f16\u7801\u811a\u672c",level:2},{value:"\u8f93\u5165\u53c2\u6570",id:"\u8f93\u5165\u53c2\u6570",level:3},{value:"\u8f93\u51fa\u53c2\u6570",id:"\u8f93\u51fa\u53c2\u6570",level:3}],o={toc:k};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f16\u5199\u6d88\u606f\u7f16\u89e3\u7801\u811a\u672c"},"\u7f16\u5199\u6d88\u606f\u7f16\u89e3\u7801\u811a\u672c"),(0,l.kt)("h2",{id:"\u89e3\u7801\u811a\u672c"},"\u89e3\u7801\u811a\u672c"),(0,l.kt)("p",null,"\u63d0\u4f9b decode \u65b9\u6cd5\u5b9e\u73b0\uff0c\u5c06\u8bbe\u5907\u4e0a\u62a5\u6d88\u606f\u8f6c\u6362\u4e3a\u7269\u6a21\u578b\u6d88\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'//\u5176\u5b83\u4efb\u610f\u7b26\u5408ECMAScript5\u7684js\u4ee3\u7801\nxxx\n...\n\n//\u5fc5\u987b\u63d0\u4f9bdecode\u65b9\u6cd5\nthis.decode=function(msg){\n  //\u5bf9msg\u8fdb\u884c\u89e3\u6790\uff0c\u5e76\u8fd4\u56de\u7269\u6a21\u578b\u6570\u636e\n  //\u5c5e\u6027\u4e0a\u62a5\n  return {\n    "mid":"xxx",\n    "productKey":"xxx",         //\u53ef\u6839\u636e\u6d88\u606f\u5185\u5bb9\u5224\u65ad\u586b\u5199\u4e0d\u540c\u4ea7\u54c1\n    "deviceName":"xxx",\n    "type":"property",\n    "identifier":"report",  //report:\u5c5e\u6027\u4e0a\u62a5,get:\u5c5e\u6027\u83b7\u53d6,set:\u5c5e\u6027\u8bbe\u7f6e\n    "occurred":"xxxx",          //\u65f6\u95f4\u6233\uff0c\u8bbe\u5907\u4e0a\u7684\u4e8b\u4ef6\u6216\u6570\u636e\u4ea7\u751f\u7684\u672c\u5730\u65f6\u95f4\n    "time":"xxx",                       //\u65f6\u95f4\u6233\uff0c\u6d88\u606f\u4e0a\u62a5\u65f6\u95f4\n    "data":{\n      "\u5c5e\u6027x":\u5c5e\u6027x\u503c,\n      "\u5c5e\u6027y":\u5c5e\u6027y\u503c,\n      ...\n    }\n  }\n  //\u4e8b\u4ef6\u4e0a\u62a5\n  return {\n    "mid":"xxx",\n    "productKey":"xxx",  //\u53ef\u6839\u636e\u6d88\u606f\u5185\u5bb9\u5224\u65ad\u586b\u5199\u4e0d\u540c\u4ea7\u54c1\n    "deviceName":"xxx",\n    "type":"event",\n    "identifier":"xx\u4e8b\u4ef6",\n    "occurred":"xxxx",\n    "time":"xxx",\n    "data":{\n      "\u53c2\u6570x":\u53c2\u6570x\u503c,\n      "\u53c2\u6570y":\u53c2\u6570y\u503c,\n      ...\n    }\n  }\n  //\u670d\u52a1\u56de\u590d\n  return {\n    "mid":"xxx",  //\u4e0e\u670d\u52a1\u8c03\u7528\u65f6\u7528\u7684ID\u5bf9\u5e94\n    "productKey":"xxx",  //\u53ef\u6839\u636e\u6d88\u606f\u5185\u5bb9\u5224\u65ad\u586b\u5199\u4e0d\u540c\u4ea7\u54c1\n    "deviceName":"xxx",\n    "type":"service",\n    "identifier":"xx\u670d\u52a1Reply",  //\u670d\u52a1\u8c03\u7528:xx\u670d\u52a1\uff0c\u670d\u52a1\u8c03\u7528\u56de\u590d:xx\u670d\u52a1Reply\n    "occurred":"xxxx",\n    "time":"xxx",\n    "code":0,\n    "data":{\n      "\u53c2\u6570x":\u53c2\u6570x\u503c,\n      "\u53c2\u6570y":\u53c2\u6570y\u503c,\n      ...\n    }\n  }\n}\n')),(0,l.kt)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f93\u5165\u53c2\u6570")),(0,l.kt)("p",null,"msg:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productKey"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u54c1 key\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u6807\u8bc6\uff0c\u5982 MAC\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mid"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ecf\u5e73\u53f0\u8f6c\u6362\u8fc7\u540e\u7684\u6d88\u606f ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u7684\u539f\u59cb\u6d88\u606f\u5185\u5bb9")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f93\u51fa\u53c2\u6570")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productKey"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u54c1 key\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u6807\u8bc6\uff0c\u5982 MAC\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mid"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ecf\u5e73\u53f0\u8f6c\u6362\u8fc7\u540e\u7684\u6d88\u606f ID\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b\uff0c\u5fc5\u987b\u3002 property\uff1a\u5c5e\u6027\u3001event\uff1a\u4e8b\u4ef6 \u3001service\uff1a\u670d\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6807\u8bc6\u7b26\u3002 ",(0,l.kt)("br",null),"type=property \u65f6\u53ef\u586b\uff1a report\uff1a\u5c5e\u6027\u4e0a\u62a5\uff0cset_reply\uff1a\u5c5e\u6027\u8bbe\u7f6e\u56de\u590d ",(0,l.kt)("br",null),"type=event \u65f6\u586b\u7269\u6a21\u578b\u4e8b\u4ef6 identifier ",(0,l.kt)("br",null)," type=service \u65f6\u586b\u7269\u6a21\u578b\u4e8b\u4ef6{identifier}","_","reply")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"occurred"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233\uff0c\u5fc5\u987b\uff0c\u8bbe\u5907\u4e2d\u4e8b\u4ef6\u6216\u6570\u636e\u4ea7\u751f\u7684\u672c\u5730\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u6233\uff0c\u5fc5\u987b\uff0c\u6d88\u606f\u4e0a\u62a5\u65f6\u95f4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u6d88\u606f\u4e3a\u670d\u52a1\u56de\u590d\u65f6\uff0c\u7528\u4e8e\u6807\u8bc6\u670d\u52a1\u6267\u884c\u662f\u5426\u6210\u529f\uff0c0\uff1a\u6210\u529f\uff0c\u5176\u5b83\uff1a\u6309\u7269\u6a21\u578b\u5b9a\u4e49\u586b\u5199")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u7269\u6a21\u578b\u586b\u5199\u4e0a\u62a5\u7684\u6570\u636e")))),(0,l.kt)("h2",{id:"\u7f16\u7801\u811a\u672c"},"\u7f16\u7801\u811a\u672c"),(0,l.kt)("p",null,"\u63d0\u4f9b encode \u65b9\u6cd5\u5b9e\u73b0\uff0c\u5c06\u6807\u51c6\u7269\u6a21\u578b\u6d88\u606f\u8f6c\u6362\u4e3a\u8bbe\u5907\u6307\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'//\u5176\u5b83\u4efb\u610f\u7b26\u5408ECMAScript5\u7684js\u4ee3\u7801\nxxx\n...\n\n//\u5fc5\u987b\u63d0\u4f9bencode\u65b9\u6cd5\nthis.encode=function(service,device){\n  //service\u7ed3\u6784\n  /*\n  {\n    mid:"",\n    productKey:"",\n    deviceName:"",\n    type:"service",\n    identifier:"",\n    params:{\n      xxkey:xxvalue\n    }\n  }\n  */\n  //device\u7ed3\u6784\n  /*\n  {\n    productKey:"",\n    deviceName:"",\n    properties:{\n      xxkey:xxvalue\n    },\n    tags:{\n      xxkey:xxvalue\n    }\n  }\n  */\n\n  //\u5c5e\u6027\u83b7\u53d6\n  /*\n  {\n    mid:"",\n    productKey:"",\n    deviceName:"",\n    type:"property",\n    identifier:"",\n    params:[\n      xx\u5c5e\u6027,..\n    ]\n  }\n  */\n  service.identifier==\'get\'\n\n  //\u5c5e\u6027\u8bbe\u7f6e\n  service.identifier==\'set\'\n\n  //\u5176\u5b83\u4e3a\u670d\u52a1\u8c03\u7528\n\n  return {\n    mid:"",//\u8bbe\u5907\u534f\u8bae\u4e2d\u7528\u7684\u6d88\u606fID\uff0c\u8fd4\u56de\u540e\u7cfb\u7edf\u4f1a\u5c06\u5b83\u4e0eservice\u4e2d\u7684mid\u5bf9\u5e94\u5173\u7cfb\u4fdd\u5b58\n    productKey:"",\n    deviceName:"",\n    content:""//\u53d1\u7ed9\u8bbe\u5907\u7684\u6d88\u606f\u5185\u5bb9\n  }\n}\n')),(0,l.kt)("h3",{id:"\u8f93\u5165\u53c2\u6570"},"\u8f93\u5165\u53c2\u6570"),(0,l.kt)("p",null,"service:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productKey"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u54c1 key\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u6807\u8bc6\uff0c\u5982 MAC\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mid"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e73\u53f0\u6d88\u606f ID\uff0c\u5fc5\u987b",(0,l.kt)("br",null),"\u9700\u8981\u5728 encode \u4e2d\u8f6c\u6362\u4e3a\u8bbe\u5907\u6d88\u606f ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u7c7b\u578b\uff0c\u5fc5\u987b",(0,l.kt)("br",null),"property\uff1a\u5c5e\u6027\uff0cservice\uff1a\u670d\u52a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1 ID\uff0c\u5fc5\u987b",(0,l.kt)("br",null),"type=property \u65f6\uff0cget \u4e3a\u5c5e\u6027\u83b7\u53d6\uff0cset \u4e3a\u5c5e\u6027\u8bbe\u7f6e",(0,l.kt)("br",null),"type=service \u65f6\uff0c\u586b\u5199\u7269\u6a21\u578b\u4e2d\u670d\u52a1\u5bf9\u5e94\u7684 identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"params"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53 type=property\uff0cidentifier \u4e3a get \u65f6\uff0c\u586b\u5199\u5c5e\u6027\u540d\u6570\u7ec4\uff0c\u5176\u5b83\u4e3a key=value \u7684\u5bf9\u8c61")))),(0,l.kt)("p",null,"device:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productKey"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u54c1 key\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u6807\u8bc6\uff0c\u5982 MAC\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027 key=value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u6807\u7b7e key=value")))),(0,l.kt)("h3",{id:"\u8f93\u51fa\u53c2\u6570"},"\u8f93\u51fa\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productKey"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ea7\u54c1 key\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"deviceName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u552f\u4e00\u6807\u8bc6\uff0c\u5982 MAC\uff0c\u5fc5\u987b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mid"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u6d88\u606f ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0b\u53d1\u7ed9\u8bbe\u5907\u7684\u6d88\u606f\u5185\u5bb9")))))}c.isMDXComponent=!0}}]);
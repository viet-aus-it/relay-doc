"use strict";(self.webpackChunkrelay_doc=self.webpackChunkrelay_doc||[]).push([[6805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=o,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},i="Relay Environment",l={unversionedId:"getting-started/relay-environment",id:"getting-started/relay-environment",title:"Relay Environment",description:"Config Relay Environment",source:"@site/docs/2.getting-started/4.relay-environment.md",sourceDirName:"2.getting-started",slug:"/getting-started/relay-environment",permalink:"/relay-doc/docs/getting-started/relay-environment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2.getting-started/4.relay-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Relay Compiler",permalink:"/relay-doc/docs/getting-started/relay-compiler"},next:{title:"React Relay Provider",permalink:"/relay-doc/docs/getting-started/relay-provider"}},c={},s=[{value:"Config Relay Environment",id:"config-relay-environment",level:2},{value:"Alternatives",id:"alternatives",level:2},{value:"react-relay-network-modern",id:"react-relay-network-modern",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relay-environment"},"Relay Environment"),(0,o.kt)("h2",{id:"config-relay-environment"},"Config Relay Environment"),(0,o.kt)("p",null,"// TODO: add typescript"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { Environment, Network, RecordSource, Store } from 'relay-runtime'\n\nconst fetchRelay = async (params, variables) => {\n  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`)\n  return fetchGraphQL(params.text, variables)\n\n  const response = await fetch('GRAPHQL_ENDPOINT', {\n    method: 'POST',\n    headers: {\n      Authorization: `bearer ${JWT_TOKEN}`,\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: params.text,\n      variables,\n    }),\n  })\n\n  return response.json()\n}\n\nexport const relayEnvironment = new Environment({\n  network: Network.create(fetchRelay),\n  store: new Store(new RecordSource()),\n})\n")),(0,o.kt)("h2",{id:"alternatives"},"Alternatives"),(0,o.kt)("h3",{id:"react-relay-network-modern"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/relay-tools/react-relay-network-modern"},"react-relay-network-modern")),(0,o.kt)("p",null,"Open source Relay Environment with lots of build-in plugins"))}u.isMDXComponent=!0}}]);
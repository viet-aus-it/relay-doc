"use strict";(self.webpackChunkrelay_doc=self.webpackChunkrelay_doc||[]).push([[3420],{9613:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var n=t(9496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,m=u["".concat(l,".").concat(y)]||u[y]||s[y]||a;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5312:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(4250),o=(t(9496),t(9613));const a={sidebar_position:5},i="React Relay Provider",c={unversionedId:"getting-started/relay-provider",id:"getting-started/relay-provider",title:"React Relay Provider",description:"(optional) install react-error-boundary",source:"@site/docs/2.getting-started/5.relay-provider.md",sourceDirName:"2.getting-started",slug:"/getting-started/relay-provider",permalink:"/relay-doc/docs/getting-started/relay-provider",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2.getting-started/5.relay-provider.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Relay Environment",permalink:"/relay-doc/docs/getting-started/relay-environment"}},l={},p=[],d={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-relay-provider"},"React Relay Provider"),(0,o.kt)("p",null,"(optional) install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bvaughn/react-error-boundary"},"react-error-boundary")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm add react-error-boundary\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { Suspense } from 'react'\nimport { RelayEnvironmentProvider } from 'react-relay'\nimport { relayEnvironment } from './relay-environment'\nimport { ErrorBoundary } from 'react-error-boundary'\n\ntype RelayProviderProps = {\n  children: React.ReactNode\n}\n\nexport const RelayProvider: React.FC<RelayProviderProps> = ({ children }) => {\n  return (\n    <RelayEnvironmentProvider environment={relayEnvironment}>\n      <ErrorBoundary FallbackComponent={ErrorFallback}>\n        <Suspense fallback={<AppLoading />}>\n        {children}\n        </Suspense>\n      </ErrorBoundary>\n    </RelayEnvironmentProvider>\n  )\n}\n\nconst AppLoading = () => (\n  <>\n    Loading...\n  </>\n)\n\nconst AppErrorFallback = ({ error, resetErrorBoundary }) => {\n  return (\n    <div role='alert'>\n      <p>Something went wrong:</p>\n      <pre>{error.message}</pre>\n      <button onClick={resetErrorBoundary}>Try again</button>\n    </div>\n  )\n}\n")))}s.isMDXComponent=!0}}]);
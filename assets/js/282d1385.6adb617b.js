(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[934],{90653:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>i.N,ErrorBoundaryError:()=>M.bq,ErrorBoundaryTryAgainButton:()=>M.a2,ErrorCauseBoundary:()=>M.k2,HtmlClassNameProvider:()=>p.e3,NavbarSecondaryMenuFiller:()=>m.GX,PageMetadata:()=>p.be,ReactContextError:()=>d.dV,SkipToContentFallbackId:()=>x.j,SkipToContentLink:()=>x.K,ThemeClassNames:()=>u.G,composeProviders:()=>d.fM,createStorageSlot:()=>r.Wf,duplicates:()=>C.X,filterDocCardListItems:()=>s.d1,isMultiColumnFooterLinks:()=>w.C,isRegexpStringMatch:()=>k.G,listStorageKeys:()=>r.Eo,listTagsByLetters:()=>v,prefersReducedMotion:()=>c.O,processAdmonitionProps:()=>_,translateTagsPageTitle:()=>b,uniq:()=>C.s,useCollapsible:()=>i.u,useColorMode:()=>f.G,useContextualSearchFilters:()=>a.af,useCurrentSidebarCategory:()=>s.$S,useDocsPreferredVersion:()=>A.g1,useEvent:()=>d._q,useIsomorphicLayoutEffect:()=>d.Es,usePluralForm:()=>l.W,usePrevious:()=>d.ZC,usePrismTheme:()=>E.A,useSearchLinkCreator:()=>y.w,useSearchQueryString:()=>y.b,useStorageSlot:()=>r.Dv,useThemeConfig:()=>n.p,useWindowSize:()=>h.l});var n=o(27412),r=o(48708),a=o(98721),s=o(28600),l=o(32815),i=o(32432),u=o(53237),c=o(67683),d=o(15198),p=o(46666),f=o(72363),m=o(65454),h=o(92575),g=o(6590);const b=()=>(0,g.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function v(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var y=o(945),w=o(568),k=o(14242),C=o(44544),E=o(78204),A=o(23947),T=o(63696);function _(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=T.Children.toArray(e),o=t.find((e=>T.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=T.createElement(T.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:o}}var x=o(37018),M=o(42199)},32815:(e,t,o)=>{"use strict";o.d(t,{W:()=>c});var n=o(63696),r=o(67032),a=o(80247);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&a.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),s=o.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(o,t,e)}}},89935:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(63696)),a=n(o(22249));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},4344:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(63696)),a=o(90653),s=n(o(10883)),l=n(o(86555));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,i=()=>"dark"===t?n?.altText??o?.altText:o?.altText,u=(0,s.default)(o?.url),c=(0,s.default)(n?.url);return o&&n?r.default.createElement(l.default,{alt:i(),sources:{light:u,dark:c},className:"openapi__logo"}):o||n?r.default.createElement(l.default,{alt:i(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},81540:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(68102),r=(o(63696),o(19916));o(4344),o(34838),o(22491),o(89935);const a={sidebar_position:-1,hide_title:!0,sidebar_label:"Welcome",title:"Welcome",slug:"/",image:"https://jamestasse.tech/wp-content/uploads/2024/05/satellite-reentry-cropped.png"},s=void 0,l={unversionedId:"welcome",id:"welcome",title:"Welcome",description:"Burning",source:"@site/docs/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/docusaurus-openapi-docs/",draft:!1,tags:[],version:"current",sidebarPosition:-1,frontMatter:{sidebar_position:-1,hide_title:!0,sidebar_label:"Welcome",title:"Welcome",slug:"/",image:"https://jamestasse.tech/wp-content/uploads/2024/05/satellite-reentry-cropped.png"},sidebar:"ORC",previous:{title:"ORC API",permalink:"/docusaurus-openapi-docs/."},next:{title:"Getting Started",permalink:"/docusaurus-openapi-docs/getting-started"}},i={},u=[{value:"About ORC",id:"about-orc",level:2},{value:"About the Author(s)",id:"about-the-authors",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.yg)(d,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("head",null,(0,r.yg)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"})),(0,r.yg)("h1",{id:"welcome-to-orbital-solutions"},"Welcome to Orbital Solutions!"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://jamestasse.tech/wp-content/uploads/2024/06/satellite_burning_small.gif",alt:"Burning"})),(0,r.yg)("div",{align:"left"},(0,r.yg)("p",null,"  We are a fictitious company providing services outside of the Earth's stratosphere. Use the sidebar items on the left to see what our Orbital Refuse Collector (ORC) API can do!")),(0,r.yg)("h2",{id:"about-orc"},"About ORC"),(0,r.yg)("p",null,"The Orbital Refuse Collector (ORC) API is a fictional API that provides resources to retrieve information about satellites and schedule their decommission."),(0,r.yg)("h2",{id:"about-the-authors"},"About the Author(s)"),(0,r.yg)("p",null,"First, I want to thank the folks at ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs"},"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs"),", as this demo is heavily based on their work."),(0,r.yg)("p",null,"If you'd like to contact me or learn more about what services I provide, visit ",(0,r.yg)("a",{parentName:"p",href:"https://jamestasse.tech"},"https://jamestasse.tech"),"."),(0,r.yg)("hr",null))}p.isMDXComponent=!0},22249:function(e,t,o){var n,r,a,s=o(80247);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){s.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,i=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,t,o){var s=l.URL||l.webkitURL,i=document.createElement("a");t=t||e.name||"download",i.download=t,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?a(i):r(i.href)?n(e,t,o):a(i,i.target="_blank")):(i.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(i.href)}),4e4),setTimeout((function(){a(i)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,s){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),o);else if(r(e))n(e,o,s);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,s=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s||i)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=l.URL||l.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});l.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,r):n)||(e.exports=a)}}]);
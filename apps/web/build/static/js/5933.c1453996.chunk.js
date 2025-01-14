"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5933],{19495:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(33962),i=r(77258),o=r.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,t.forwardRef)((function(e,n){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,d=a(e,["color","size"]);return t.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),t.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="AlertCircle";const d=l},19872:(e,n,r)=>{r.d(n,{A:()=>d});var t=r(33962),i=r(77258),o=r.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=(0,t.forwardRef)((function(e,n){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,l=void 0===o?24:o,d=a(e,["color","size"]);return t.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),t.createElement("circle",{cx:"12",cy:"12",r:"10"}),t.createElement("polyline",{points:"16 12 12 8 8 12"}),t.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="ArrowUpCircle";const d=l},2059:(e,n,r)=>{r.d(n,{A:()=>K});var t=r(95682),i=r(29477),o=r(52981),s=r(70819),a=r(64128),l=r(12520),d=r(8509),c=r(41411),u=r(83753),p=r(27249),h=r(63247),m=r(15370),v=r(78135),y=r(16444),f=r(55199),g=r(42228),x=r(33962),b=r(35480),A=r(97161),j=r(73763),w=r(66954),$=r(13068),k=r(7740),O=r(53195),N=r(91071);const I=y.Ay.div`
  ${$.ZZ};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,E=y.Ay.div`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:r})=>!r&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,P=(0,y.Ay)(s.EA)`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,g.e$)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,T=y.Ay.div`
  ${$.BI};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,C=y.Ay.div`
  ${$.BI};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,g.e$)(.2,e.neutral2)};
  }
`,_=(0,y.Ay)(C)`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,S=y.Ay.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,z=(0,y.Ay)(o.h)`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,D=y.Ay.span`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${j.LO.sm}px) {
    font-size: 16px;
  }
`,B=y.Ay.button`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,R=(0,y.Ay)(u.pd)`
  ${l.fp};
  text-align: left;
`,V=(0,y.Ay)(m.cC)`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function K({value:e,onUserInput:n,onMax:r,showMaxButton:o,onCurrencySelect:s,currency:u,otherCurrency:m,id:y,showCurrencyAmount:g,currencyField:j,renderBalance:$,fiatValue:C,hideBalance:K=!1,pair:U=null,hideInput:W=!1,locked:L=!1,loading:M=!1,...F}){var q,G,J,X,Z;const{t:H}=(0,b.useTranslation)(),[Q,Y]=(0,x.useState)(!1),ee=(0,v.F)(),ne=(0,k.oe)(ee.chainId),re=(0,A.Ay)(ee.address,u??void 0),te=(0,f.useTheme)(),{formatCurrencyAmount:ie}=(0,N.kc)(),oe=(0,x.useCallback)((()=>{Y(!1)}),[Y]);return(0,t.jsxs)(I,{id:y,hideInput:W,...F,children:[!L&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(E,{hideInput:W,disabled:!ne,children:[(0,t.jsxs)(T,{style:W?{padding:"0",borderRadius:"8px"}:{},selected:!s,children:[!W&&(0,t.jsx)(R,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:M,maxDecimals:null===(q=u)||void 0===q?void 0:q.decimals}),(0,t.jsx)(V,{$fullWidth:W,children:(0,t.jsx)(P,{disabled:!ne,visible:void 0!==u,selected:!!u,hideInput:W,className:"open-currency-select-button",onClick:()=>{s&&Y(!0)},pointerEvents:s?void 0:"none",children:(0,t.jsxs)(S,{children:[(0,t.jsxs)(h.Bp,{children:[U?(0,t.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,t.jsx)(c.g,{currencies:[U.token0,U.token1],size:24})}):u&&(0,t.jsx)(d.A,{style:{marginRight:"0.5rem"},currency:u,size:24}),U?(0,t.jsxs)(D,{className:"pair-name-container",children:[null===(G=U)||void 0===G?void 0:G.token0.symbol,":",null===(J=U)||void 0===J?void 0:J.token1.symbol]}):(0,t.jsx)(D,{className:"token-symbol-container",active:Boolean(u&&u.symbol),children:(u&&u.symbol&&u.symbol.length>20?u.symbol.slice(0,4)+"..."+u.symbol.slice(u.symbol.length-5,u.symbol.length):null===(X=u)||void 0===X?void 0:X.symbol)||(0,t.jsx)(b.Trans,{i18nKey:"tokens.selector.button.choose"})})]}),s&&(0,t.jsx)(z,{selected:!!u})]})})})]}),Boolean(!W&&!K&&u)&&(0,t.jsx)(_,{children:(0,t.jsxs)(h.JA,{children:[(0,t.jsx)(l.N3,{$loading:M,children:C&&(0,t.jsx)(a.s,{fiatValue:C})}),ee&&(0,t.jsxs)(h.Bp,{style:{height:"17px"},children:[(0,t.jsx)(w.P.DeprecatedBody,{onClick:r,color:te.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!K&&u&&re)&&((null===(Z=$)||void 0===Z?void 0:Z(re))||(0,t.jsx)(b.Trans,{i18nKey:"swap.balance.amount",values:{amount:ie({amount:re,type:N.wl.TokenNonTx})}}))}),Boolean(o&&re)&&(0,t.jsx)(O.default,{logPress:!0,eventOnTrigger:i.ty.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:i.nM.MAX_TOKEN_AMOUNT_BUTTON,children:(0,t.jsx)(B,{onClick:r,children:H("common.max").toUpperCase()})})]})]})})]})}),s&&(0,t.jsx)(p.A,{isOpen:Q,onDismiss:oe,onCurrencySelect:s,selectedCurrency:u,otherSelectedCurrency:m,showCurrencyAmount:g,currencyField:j})]})}},32070:(e,n,r)=>{r.d(n,{m:()=>w});var t=r(95682),i=r(25410),o=r(63247),s=r(78135),a=r(16444),l=r(55199),d=r(81971),c=r(35480),u=r(42150),p=r(88361),h=r(45355),m=r(18280),v=r(31546),y=r(782),f=r(66954),g=r(13068);const x=a.Ay.div`
  ${g.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,a.Ay)(u.Link)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,A=(0,a.Ay)(d.A)`
  color: ${({theme:e})=>e.neutral1};
`,j=(0,a.Ay)(f.P.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function w({adding:e,creating:n,autoSlippage:r,positionID:a,children:d}){var u;const{chainId:f}=(0,s.F)(),g=(0,l.useTheme)(),w=(0,m.j)(),{state:$}=(0,p.zy)(),k=(0,p.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(a?`/${a.toString()}`:""),O=(null===(u=$)||void 0===u?void 0:u.from)??k;return(0,t.jsx)(x,{children:(0,t.jsxs)(o.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,t.jsx)(b,{to:O,onClick:()=>{e&&(w((0,v.JE)()),w((0,y.JE)()))},flex:d?"1":void 0,children:(0,t.jsx)(A,{stroke:g.neutral2})}),(0,t.jsx)(j,{$center:!d,children:n?(0,t.jsx)(c.Trans,{i18nKey:"pool.create.pair"}):e?(0,t.jsx)(c.Trans,{i18nKey:"common.addLiquidity"}):(0,t.jsx)(c.Trans,{i18nKey:"pool.removeLiquidity"})}),d&&(0,t.jsx)(h.az,{style:{marginRight:".5rem"},children:d}),(0,t.jsx)(i.A,{autoSlippage:r,chainId:f,hideRoutingSettings:!0})]})})}},10482:(e,n,r)=>{r.d(n,{e:()=>l});var t=r(77085),i=r(33962),o=r(86396),s=r(78065);function a(e){const n=(0,o.OQ)();return(0,i.useCallback)((()=>e().then((e=>{if(e){const{response:r,tokenAddress:t,spenderAddress:i,amount:o}=e;n(r,{type:s.D.APPROVAL,tokenAddress:t,spender:i,amount:o.quotient.toString()})}}))),[n,e])}function l(e,n){const[r,i]=(0,t.V)(e,n,o.yI);return[r,a(i)]}},77085:(e,n,r)=>{r.d(n,{V:()=>y,h:()=>v});var t=r(40936),i=r(29477),o=r(78135),s=r(68071),a=r(37363),l=r(3488),d=r(33962),c=r(53412),u=r(2303),p=r(97485);function h(e,n,r,t,i,o,s){try{var a=e[o](s),l=a.value}catch(d){return void r(d)}a.done?n(l):Promise.resolve(l).then(t,i)}function m(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var o=e.apply(n,r);function s(e){h(o,t,i,s,a,"next",e)}function a(e){h(o,t,i,s,a,"throw",e)}s(void 0)}))}}var v=(e=>(e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED",e))(v||{});function y(e,n,r){var h,v,y,f;const{chainId:g}=(0,o.F)(),x=(null===(v=e)||void 0===v||null===(h=v.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,b=function(e,n,r){var t,i;const s=(0,o.F)(),l=(null===(i=e)||void 0===i||null===(t=i.currency)||void 0===t?void 0:t.isToken)?e.currency:void 0,{tokenAllowance:c}=(0,a.l)(l,s.address,n),u=r(l,n);return(0,d.useMemo)((()=>e&&n?e.currency.isNative?"APPROVED":c?c.lessThan(e)?u?"PENDING":"NOT_APPROVED":"APPROVED":"UNKNOWN":"UNKNOWN"),[e,u,n,c])}(e,n,r),A=(0,s.dV)(null===(y=x)||void 0===y?void 0:y.address,void 0,null===(f=x)||void 0===f?void 0:f.chainId),j=(0,d.useCallback)(m((function*(){function r(n){var r,t,i;"string"===typeof n?u.logger.debug("useApproval","approve",n):u.logger.debug("useApproval","approve","Failed to approve amount",{error:n,tokenChain:null===(r=x)||void 0===r?void 0:r.chainId,token:null===(t=x)||void 0===t?void 0:t.address,chainId:g,amountToApprove:null===(i=e)||void 0===i?void 0:i.toFixed()})}if("NOT_APPROVED"!==b)return r("approve was called unnecessarily");if(!g)return r("no chainId");if(!x)return r("no token");if(!A)return r("tokenContract is null");if(!e)return r("missing amount to approve");if(!n)return r("no spender");let o=!1;const s=yield A.estimateGas.approve(n,t.Is).catch((()=>(o=!0,A.estimateGas.approve(n,e.quotient.toString()))));return A.approve(n,o?e.quotient.toString():t.Is,{gasLimit:(0,p.K)(s)}).then((r=>{var t;const o={chain_id:g,token_symbol:null===(t=x)||void 0===t?void 0:t.symbol,token_address:(0,l.me)(x)};return(0,c.sendAnalyticsEvent)(i.ze.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:r,tokenAddress:x.address,spenderAddress:n,amount:e}})).catch((e=>{throw r(e),e}))})),[b,x,A,e,n,g]);return[b,j]}},52038:(e,n,r)=>{r.d(n,{A:()=>a,q:()=>s});var t=r(95682),i=r(16444),o=r(17960);const s=i.Ay.main`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.M.default};
`;function a(e){return(0,t.jsx)(s,{...e})}}}]);
//# sourceMappingURL=5933.c1453996.chunk.js.map
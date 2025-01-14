"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1802],{19495:(e,n,r)=>{r.d(n,{A:()=>d});var i=r(33962),t=r(77258),o=r.n(t);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=(0,i.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="AlertCircle";const d=c},19872:(e,n,r)=>{r.d(n,{A:()=>d});var i=r(33962),t=r(77258),o=r.n(t);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},l.apply(this,arguments)}function s(e,n){if(null==e)return{};var r,i,t=function(e,n){if(null==e)return{};var r,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=(0,i.forwardRef)((function(e,n){var r=e.color,t=void 0===r?"currentColor":r,o=e.size,c=void 0===o?24:o,d=s(e,["color","size"]);return i.createElement("svg",l({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("polyline",{points:"16 12 12 8 8 12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));c.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},c.displayName="ArrowUpCircle";const d=c},32070:(e,n,r)=>{r.d(n,{m:()=>A});var i=r(95682),t=r(25410),o=r(63247),l=r(78135),s=r(16444),c=r(55199),d=r(81971),a=r(35480),u=r(42150),m=r(88361),p=r(45355),x=r(18280),h=r(31546),v=r(782),y=r(66954),f=r(13068);const g=s.Ay.div`
  ${f.BI};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,j=(0,s.Ay)(u.Link)`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,s.Ay)(d.A)`
  color: ${({theme:e})=>e.neutral1};
`,w=(0,s.Ay)(y.P.H1Small)`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function A({adding:e,creating:n,autoSlippage:r,positionID:s,children:d}){var u;const{chainId:y}=(0,l.F)(),f=(0,c.useTheme)(),A=(0,x.j)(),{state:k}=(0,m.zy)(),$=(0,m.zy)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(s?`/${s.toString()}`:""),E=(null===(u=k)||void 0===u?void 0:u.from)??$;return(0,i.jsx)(g,{children:(0,i.jsxs)(o.JA,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(j,{to:E,onClick:()=>{e&&(A((0,h.JE)()),A((0,v.JE)()))},flex:d?"1":void 0,children:(0,i.jsx)(b,{stroke:f.neutral2})}),(0,i.jsx)(w,{$center:!d,children:n?(0,i.jsx)(a.Trans,{i18nKey:"pool.create.pair"}):e?(0,i.jsx)(a.Trans,{i18nKey:"common.addLiquidity"}):(0,i.jsx)(a.Trans,{i18nKey:"pool.removeLiquidity"})}),d&&(0,i.jsx)(p.az,{style:{marginRight:".5rem"},children:d}),(0,i.jsx)(t.A,{autoSlippage:r,chainId:y,hideRoutingSettings:!0})]})})}},42102:(e,n,r)=>{r.d(n,{A:()=>s});var i=r(95682),t=r(16444),o=r(33962);const l=t.Ay.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow:
        0px 0px 1px rgba(0, 0, 0, 0.1),
        0px 4px 8px rgba(0, 0, 0, 0.08),
        0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function s({value:e,onChange:n,min:r=0,step:t=1,max:s=100,size:c=28,...d}){const a=(0,o.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,i.jsx)(l,{size:c,...d,type:"range",value:e,style:{padding:"15px 0"},onChange:a,"aria-labelledby":"input slider",step:t,min:r,max:s})}},34635:(e,n,r)=>{r.d(n,{A:()=>t});var i=r(33962);function t(e,n,r=100){const[t,o]=(0,i.useState)((()=>e)),l=(0,i.useRef)(),s=(0,i.useCallback)((e=>{o(e),l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{n(e),l.current=void 0}),r)}),[r,n]);return(0,i.useEffect)((()=>{l.current&&(clearTimeout(l.current),l.current=void 0),o(e)}),[e]),[t,s]}},52038:(e,n,r)=>{r.d(n,{A:()=>s,q:()=>l});var i=r(95682),t=r(16444),o=r(17960);const l=t.Ay.main`
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
`;function s(e){return(0,i.jsx)(l,{...e})}},78515:(e,n,r)=>{r.r(n),r.d(n,{default:()=>ve});var i=r(95682),t=r(55043),o=r(29477),l=r(58793),s=r(97404),c=r(94548),d=r(55009),a=r(70819),u=r(5459),m=r(87367),p=r(88024),x=r(8509),h=r(41411),v=r(32070),y=r(42102),f=r(83752),g=r(45353),j=r(63247),b=r(94873),w=r(78135),A=r(68071),k=r(34635),$=r(29681),E=r(40999),C=r(52932),z=r(81493),S=r(31110),T=r(52038),q=r(75413),I=r(16444),O=r(66064),L=r(45355);const P=I.Ay.div`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,R=(0,I.Ay)(O.LJ)`
  font-size: 12px;
`,W=(0,I.Ay)(L.EY)`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;var Y=r(33962),K=r(35480),_=r(88361),V=r(9656),B=r(65475),J=r(28771),D=r(23801),F=r(18280),U=r(17531);function M(){return(0,F.G)((e=>e.burnV3))}var N=r(86396),Q=r(78065),H=r(36149),G=r(66954),Z=r(14021),X=r(35234),ee=r(69104),ne=r(99759),re=r(34748),ie=r(7740),te=r(34546),oe=r(45805),le=r(53412),se=r(2303),ce=r(20722),de=r(97485),ae=r(53736),ue=r(11149),me=r(91071);function pe(e,n,r,i,t,o,l){try{var s=e[o](l),c=s.value}catch(d){return void r(d)}s.done?n(c):Promise.resolve(c).then(i,t)}function xe(e){return function(){var n=this,r=arguments;return new Promise((function(i,t){var o=e.apply(n,r);function l(e){pe(o,i,t,l,s,"next",e)}function s(e){pe(o,i,t,l,s,"throw",e)}l(void 0)}))}}const he=new s.Percent(50,1e4);function ve(){const{chainId:e}=(0,w.F)(),{defaultChainId:n}=(0,re.useEnabledChains)(),r=(0,ie.oe)(e),{tokenId:o}=(0,_.g)(),l=(0,_.zy)(),s=(0,Y.useMemo)((()=>{try{return t.gH.from(o)}catch{return null}}),[o]),{position:c,loading:d}=(0,z.C)(s??void 0);if((0,oe.useFeatureFlag)(te.FeatureFlags.LPRedesign)){var a;const r=null===(a=(0,ne.getChainInfo)(e??n))||void 0===a?void 0:a.urlParam,t=o?`/v3/${r}/${o}`:"";return(0,i.jsx)(_.C5,{to:`/positions${t}`,replace:!0})}return null===s||s.eq(0)?(0,i.jsx)(_.C5,{to:{...l,pathname:"/pools"},replace:!0}):r&&(d||c)?(0,i.jsx)(ye,{tokenId:s}):(0,i.jsx)(q.l,{})}function ye({tokenId:e}){var n,r,t,q,I,O,L,_,ne,re,ie,te,oe,pe,ve,ye,fe,ge,je,be,we,Ae,ke,$e,Ee,Ce,ze,Se,Te,qe,Ie,Oe;const{position:Le}=(0,z.C)(e),Pe=(0,w.F)(),Re=(0,$.N)(),We=(0,ce.useTrace)(),{formatCurrencyAmount:Ye}=(0,me.kc)(),[Ke,_e]=(0,Y.useState)(!1),Ve=(0,S.A)(Pe.chainId).wrapped.symbol,{percent:Be}=M(),{position:Je,liquidityPercentage:De,liquidityValue0:Fe,liquidityValue1:Ue,feeValue0:Me,feeValue1:Ne,outOfRange:Qe,error:He}=function(e,n=!1){var r,t,o,l;const d=(0,w.F)(),{percent:a}=M(),u=(0,B.rd)(null===(r=e)||void 0===r?void 0:r.token0),m=(0,B.rd)(null===(t=e)||void 0===t?void 0:t.token1),[,p]=(0,E.Q2)(u??void 0,m??void 0,null===(o=e)||void 0===o?void 0:o.fee),x=(0,Y.useMemo)((()=>{var n,r,i;return p&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(r=e)||void 0===r?void 0:r.tickLower)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickUpper)?new c.Position({pool:p,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[p,e]),h=new s.Percent(a,100),v=x?h.multiply(x.amount0.quotient).quotient:void 0,y=x?h.multiply(x.amount1.quotient).quotient:void 0,f=u&&v?s.CurrencyAmount.fromRawAmount(n?u:(0,U.U)(u),v):void 0,g=m&&y?s.CurrencyAmount.fromRawAmount(n?m:(0,U.U)(m),y):void 0,[j,b]=(0,J.R)(p??void 0,null===(l=e)||void 0===l?void 0:l.tokenId,n),A=!(!p||!e)&&(p.tickCurrent<e.tickLower||p.tickCurrent>e.tickUpper);let k;return d.isConnected||(k=(0,i.jsx)(V.$,{})),0===a&&(k=k??(0,i.jsx)(K.Trans,{i18nKey:"burn.input.enterAPercent.error"})),{position:x,liquidityPercentage:h,liquidityValue0:f,liquidityValue1:g,feeValue0:j,feeValue1:b,outOfRange:A,error:k}}(Le,Ke),{onPercentSelect:Ge}=function(){const e=(0,F.j)();return{onPercentSelect:(0,Y.useCallback)((n=>{e((0,D.g)({percent:n}))}),[e])}}(),Ze=null===(r=Le)||void 0===r||null===(n=r.liquidity)||void 0===n?void 0:n.eq(0),[Xe,en]=(0,k.A)(Be,Ge),nn=(0,C.E)(),rn=(0,H.co)(he),[tn,on]=(0,Y.useState)(!1),[ln,sn]=(0,Y.useState)(!1),[cn,dn]=(0,Y.useState)(),an=(0,N.OQ)(),un=(0,A.TA)(),mn=(0,Y.useCallback)(xe((function*(){if(sn(!0),!un||!Fe||!Ue||"connected"!==Pe.status||!Je||!De||!Re)return;const n=yield nn();if(!n)throw new Error("could not get deadline");const{calldata:r,value:i}=c.NonfungiblePositionManager.removeCallParameters(Je,{tokenId:e.toString(),liquidityPercentage:De,slippageTolerance:rn,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Me??s.CurrencyAmount.fromRawAmount(Fe.currency,0),expectedCurrencyOwed1:Ne??s.CurrencyAmount.fromRawAmount(Ue.currency,0),recipient:Pe.address}}),t={to:un.address,data:r,value:i},d=yield Re.getChainId();if(Pe.chainId!==d)throw new ue.$c;Re.estimateGas(t).then((e=>{const n={...t,gasLimit:(0,de.K)(e)};return Re.sendTransaction(n).then((e=>{var n;(0,le.sendAnalyticsEvent)(o.ko.REMOVE_LIQUIDITY_SUBMITTED,{...(0,p.J)({trace:We,fee:null===(n=Le)||void 0===n?void 0:n.fee,poolId:Pe.chainId&&Le?E.dZ.getPoolAddress(s.V3_CORE_FACTORY_ADDRESSES[Pe.chainId],Je.amount0.currency,Je.amount1.currency,Le.fee,Pe.chainId):void 0,currency0:Fe.currency,currency1:Ue.currency,currency0AmountUsd:Fe,currency1AmountUsd:Ue,version:l.ProtocolVersion.V3,chainId:Pe.chainId}),expectedAmountBaseRaw:Fe.quotient.toString(),expectedAmountQuoteRaw:Ue.quotient.toString(),transaction_hash:e.hash,closePosition:100===Be}),dn(e.hash),sn(!1),an(e,{type:Q.D.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,ae.V)(Fe.currency),quoteCurrencyId:(0,ae.V)(Ue.currency),expectedAmountBaseRaw:Fe.quotient.toString(),expectedAmountQuoteRaw:Ue.quotient.toString()})}))})).catch((e=>{sn(!1),se.logger.error(e,{tags:{file:"RemoveLiquidity/V3",function:"burn"}})}))})),[un,Fe,Ue,Pe.status,Pe.address,Pe.chainId,Je,De,Re,nn,e,rn,Me,Ne,We,Le,Be,an]),pn=(0,Y.useCallback)((()=>{on(!1),cn&&en(0),sn(!1),dn("")}),[en,cn]),xn=(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.removing",values:{amt1:null===(t=Fe)||void 0===t?void 0:t.toSignificant(6),symbol1:null===(I=Fe)||void 0===I||null===(q=I.currency)||void 0===q?void 0:q.symbol,amt2:null===(O=Ue)||void 0===O?void 0:O.toSignificant(6),symbol2:null===(_=Ue)||void 0===_||null===(L=_.currency)||void 0===L?void 0:L.symbol}});function hn(){var e,n,r,t,o,l,s,c,d,u,m,p,h,v;return(0,i.jsxs)(g.mm,{gap:"sm",style:{padding:"16px"},children:[(0,i.jsxs)(j.JA,{align:"flex-end",children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(n=Fe)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ye({amount:Fe})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(r=Fe)||void 0===r?void 0:r.currency})]})]}),(0,i.jsxs)(j.JA,{align:"flex-end",children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(o=Ue)||void 0===o||null===(t=o.currency)||void 0===t?void 0:t.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Ue&&Ye({amount:Ue})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(l=Ue)||void 0===l?void 0:l.currency})]})]}),(null===(s=Me)||void 0===s?void 0:s.greaterThan(0))||(null===(c=Ne)||void 0===c?void 0:c.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Z.EY,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.collectFees"})}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(u=Me)||void 0===u||null===(d=u.currency)||void 0===d?void 0:d.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ye({amount:Me})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(m=Me)||void 0===m?void 0:m.currency})]})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(h=Ne)||void 0===h||null===(p=h.currency)||void 0===p?void 0:p.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Ne&&Ye({amount:Ne})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(v=Ne)||void 0===v?void 0:v.currency})]})]})]}):null,(0,i.jsx)(a.$$,{mt:"16px",onClick:mn,children:(0,i.jsx)(K.Trans,{i18nKey:"common.remove.label"})})]})}const vn=Boolean((null===(ne=Fe)||void 0===ne?void 0:ne.currency)&&(null===(re=Ue)||void 0===re?void 0:re.currency)&&(Fe.currency.isNative||Ue.currency.isNative||(null===(ie=ee.WRAPPED_NATIVE_CURRENCY[Fe.currency.chainId])||void 0===ie?void 0:ie.equals(Fe.currency.wrapped))||(null===(te=ee.WRAPPED_NATIVE_CURRENCY[Ue.currency.chainId])||void 0===te?void 0:te.equals(Ue.currency.wrapped))));return(0,i.jsxs)(g.mm,{children:[(0,i.jsx)(f.A,{isOpen:tn,onDismiss:pn,attemptingTxn:ln,hash:cn??"",reviewContent:()=>(0,i.jsx)(f.Y,{title:(0,i.jsx)(K.Trans,{i18nKey:"pool.removeLiquidity"}),onDismiss:pn,topContent:hn}),pendingText:xn}),(0,i.jsxs)(T.A,{$maxWidth:"unset",children:[(0,i.jsx)(v.m,{creating:!1,adding:!1,autoSlippage:he}),(0,i.jsx)(P,{children:Le?(0,i.jsxs)(g.mm,{gap:"lg",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(h.g,{currencies:[null===(oe=Fe)||void 0===oe?void 0:oe.currency,null===(pe=Ue)||void 0===pe?void 0:pe.currency],size:20}),(0,i.jsx)(G.P.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(ye=Fe)||void 0===ye||null===(ve=ye.currency)||void 0===ve?void 0:ve.symbol}/${null===(ge=Ue)||void 0===ge||null===(fe=ge.currency)||void 0===fe?void 0:fe.symbol}`})]}),(0,i.jsx)(d.A,{removed:Ze,inRange:!Qe})]}),(0,i.jsx)(u.R4,{children:(0,i.jsxs)(g.mm,{gap:"md",children:[(0,i.jsx)(G.P.DeprecatedMain,{fontWeight:485,children:(0,i.jsx)(K.Trans,{i18nKey:"common.amount.label"})}),(0,i.jsxs)(j.JA,{children:[(0,i.jsxs)(W,{children:[Xe,"%"]}),(0,i.jsxs)(j.eF,{gap:"4px",justify:"flex-end",children:[(0,i.jsx)(R,{onClick:()=>Ge(25),width:"20%",children:"25%"}),(0,i.jsx)(R,{onClick:()=>Ge(50),width:"20%",children:"50%"}),(0,i.jsx)(R,{onClick:()=>Ge(75),width:"20%",children:"75%"}),(0,i.jsx)(R,{onClick:()=>Ge(100),width:"20%",children:(0,i.jsx)(K.Trans,{i18nKey:"common.max"})})]})]}),(0,i.jsx)(y.A,{value:Xe,onChange:en})]})}),(0,i.jsx)(u.R4,{children:(0,i.jsxs)(g.mm,{gap:"md",children:[(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(be=Fe)||void 0===be||null===(je=be.currency)||void 0===je?void 0:je.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Fe&&Ye({amount:Fe})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(we=Fe)||void 0===we?void 0:we.currency})]})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,i.jsx)(K.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:null===(ke=Ue)||void 0===ke||null===(Ae=ke.currency)||void 0===Ae?void 0:Ae.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Ue&&Ye({amount:Ue})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===($e=Ue)||void 0===$e?void 0:$e.currency})]})]}),(null===(Ee=Me)||void 0===Ee?void 0:Ee.greaterThan(0))||(null===(Ce=Ne)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.qC,{}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(Se=Me)||void 0===Se||null===(ze=Se.currency)||void 0===ze?void 0:ze.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ye({amount:Me})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(Te=Me)||void 0===Te?void 0:Te.currency})]})]}),(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",children:(0,i.jsx)(K.Trans,{i18nKey:"common.feesEarned.label",values:{symbol:null===(Ie=Ne)||void 0===Ie||null===(qe=Ie.currency)||void 0===qe?void 0:qe.symbol}})}),(0,i.jsxs)(j.Bp,{children:[(0,i.jsx)(Z.EY,{fontSize:16,fontWeight:"$medium",ml:6,children:Ne&&Ye({amount:Ne})}),(0,i.jsx)(x.A,{size:20,style:{marginLeft:"8px"},currency:null===(Oe=Ne)||void 0===Oe?void 0:Oe.currency})]})]})]}):null]})}),vn&&(0,i.jsxs)(j.JA,{children:[(0,i.jsx)(G.P.DeprecatedMain,{children:(0,i.jsx)(K.Trans,{i18nKey:"pool.collectAs",values:{nativeWrappedSymbol:Ve}})}),(0,i.jsx)(X.d,{id:"receive-as-weth",checked:Ke,onCheckedChange:()=>_e((e=>!e)),variant:"branded"})]}),(0,i.jsx)("div",{style:{display:"flex"},children:(0,i.jsx)(g.mm,{gap:"md",style:{flex:"1"},children:(0,i.jsx)(a.m$,{confirmed:!1,disabled:Ze||0===Be||!Fe,onClick:()=>on(!0),children:Ze?(0,i.jsx)(K.Trans,{i18nKey:"common.closed"}):He??(0,i.jsx)(K.Trans,{i18nKey:"common.remove.label"})})})})]}):(0,i.jsx)(m.Ay,{})})]})]})}}}]);
//# sourceMappingURL=1802.91117d94.chunk.js.map
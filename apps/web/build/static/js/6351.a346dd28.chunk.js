"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6351],{59469:(e,n,t)=>{t.d(n,{A:()=>z});var i=t(95682),o=t(29477),r=t(94548),a=t(70819),s=t(5459),d=t(35480),l=t(26179);const u={[r.FeeAmount.LOWEST]:{label:"0.01",description:(0,i.jsx)(d.Trans,{i18nKey:"fee.bestForVeryStable"}),supportedChains:l.ALL_CHAIN_IDS},[r.FeeAmount.LOW_200]:{label:"0.02",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW_300]:{label:"0.03",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW_400]:{label:"0.04",supportedChains:[l.UniverseChainId.Base]},[r.FeeAmount.LOW]:{label:"0.05",description:(0,i.jsx)(d.Trans,{i18nKey:"fee.bestForStablePairs"}),supportedChains:l.ALL_CHAIN_IDS},[r.FeeAmount.MEDIUM]:{label:"0.3",description:(0,i.jsx)(d.Trans,{i18nKey:"fee.bestForMost"}),supportedChains:l.ALL_CHAIN_IDS},[r.FeeAmount.HIGH]:{label:"1",description:(0,i.jsx)(d.Trans,{i18nKey:"fee.bestForExotic"}),supportedChains:l.ALL_CHAIN_IDS}};var m=t(38108),c=t(45353),p=t(40999),v=t(79253),A=t(57024),x=t(14021),S=t(91071);function f({feeAmount:e,selected:n,poolState:t,distributions:o,onClick:r}){var a,s;const{formatDelta:l}=(0,S.kc)(),f=null===(s=o)||void 0===s||null===(a=s[e])||void 0===a?void 0:a.toFixed(0),h=u[e].description;return(0,i.jsx)(m.PD,{disabled:!h,text:h,size:m.N6.Max,placement:"auto",children:(0,i.jsxs)(v.s,{alignItems:"flex-start",py:"$padding12",px:"$padding8",borderRadius:"$rounded12",borderWidth:"$spacing1",borderColor:n?"$accent1":"$surface3",focusStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},pressStyle:{shadowColor:"$surface3",shadowRadius:"$spacing1"},hoverStyle:{shadowColor:"$neutral3",shadowRadius:"$spacing1"},disabledStyle:{opacity:.5,cursor:"auto"},children:[(0,i.jsx)(A.a,{position:"absolute",top:"$spacing8",right:"$spacing8",value:e.toString(),onPress:r,variant:"branded"}),(0,i.jsxs)(c.mm,{gap:"sm",justify:"flex-start",children:[(0,i.jsx)(x.EY,{variant:"buttonLabel3",children:l(parseFloat(u[e].label))}),o&&(0,i.jsx)(x.EY,{variant:"body4",color:"$neutral2",children:o&&t!==p.S.NOT_EXISTS&&t!==p.S.INVALID?void 0!==o[e]?(0,i.jsx)(d.Trans,{i18nKey:"fee.selectPercent",values:{pct:f}}):(0,i.jsx)(d.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(d.Trans,{i18nKey:"common.notCreated.label"})})]})]})})}var h=t(71068),b=t(66954);function L({feeAmount:e,distributions:n,poolState:t}){var o,r;const a=null===(r=n)||void 0===r||null===(o=r[e])||void 0===o?void 0:o.toFixed(0);return(0,i.jsx)(h.A,{children:(0,i.jsx)(b.P.DeprecatedLabel,{fontSize:10,children:n&&t!==p.S.NOT_EXISTS&&t!==p.S.INVALID?void 0!==n[e]?(0,i.jsx)(d.Trans,{i18nKey:"fee.selectPercent",values:{pct:a}}):(0,i.jsx)(d.Trans,{i18nKey:"common.noData"}):(0,i.jsx)(d.Trans,{i18nKey:"common.notCreated.label"})})})}var F=t(63247),O=t(78135),I=t(43423),g=t.n(I),E=t(33962),T=t(85141),y=t(34748),_=t(84551),W=t(2303);function j(e,n){var t,i;const{isLoading:o,error:a,distributions:s}=function(e,n){var t,i,o,a;const{defaultChainId:s}=(0,y.useEnabledChains)(),d=(0,_.toGraphQLChain)((null===(t=e)||void 0===t?void 0:t.chainId)??s),{loading:l,error:u,data:m}=(0,T.useFeeTierDistributionQuery)({variables:{chain:d,token0:(null===(i=e)||void 0===i?void 0:i.address)??"",token1:(null===(o=n)||void 0===o?void 0:o.address)??""},pollInterval:g()("30s")}),{data:c,error:p}=(0,T.useIsV3SubgraphStaleQuery)({variables:{chain:d},pollInterval:g()("30s")}),{v3PoolsForTokenPair:v}=m??{};return(0,E.useMemo)((()=>{var e;if(p||!v)return{isLoading:l,error:u??p};if(null===(e=c)||void 0===e?void 0:e.isV3SubgraphStale)return W.logger.info("useFeeTierDistribution","usePoolTVL","Subgraph stale"),{isLoading:l,error:u};const n=v.reduce(((e,n)=>{var t,i;return n.feeTier?((t=e)[i=n.feeTier]??(t[i]=[0,0]),e[n.feeTier][0]=(e[n.feeTier][0]??0)+Number(n.token0Supply),e[n.feeTier][1]=(e[n.feeTier][1]??0)+Number(n.token1Supply),e):e}),{[r.FeeAmount.LOWEST]:[void 0,void 0],[r.FeeAmount.LOW]:[void 0,void 0],[r.FeeAmount.MEDIUM]:[void 0,void 0],[r.FeeAmount.HIGH]:[void 0,void 0],[r.FeeAmount.LOW_200]:[void 0,void 0],[r.FeeAmount.LOW_300]:[void 0,void 0],[r.FeeAmount.LOW_400]:[void 0,void 0]}),[t,i]=Object.values(n).reduce(((e,n)=>(e[0]+=n[0]??0,e[1]+=n[1]??0,e)),[0,0]),o=(e,n,t,i)=>void 0===e&&void 0===t?void 0:((e??0)+(t??0))/(n+i)||0,a={[r.FeeAmount.LOWEST]:o(n[r.FeeAmount.LOWEST][0],t,n[r.FeeAmount.LOWEST][1],i),[r.FeeAmount.LOW]:o(n[r.FeeAmount.LOW][0],t,n[r.FeeAmount.LOW][1],i),[r.FeeAmount.MEDIUM]:o(n[r.FeeAmount.MEDIUM][0],t,n[r.FeeAmount.MEDIUM][1],i),[r.FeeAmount.HIGH]:o(n[r.FeeAmount.HIGH][0],t,n[r.FeeAmount.HIGH][1],i),[r.FeeAmount.LOW_200]:o(n[r.FeeAmount.LOW_200][0],t,n[r.FeeAmount.LOW_200][1],i),[r.FeeAmount.LOW_300]:o(n[r.FeeAmount.LOW_300][0],t,n[r.FeeAmount.LOW_300][1],i),[r.FeeAmount.LOW_400]:o(n[r.FeeAmount.LOW_400][0],t,n[r.FeeAmount.LOW_400][1],i)};return{isLoading:l,error:u,distributions:a}}),[p,v,null===(a=c)||void 0===a?void 0:a.isV3SubgraphStale,l,u])}(null===(t=e)||void 0===t?void 0:t.wrapped,null===(i=n)||void 0===i?void 0:i.wrapped),[d]=(0,p.Q2)(e,n,r.FeeAmount.LOWEST),[l]=(0,p.Q2)(e,n,r.FeeAmount.LOW_200),[u]=(0,p.Q2)(e,n,r.FeeAmount.LOW_300),[m]=(0,p.Q2)(e,n,r.FeeAmount.LOW_400),[c]=(0,p.Q2)(e,n,r.FeeAmount.LOW),[v]=(0,p.Q2)(e,n,r.FeeAmount.MEDIUM),[A]=(0,p.Q2)(e,n,r.FeeAmount.HIGH);return(0,E.useMemo)((()=>{if(o||a||!s)return{isLoading:o,isError:!!a,distributions:s};const e=Object.keys(s).map((e=>Number(e))).filter((e=>0!==s[e]&&void 0!==s[e])).reduce(((e,n)=>(s[e]??0)>(s[n]??0)?e:n),-1),n=o||a||!s||d===p.S.LOADING||l===p.S.LOADING||u===p.S.LOADING||m===p.S.LOADING||c===p.S.LOADING||v===p.S.LOADING||A===p.S.LOADING?void 0:{[r.FeeAmount.LOWEST]:d===p.S.EXISTS?100*(s[r.FeeAmount.LOWEST]??0):void 0,[r.FeeAmount.LOW_200]:l===p.S.EXISTS?100*(s[r.FeeAmount.LOW_200]??0):void 0,[r.FeeAmount.LOW_300]:u===p.S.EXISTS?100*(s[r.FeeAmount.LOW_300]??0):void 0,[r.FeeAmount.LOW_400]:m===p.S.EXISTS?100*(s[r.FeeAmount.LOW_400]??0):void 0,[r.FeeAmount.LOW]:c===p.S.EXISTS?100*(s[r.FeeAmount.LOW]??0):void 0,[r.FeeAmount.MEDIUM]:v===p.S.EXISTS?100*(s[r.FeeAmount.MEDIUM]??0):void 0,[r.FeeAmount.HIGH]:A===p.S.EXISTS?100*(s[r.FeeAmount.HIGH]??0):void 0};return{isLoading:o,isError:!!a,distributions:n,largestUsageFeeTier:-1===e?void 0:e}}),[o,a,s,d,c,v,A,l,u,m])}var D=t(18183),$=t(55199),C=t(16444),k=t(85519),w=t(45355),M=t(53412),U=t(20722);const P=(0,C.Ay)(s.Ay)`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:n})=>{return e&&(t=n.accent1,$.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${t};
  }

  70% {
    box-shadow: 0 0 0 2px ${t};
  }

  100% {
    box-shadow: 0 0 0 0 ${t};
  }
`);var t}} 0.6s linear;
  align-self: center;
`,N=C.Ay.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  width: 100%;
`;function z({disabled:e=!1,feeAmount:n,handleFeePoolSelect:t,currencyA:s,currencyB:l}){var m;const{chainId:v}=(0,O.F)(),x=(0,U.useTrace)(),{formatDelta:h}=(0,S.kc)(),{isLoading:I,isError:g,largestUsageFeeTier:T,distributions:y}=j(s,l),_=(0,p.Tw)([[s,l,r.FeeAmount.LOWEST],[s,l,r.FeeAmount.LOW_200],[s,l,r.FeeAmount.LOW_300],[s,l,r.FeeAmount.LOW_400],[s,l,r.FeeAmount.LOW],[s,l,r.FeeAmount.MEDIUM],[s,l,r.FeeAmount.HIGH]],v),W=(0,E.useMemo)((()=>_.reduce(((e,[n,t])=>{var i;return e={...e,[null===(i=t)||void 0===i?void 0:i.fee]:n}}),{[r.FeeAmount.LOWEST]:p.S.NOT_EXISTS,[r.FeeAmount.LOW_200]:p.S.NOT_EXISTS,[r.FeeAmount.LOW_300]:p.S.NOT_EXISTS,[r.FeeAmount.LOW_400]:p.S.NOT_EXISTS,[r.FeeAmount.LOW]:p.S.NOT_EXISTS,[r.FeeAmount.MEDIUM]:p.S.NOT_EXISTS,[r.FeeAmount.HIGH]:p.S.NOT_EXISTS})),[_]),[$,C]=(0,E.useState)(!1),[z,H]=(0,E.useState)(!1),R=(0,D.A)(n),G=(0,E.useRef)(!1),K=(0,E.useCallback)((e=>{(0,M.sendAnalyticsEvent)(o.ko.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.nU.MANUAL,fee_tier:e,...x}),t(e)}),[t,x]);return(0,E.useEffect)((()=>{n||I||g||(T?(C(!1),G.current=!0,(0,M.sendAnalyticsEvent)(o.ko.SELECT_LIQUIDITY_POOL_FEE_TIER,{action:o.nU.RECOMMENDED,fee_tier:T,...x}),t(T)):C(!0))}),[n,I,g,T,t,x]),(0,E.useEffect)((()=>{C(g)}),[g]),(0,E.useEffect)((()=>{n&&R!==n&&H(!0)}),[R,n]),(0,i.jsx)(c.mm,{gap:"16px",children:(0,i.jsxs)(k.xQ,{gap:"md",disabled:e,children:[(0,i.jsx)(P,{pulsing:z,onAnimationEnd:()=>H(!1),children:(0,i.jsxs)(F.JA,{children:[(0,i.jsx)(c.mm,{id:"add-liquidity-selected-fee",children:n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.P.DeprecatedLabel,{className:"selected-fee-label",children:(0,i.jsx)(d.Trans,{i18nKey:"fee.tierExact",values:{fee:h(parseFloat(u[n].label))}})}),y&&(0,i.jsx)(w.az,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage",children:(0,i.jsx)(L,{distributions:y,feeAmount:n,poolState:W[n]})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.P.DeprecatedLabel,{children:(0,i.jsx)(d.Trans,{i18nKey:"fee.tier"})}),(0,i.jsx)(b.P.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,i.jsx)(d.Trans,{i18nKey:"fee.percentEarned"})})]})}),(0,i.jsx)(a.EA,{onClick:()=>C(!$),width:"auto",padding:"4px",$borderRadius:"6px",children:$?(0,i.jsx)(d.Trans,{i18nKey:"common.hide.button"}):(0,i.jsx)(d.Trans,{i18nKey:"common.edit.button"})})]})}),v&&$&&(0,i.jsx)(A.z,{value:null===(m=n)||void 0===m?void 0:m.toString(),orientation:"horizontal",justifyContent:"flex-start",flexWrap:"wrap",children:(0,i.jsx)(N,{children:[r.FeeAmount.LOWEST,r.FeeAmount.LOW_200,r.FeeAmount.LOW_300,r.FeeAmount.LOW_400,r.FeeAmount.LOW,r.FeeAmount.MEDIUM,r.FeeAmount.HIGH].map(((e,t)=>{const{supportedChains:o}=u[e];return o.includes(v)?(0,i.jsx)(f,{feeAmount:e,selected:e===n,onClick:()=>K(e),distributions:y,poolState:W[e]},t):null}))})})]})})}},71917:(e,n,t)=>{t.d(n,{A:()=>T});var i=t(95682),o=t(70819),r=t(5459),a=t(83753),s=t(45353),d=t(55199),l=t(16444),u=t(33962),m=t(22526),c=t(10868),p=t(35480),v=t(66954),A=t(84840),x=t(14021);const S=l.Ay.div`
  display: flex;
`,f=(0,l.Ay)(o.EA)`
  border-radius: 8px;
  padding: 4px;
`,h=(0,l.Ay)(r.l3)`
  border-color: ${({active:e,theme:n})=>e&&n.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:n})=>{return e&&(t=n.accent1,d.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${t};
  }

  70% {
    box-shadow: 0 0 0 2px ${t};
  }

  100% {
    box-shadow: 0 0 0 0 ${t};
  }
`);var t}} 0.8s linear;
`,b=(0,l.Ay)(a.pd)`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,L=(0,l.Ay)(s.mm)`
  width: 100%;
`,F=(0,A.I)(x.EY,{fontSize:12,fontWeight:"$medium",color:"$neutral2"}),O=(0,l.Ay)(v.P.DeprecatedWhite)`
  color: ${({theme:e,disabled:n})=>n?e.neutral2:e.neutral1} !important;
  display: flex;
`,I=({value:e,decrement:n,increment:t,decrementDisabled:o=!1,incrementDisabled:r=!1,width:a,locked:d,onUserInput:l,title:v,tokenA:A,tokenB:x})=>{const[I,g]=(0,u.useState)(!1),[E,T]=(0,u.useState)(""),[y,_]=(0,u.useState)(!1),[W,j]=(0,u.useState)(!1),D=(0,u.useCallback)((()=>{_(!1),g(!1),l(E)}),[E,l]),$=(0,u.useCallback)((()=>{_(!1),l(n())}),[n,l]),C=(0,u.useCallback)((()=>{_(!1),l(t())}),[t,l]);return(0,u.useEffect)((()=>{E===e||y||setTimeout((()=>{T(e),j(!0),setTimeout((function(){j(!1)}),1800)}),0)}),[E,y,e]),(0,i.jsx)(h,{pulsing:W,active:I,onFocus:()=>{_(!0),g(!0)},onBlur:D,width:a,children:(0,i.jsxs)(S,{children:[(0,i.jsxs)(L,{justify:"flex-start",children:[(0,i.jsx)(F,{fontSize:12,textAlign:"center",children:v}),(0,i.jsx)(b,{className:"rate-input-0",value:E,fontSize:"20px",disabled:d,onUserInput:e=>{T(e)}}),(0,i.jsx)(F,{fontSize:12,textAlign:"left",children:(0,i.jsx)(p.Trans,{i18nKey:"common.feesEarnedPerBase",values:{symbolA:x,symbolB:A}})})]}),(0,i.jsxs)(s.mm,{gap:"8px",children:[!d&&(0,i.jsx)(f,{"data-testid":"increment-price-range",onClick:C,disabled:r,children:(0,i.jsx)(O,{disabled:r,fontSize:"12px",children:(0,i.jsx)(m.A,{size:18})})}),!d&&(0,i.jsx)(f,{"data-testid":"decrement-price-range",onClick:$,disabled:o,children:(0,i.jsx)(O,{disabled:o,fontSize:"12px",children:(0,i.jsx)(c.A,{size:18})})})]})]})})};var g=t(63247),E=t(782);function T({priceLower:e,priceUpper:n,onLeftRangeInput:t,onRightRangeInput:o,getDecrementLower:r,getIncrementLower:a,getDecrementUpper:s,getIncrementUpper:d,currencyA:l,currencyB:u,feeAmount:m,ticksAtLimit:c}){var v,A,x,S,f,h,b,L,F,O,T,y;const _=null===(v=l??void 0)||void 0===v?void 0:v.wrapped,W=null===(A=u??void 0)||void 0===A?void 0:A.wrapped,j=_&&W&&_.sortsBefore(W),D=j?e:null===(x=n)||void 0===x?void 0:x.invert(),$=j?n:null===(S=e)||void 0===S?void 0:S.invert();return(0,i.jsxs)(g.eF,{gap:"md",children:[(0,i.jsx)(I,{value:c[j?E.zm.LOWER:E.zm.UPPER]?"0":(null===(f=D)||void 0===f?void 0:f.toSignificant(8))??"",onUserInput:t,decrement:j?r:d,increment:j?a:s,decrementDisabled:void 0===D||c[j?E.zm.LOWER:E.zm.UPPER],incrementDisabled:void 0===D||c[j?E.zm.LOWER:E.zm.UPPER],feeAmount:m,label:D?`${null===(h=u)||void 0===h?void 0:h.symbol}`:"-",title:(0,i.jsx)(p.Trans,{i18nKey:"common.lowPrice"}),tokenA:null===(b=l)||void 0===b?void 0:b.symbol,tokenB:null===(L=u)||void 0===L?void 0:L.symbol}),(0,i.jsx)(I,{value:c[j?E.zm.UPPER:E.zm.LOWER]?"\u221e":(null===(F=$)||void 0===F?void 0:F.toSignificant(8))??"",onUserInput:o,decrement:j?s:a,increment:j?d:r,incrementDisabled:void 0===$||c[j?E.zm.UPPER:E.zm.LOWER],decrementDisabled:void 0===$||c[j?E.zm.UPPER:E.zm.LOWER],feeAmount:m,label:$?`${null===(O=u)||void 0===O?void 0:O.symbol}`:"-",tokenA:null===(T=l)||void 0===T?void 0:T.symbol,tokenB:null===(y=u)||void 0===y?void 0:y.symbol,title:(0,i.jsx)(p.Trans,{i18nKey:"common.highPrice"})})]})}},57074:(e,n,t)=>{t.d(n,{A:()=>d});var i=t(78135),o=t(68071),r=t(55259),a=t(22791),s=t(33962);function d(){var e,n;const t=(0,i.F)(),d=(0,o._Q)(),l=(0,s.useMemo)((()=>[t.address]),[t.address]),u=(0,r.DD)(d,"isArgentWallet",l,a.bo);return Boolean(null===(n=u)||void 0===n||null===(e=n.result)||void 0===e?void 0:e[0])}},85519:(e,n,t)=>{t.d(n,{OC:()=>m,VD:()=>s,W3:()=>u,mO:()=>a,sQ:()=>l,xQ:()=>d});var i=t(45353),o=t(83753),r=t(16444);const a=r.Ay.div`
  position: relative;
  padding: 26px 16px;
`,s=r.Ay.div`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,d=(0,r.Ay)(i.mm)`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,l=(0,r.Ay)(o.pd)`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,u=r.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,m=r.Ay.div`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`}}]);
//# sourceMappingURL=6351.a346dd28.chunk.js.map
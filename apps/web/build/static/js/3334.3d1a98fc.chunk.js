"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3334,6101],{33461:(e,o,n)=>{n.r(o),n.d(o,{default:()=>g});var i=n(95682),t=n(29477);const r=n.p+"static/media/404-page-dark.f24684e761633ae99402.png",d=n.p+"static/media/404-page-light.c448d3fd36de14609aba.png";var a=n(70819),l=n(69618),s=n(16444),c=n(35480),u=n(42150),v=n(66954),p=n(35868),h=n(53195);const x=s.Ay.img`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,m=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,y=(0,s.Ay)(m)`
  gap: 30px;
`,f=(0,s.Ay)(m)`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function g({title:e,subtitle:o,actionButton:n}){const s=(0,p.hJ)(),g=(0,l.a)(),k=g?v.P.LargeHeader:v.P.Hero,j=g?v.P.HeadlineMedium:v.P.HeadlineLarge;return(0,i.jsx)(f,{children:(0,i.jsxs)(h.default,{logImpression:!0,page:t.Om.NOT_FOUND,children:[(0,i.jsxs)(y,{children:[(0,i.jsxs)(m,{children:[e??(0,i.jsx)(k,{children:"404"}),o??(0,i.jsx)(j,{color:"neutral2",children:(0,i.jsx)(c.Trans,{i18nKey:"common.pageNotFound"})})]}),(0,i.jsx)(x,{src:s?r:d,alt:"Liluni"})]}),n??(0,i.jsx)(a.Au,{as:u.Link,to:"/",children:(0,i.jsx)(c.Trans,{i18nKey:"notFound.oops"})})]})})}},4268:(e,o,n)=>{n.r(o),n.d(o,{default:()=>xi});var i=n(95682),t=n(29477),r=n(58793),d=n(97404),a=n(94548),l=n(73640),s=n(16584),c=n(27698),u=n(91900),v=n(46667),p=n(11340),h=n(87872),x=n(22161),m=n(65446),y=n(78521),f=n(33962),g=n(85141);var k=n(16679),j=n(3575),b=n(6495),A=n(24235),w=n(2499),$=n(65071),P=n(16444),T=n(55199),I=n(35480),C=n(66954),L=n(4163),D=n(13068),S=n(82291),E=n(59652),V=n(34748),O=n(84551),M=n(88438),B=n(91071);const F=356,R=[h.NB.VOLUME,h.NB.PRICE,h.NB.LIQUIDITY],N=P.Ay.div`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,U=P.Ay.div`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,Q=({chartType:e,onChartTypeChange:o,disabledOption:n})=>(0,i.jsx)(U,{children:(0,i.jsx)(j._,{options:R,currentChartType:e,onSelectOption:o,disabledOption:n})});function z(e,o,n,i,t,r){var d;const[a,l]=(0,f.useState)(w.Hr.DAY),[s,c]=(0,f.useState)(h.NB.VOLUME),u=r===g.ProtocolVersion.V2,v=r===g.ProtocolVersion.V3,p=r===g.ProtocolVersion.V4,x={addressOrId:(null===(d=e)||void 0===d?void 0:d.idOrAddress)??"",chain:t,duration:(0,w.gf)(a),isV4:p,isV3:v,isV2:u},k=function(e,o,n,i,t){var r,d;return(0,y.J)(e,n,i,t,(null===(d=o)||void 0===d||null===(r=d.token0)||void 0===r?void 0:r.address)??"")}(x,e,i?n:o,i?o:n,r),j=function(e){var o,n;const{data:i,loading:t}=(0,g.usePoolVolumeHistoryQuery)({variables:e});return(0,f.useMemo)((()=>{var o,n,r;const{historicalVolume:d}=(null===(o=i)||void 0===o?void 0:o.v2Pair)??(null===(n=i)||void 0===n?void 0:n.v3Pool)??{},a=(null===(r=d)||void 0===r?void 0:r.filter((e=>null!==e)).map(m.xL))??[],l=(0,m.Ci)(a,h.NB.VOLUME,e.duration);return{chartType:h.NB.VOLUME,entries:a,loading:t,dataQuality:l}}),[null===(o=i)||void 0===o?void 0:o.v2Pair,null===(n=i)||void 0===n?void 0:n.v3Pool,t,e.duration])}(x);return(0,f.useMemo)((()=>{const e=(()=>{switch(s){case h.NB.PRICE:return k;case h.NB.VOLUME:return j;case h.NB.LIQUIDITY:return{chartType:h.NB.LIQUIDITY,entries:[],loading:!1,dataQuality:m.Ew.VALID}}})();return{timePeriod:a,setTimePeriod:l,setChartType:c,activeQuery:e}}),[s,j,k,a])}function K(e){var o,n,t,d,a,l,c;const{defaultChainId:v}=(0,V.useEnabledChains)(),y=(0,S.Qf)(),[j,b]=[(null===(o=e.poolData)||void 0===o?void 0:o.token0)&&(0,w.d2)(e.poolData.token0),(null===(n=e.poolData)||void 0===n?void 0:n.token1)&&(0,w.d2)(e.poolData.token1)],{setChartType:P,timePeriod:T,setTimePeriod:C,activeQuery:L}=z(e.poolData,null===(t=j)||void 0===t?void 0:t.wrapped,null===(d=b)||void 0===d?void 0:d.wrapped,e.isReversed,e.chain??g.Chain.Ethereum,(null===(a=e.poolData)||void 0===a?void 0:a.protocolVersion)??g.ProtocolVersion.V3),D=(0,$.useAtomValue)(s.Zz),M=e.loading||L.chartType!==h.NB.LIQUIDITY&&(null===(l=L)||void 0===l?void 0:l.loading),B=(()=>{if(!j||!b||!e.poolData||!e.chain)return(0,i.jsx)(u.u,{type:L.chartType,height:F});const o={...e,feeTier:Number(e.poolData.feeTier),height:F,timePeriod:T,tokenA:j.wrapped,tokenB:b.wrapped,chainId:(0,O.fromGraphQLChain)(e.chain)??v,poolId:e.poolData.idOrAddress,hooks:e.poolData.hookAddress,version:(0,x.IN)(e.poolData.protocolVersion)??r.ProtocolVersion.V3,tickSpacing:e.poolData.tickSpacing};if(L.chartType===h.NB.LIQUIDITY)return(0,i.jsx)(Z,{...o});if(L.dataQuality===m.Ew.INVALID||!j||!b){const e=M?void 0:(0,i.jsx)(I.Trans,{i18nKey:"chart.error.pools"});return(0,i.jsx)(u.u,{type:L.chartType,height:F,errorText:e})}const n=L.dataQuality===m.Ew.STALE;switch(L.chartType){case h.NB.PRICE:return(0,i.jsx)(H,{...o,data:L.entries,stale:n});case h.NB.VOLUME:return(0,i.jsx)(p.H,{...o,data:L.entries,stale:n})}})(),R=(0,f.useMemo)((()=>{if(L.chartType===h.NB.PRICE){const e=k.j1.filter((e=>e.value!==A.to.HOUR));return T===w.Hr.HOUR&&C(w.Hr.DAY),{options:e,selected:A.o0[T]}}return{options:k.j1,selected:A.o0[T]}}),[L.chartType,T,C]),U=(null===(c=e.poolData)||void 0===c?void 0:c.protocolVersion)===g.ProtocolVersion.V2?h.NB.LIQUIDITY:void 0;return(0,i.jsxs)("div",{"data-testid":"pdp-chart-container",children:[B,(0,i.jsxs)(k.tg,{children:[(0,i.jsx)(Q,{chartType:L.chartType,onChartTypeChange:P,disabledOption:U}),L.chartType!==h.NB.LIQUIDITY&&(0,i.jsx)(N,{children:(0,i.jsx)(E.I,{fullWidth:y.sm,options:R.options,selectedOption:R.selected,onSelectOption:e=>{const o=(0,A.Lw)(e);var n;o===T?null===(n=D)||void 0===n||n():C(o)}})})]})]})}const W=P.Ay.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,_=(0,P.Ay)(C.P.HeadlineMedium)`
  ${L.rg}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function H({tokenA:e,tokenB:o,isReversed:n,data:t,stale:r}){const{formatCurrencyAmount:a,formatPrice:c}=(0,B.kc)(),[u,p]=n?[o,e]:[e,o],x=(0,f.useMemo)((()=>({data:t,stale:r,type:h.yt.LINE})),[t,r]),{price:m}=(0,M.useUSDCPrice)(u),y=t[t.length-1];return(0,i.jsx)(s.t1,{height:F,Model:v.Vt,params:x,children:e=>{var o;const n=e??y,r=Math.floor((n.value??n.close)*10**p.decimals),s=(0,i.jsxs)(W,{children:[(0,i.jsx)(_,{children:`1 ${u.symbol} = ${a({amount:d.CurrencyAmount.fromRawAmount(p,r)})} \n            ${p.symbol}`}),(0,i.jsx)(_,{color:"neutral2",children:m?"("+c({price:m})+")":""})]});return(0,i.jsx)(l._,{value:s,additionalFields:(0,i.jsx)(v.Q9,{startingPrice:t[0],endingPrice:n}),valueFormatterType:B.wl.FiatTokenPrice,time:null===(o=e)||void 0===o?void 0:o.time})}})}const Y=(0,P.Ay)(C.P.H1Medium)`
  ${D.bo};
  line-height: 32px;
`,q=(0,P.Ay)(C.P.SubHeader)`
  ${D.bo}
`;function G({data:e,tokenADescriptor:o,tokenBDescriptor:n,currentTick:t}){const{t:r}=(0,I.useTranslation)(),{formatNumber:d}=(0,B.kc)();if(!t)return null;const a=e.tick>=t?d({input:e.amount0Locked,type:B.wl.TokenQuantityStats}):0,l=e.tick<=t?d({input:e.amount1Locked,type:B.wl.TokenQuantityStats}):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C.P.BodySmall,{children:r("liquidityPool.chart.tooltip.amount",{token:o,amount:a})}),(0,i.jsx)(C.P.BodySmall,{children:r("liquidityPool.chart.tooltip.amount",{token:n,amount:l})})]})}function Z({tokenA:e,tokenB:o,feeTier:n,isReversed:t,chainId:r,version:d,tickSpacing:u,hooks:v,poolId:p}){const{t:h}=(0,I.useTranslation)(),x=e.symbol??e.name??h("common.tokenA"),m=o.symbol??o.name??h("common.tokenB"),{tickData:y,activeTick:g,loading:k}=(0,c.PL)({tokenA:e,tokenB:o,feeTier:n,isReversed:t,chainId:r,version:d,tickSpacing:u,hooks:v,poolId:p}),j=(0,T.useTheme)(),A=(0,f.useMemo)((()=>{var e,o;return{data:(null===(e=y)||void 0===e?void 0:e.barData)??[],tokenAColor:t?j.token1:j.token0,tokenBColor:t?j.token0:j.token1,highlightColor:j.surface3,activeTick:g,activeTickProgress:null===(o=y)||void 0===o?void 0:o.activeRangePercentage}}),[g,t,j,y]);return k?(0,i.jsx)(b.xc,{}):(0,i.jsx)(s.t1,{height:F,Model:c.V2,params:A,TooltipBody:n!==a.FeeAmount.LOWEST?({data:e})=>{var o,n;return(0,i.jsx)(G,{data:e,tokenADescriptor:x,tokenBDescriptor:m,currentTick:null===(n=y)||void 0===n||null===(o=n.activeRangeData)||void 0===o?void 0:o.tick})}:void 0,children:e=>{var o,n,t;const r=e??(null===(o=y)||void 0===o?void 0:o.activeRangeData),d=(0,i.jsxs)("div",{children:[(0,i.jsx)(Y,{children:`1 ${x} = ${null===(n=r)||void 0===n?void 0:n.price0} ${m}`}),(0,i.jsx)(Y,{children:`1 ${m} = ${null===(t=r)||void 0===t?void 0:t.price1} ${x}`}),r&&r.tick===g&&(0,i.jsx)(q,{color:"neutral2",paddingTop:"4px",children:(0,i.jsx)(I.Trans,{i18nKey:"pool.activeRange"})})]});return(0,i.jsx)(l._,{value:d})}})}var X=n(55282),J=n(87112),ee=n(2017),oe=n(59074),ne=n(8509),ie=n(41411),te=n(32034);const re=(0,P.Ay)(te.P)`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,de=(0,P.Ay)(te.P)`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`;var ae=n(11292),le=n(89783),se=n(83565),ce=n(45353),ue=n(63247),ve=n(85160),pe=n(68069),he=n(46192),xe=n(26626),me=n(42150),ye=n(79253),fe=n(67579),ge=n(8174),ke=n(35534),je=n(26179),be=n(33900),Ae=n(2029);const we=(0,P.Ay)(L.Gr)`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,$e=P.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${D.bo};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Pe=(0,P.Ay)(te.P)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Te({chainId:e,poolAddress:o,token0:n,token1:t,loading:r}){var d,a;const{defaultChainId:l}=(0,V.useEnabledChains)(),s=(0,O.toGraphQLChain)(e??l),c=`/explore/${s.toLowerCase()}`,u=`/explore/pools/${s.toLowerCase()}`;return(0,i.jsxs)(X.AF,{"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(X.TV,{to:c,children:[(0,i.jsx)(I.Trans,{i18nKey:"common.explore"})," ",(0,i.jsx)(he.A,{size:14})]}),(0,i.jsxs)(X.TV,{to:u,children:[(0,i.jsx)(I.Trans,{i18nKey:"common.pools"})," ",(0,i.jsx)(he.A,{size:14})]}),r||!o?(0,i.jsx)(re,{$width:200}):(0,i.jsx)(X.Q9,{address:o,poolName:`${null===(d=n)||void 0===d?void 0:d.symbol} / ${null===(a=t)||void 0===a?void 0:a.symbol}`})]})}const Ie=P.Ay.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Ce=(0,P.Ay)(C.P.HeadlineMedium)`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,Le=({token0:e,token1:o,chainId:n,feeTier:t,protocolVersion:r,toggleReversed:a,hookAddress:l})=>{var s,c,u,v,p;const{formatPercent:h}=(0,B.kc)(),{defaultChainId:x}=(0,V.useEnabledChains)(),m=(0,O.toGraphQLChain)(n??x),y=t&&h(new d.Percent(t,100*ke.BIPS_BASE));return(0,i.jsxs)(Ie,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)(Ce,{children:[(0,i.jsx)(Oe,{to:(0,w.Z5)({address:null===(s=e)||void 0===s?void 0:s.address,chain:m}),children:null===(c=e)||void 0===c?void 0:c.symbol}),"\xa0/\xa0",(0,i.jsx)(Oe,{to:(0,w.Z5)({address:null===(u=o)||void 0===u?void 0:u.address,chain:m}),children:null===(v=o)||void 0===v?void 0:v.symbol})]})}),(0,i.jsxs)(ye.s,{row:!0,gap:"$gap4",alignItems:"center",children:[(0,i.jsx)(ae.A6,{variant:"body3",$position:"left",children:null===(p=r)||void 0===p?void 0:p.toLowerCase()}),l&&(0,i.jsx)(L.Gr,{href:(0,be.getExplorerLink)(n??x,l,be.ExplorerDataType.ADDRESS),children:(0,i.jsx)(ae.A6,{variant:"body3",...L.ST,children:(0,Ae.shortenAddress)(l,0)})}),!!y&&(0,i.jsx)(ae.A6,{variant:"body3",$position:"right",children:y})]}),(0,i.jsx)(fe.l,{hoverStyle:{opacity:.8},onPress:a,children:(0,i.jsx)(ge.h,{...L.oO,size:"$icon.20",testID:"toggle-tokens-reverse-arrows",rotate:"90deg",color:"$neutral2"})})]})},De=(0,P.Ay)(ue.Ay)`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  ${L.rg}
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Se=({address:e,chainId:o,tokens:n})=>{var t;const r=(0,T.useTheme)(),d=n[0]&&(0,w.d2)(n[0]),a=2===n.length,l=a&&n[1]?[d,(0,w.d2)(n[1])]:[d],s=e===ve.E,c=o&&e&&(0,be.getExplorerLink)(o,e,s?be.ExplorerDataType.NATIVE:a?be.ExplorerDataType.ADDRESS:be.ExplorerDataType.TOKEN);return o&&c?(0,i.jsx)(we,{href:c,children:(0,i.jsxs)(De,{children:[(0,i.jsxs)(ue.Ay,{gap:"sm",children:[a?(0,i.jsx)(ie.K,{chainId:o,currencies:l,size:24}):(0,i.jsx)(ne.A,{currency:d,size:24}),(0,i.jsx)(C.P.BodyPrimary,{children:a?(0,i.jsx)(I.Trans,{i18nKey:"common.pool"}):null===(t=n[0])||void 0===t?void 0:t.symbol}),(0,i.jsx)(C.P.BodySecondary,{children:(0,Ae.shortenAddress)(e)})]}),(0,i.jsx)(xe.A,{size:"16px",stroke:r.neutral2})]})}):(0,i.jsx)(De,{children:(0,i.jsx)(re,{$width:117})})},Ee={...se.Qd,minWidth:235,borderRadius:"$rounded16"},Ve=({chainId:e,poolAddress:o,poolName:n,token0:t,token1:r})=>{var d,a;const{t:l}=(0,I.useTranslation)(),s=(0,T.useTheme)(),[c,u]=(0,f.useState)(!1);return(0,i.jsxs)(ue.Ay,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,i.jsx)(J.V,{isOpen:c,toggleOpen:u,menuLabel:e===je.UniverseChainId.Mainnet?(0,i.jsx)(ee.D,{width:"18px",height:"18px",fill:s.neutral1}):(0,i.jsx)(oe.F,{width:"18px",height:"18px",fill:s.neutral1}),internalMenuItems:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Se,{address:o,chainId:e,tokens:[t,r]}),(0,i.jsx)(Se,{address:null===(d=t)||void 0===d?void 0:d.address,chainId:e,tokens:[t]}),(0,i.jsx)(Se,{address:null===(a=r)||void 0===a?void 0:a.address,chainId:e,tokens:[r]})]}),tooltipText:l("pool.explorers"),hideChevron:!0,buttonStyle:se.S_,dropdownStyle:Ee,adaptToSheet:!1}),(0,i.jsx)(le.A,{name:n,utmSource:"share-pool"})]})},Oe=(0,P.Ay)(me.Link)`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${L._4}
`;function Me({chainId:e,poolAddress:o,token0:n,token1:t,feeTier:r,protocolVersion:d,hookAddress:a,toggleReversed:l,loading:s}){var c,u;const v=!(0,pe.l)().sm,p=`${null===(c=n)||void 0===c?void 0:c.symbol} / ${null===(u=t)||void 0===u?void 0:u.symbol}`,h=(0,f.useMemo)((()=>n&&t?[(0,w.d2)(n),(0,w.d2)(t)]:[]),[n,t]);return s?(0,i.jsx)($e,{"data-testid":"pdp-header-loading-skeleton",children:v?(0,i.jsxs)(ce.Ay,{gap:"sm",style:{width:"100%"},children:[(0,i.jsx)(Pe,{}),(0,i.jsx)(re,{$height:40,$width:137})]}):(0,i.jsxs)(ue.Ay,{gap:"sm",children:[(0,i.jsx)(Pe,{}),(0,i.jsx)(re,{$height:40,$width:137})]})}):(0,i.jsx)($e,{children:v?(0,i.jsxs)(ce.Ay,{gap:"sm",style:{width:"100%"},children:[(0,i.jsxs)(ue.Ay,{gap:"md",justify:"space-between",children:[e&&(0,i.jsx)(ie.K,{"data-testid":"double-token-logo",chainId:e,currencies:h}),(0,i.jsx)(Ve,{chainId:e,poolAddress:o,poolName:p,token0:n,token1:t})]}),(0,i.jsx)(Le,{token0:n,token1:t,chainId:e,feeTier:r,protocolVersion:d,toggleReversed:l})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(ue.Ay,{gap:"md",children:[e&&(0,i.jsx)(ie.K,{"data-testid":"double-token-logo",chainId:e,currencies:h}),(0,i.jsx)(Le,{token0:n,token1:t,chainId:e,feeTier:r,protocolVersion:d,toggleReversed:l,hookAddress:a})]}),(0,i.jsx)(Ve,{chainId:e,poolAddress:o,poolName:p,token0:n,token1:t})]})})}var Be=n(38108),Fe=n(85869),Re=n(52507),Ne=n(88361),Ue=n(73763);const Qe=(0,P.Ay)(C.P.BodyPrimary)`
  display: none;

  @media (max-width: ${Ue.LO.lg}px) and (min-width: ${Ue.LO.xs}px) {
    display: block;
  }
  ${L.rg}
`,ze=(0,P.Ay)(ue.Ay)`
  gap: 8px;
  margin-right: 12px;
  ${L.rg}
  ${({isClickable:e})=>e&&L._4}
`,Ke=(0,P.Ay)(C.P.BodyPrimary)`
  flex-shrink: 0;

  @media (max-width: ${Ue.LO.lg}px) and (min-width: ${Ue.LO.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,We=(0,P.Ay)(ue.Ay)`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${L._4}
`,_e=(0,P.Ay)(Re.A)`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,He=P.Ay.div`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${L._4}
`,Ye=(0,P.Ay)(ue.Ay)`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function qe({address:e,chainId:o,tokens:n,loading:t}){var r,d,a,l,s,c,u;const v=(0,T.useTheme)(),{t:p}=(0,I.useTranslation)(),h=e===ve.E,x=n[0]&&(0,w.d2)(n[0]),[m,y]=(0,Fe.A)(),g=(0,f.useCallback)((()=>{const o=(0,Ae.isAddress)(e);o&&y(o)}),[e,y]),k=2===n.length,j=k&&n[1]?[x,(0,w.d2)(n[1])]:[x],b=e&&o&&(0,be.getExplorerLink)(o,e,h?be.ExplorerDataType.NATIVE:k?be.ExplorerDataType.ADDRESS:be.ExplorerDataType.TOKEN),A=(0,Ne.Zp)(),{defaultChainId:$}=(0,V.useEnabledChains)(),P=(0,O.toGraphQLChain)(o??$),C=(0,f.useCallback)((()=>{var e;k||A((0,w.Z5)({address:null===(e=n[0])||void 0===e?void 0:e.address,chain:P}))}),[A,n,k,P]),[D,S]=(0,f.useState)(!1),E=(0,f.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&S((e=>e?"both":"start"))}}),[D]);return!t&&e&&o?(0,i.jsxs)(ue.Ay,{align:"space-between",children:[(0,i.jsxs)(ze,{"data-testid":k?`pdp-pool-logo-${null===(r=n[0])||void 0===r?void 0:r.symbol}-${null===(d=n[1])||void 0===d?void 0:d.symbol}`:`pdp-token-logo-${null===(a=n[0])||void 0===a?void 0:a.symbol}`,isClickable:!k,onClick:C,ref:E,children:[k?(0,i.jsx)(ie.K,{chainId:o,currencies:j,size:20}):(0,i.jsx)(ne.A,{currency:x,size:20}),(0,i.jsx)(Qe,{children:k?(0,i.jsx)(I.Trans,{i18nKey:"common.pool"}):null===(l=n[0])||void 0===l?void 0:l.name}),(0,i.jsx)(Ke,{children:k?`${null===(s=n[0])||void 0===s?void 0:s.symbol} / ${null===(c=n[1])||void 0===c?void 0:c.symbol}`:(0,i.jsxs)(ue.Ay,{gap:"4px",children:[null===(u=n[0])||void 0===u?void 0:u.symbol," ",(0,i.jsx)(he.A,{size:16,color:v.neutral2})]})})]}),(0,i.jsxs)(Ye,{children:[!h&&(0,i.jsx)(Be.Ay,{placement:"bottom",size:Be.N6.Max,show:m,text:p("common.copied"),children:(0,i.jsxs)(We,{"data-testid":`copy-address-${e}`,onClick:g,children:[(0,Ae.shortenAddress)(e,D?2:void 0,"both"===D?2:void 0),(0,i.jsx)(_e,{})]})}),b&&(0,i.jsx)(L.Gr,{href:b,"data-testid":`explorer-url-${b}`,children:(0,i.jsx)(He,{children:o===je.UniverseChainId.Mainnet?(0,i.jsx)(ee.D,{width:"16px",height:"16px",fill:v.neutral1}):(0,i.jsx)(oe.F,{width:"16px",height:"16px",fill:v.neutral1})})})]})]}):(0,i.jsxs)(ue.Ay,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(de,{}),(0,i.jsx)(re,{$width:117})]})}var Ge=n(71336),Ze=n(65475),Xe=n(45355),Je=n(69104);const eo=(0,P.Ay)(Xe.EY)`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ue.LO.lg}px) {
    width: 100%;
  }
`,oo=(0,P.Ay)(ce.Ay)`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ue.LO.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,no=(0,P.Ay)(ce.Ay)`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ue.LO.sm}px) {
    min-width: 150px;
  }
`,io=(0,P.Ay)(ue.Ay)`
  justify-content: space-between;

  @media (max-width: ${Ue.LO.lg}px) {
    flex-direction: column;
  }
`,to=(0,P.Ay)(ue.Ay)`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ue.LO.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,ro=(0,P.Ay)(me.Link)`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${L._4}
`,ao=T.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,lo=T.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,so=P.Ay.div`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?ao:lo}
`,co=(0,P.Ay)(te.P)`
  width: 180px;
  height: 40px;
`,uo=(0,P.Ay)(te.P)`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,vo=({token:e,chainId:o})=>{var n;const t=(0,pe.l)().lg,{formatNumber:r}=(0,B.kc)(),d=o?(0,w.LA)(o,e):e,a=(null===(n=d)||void 0===n?void 0:n.address)===ve.E&&o?(0,Je.nativeOnChain)(o):e.currency,{defaultChainId:l}=(0,V.useEnabledChains)();return(0,i.jsxs)(to,{children:[!t&&(0,i.jsx)(ne.A,{currency:a,size:20,style:{marginRight:"8px"}}),r({input:e.tvl,type:B.wl.TokenQuantityStats}),"\xa0",(0,i.jsx)(ro,{to:(0,w.Z5)({address:d.address,chain:(0,O.toGraphQLChain)(o??l)}),children:d.symbol})]})};function po({poolData:e,isReversed:o,chainId:n,loading:t}){var r,d,a,l,s,c,u,v;const p=(0,pe.l)().lg,h=(0,T.useTheme)(),x=(0,Ze.H2)(null===(d=e)||void 0===d||null===(r=d.token0)||void 0===r?void 0:r.address,n),m=(0,Ze.H2)(null===(l=e)||void 0===l||null===(a=l.token1)||void 0===a?void 0:a.address,n),[y,g]=(0,f.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var n,i,t,r,d,a,l,s,c,u,v,p,h,y;const f=(null===(n=e)||void 0===n?void 0:n.tvlToken0)*(null===(i=e)||void 0===i?void 0:i.token0Price)+(null===(t=e)||void 0===t?void 0:t.tvlToken1)*(null===(r=e)||void 0===r?void 0:r.token1Price),g={...null===(d=e)||void 0===d?void 0:d.token0,price:null===(a=e)||void 0===a?void 0:a.token0Price,tvl:null===(l=e)||void 0===l?void 0:l.tvlToken0,percent:(null===(s=e)||void 0===s?void 0:s.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/f,currency:x},k={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(v=e)||void 0===v?void 0:v.token1Price,tvl:null===(p=e)||void 0===p?void 0:p.tvlToken1,percent:(null===(h=e)||void 0===h?void 0:h.tvlToken1)*(null===(y=e)||void 0===y?void 0:y.token1Price)/f,currency:m};return o?[k,g]:[g,k]}return[void 0,void 0]}),[x,m,o,e]);return!t&&y&&g&&e?(0,i.jsxs)(oo,{loaded:!0,children:[(0,i.jsx)(eo,{children:(0,i.jsx)(I.Trans,{i18nKey:"common.stats"})}),(0,i.jsxs)(no,{children:[(0,i.jsx)(C.P.BodySecondary,{children:(0,i.jsx)(I.Trans,{i18nKey:"pool.balances"})}),(0,i.jsxs)(io,{children:[(0,i.jsx)(vo,{token:y,chainId:n}),(0,i.jsx)(vo,{token:g,chainId:n})]}),p&&(0,i.jsxs)(ue.Ay,{"data-testid":"pool-balance-chart",children:[(0,i.jsx)(so,{percent:y.percent,$color:h.token0,isLeft:!0}),(0,i.jsx)(so,{percent:g.percent,$color:h.token1,isLeft:!1})]})]}),(null===(s=e)||void 0===s?void 0:s.tvlUSD)&&(0,i.jsx)(mo,{title:(0,i.jsx)(I.Trans,{i18nKey:"common.totalValueLocked"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(c=e)||void 0===c?void 0:c.volumeUSD24H)&&(0,i.jsx)(mo,{title:(0,i.jsx)(I.Trans,{i18nKey:"stats.24volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&void 0!==(null===(v=e)||void 0===v?void 0:v.feeTier)&&(0,i.jsx)(mo,{title:(0,i.jsx)(I.Trans,{i18nKey:"stats.24fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,i.jsxs)(oo,{children:[(0,i.jsx)(eo,{children:(0,i.jsx)(uo,{})}),Array.from({length:4}).map(((e,o)=>(0,i.jsxs)(ce.Ay,{gap:"md",children:[(0,i.jsx)(re,{}),(0,i.jsx)(co,{})]},`loading-info-row-${o}`)))]})}const ho=(0,P.Ay)(ue.Ay)`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ue.LO.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,xo=(0,P.Ay)(Xe.EY)`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ue.LO.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function mo({title:e,value:o,delta:n}){const{formatNumber:t,formatDelta:r}=(0,B.kc)();return(0,i.jsxs)(no,{children:[(0,i.jsx)(C.P.BodySecondary,{children:e}),(0,i.jsxs)(ho,{children:[(0,i.jsx)(xo,{children:t({input:o,type:B.wl.FiatTokenStats})}),!!n&&(0,i.jsxs)(ue.Ay,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(Ge.Is,{delta:n}),(0,i.jsx)(C.P.BodySecondary,{children:r(n)})]})]})]})}var yo=n(30855),fo=n(88669),go=n(12223),ko=n(68880),jo=n(2303);const bo=18;var Ao=n(64690);function wo(e,o,n,i,t,r,d){try{var a=e[r](d),l=a.value}catch(s){return void n(s)}a.done?o(l):Promise.resolve(l).then(i,t)}function $o(e){return function(){var o=this,n=arguments;return new Promise((function(i,t){var r=e.apply(o,n);function d(e){wo(r,i,t,d,a,"next",e)}function a(e){wo(r,i,t,d,a,"throw",e)}d(void 0)}))}}const Po=1e6,To=new go.Interface(ko),Io=new go.Interface(ko);function Co(e,o){return Lo.apply(this,arguments)}function Lo(){return(Lo=$o((function*(e,o){try{return(yield e.callStatic.multicall(o)).returnData}catch(i){var n;if((-32603===i.code||-1!==(null===(n=i.message)||void 0===n?void 0:n.indexOf("execution ran out of gas")))&&o.length>1){const n=Math.floor(o.length/2);return Promise.all([Co(e,o.slice(0,n)),Co(e,o.slice(n,o.length))]).then((([e,o])=>[...e,...o]))}throw jo.logger.debug("getTokensAsync","fetchChunk","Error fetching chunk",{error:i,extra:{chunk:o}}),i}}))).apply(this,arguments)}function Do(e,o,n){return function(e,o){if(e.length%o!==0)throw new Error("Input array length must be a multiple of desired output size");return Array.from({length:Math.floor(e.length/o)},((n,i)=>e.slice(i*o,i*o+o)))}(n,5).reduce(((n,i,t)=>{const r=function(e,o,n){try{const[i,t,r,a,l]=n,s=i.success?To.decodeFunctionResult("name",i.returnData)[0]:a.success?Io.decodeFunctionResult("name",a.returnData)[0]:void 0,c=t.success?To.decodeFunctionResult("symbol",t.returnData)[0]:l.success?Io.decodeFunctionResult("symbol",l.returnData)[0]:void 0,u=r.success?parseInt(r.returnData):bo;return new d.Token(o,e,u,c,s)}catch(i){return void jo.logger.debug("getTokensAsync","tryParseToken","Failed to parse token",{error:i,address:e,chainId:o})}}(e[t],o,i);return r&&(n[r.address]=r),n}),{})}function So(e){return o=e,[To.encodeFunctionData("name"),To.encodeFunctionData("symbol"),To.encodeFunctionData("decimals"),Io.encodeFunctionData("name"),Io.encodeFunctionData("symbol")].map((e=>({target:o,callData:e,gasLimit:Po})));var o}const Eo={};function Vo(){return(Vo=$o((function*(e,o,n){if(0===e.length)return{};const i=[],t=[],r=[];e.forEach((e=>{const n=(0,Ao.DO)(o,e),d=Eo[n];if(void 0!==d)r.push(d);else{const o=(0,Ae.isAddress)(e);if(!o)return;i.push(o),t.push(...So(o))}}));const d=Co(n,t).then((n=>Do(e,o,n)));i.forEach((e=>Eo[(0,Ao.DO)(o,e)]=d.then((o=>o[e]))));const a=yield d;return(yield Promise.all(r)).forEach((e=>e&&(a[(0,Ao.LZ)(e)]=e))),a}))).apply(this,arguments)}var Oo=n(19310),Mo=n(47027),Bo=n(3072),Fo=n(48091),Ro=n(78135),No=n(7740),Uo=n(52060);function Qo(e,o,n){const i=(0,Ro.F)(),{provider:t}=(0,Bo.Y)(),r=(0,No.xK)();return(0,f.useMemo)((()=>(n??Object.keys(e).map((e=>parseInt(e))).filter((e=>r(e)))).reduce(((n,d)=>{const a=t&&i.chainId===d?t:r(d)?Fo.H[d]:void 0;return a&&(n[d]=(0,Uo.P)(e[d]??"",o,a)),n}),{})),[o,e,n,r,i.chainId,t])}function zo(e){return Qo(d.MULTICALL_ADDRESSES,Mo.HV,e)}var Ko=n(5150),Wo=n(43423),_o=n.n(Wo),Ho=n(28709);function Yo(e,o,n,i,t,r,d){try{var a=e[r](d),l=a.value}catch(s){return void n(s)}a.done?o(l):Promise.resolve(l).then(i,t)}function qo(e){return function(){var o=this,n=arguments;return new Promise((function(i,t){var r=e.apply(o,n);function d(e){Yo(r,i,t,d,a,"next",e)}function a(e){Yo(r,i,t,d,a,"throw",e)}d(void 0)}))}}const Go=_o()("1m"),Zo=(0,Ko.atom)({});const Xo=(e,o)=>`${o}-${e.token0}-${e.token1}-${e.fee}`,Jo=(0,$.atomWithStorage)("poolCache",{});const en=(0,$.atomWithStorage)("cachedAsyncTokens",{});function on(e){const o=zo(e),n=function(){const[e,o]=(0,Ko.useAtom)(en);return{get:(0,f.useCallback)(((o,n)=>{const i=e[(0,Ao.DO)(o,n)];return i?(0,Ho.deserializeToken)(i):void 0}),[e]),set:(0,f.useCallback)((e=>{e&&o((o=>({...o,[(0,Ao.LZ)(e)]:(0,Ho.serializeToken)(e)})))}),[o])}}(),i=(0,f.useCallback)(function(){var e=qo((function*(e,i){const t=yield function(e,o,n){return Vo.apply(this,arguments)}(e,i,o[i]);return Object.values(t).forEach(n.set),t}));return function(o,n){return e.apply(this,arguments)}}(),[o,n]),t=(0,f.useCallback)(function(){var e=qo((function*(e,o){const t={},r=new Set;e.forEach((e=>{const i=n.get(o,e);i?t[e]=i:r.add(e)}));const d=yield i([...r],o);return{...t,...d}}));return function(o,n){return e.apply(this,arguments)}}(),[i,n]);return t}var nn=n(96837),tn=n(99759);function rn(e,o,n,i,t,r,d){try{var a=e[r](d),l=a.value}catch(s){return void n(s)}a.done?o(l):Promise.resolve(l).then(i,t)}function dn(e){return function(){var o=this,n=arguments;return new Promise((function(i,t){var r=e.apply(o,n);function d(e){rn(r,i,t,d,a,"next",e)}function a(e){rn(r,i,t,d,a,"throw",e)}d(void 0)}))}}const an=nn.BigNumber.from(2).pow(128).sub(1);function ln(e){var o,n,i;const{chains:t}=(0,V.useEnabledChains)(),r=(l=t,Qo(d.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES,Oo.HV,l));var l;const s=zo(t),c=on(t),u=function(){const[e,o]=(0,Ko.useAtom)(Jo);return{get:(0,f.useCallback)(((o,n)=>e[Xo(o,n)]),[e]),set:(0,f.useCallback)(((e,n,i)=>o((o=>({...o,[Xo(e,n)]:i})))),[o])}}(),[v,p]=function(e){const[o,n]=(0,Ko.useAtom)(Zo),i=(0,f.useCallback)((o=>{n((n=>({...n,[e]:{result:o,stale:!1}}))),setTimeout((()=>n((n=>{var i;return o===(null===(i=n[e])||void 0===i?void 0:i.result)?{...n,[e]:{result:o,stale:!0}}:n}))),Go)}),[e,n]);return[o[e],i]}(e),h=null===(o=v)||void 0===o?void 0:o.result,x=(0,f.useRef)(!1),m=!(null===(n=v)||void 0===n?void 0:n.result)&&x.current,[y,k]=(0,f.useState)({}),{priceMap:j,pricesLoading:b}=function(e){var o;const{defaultChainId:n}=(0,V.useEnabledChains)(),i=(0,f.useMemo)((()=>{if(!e||!e.length)return[];const o=e.reduce(((e,{pool:{token0:o,token1:i}})=>(e[(0,Ao.LZ)(o)]=(0,w.IY)(o,n),e[(0,Ao.LZ)(i)]=(0,w.IY)(i,n),e)),{});return Object.values(o)}),[n,e]),{data:t,loading:r}=(0,g.useUniswapPricesQuery)({variables:{contracts:i},skip:!i.length}),d=(0,f.useMemo)((()=>{var e,o;return(null===(o=t)||void 0===o||null===(e=o.tokens)||void 0===e?void 0:e.reduce(((e,o)=>{var n,i,t,r;return o&&(e[(0,Ao._R)(o)]=null===(r=o.project)||void 0===r||null===(t=r.markets)||void 0===t||null===(i=t[0])||void 0===i||null===(n=i.price)||void 0===n?void 0:n.value),e}),{}))??{}}),[null===(o=t)||void 0===o?void 0:o.tokens]);return{priceMap:d,pricesLoading:r&&!t}}(h),A=(0,f.useCallback)(function(){var o=dn((function*(o,n,i){const t=n.map((n=>o.interface.encodeFunctionData("collect",[{tokenId:n,recipient:e,amount0Max:an,amount1Max:an}]))),r=(yield o.callStatic.multicall(t)).reduce(((e,t,r)=>(e[i.toString()+n[r]]=o.interface.decodeFunctionResult("collect",t),e)),{});k((e=>({...e,...r})))}));return function(e,n,i){return o.apply(this,arguments)}}(),[e]),$=(0,f.useCallback)(function(){var o=dn((function*(o,n){const i=Array.from({length:n.toNumber()},((n,i)=>o.interface.encodeFunctionData("tokenOfOwnerByIndex",[e,i])));return(yield o.callStatic.multicall(i)).map((e=>nn.BigNumber.from(e)))}));return function(e,n){return o.apply(this,arguments)}}(),[e]),P=(0,f.useCallback)(function(){var e=dn((function*(e,o){const n=o.map((o=>e.interface.encodeFunctionData("positions",[o])));return(yield e.callStatic.multicall(n)).map(((n,i)=>({...e.interface.decodeFunctionResult("positions",n),tokenId:o[i]})))}));return function(o,n){return e.apply(this,arguments)}}(),[]),T=(0,f.useCallback)(function(){var o=dn((function*(o,n,i){const t=new go.Interface(fo.HV),r=yield c(o.flatMap((e=>[e.token0,e.token1])),n),l=[],s=[];return o.forEach((e=>{const o=r[e.token0]??new d.Token(n,e.token0,bo),i=r[e.token1]??new d.Token(n,e.token1,bo);let c=u.get(e,n);if(!c){const t=d.V3_CORE_FACTORY_ADDRESSES[n];c=(0,a.computePoolAddress)({factoryAddress:t,tokenA:o,tokenB:i,fee:e.fee,chainId:(0,tn.getChainInfo)(n).sdkId}),u.set(e,n,c)}s.push([o,i]),l.push({target:c,callData:t.encodeFunctionData("slot0"),gasLimit:Po})}),[]),(yield i.callStatic.multicall(l)).returnData.reduce(((i,r,d)=>{if(r.success){const l=t.decodeFunctionResult("slot0",r.returnData);i.push(function(e,o,n,i,t,r){const d=new a.Pool(t,r,n.fee,i.sqrtPriceX96.toString(),0,i.tick),l=new a.Position({pool:d,liquidity:n.liquidity.toString(),tickLower:n.tickLower,tickUpper:n.tickUpper}),s=i.tick>=n.tickLower&&i.tick<n.tickUpper,c=n.liquidity.eq(0);return{owner:e,chainId:o,pool:d,position:l,details:n,inRange:s,closed:c}}(e,n,o[d],l,...s[d]))}else jo.logger.debug("useMultiChainPositions","fetchPositionInfo","slot0 fetch errored",r);return i}),[])}));return function(e,n,i){return o.apply(this,arguments)}}(),[e,u,c]),I=(0,f.useCallback)(function(){var o=dn((function*(o){if(!e||0===e.length)return[];try{var n;const i=r[o],t=s[o],d=yield null===(n=i)||void 0===n?void 0:n.balanceOf(e);if(!i||!t||d.lt(1))return[];const a=yield $(i,d);A(i,a,o);const l=yield P(i,a);return T(l,o,t)}catch(i){const e=new Error("Failed to fetch positions for chain",{cause:i});return jo.logger.debug("useMultiChainPositions","fetchPositionsForChain",e.message,{error:e,chainId:o}),[]}}));return function(e){return o.apply(this,arguments)}}(),[e,P,A,$,T,r,s]),C=(0,f.useCallback)(dn((function*(){x.current=!0;const e=(yield Promise.all(t.map(I))).flat();x.current=!1,p(e)})),[t,I,p]);(0,f.useEffect)((()=>{var e;if(!x.current&&!1!==(null===(e=v)||void 0===e?void 0:e.stale)){if(!document.hasFocus()){const e=()=>{C(),window.removeEventListener("focus",e)};return window.addEventListener("focus",e),()=>{window.removeEventListener("focus",e)}}C()}}),[C,x,null===(i=v)||void 0===i?void 0:i.stale]);return{positions:(0,f.useMemo)((()=>{var e;return null===(e=h)||void 0===e?void 0:e.map((e=>{var o,n;const i=e.chainId.toString()+e.details.tokenId,t=y[i]?[parseFloat(d.CurrencyAmount.fromRawAmount(e.pool.token0,null===(o=y[i])||void 0===o?void 0:o[0].toString()).toExact()),parseFloat(d.CurrencyAmount.fromRawAmount(e.pool.token1,null===(n=y[i])||void 0===n?void 0:n[1].toString()).toExact())]:void 0,r=[j[(0,Ao.LZ)(e.pool.token0)],j[(0,Ao.LZ)(e.pool.token1)]];return{...e,fees:t,prices:r}}))}),[y,h,j]),loading:b||m}}var sn=n(1237),cn=n(46559),un=n(90104),vn=n(98616),pn=n(49472),hn=n(84875),xn=n(21553),mn=n(96185),yn=n(95060),fn=n(22526),gn=n(47165),kn=n(17960),jn=n(32537),bn=n(34546),An=n(45805),wn=n(65686),$n=n(14201),Pn=n(81743),Tn=n(93280);function In(e,o,n,i,t,r,d){try{var a=e[r](d),l=a.value}catch(s){return void n(s)}a.done?o(l):Promise.resolve(l).then(i,t)}const Cn=(0,P.Ay)(ue.Ay)`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ue.LO.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${kn.M.sticky};
  }
`,Ln=P.Ay.button`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  gap: 8px;
  color: ${({theme:e,$open:o})=>o?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:o})=>o?e.surface1:(0,gn.mI)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:o})=>o&&`1px solid ${e.surface3}`};
  ${L._4}
  @media (max-width: ${Ue.LO.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ue.LO.sm}px) {
    width: ${({$fixedWidth:e})=>!e&&"100%"};
    background-color: ${({theme:e,$open:o})=>o?e.surface1:e.accent1};
    color: ${({theme:e,$open:o})=>o?e.neutral1:e.white};
  }
`,Dn=(0,P.Ay)(te.P)`
  height: 44px;
  width: 50%;
  border-radius: 900px;
`,Sn=(0,P.Ay)(ce.Ay)`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${un.uI} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${sn.yZ} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ue.LO.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${kn.M.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`;function En({chainId:e,token0:o,token1:n,feeTier:t,protocolVersion:r,loading:d}){var a,l,s,c,u,v,p;const h=(0,Ro.F)(),{positions:x}=ln(h.address??""),m=x&&function(e,o,n,i){var t;return null===(t=e)||void 0===t?void 0:t.find((e=>{var t,r,d,a,l,s,c,u,v;return((null===(t=e)||void 0===t?void 0:t.details.token0.toLowerCase())===(null===(r=o)||void 0===r?void 0:r.address)||(null===(d=e)||void 0===d?void 0:d.details.token0.toLowerCase())===(null===(a=n)||void 0===a?void 0:a.address))&&((null===(l=e)||void 0===l?void 0:l.details.token1.toLowerCase())===(null===(s=o)||void 0===s?void 0:s.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=n)||void 0===u?void 0:u.address))&&(null===(v=e)||void 0===v?void 0:v.details.fee)==i&&!e.closed}))}(x,o,n,t),y=null===(a=m)||void 0===a?void 0:a.details.tokenId,g=(0,xn.R)(),k=(0,Ne.Zp)(),j=(0,Ne.zy)(),b=o&&(0,w.d2)(o),A=n&&(0,w.d2)(n),$=(0,Pn.useCurrencyInfo)(b&&(0,Tn.currencyId)(b)),P=(0,Pn.useCurrencyInfo)(A&&(0,Tn.currencyId)(A)),T=(0,An.useFeatureFlag)(bn.FeatureFlags.LPRedesign),L=function(){var o,n=(o=function*(){if(b&&A){var o;!T&&h.chainId!==e&&e&&(yield g(e));const d=b.isNative?ve.E:b.address,a=A.isNative?ve.E:A.address,l=null===(o=(0,tn.getChainInfo)(e??b.chainId))||void 0===o?void 0:o.urlParam;if(T)if(y){var n;k(`/positions/${null===(n=r)||void 0===n?void 0:n.toLowerCase()}/${l}/${y}`,{state:{from:j.pathname}})}else{var i;const e=`/positions/create/${null===(i=r)||void 0===i?void 0:i.toLowerCase()}?currencyA=${d}&currencyB=${a}&chain=${l}`;k(e,{state:{from:j.pathname}})}else k(`/add/${d}/${a}/${t}${y?`/${y}`:""}`,{state:{from:j.pathname}})}},function(){var e=this,n=arguments;return new Promise((function(i,t){var r=o.apply(e,n);function d(e){In(r,i,t,d,a,"next",e)}function a(e){In(r,i,t,d,a,"throw",e)}d(void 0)}))});return function(){return n.apply(this,arguments)}}(),[D,S]=(0,f.useReducer)((e=>!e),!1),E=(0,pe.l)(),V=E.lg,O=!E.sm,M=(0,pn.X0)(null===(l=o)||void 0===l?void 0:l.address,e),B=(0,pn.X0)(null===(s=n)||void 0===s?void 0:s.address,e),F=(0,pn.Pd)(M,B),R=(0,An.useFeatureFlag)(bn.FeatureFlags.TokenProtection),[N,U]=(0,f.useState)(!1),Q=(0,f.useCallback)((()=>U(!1)),[]),[z,K]=(0,f.useState)(),W=(0,f.useCallback)((e=>{K(e),U(!0)}),[]);return!d&&b&&A?(0,i.jsxs)(ye.s,{flexDirection:"column",gap:"$gap24",children:[(0,i.jsx)(Vn,{isMobile:O,children:(0,i.jsxs)(ye.s,{row:!0,justifyContent:"center",gap:V?"$spacing12":"$spacing8",width:"100%",children:[(0,i.jsx)(Ln,{onClick:S,$open:D,"data-testid":`pool-details-${D?"close":"swap"}-button`,children:D?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(yn.A,{size:20}),(0,i.jsx)(C.P.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(I.Trans,{i18nKey:"common.close"})})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ge.h,{color:O?"$white":"$accent1",size:"$icon.20"}),(0,i.jsx)(C.P.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(I.Trans,{i18nKey:"common.swap"})})]})}),(0,i.jsxs)(Ln,{onClick:L,"data-testid":"pool-details-add-liquidity-button",children:[(0,i.jsx)(fn.A,{size:20}),(0,i.jsx)(C.P.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(I.Trans,{i18nKey:"common.addLiquidity"})})]})]})}),(0,i.jsxs)(Sn,{open:D,"data-testid":"pool-details-swap-modal",children:[(0,i.jsx)(mn._z,{syncTabToUrl:!1,chainId:e,initialInputCurrency:b,initialOutputCurrency:A,compact:!0,disableTokenInputs:e!==h.chainId}),R?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(wn.TokenWarningCard,{currencyInfo:$,onPress:()=>W($)}),(0,i.jsx)(wn.TokenWarningCard,{currencyInfo:P,onPress:()=>W(P)}),z&&(0,i.jsx)($n.default,{currencyInfo0:z,isInfoOnlyWarning:!0,isVisible:N,closeModalOnly:Q,onAcknowledge:Q})]}):Boolean(F)&&(0,i.jsx)(vn.A,{tokenAddress:(F===M?null===(c=o)||void 0===c?void 0:c.address:null===(u=n)||void 0===u?void 0:u.address)??"",warning:F??pn.oU,plural:Boolean(M&&B),tokenSymbol:F===M?null===(v=o)||void 0===v?void 0:v.symbol:null===(p=n)||void 0===p?void 0:p.symbol})]}),(0,i.jsx)(yo.pk,{$open:D&&!V,$maxWidth:Ue.LO.lg,$zIndex:kn.M.sticky,onClick:S})]}):(0,i.jsxs)(Cn,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Dn,{}),(0,i.jsx)(Dn,{})]})}function Vn({children:e,isMobile:o}){const n=(0,jn.J)(),{direction:t}=(0,hn.L)(),r=o?cn.F:Cn,d=o?{hide:n&&t===hn.D.DOWN}:{};return(0,i.jsx)(r,{...d,children:e})}var On=n(96480);function Mn({positions:e}){var o;return(0,i.jsx)(ye.s,{gap:"$gap24",width:"100%",children:null===(o=e)||void 0===o?void 0:o.map((e=>(0,i.jsx)(me.Link,{style:{textDecoration:"none"},to:(0,x.fB)(e),children:(0,i.jsx)(On.o,{liquidityPosition:e})},e.poolId)))})}var Bn=n(97609),Fn=n(86302),Rn=n(27758),Nn=n(71792),Un=n(77057),Qn=(e=>(e.BUY="Buy",e.SELL="Sell",e.REMOVE="Remove",e.ADD="Add",e))(Qn||{});const zn=25;var Kn=n(31470),Wn=n(46739);const _n=(0,P.Ay)(L.Gr)`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,Hn=P.Ay.div`
  min-height: 256px;
`;const Yn={0:120,1:144,2:100,3:125,4:125,5:125};function qn(e,o){var n,i,t;if((null===(n=o)||void 0===n?void 0:n.address)===ve.E){var r;const n=(0,w._N)(o.chain);return n&&e.id.toLowerCase()===(null===(r=Je.WRAPPED_NATIVE_CURRENCY[n])||void 0===r?void 0:r.address.toLowerCase())}return e.id.toLowerCase()===(null===(t=o)||void 0===t||null===(i=t.address)||void 0===i?void 0:i.toLowerCase())}function Gn({poolAddress:e,token0:o,token1:n,protocolVersion:t}){var r;const d=(0,Wn.WB)()??je.UniverseChainId.Mainnet,a=(0,Kn.useAppFiatCurrency)(),{formatNumber:l,formatFiatPrice:s}=(0,B.kc)(),[c,u]=(0,f.useReducer)((e=>!e),!1),v=(0,f.useRef)(null),[p,h]=(0,f.useState)([Qn.BUY,Qn.SELL,Qn.REMOVE,Qn.ADD]),{transactions:x,loading:m,loadMore:y,error:k}=function(e,o,n=["Buy","Sell","Remove","Add"],i,t=g.ProtocolVersion.V3,r=zn){var d,a,l,s,c,u,v;const{defaultChainId:p}=(0,V.useEnabledChains)(),h={first:r,chain:(0,O.toGraphQLChain)(o??p)},x=(0,An.useFeatureFlag)(bn.FeatureFlags.V4Data),{loading:m,error:y,data:k,fetchMore:j}=(0,g.useV4PoolTransactionsQuery)({variables:{...h,poolId:e},skip:!x||t!==g.ProtocolVersion.V4}),{loading:b,error:A,data:w,fetchMore:$}=(0,g.useV3PoolTransactionsQuery)({variables:{...h,address:e},skip:t!==g.ProtocolVersion.V3}),{loading:P,error:T,data:I,fetchMore:C}=(0,g.useV2PairTransactionsQuery)({variables:{...h,address:e},skip:!o||t!==g.ProtocolVersion.V2}),L=(0,f.useRef)(!1),{transactions:D,loading:S,fetchMore:E,error:M}=t===g.ProtocolVersion.V4?{transactions:null===(a=k)||void 0===a||null===(d=a.v4Pool)||void 0===d?void 0:d.transactions,loading:m,fetchMore:j,error:y}:t===g.ProtocolVersion.V3?{transactions:null===(s=w)||void 0===s||null===(l=s.v3Pool)||void 0===l?void 0:l.transactions,loading:b,fetchMore:$,error:A}:{transactions:null===(u=I)||void 0===u||null===(c=u.v2Pair)||void 0===c?void 0:c.transactions,loading:P,fetchMore:C,error:T},B=(0,f.useCallback)((({onComplete:e})=>{var o,n;L.current||(L.current=!0,E({variables:{cursor:null===(n=D)||void 0===n||null===(o=n[D.length-1])||void 0===o?void 0:o.timestamp},updateQuery:(o,{fetchMoreResult:n})=>{var i,r,d,a;if(!n)return o;null===(i=e)||void 0===i||i();const l=t===g.ProtocolVersion.V4?{v4Pool:{...n.v4Pool,transactions:[...(null===(r=o.v4Pool)||void 0===r?void 0:r.transactions)??[],...n.v4Pool.transactions]}}:t===g.ProtocolVersion.V3?{v3Pool:{...n.v3Pool,transactions:[...(null===(d=o.v3Pool)||void 0===d?void 0:d.transactions)??[],...n.v3Pool.transactions]}}:{v2Pair:{...n.v2Pair,transactions:[...(null===(a=o.v2Pair)||void 0===a?void 0:a.transactions)??[],...n.v2Pair.transactions]}};return L.current=!1,l}}))}),[E,D,t]),F=(0,f.useMemo)((()=>{var e;return null===(e=D??[])||void 0===e?void 0:e.map((e=>{var t,r,d,a,l,s;if(!e)return;const c=parseFloat(e.token0Quantity)>0?e.token0:e.token1,u=(null===(t=i)||void 0===t?void 0:t.address)===ve.E?null===(r=Je.WRAPPED_NATIVE_CURRENCY[o??je.UniverseChainId.Mainnet])||void 0===r?void 0:r.address:null===(d=i)||void 0===d?void 0:d.address,v=(null===(l=c)||void 0===l||null===(a=l.address)||void 0===a?void 0:a.toLowerCase())===(null===(s=u)||void 0===s?void 0:s.toLowerCase()),p=e.type===g.PoolTransactionType.Swap?v?"Sell":"Buy":e.type===g.PoolTransactionType.Remove?"Remove":"Add";return n.includes(p)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:p}:void 0})).filter((e=>void 0!==e))}),[D,null===(v=i)||void 0===v?void 0:v.address,o,n]);return(0,f.useMemo)((()=>({transactions:F,loading:S,loadMore:B,error:M})),[F,S,B,M])}(e,d,p,o,t),j=m||!!k,b=(0,f.useMemo)((()=>{const e=(0,Bn.FB)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,i.jsx)(Rn.f,{minWidth:Yn[0],justifyContent:"flex-start",children:(0,i.jsxs)(ue.Ay,{gap:"4px",children:[(0,i.jsx)(Un.bV,{direction:w.qq.Desc}),(0,i.jsx)(Un.NF,{active:!0,children:(0,i.jsx)(I.Trans,{i18nKey:"common.time"})})]})}),cell:e=>{var o,n,t,r;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[0],justifyContent:"flex-start",children:(0,i.jsx)(Un.RR,{timestamp:Number(null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n).timestamp),link:(0,be.getExplorerLink)(d,null===(t=(r=e).getValue)||void 0===t?void 0:t.call(r).transaction,be.ExplorerDataType.TRANSACTION)})})}}),e.accessor((e=>{let n,t;var r;if(e.type===Qn.BUY)n="success",t=(0,i.jsxs)("span",{children:[(0,i.jsx)(I.Trans,{i18nKey:"common.buy.label"}),"\xa0",null===(r=o)||void 0===r?void 0:r.symbol]});else if(e.type===Qn.SELL){var d;n="critical",t=(0,i.jsxs)("span",{children:[(0,i.jsx)(I.Trans,{i18nKey:"common.sell.label"}),"\xa0",null===(d=o)||void 0===d?void 0:d.symbol]})}else n=e.type===Qn.ADD?"success":"critical",t=e.type===Qn.ADD?(0,i.jsx)(I.Trans,{i18nKey:"common.add.label"}):(0,i.jsx)(I.Trans,{i18nKey:"common.remove.label"});return(0,i.jsx)(C.P.BodyPrimary,{color:n,children:t})}),{id:"swap-type",header:()=>(0,i.jsx)(Rn.f,{minWidth:Yn[1],justifyContent:"flex-start",children:(0,i.jsxs)(Un.Iw,{clickable:c,onPress:()=>u(),ref:v,children:[(0,i.jsx)(Nn.d,{allFilters:Object.values(Qn),activeFilter:p,setFilters:h,isOpen:c,toggleFilterModal:u,anchorRef:v}),(0,i.jsx)(C.P.BodySecondary,{children:(0,i.jsx)(I.Trans,{i18nKey:"common.type.label"})})]})}),cell:e=>{var o,n;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[1],justifyContent:"flex-start",children:null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,i.jsx)(Rn.f,{minWidth:Yn[3],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodySecondary,{children:a})}),cell:e=>{var o,n;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[3],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodyPrimary,{children:s({price:null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n)})})})}}),e.accessor((e=>qn(e.pool.token0,o)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[4],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodySecondary,{children:null===(e=o)||void 0===e?void 0:e.symbol})})},cell:e=>{var o,n;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[4],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodyPrimary,{children:l({input:Math.abs((null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n))??0),type:B.wl.TokenTx})})})}}),e.accessor((e=>qn(e.pool.token0,o)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[5],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodySecondary,{children:null===(e=n)||void 0===e?void 0:e.symbol})})},cell:e=>{var o,n;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[5],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodyPrimary,{children:l({input:Math.abs((null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n))??0),type:B.wl.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,i.jsx)(Rn.f,{minWidth:Yn[2],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(C.P.BodySecondary,{children:(0,i.jsx)(I.Trans,{i18nKey:"common.wallet.label"})})}),cell:e=>{var o,n,t,r;return(0,i.jsx)(Rn.f,{loading:j,minWidth:Yn[2],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(_n,{href:(0,be.getExplorerLink)(d,null===(o=(n=e).getValue)||void 0===o?void 0:o.call(n),be.ExplorerDataType.ADDRESS),children:(0,i.jsx)(C.P.BodyPrimary,{children:(0,Ae.shortenAddress)(null===(t=(r=e).getValue)||void 0===t?void 0:t.call(r),0)})})})}})]}),[a,d,p,c,s,l,j,o,null===(r=n)||void 0===r?void 0:r.symbol]);return(0,i.jsx)(Hn,{"data-testid":"pool-details-transactions-table",children:(0,i.jsx)(Fn.X,{columns:b,data:x,loading:m,error:k,loadMore:y,maxHeight:600})})}var Zn=n(92876);const Xn=(0,P.Ay)(C.P.HeadlineMedium)`
  color: ${({theme:e,active:o})=>!o&&e.neutral2};
  ${({disabled:e})=>!e&&L._4}
  user-select: none;
`;function Jn({poolAddress:e,token0:o,token1:n,protocolVersion:t}){var r,d,a,l;const[s,c]=(0,f.useState)("transactions"),u=(0,Ro.F)(),{data:v}=(0,Zn.um)({address:u.address,poolId:e}),p=(0,f.useMemo)((()=>{var e;return null===(e=v)||void 0===e?void 0:e.positions.map((e=>(0,x.rL)(e))).filter((e=>void 0!==e))}),[null===(r=v)||void 0===r?void 0:r.positions]);return(0,i.jsxs)(ce.Ay,{gap:"lg",children:[(0,i.jsxs)(ue.Ay,{gap:"16px",children:[(0,i.jsx)(Xn,{active:"transactions"===s,onClick:()=>c("transactions"),disabled:!(null===(d=p)||void 0===d?void 0:d.length),children:(0,i.jsx)(I.Trans,{i18nKey:"common.transactions"})}),Boolean(null===(a=p)||void 0===a?void 0:a.length)&&(0,i.jsxs)(Xn,{active:"positions"===s,onClick:()=>c("positions"),children:[(0,i.jsx)(I.Trans,{i18nKey:"pool.positions"}),` (${null===(l=p)||void 0===l?void 0:l.length})`]})]}),"transactions"===s?(0,i.jsx)(Gn,{poolAddress:e,token0:o,token1:n,protocolVersion:t}):(0,i.jsx)(Mn,{positions:p})]})}var ei=n(69220);function oi(e){if(!e)return;const o=(new Date).getTime(),n=(o-_o()("1d"))/1e3,i=(o-_o()("2d"))/1e3,t=e.filter((e=>{var o;return void 0!==(null===(o=e)||void 0===o?void 0:o.timestamp)&&e.timestamp>=n})).reduce(((e,o)=>e+o.value),0),r=e.filter((e=>{var o;return void 0!==(null===(o=e)||void 0===o?void 0:o.timestamp)&&e.timestamp>=i&&e.timestamp<n})).reduce(((e,o)=>e+o.value),0);return(t-r)/r*100}var ni=n(16563),ii=n(33461);const ti=(e,o)=>{var n,i;const t=null===(n=o)||void 0===n?void 0:n.token0.symbol,r=null===(i=o)||void 0===i?void 0:i.token1.symbol,d=e("common.buyAndSell");return t&&r?`${t}/${r}: ${d}`:d};var ri=n(12085),di=n(68957),ai=n(53195);const li=(0,P.Ay)(ue.Ay)`
  padding: 0 20px 52px;
  justify-content: center;
  width: 100%;
  gap: 80px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 40px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`,si=(0,P.Ay)(ce.Ay)`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: ${Ue.LO.lg}px) {
    max-width: unset;
  }
`,ci=P.Ay.hr`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,ui=(0,P.Ay)(ce.Ay)`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ue.LO.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,vi=(0,P.Ay)(ce.Ay)`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ue.LO.lg}px) and (min-width: ${Ue.LO.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ue.LO.sm}px) {
    padding: unset;
  }
`,pi=(0,P.Ay)(Xe.EY)`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,hi=(0,P.Ay)(ce.Ay)`
  gap: 16px;
  width: 100%;
`;function xi(){var e,o,n,r,d,a,l,s,c,u,v,p,h,x,m,y,k,j,b,A,$,P,C,L,D,S,E,M,B,F,R,N;const{t:U}=(0,I.useTranslation)(),{poolAddress:Q}=(0,Ne.g)(),z=(0,Wn.WB)(),W=z?(0,tn.getChainInfo)(z):void 0,{data:_,loading:H}=function(e,o){var n,i,t;const{defaultChainId:r}=(0,V.useEnabledChains)(),d=(0,O.toGraphQLChain)(o??r),a=(0,An.useFeatureFlag)(bn.FeatureFlags.V4Data),{loading:l,error:s,data:c}=(0,g.useV4PoolQuery)({variables:{chain:d,poolId:e},errorPolicy:"all",skip:!a}),{loading:u,error:v,data:p}=(0,g.useV3PoolQuery)({variables:{chain:d,address:e},errorPolicy:"all"}),{loading:h,error:x,data:m}=(0,g.useV2PairQuery)({variables:{chain:d,address:e},skip:!o,errorPolicy:"all"});return(0,f.useMemo)((()=>{var o,n,i,t,r,d,a,y,f,g,k,j,b,A,w,$,P,T,I,C,L,D,S,E,V,O,M,B,F;const R=Boolean(s||v||x),N=Boolean(l||u||h),U=(null===(o=c)||void 0===o?void 0:o.v4Pool)??(null===(n=p)||void 0===n?void 0:n.v3Pool)??(null===(i=m)||void 0===i?void 0:i.v2Pair)??void 0,Q=(null===(r=c)||void 0===r||null===(t=r.v4Pool)||void 0===t?void 0:t.feeTier)??(null===(a=p)||void 0===a||null===(d=a.v3Pool)||void 0===d?void 0:d.feeTier)??ei.I8,z=(null===(f=c)||void 0===f||null===(y=f.v4Pool)||void 0===y?void 0:y.id)??(null===(k=p)||void 0===k||null===(g=k.v3Pool)||void 0===g?void 0:g.address)??(null===(b=m)||void 0===b||null===(j=b.v2Pair)||void 0===j?void 0:j.address)??e;return{data:U?{idOrAddress:z,txCount:U.txCount,protocolVersion:U.protocolVersion,token0:U.token0,tvlToken0:U.token0Supply,token0Price:null===(T=U.token0)||void 0===T||null===(P=T.project)||void 0===P||null===($=P.markets)||void 0===$||null===(w=$[0])||void 0===w||null===(A=w.price)||void 0===A?void 0:A.value,token1:U.token1,tvlToken1:U.token1Supply,token1Price:null===(S=U.token1)||void 0===S||null===(D=S.project)||void 0===D||null===(L=D.markets)||void 0===L||null===(C=L[0])||void 0===C||null===(I=C.price)||void 0===I?void 0:I.value,feeTier:Q,volumeUSD24H:null===(E=U.volume24h)||void 0===E?void 0:E.value,volumeUSD24HChange:oi(null===(V=U.historicalVolume)||void 0===V?void 0:V.concat()),tvlUSD:null===(O=U.totalLiquidity)||void 0===O?void 0:O.value,tvlUSDChange:null===(M=U.totalLiquidityPercentChange24h)||void 0===M?void 0:M.value,hookAddress:"hook"in U?null===(F=U)||void 0===F||null===(B=F.hook)||void 0===B?void 0:B.address:void 0}:void 0,error:R,loading:N}}),[null===(n=m)||void 0===n?void 0:n.v2Pair,null===(i=p)||void 0===i?void 0:i.v3Pool,null===(t=c)||void 0===t?void 0:t.v4Pool,x,v,s,h,u,l,e])}((null===(e=Q)||void 0===e?void 0:e.toLowerCase())??"",null===(o=W)||void 0===o?void 0:o.id),[Y,q]=(0,f.useReducer)((e=>!e),!1),G=function(e,o){var n,i,t,r;return(null===(n=e)||void 0===n?void 0:n.token0)&&(null===(i=e)||void 0===i?void 0:i.token1)&&o?[(0,w.LA)(o,null===(t=e)||void 0===t?void 0:t.token0),(0,w.LA)(o,null===(r=e)||void 0===r?void 0:r.token1)]:[void 0,void 0]}(_,null===(n=W)||void 0===n?void 0:n.id),[Z,X]=Y?[null===(r=G)||void 0===r?void 0:r[1],null===(d=G)||void 0===d?void 0:d[0]]:G,{darkMode:J,surface2:ee,accent1:oe}=(0,T.useTheme)(),ne=(0,ni.b)(Z&&(0,w.d2)(Z),{backgroundColor:ee,darkMode:J}),ie=(0,ni.b)(X&&(0,w.d2)(X),{backgroundColor:ee,darkMode:J}),te=!H&&!_||(!Q||!W),re=(0,f.useMemo)((()=>{var e,o,n;const i=`${null===(e=_)||void 0===e?void 0:e.token0.symbol}/${null===(o=_)||void 0===o?void 0:o.token1.symbol}`,t=(null===(n=W)||void 0===n?void 0:n.label)??"Ethereum";return{title:i,url:window.location.href,description:`Swap ${i} on ${t}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(a=W)||void 0===a?void 0:a.label,null===(l=_)||void 0===l?void 0:l.token0.symbol,null===(s=_)||void 0===s?void 0:s.token1.symbol]),de=(0,ri.t)(re);return te?(0,i.jsx)(ii.default,{}):(0,i.jsxs)(Ue.NP,{token0:ne!==oe?ne:void 0,token1:ie!==oe?ie:void 0,children:[(0,i.jsxs)(di.Helmet,{children:[(0,i.jsx)("title",{children:ti(U,_)}),de.map(((e,o)=>(0,i.jsx)("meta",{...e},o)))]}),(0,i.jsx)(ai.default,{logImpression:!H,page:t.Om.POOL_DETAILS_PAGE,properties:{poolAddress:Q,chainId:null===(c=W)||void 0===c?void 0:c.id,feeTier:null===(u=_)||void 0===u?void 0:u.feeTier,token0Address:null===(v=_)||void 0===v?void 0:v.token0.address,token1Address:null===(p=_)||void 0===p?void 0:p.token1.address,token0Symbol:null===(h=_)||void 0===h?void 0:h.token0.symbol,token1Symbol:null===(x=_)||void 0===x?void 0:x.token1.symbol,token0Name:null===(m=_)||void 0===m?void 0:m.token0.name,token1Name:null===(y=_)||void 0===y?void 0:y.token1.name},children:(0,i.jsxs)(li,{children:[(0,i.jsxs)(si,{children:[(0,i.jsxs)(ce.Ay,{gap:"20px",children:[(0,i.jsxs)(ce.Ay,{children:[(0,i.jsx)(Te,{chainId:null===(k=W)||void 0===k?void 0:k.id,poolAddress:Q,token0:Z,token1:X,loading:H}),(0,i.jsx)(Me,{chainId:null===(j=W)||void 0===j?void 0:j.id,poolAddress:Q,token0:Z,token1:X,feeTier:null===(b=_)||void 0===b?void 0:b.feeTier,hookAddress:null===(A=_)||void 0===A?void 0:A.hookAddress,protocolVersion:null===($=_)||void 0===$?void 0:$.protocolVersion,toggleReversed:q,loading:H})]}),(0,i.jsx)(K,{poolData:_,loading:H,isReversed:Y,chain:null===(P=W)||void 0===P?void 0:P.backendChain.chain})]}),(0,i.jsx)(ci,{}),(0,i.jsx)(Jn,{poolAddress:Q,token0:Z,token1:X,protocolVersion:null===(C=_)||void 0===C?void 0:C.protocolVersion})]}),(0,i.jsxs)(ui,{children:[(0,i.jsx)(En,{chainId:null===(L=W)||void 0===L?void 0:L.id,token0:Z,token1:X,feeTier:null===(D=_)||void 0===D?void 0:D.feeTier,protocolVersion:null===(S=_)||void 0===S?void 0:S.protocolVersion,loading:H}),(0,i.jsx)(po,{poolData:_,isReversed:Y,chainId:null===(E=W)||void 0===E?void 0:E.id,loading:H}),(0,i.jsxs)(vi,{children:[(0,i.jsx)(pi,{children:(0,i.jsx)(I.Trans,{i18nKey:"common.links"})}),(0,i.jsxs)(hi,{children:[(0,i.jsx)(qe,{address:Q,chainId:null===(M=W)||void 0===M?void 0:M.id,tokens:[Z,X],loading:H}),(0,i.jsx)(qe,{address:null===(B=Z)||void 0===B?void 0:B.address,chainId:null===(F=W)||void 0===F?void 0:F.id,tokens:[Z],loading:H}),(0,i.jsx)(qe,{address:null===(R=X)||void 0===R?void 0:R.address,chainId:null===(N=W)||void 0===N?void 0:N.id,tokens:[X],loading:H})]})]})]})]})})]})}}}]);
//# sourceMappingURL=3334.3d1a98fc.chunk.js.map
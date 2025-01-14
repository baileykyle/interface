"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3087],{63087:(e,n,i)=>{i.r(n),i.d(n,{LegacyPoolRedirects:()=>fn,LegacyPoolV2Redirects:()=>wn,LegacyPositionPageRedirects:()=>bn,PoolFinderRedirects:()=>An});var t=i(95682),o=i(29477),r=i(15260),s=i(70819),d=i(87112),a=i(59504),l=i(16444),c=i(35480),p=i(73763);const u=l.Ay.div`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${p.FI.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,h=l.Ay.div`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${p.FI.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${p.FI.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,x=l.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,m=l.Ay.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function g({positions:e,setUserHideClosedPositions:n,userHideClosedPositions:i}){const{t:o}=(0,c.useTranslation)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u,{children:[(0,t.jsxs)("div",{children:[o("pool.positions.title"),e&&" ("+e.length+")"]}),(0,t.jsx)(m,{id:"desktop-hide-closed-positions",onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})]}),(0,t.jsxs)(h,{children:[o("pool.positions.title"),(0,t.jsx)(x,{children:(0,t.jsx)(m,{onClick:()=>{n(!i)},children:o(i?"pool.showClosed":"pool.hideClosed")})})]}),e.map((e=>(0,t.jsx)(a.A,{...e},e.tokenId.toString())))]})}var v=i(11075),j=i(45353),y=i(78135),f=i(18960),w=i(62),A=i(28484),b=i(2499),k=i(2818),T=i(55259),$=i(22791),C=i(68880);const P=new k.KA(C);var I=i(33962),E=i(85141),_=i(34748),R=i(84551);function F(e){if(!e)return!1;return new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(e)}function S(e,n,i,t,o,r,s){try{var d=e[r](s),a=d.value}catch(l){return void i(l)}d.done?n(a):Promise.resolve(a).then(t,o)}function L(e){return function(){var n=this,i=arguments;return new Promise((function(t,o){var r=e.apply(n,i);function s(e){S(r,t,o,s,d,"next",e)}function d(e){S(r,t,o,s,d,"throw",e)}s(void 0)}))}}function q(e){const{chainId:n}=(0,y.F)(),{defaultChainId:i}=(0,_.useEnabledChains)(),t=(0,I.useMemo)((()=>function(e){return Array.from(new Set(e.reduce(((e,n)=>e.concat(n.token0,n.token1)),[])))}(e)),[e]),o=(0,f.E)({queries:e.map((e=>function(e,n){return(0,b.eE)({queryKey:["positionCurrencyInfo",e],queryFn:L((function*(){const i=[w.V.query({query:E.TokenDocument,variables:{address:e.token0,chain:(0,R.toGraphQLChain)(n)},fetchPolicy:"cache-first"}),w.V.query({query:E.TokenDocument,variables:{address:e.token1,chain:(0,R.toGraphQLChain)(n)},fetchPolicy:"cache-first"})],[t,o]=yield Promise.all(i);return{position:e,currency0Info:(0,A._)(t.data.token),currency1Info:(0,A._)(o.data.token)}}))})}(e,n??i)))}),r=function(e,n){return(0,T._l)(e,P,n,void 0,$.bo)}(t,"symbol"),s=(0,I.useMemo)((()=>{const e={};for(let i=0;i<t.length;i++){var n;const o=null===(n=r[i])||void 0===n?void 0:n.result;if(!o)continue;e[t[i]]=o}return e}),[t,r]);return(0,I.useMemo)((()=>o.map((e=>{var n,i,t,o,r,d,a,l;if(!e.data)return;const{currency0Info:c,currency1Info:p,position:u}=e.data;let h=0;if((null===(n=c)||void 0===n?void 0:n.isSpam)||(null===(i=c)||void 0===i?void 0:i.safetyLevel)!==E.SafetyLevel.Verified||h++,(null===(t=p)||void 0===t?void 0:t.isSpam)||(null===(o=p)||void 0===o?void 0:o.safetyLevel)!==E.SafetyLevel.Verified||h++,2===h)return u;let x=0;return F((null===(d=c)||void 0===d||null===(r=d.currency)||void 0===r?void 0:r.symbol)??s[u.token0])&&x++,F((null===(l=p)||void 0===l||null===(a=l.currency)||void 0===a?void 0:a.symbol)??s[u.token1])&&x++,1===h&&x<2||0===x?u:void 0})).filter((e=>!!e))),[s,o])}var V=i(15306),D=i(81493),O=i(55199),W=i(4163),B=i(66954),K=i(99759),M=i(7740),z=i(26179);const N=l.Ay.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,U=O.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,Y=(0,l.Ay)(W.Gr)`
  ${U}
`,H=(0,l.Ay)(W.Bl)`
  ${U}
`,G=(0,l.Ay)(B.P.DeprecatedLabel)`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,Z=(0,l.Ay)(j.mm)`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function Q(){const{chainId:e}=(0,y.F)(),n=(0,K.getChainInfo)((0,M.iX)(e)??z.UniverseChainId.Mainnet);return(0,t.jsxs)(N,{children:[(0,t.jsx)(Y,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,t.jsxs)(Z,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(c.Trans,{i18nKey:"pool.learnLiquidity"})," \u2197"]}),(0,t.jsx)(B.P.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,t.jsx)(c.Trans,{i18nKey:"pool.learnv3LP"})})]})}),(0,t.jsx)(H,{"data-testid":"cta-poolslink",to:`/explore/pools/${n.urlParam}`,children:(0,t.jsxs)(Z,{children:[(0,t.jsxs)(G,{style:{alignSelf:"flex-start"},children:[(0,t.jsx)(c.Trans,{i18nKey:"pool.top"})," \u2197"]}),(0,t.jsx)(B.P.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,t.jsx)(c.Trans,{i18nKey:"pool.exporeAnalytics"})})]})})]})}var J=i(48070),X=i(84840),ee=i(28273),ne=i(14021),ie=i(34546),te=i(45805);const oe=(0,X.I)(ee.M,{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:"$gap12",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),re={[E.ProtocolVersion.V4]:"v4",[E.ProtocolVersion.V3]:"v3",[E.ProtocolVersion.V2]:"v2"};function se({protocolVersion:e}){const{t:n}=(0,c.useTranslation)(),[i,o]=(0,I.useState)(!1),r=(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign),s={[E.ProtocolVersion.V4]:{title:n("pool.v4"),link:"/pool"},[E.ProtocolVersion.V3]:{title:n("pool.v3"),link:"/pool"},[E.ProtocolVersion.V2]:{title:n("pool.v2"),link:"/pools/v2"}};return(0,t.jsx)(d.V,{isOpen:i,menuLabel:(0,t.jsx)(ne.EY,{variant:"body1",children:re[e]}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:Object.entries(s).filter((([n,i])=>!(!r&&n===E.ProtocolVersion.V4)&&i.title!==s[e].title)).map((([,e])=>(0,t.jsxs)(oe,{href:e.link,children:[(0,t.jsx)(J.b,{width:"20px",height:"20px"}),(0,t.jsx)(ne.EY,{variant:"body1",style:{color:"inherit"},children:e.title})]},e.title)))}),toggleOpen:o,buttonStyle:{height:36},adaptToSheet:!1})}var de=i(66064),ae=i(83799),le=i(49744),ce=i(85473),pe=i(42948),ue=i(69240),he=i(42150),xe=i(36149),me=i(79253),ge=i(53195);const ve=(0,l.Ay)(j.mm)`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,je=(0,X.I)(ee.M,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",fontWeight:"$book",p:"$spacing8",textDecorationLine:"none",color:"$neutral2",hoverStyle:{color:"$neutral1"}}),ye=l.Ay.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,fe=O.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,we=(0,l.Ay)(ae.A)`
  ${fe}
`,Ae=(0,l.Ay)(le.A)`
  ${fe}
`,be=(0,l.Ay)(s.$$)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  white-space: nowrap;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,ke=l.Ay.main`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function Te(){return(0,t.jsxs)(de.ar,{children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{}),(0,t.jsx)("div",{})]})}function $e(){const{t:e}=(0,c.useTranslation)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ve,{children:(0,t.jsx)(j.mm,{gap:"lg",justify:"center",children:(0,t.jsxs)(j.mm,{gap:"lg",style:{width:"100%"},children:[(0,t.jsx)(me.s,{row:!0,p:"$none",gap:"$gap12",children:(0,t.jsx)(ne.EY,{variant:"heading2",children:e("pool.positions")})}),(0,t.jsx)(ke,{children:(0,t.jsx)(ye,{children:(0,t.jsxs)(ne.EY,{variant:"body1",color:"$neutral3",textAlign:"center",children:[(0,t.jsx)(we,{strokeWidth:1.2}),(0,t.jsx)("div",{"data-testid":"pools-unsupported-err",children:e("pool.connection.networkUnsupported")})]})})})]})})}),(0,t.jsx)(v.j,{})]})}function Ce(){var e;const{t:n}=(0,c.useTranslation)(),i=(0,y.F)(),a=(0,M.oe)(i.chainId),l=(0,V.S)(),p=(0,r.O)(),[u,h]=(0,I.useState)(!1),x=(0,O.useTheme)(),[m,f]=(0,xe.z3)(),{positions:w,loading:A}=(0,D.J)(i.address),[b,k]=(null===(e=w)||void 0===e?void 0:e.reduce(((e,n)=>{var i;return e[(null===(i=n.liquidity)||void 0===i?void 0:i.isZero())?1:0].push(n),e}),[[],[]]))??[[],[]],T=q((0,I.useMemo)((()=>[...b,...m?[]:k]),[k,b,m]));if(!a)return(0,t.jsx)($e,{});const $=Boolean(!i),C=[(0,t.jsxs)(je,{href:"/migrate/v2",children:[n("common.migrate"),(0,t.jsx)(ce.A,{size:16})]},"migrate"),(0,t.jsxs)(je,{href:"/pools/v2",children:[n("pool.v2liquidity"),(0,t.jsx)(pe.A,{size:16})]},"v2-liquidity"),(0,t.jsxs)(je,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:[n("pool.learn"),(0,t.jsx)(ue.A,{size:16})]},"learn")];return(0,t.jsxs)(ge.default,{logImpression:!0,page:o.Om.POOL_PAGE,children:[(0,t.jsx)(ve,{children:(0,t.jsx)(j.mm,{gap:"lg",justify:"center",children:(0,t.jsxs)(j.mm,{gap:"lg",style:{width:"100%"},children:[(0,t.jsxs)(me.s,{row:!0,alignItems:"center",justifyContent:"space-between",p:"$none",gap:"$gap12",$md:{flexWrap:"wrap",width:"100%"},children:[(0,t.jsxs)(me.s,{row:!0,alignItems:"center",gap:"$spacing8",width:"min-content",children:[(0,t.jsx)(ne.EY,{variant:"heading2",children:n("pool.positions")}),(0,t.jsx)("div",{children:(0,t.jsx)(se,{protocolVersion:E.ProtocolVersion.V3})})]}),(0,t.jsxs)(me.s,{row:!0,gap:"8px",$md:{width:"100%"},children:[l&&(0,t.jsx)(me.s,{grow:!0,$md:{width:"calc(50% - 4px)"},children:(0,t.jsx)(d.V,{isOpen:u,toggleOpen:h,menuLabel:(0,t.jsx)(t.Fragment,{children:n("common.more")}),internalMenuItems:(0,t.jsx)(t.Fragment,{children:[...C]}),buttonStyle:{height:40,justifyContent:"center"},dropdownStyle:{width:200,top:"calc(100% + 20px)"},adaptToSheet:!1})}),(0,t.jsx)(be,{"data-cy":"join-pool-button",id:"join-pool-button",as:he.Link,to:"/add/ETH",children:n("pool.newPosition.plus")})]})]}),(0,t.jsx)(ke,{children:A?(0,t.jsx)(Te,{}):T&&k&&T.length>0?(0,t.jsx)(g,{positions:T,setUserHideClosedPositions:f,userHideClosedPositions:m}):(0,t.jsxs)(ye,{children:[(0,t.jsxs)(B.P.BodyPrimary,{color:x.neutral3,textAlign:"center",children:[(0,t.jsx)(Ae,{strokeWidth:1,style:{marginTop:"2em"}}),(0,t.jsx)("div",{children:n("pool.activePositions.appear")})]}),!$&&k.length>0&&(0,t.jsx)(s.C3,{style:{marginTop:".5rem"},onClick:()=>f(!m),children:n("pool.showClosed")}),$&&(0,t.jsx)(ge.default,{logPress:!0,eventOnTrigger:o.ze.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:o.nM.CONNECT_WALLET_BUTTON,children:(0,t.jsx)(s.$$,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:p.open,children:n("common.connectAWallet.button")})})]})}),(0,t.jsx)(W.QZ,{children:(0,t.jsx)(Q,{})})]})})}),(0,t.jsx)(v.j,{})]})}var Pe=i(75413),Ie=i(5459),Ee=i(65075),_e=i(95488),Re=i(63247),Fe=i(94873),Se=i(90104),Le=i(28438),qe=i(18549),Ve=i(48565),De=i.n(Ve),Oe=i(97161),We=i(45355),Be=i(10670),Ke=i(97404),Me=i(74909),ze=i(63794),Ne=i(69104),Ue=i(2303);const Ye=new k.KA(Be.HV),He={1:[{tokens:[Ne.WRAPPED_NATIVE_CURRENCY[z.UniverseChainId.Mainnet],Ne.DAI],stakingRewardAddress:"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"},{tokens:[Ne.WRAPPED_NATIVE_CURRENCY[z.UniverseChainId.Mainnet],Ne.USDC_MAINNET],stakingRewardAddress:"0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"},{tokens:[Ne.WRAPPED_NATIVE_CURRENCY[z.UniverseChainId.Mainnet],Ne.USDT],stakingRewardAddress:"0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"},{tokens:[Ne.WRAPPED_NATIVE_CURRENCY[z.UniverseChainId.Mainnet],Ne.WBTC],stakingRewardAddress:"0xCA35e32e7926b96A9988f61d510E038108d8068e"}]};const Ge=(0,l.Ay)(j.mm)`
  max-width: 640px;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0px 8px;
  `};
`,Ze=(0,l.Ay)(Fe.pL)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);
  margin: 0 0 16px 0;
  overflow: hidden;
`,Qe=(0,l.Ay)(Re.Bp)`
  gap: 8px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
  `};
`,Je=(0,l.Ay)(s.$$)`
  height: 40px;
  width: fit-content;
  border-radius: 12px;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,Xe=(0,l.Ay)(s.nR)`
  height: 40px;
  width: fit-content;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    width: 48%;
  `};
`,en=l.Ay.div`
  border: 1px solid ${({theme:e})=>e.neutral2};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,nn=(0,l.Ay)(B.P.H1Small)`
  margin-top: 8px;
  justify-self: flex-start;
  font-weight: 535;
  text-wrap: nowrap;
`;function tn(){var e,n,i,r,d,a,l;const p=(0,O.useTheme)(),u=(0,y.F)(),h=(0,V.S)();let x=(0,xe.K8)();h||(x=[]);const m=(0,I.useMemo)((()=>x.map((e=>({liquidityToken:(0,xe.lg)(e),tokens:e})))),[x]),[g,f]=(0,Oe.Uf)(u.address,m.map((({liquidityToken:e})=>e)),!(null===(e=u)||void 0===e?void 0:e.address)),w=(0,I.useMemo)((()=>m.filter((({liquidityToken:e})=>{var n;return null===(n=g[e.address])||void 0===n?void 0:n.greaterThan(0)}))),[m,g]),A=(0,qe.hM)(w.map((({tokens:e})=>e))),b=f||(null===(n=A)||void 0===n?void 0:n.length)<w.length||(null===(i=A)||void 0===i?void 0:i.some((e=>!e))),k=A.map((([,e])=>e)).filter((e=>Boolean(e))),C=function(e){const n=(0,y.F)(),i=(0,ze.A)($.bo),t=(0,I.useMemo)((()=>{var i;return n.chainId?(null===(i=He[n.chainId])||void 0===i?void 0:i.filter((n=>void 0===e||null!==e&&e.involvesToken(n.tokens[0])&&e.involvesToken(n.tokens[1]))))??[]:[]}),[n.chainId,e]),o=n.chainId?Ne.UNI[n.chainId]:void 0,r=(0,I.useMemo)((()=>t.map((({stakingRewardAddress:e})=>e))),[t]),s=(0,I.useMemo)((()=>[n.address]),[n.address]),d=(0,T._l)(r,Ye,"balanceOf",s),a=(0,T._l)(r,Ye,"earned",s),l=(0,T._l)(r,Ye,"totalSupply"),c=(0,T._l)(r,Ye,"rewardRate",void 0,$.bo),p=(0,T._l)(r,Ye,"periodFinish",void 0,$.bo);return(0,I.useMemo)((()=>n.chainId&&o?r.reduce(((e,n,r)=>{var s,u;const h=d[r],x=a[r],m=l[r],g=c[r],v=p[r];if(!(null===(s=h)||void 0===s?void 0:s.loading)&&!(null===(u=x)||void 0===u?void 0:u.loading)&&m&&!m.loading&&g&&!g.loading&&v&&!v.loading){var j,y,f,w,A,b,k,T,$,C;if((null===(j=h)||void 0===j?void 0:j.error)||(null===(y=x)||void 0===y?void 0:y.error)||m.error||g.error||v.error)return Ue.logger.warn("stake/hooks","useStakingInfo","Failed to load staking rewards info"),e;const s=t[r].tokens,d=new Me.Pair(Ke.CurrencyAmount.fromRawAmount(s[0],"0"),Ke.CurrencyAmount.fromRawAmount(s[1],"0")),a=Ke.CurrencyAmount.fromRawAmount(d.liquidityToken,De().BigInt((null===(w=h)||void 0===w||null===(f=w.result)||void 0===f?void 0:f[0])??0)),l=Ke.CurrencyAmount.fromRawAmount(d.liquidityToken,De().BigInt(null===(A=m.result)||void 0===A?void 0:A[0])),c=Ke.CurrencyAmount.fromRawAmount(o,De().BigInt(null===(b=g.result)||void 0===b?void 0:b[0])),p=(e,n,i)=>Ke.CurrencyAmount.fromRawAmount(o,De().greaterThan(n.quotient,De().BigInt(0))?De().divide(De().multiply(i.quotient,e.quotient),n.quotient):De().BigInt(0)),u=p(a,l,c),P=null===(T=v.result)||void 0===T||null===(k=T[0])||void 0===k?void 0:k.toNumber(),I=1e3*P,E=!P||!i||P>i.toNumber();e.push({stakingRewardAddress:n,tokens:t[r].tokens,periodFinish:I>0?new Date(I):void 0,earnedAmount:Ke.CurrencyAmount.fromRawAmount(o,De().BigInt((null===(C=x)||void 0===C||null===($=C.result)||void 0===$?void 0:$[0])??0)),rewardRate:u,totalRewardRate:c,stakedAmount:a,totalStakedAmount:l,getHypotheticalRewardRate:p,active:E})}return e}),[]):[]),[d,n.chainId,i,a,t,p,c,r,l,o])}(),P=null===(r=C)||void 0===r?void 0:r.filter((e=>De().greaterThan(e.stakedAmount.quotient,Le.CL))),_=(0,qe.hM)(null===(d=P)||void 0===d?void 0:d.map((e=>e.tokens))),R=k.filter((e=>{var n;return 0===(null===(n=_)||void 0===n?void 0:n.map((e=>e[1])).filter((n=>{var i;return(null===(i=n)||void 0===i?void 0:i.liquidityToken.address)===e.liquidityToken.address})).length)}));return(0,t.jsx)(ge.default,{logImpression:!0,page:o.Om.POOL_PAGE,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(Ge,{children:[(0,t.jsxs)(Ze,{children:[(0,t.jsx)(Fe.LR,{}),(0,t.jsx)(Fe.jK,{}),(0,t.jsx)(Fe.yj,{children:(0,t.jsxs)(j.mm,{gap:"md",children:[(0,t.jsx)(Re.JA,{children:(0,t.jsx)(B.P.DeprecatedWhite,{fontWeight:535,children:(0,t.jsx)(c.Trans,{i18nKey:"pool.liquidity.rewards"})})}),(0,t.jsx)(Re.JA,{children:(0,t.jsx)(B.P.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(c.Trans,{i18nKey:"pool.liquidity.earn.fee"})})}),(0,t.jsx)(W.Gr,{style:{color:p.white,textDecoration:"underline"},target:"_blank",href:"https://docs.uniswap.org/contracts/v2/concepts/core-concepts/pools",children:(0,t.jsx)(B.P.DeprecatedWhite,{fontSize:14,children:(0,t.jsx)(c.Trans,{i18nKey:"pool.learnAbout"})})})]})}),(0,t.jsx)(Fe.LR,{}),(0,t.jsx)(Fe.jK,{})]}),h?(0,t.jsx)(j.mm,{gap:"lg",justify:"center",children:(0,t.jsxs)(j.mm,{gap:"md",style:{width:"100%"},children:[(0,t.jsxs)(Re.Ay,{gap:"md",justify:"space-between",style:{marginTop:"1rem"},padding:"0",children:[(0,t.jsxs)(Re.Ay,{gap:"md",width:"content",children:[(0,t.jsx)(W.QZ,{children:(0,t.jsx)(nn,{children:(0,t.jsx)(c.Trans,{i18nKey:"pool.yourv2"})})}),(0,t.jsx)(se,{protocolVersion:E.ProtocolVersion.V2})]}),(0,t.jsxs)(Qe,{children:[(0,t.jsx)(Xe,{as:he.Link,padding:"6px 8px",to:"/add/v2/ETH",children:(0,t.jsx)(c.Trans,{i18nKey:"pool.create.pair"})}),(0,t.jsx)(Je,{id:"find-pool-button",as:he.Link,to:"/pools/v2/find",padding:"6px 8px",children:(0,t.jsx)(We.EY,{fontWeight:535,fontSize:16,children:(0,t.jsx)(c.Trans,{i18nKey:"pool.import"})})}),(0,t.jsx)(Je,{id:"join-pool-button",as:he.Link,to:"/add/v2/ETH",padding:"6px 8px",children:(0,t.jsx)(We.EY,{fontWeight:535,fontSize:16,children:(0,t.jsx)(c.Trans,{i18nKey:"pool.v2.add"})})})]})]}),u?b?(0,t.jsx)(en,{children:(0,t.jsx)(B.P.DeprecatedBody,{color:p.neutral3,textAlign:"center",children:(0,t.jsx)(Se.nv,{children:(0,t.jsx)(c.Trans,{i18nKey:"common.loading"})})})}):(null===(a=k)||void 0===a?void 0:a.length)>0||(null===(l=_)||void 0===l?void 0:l.length)>0?(0,t.jsxs)(t.Fragment,{children:[R.map((e=>(0,t.jsx)(Ee.Ay,{pair:e},e.liquidityToken.address))),_.map(((e,n)=>e[1]&&(0,t.jsx)(Ee.Ay,{pair:e[1],stakedBalance:P[n].stakedAmount},P[n].stakingRewardAddress))),(0,t.jsx)(Re.Bp,{justify:"center",style:{width:"100%"},children:(0,t.jsxs)(s.fK,{as:he.Link,to:"/migrate/v2",id:"import-pool-link",style:{padding:"8px 16px",margin:"0 4px",borderRadius:"12px",width:"fit-content",fontSize:"14px"},children:[(0,t.jsx)(ce.A,{size:16,style:{marginRight:"8px"}}),(0,t.jsx)(c.Trans,{i18nKey:"pool.v2.migratev3"})]})})]}):(0,t.jsx)(en,{children:(0,t.jsx)(B.P.DeprecatedBody,{color:p.neutral3,textAlign:"center",children:(0,t.jsx)(c.Trans,{i18nKey:"pool.noLiquidity"})})}):(0,t.jsx)(Ie.Ay,{padding:"40px",children:(0,t.jsx)(B.P.DeprecatedBody,{color:p.neutral3,textAlign:"center",children:(0,t.jsx)(c.Trans,{i18nKey:"pool.liquidity.connectToAdd"})})})]})}):(0,t.jsx)(_e.O,{})]}),(0,t.jsx)(v.j,{})]})})}var on=i(55282),rn=i(41411),sn=i(27249),dn=i(32849),an=i(43423),ln=i.n(an),cn=i(69646),pn=i(81971),un=i(66249),hn=i(93810),xn=i(88438),mn=i(91071);function gn(){var e,n,i,s,d;const a=(0,y.F)(),{t:l}=(0,c.useTranslation)(),p=(0,r.O)(),{formatCurrencyAmount:u}=(0,mn.kc)(),[h,x]=(0,I.useState)(!1),[m,g]=(0,I.useState)((()=>a.chainId?(0,Ne.nativeOnChain)(a.chainId):void 0)),[v,j]=(0,I.useState)(),[f,w]=(0,I.useState)(void 0),[,A]=(0,qe.ek)(m,v),b=(0,xe.Ep)();(0,I.useEffect)((()=>{A&&b(A)}),[A,b]);const k=(0,Oe.nC)(a.address,null===(e=A)||void 0===e?void 0:e.liquidityToken),T=Boolean(k&&De().greaterThan(k.quotient,De().BigInt(0))),$=(0,Oe.nC)(a.address,null===(n=A)||void 0===n?void 0:n.liquidityToken),C=(0,dn.P)(null===(i=A)||void 0===i?void 0:i.liquidityToken),[P,E]=A&&C&&$&&De().greaterThanOrEqual(C.quotient,$.quotient)?[A.getLiquidityValue(A.token0,C,$,!1),A.getLiquidityValue(A.token1,C,$,!1)]:[void 0,void 0],_=(0,xn.useUSDCValue)(P),R=(0,xn.useUSDCValue)(E);return(0,V.S)()?(0,t.jsx)(ge.default,{logImpression:!0,page:o.Om.POOL_PAGE,children:(0,t.jsxs)(me.s,{width:"100%",py:"$spacing48",px:"$spacing40",maxWidth:650,children:[(0,t.jsx)(on.AF,{"aria-label":"breadcrumb-nav",children:(0,t.jsxs)(on.TV,{style:{gap:"8px"},to:"/positions",children:[(0,t.jsx)(pn.A,{size:14})," ",(0,t.jsx)(c.Trans,{i18nKey:"pool.positions.title"})]})}),(0,t.jsx)(ne.EY,{variant:"heading2",children:l("pool.import.positions.v2")}),(0,t.jsxs)(me.s,{mt:"$spacing40",borderRadius:"$rounded20",borderColor:"$surface3",borderWidth:1,p:"$spacing24",children:[(0,t.jsx)(ne.EY,{variant:"subheading1",children:l("pool.selectPair")}),(0,t.jsx)(ne.EY,{variant:"body3",mt:"$gap4",children:l("pool.import.positions.v2.selectPair.description")}),(0,t.jsxs)(me.s,{row:!0,gap:"$gap16",$md:{flexDirection:"column"},mt:"$spacing12",children:[(0,t.jsx)(cn.J,{currency:m??void 0,onPress:()=>w(un.I.TOKEN0)}),(0,t.jsx)(cn.J,{currency:v??void 0,onPress:()=>w(un.I.TOKEN1)})]}),m&&v&&a.isConnected?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ne.EY,{variant:"subheading1",mt:"$gap32",children:l("poolFinder.availablePools")}),(0,t.jsx)(ne.EY,{variant:"body3",mt:"$gap4",children:l(T?"poolFinder.availablePools.found.description":"poolFinder.availablePools.notFound.description")})]}):null,T&&A&&_&&R&&(0,t.jsxs)(me.s,{mt:"$gap12",width:"100%",row:!0,alignItems:"center",justifyContent:"space-between",p:"$padding16",borderRadius:"$rounded16",borderWidth:"$spacing1",borderColor:"$surface3",$md:{row:!1,gap:"$gap16",alignItems:"flex-start"},children:[(0,t.jsxs)(me.s,{row:!0,alignItems:"center",gap:"$gap16",$md:{justifyContent:"space-between"},children:[(0,t.jsx)(rn.g,{currencies:[m,v],size:40}),(0,t.jsxs)(ne.EY,{variant:"subheading1",children:[null===(s=m)||void 0===s?void 0:s.symbol,"/",null===(d=v)||void 0===d?void 0:d.symbol]})]}),(0,t.jsxs)(me.s,{$md:{row:!0,gap:"$gap8",alignItems:"center",flexDirection:"row-reverse",justifyContent:"space-between"},children:[(0,t.jsx)(ne.EY,{variant:"body2",textAlign:"right",children:u({amount:_.add(R),type:mn.wl.FiatTokenQuantity})}),(0,t.jsx)(ne.EY,{variant:"body3",color:"$neutral2",children:l("position.value")})]})]}),a.isConnected?(0,t.jsx)(hn.$,{theme:"secondary",mt:"$gap32",disabled:!T||h,onPress:()=>{T&&A&&(b(A),x(!0),setTimeout((()=>{x(!1)}),ln()("3s")))},children:l(T?h?"pool.import.success":"pool.import":"common.button.continue")}):(0,t.jsx)(hn.$,{theme:"secondary",mt:"$gap32",onPress:p.open,children:l("common.connectWallet.button")})]}),(0,t.jsx)(sn.A,{isOpen:void 0!==f,onDismiss:()=>w(void 0),onCurrencySelect:e=>{f===un.I.TOKEN0?g(e):f===un.I.TOKEN1&&j(e),w(void 0)}})]})}):(0,t.jsx)(_e.O,{})}var vn=i(88361),jn=i(46739),yn=i(85559);function fn(){return(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign)?(0,t.jsx)(vn.C5,{to:"/positions",replace:!0}):(0,t.jsx)(Ce,{})}function wn(){return(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign)?(0,t.jsx)(vn.C5,{to:"/positions",replace:!0}):(0,t.jsx)(tn,{})}function An(){return(0,t.jsx)(gn,{})}function bn(){const e=(0,te.useFeatureFlag)(ie.FeatureFlags.LPRedesign),{tokenId:n}=(0,vn.g)(),[i]=(0,he.useSearchParams)(),{chainId:o}=(0,yn.F)(),{defaultChainId:r}=(0,_.useEnabledChains)();if(e){var s;const e=(null===(s=(0,jn.o8)(i.get("chain")))||void 0===s?void 0:s.toLowerCase())??(0,R.toGraphQLChain)(o??r).toLowerCase();return(0,t.jsx)(vn.C5,{to:`/positions/v3/${e}/${n}`,replace:!0})}return(0,t.jsx)(Pe.A,{})}}}]);
//# sourceMappingURL=3087.ca9d0871.chunk.js.map
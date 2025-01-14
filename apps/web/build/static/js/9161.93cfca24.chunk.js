"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9161],{56397:(e,n,i)=>{i.d(n,{A:()=>l});var t=i(33962),r=i(77258),s=i.n(r);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},o.apply(this,arguments)}function a(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)i=s[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=(0,t.forwardRef)((function(e,n){var i=e.color,r=void 0===i?"currentColor":i,s=e.size,d=void 0===s?24:s,l=a(e,["color","size"]);return t.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("polyline",{points:"18 15 12 9 6 15"}))}));d.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},d.displayName="ChevronUp";const l=d},94873:(e,n,i)=>{i.d(n,{qC:()=>u,LR:()=>l,dX:()=>c,jK:()=>x,yj:()=>p,pL:()=>d});const t=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",r=i.p+"static/media/noise.3c7efafc83614205bd1a.png",s=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var o=i(45353),a=i(16444);const d=(0,a.Ay)(o.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=a.Ay.span`
  background: url(${t});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,c=a.Ay.span`
  background: url(${s});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,x=a.Ay.span`
  background: url(${r});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,a.Ay)(o.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,u=a.Ay.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},52038:(e,n,i)=>{i.d(n,{A:()=>a,q:()=>o});var t=i(95682),r=i(16444),s=i(17960);const o=r.Ay.main`
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
  z-index: ${s.M.default};
`;function a(e){return(0,t.jsx)(o,{...e})}},13403:(e,n,i)=>{i.r(n),i.d(n,{MigrateHeader:()=>X,default:()=>ne});var t=i(95682),r=i(45071),s=i(68824),o=i(97404),a=i(5459),d=i(71068),l=i(70819),c=i(41411),x=i(65075),p=i(45353),u=i(63247),h=i(94873),g=i(90104),m=i(16563),j=i(16444),f=i(42228),y=i(35480),b=i(42150),v=i(45355),k=i(17531);const T=(0,j.Ay)(a.R4)`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,f.No)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function S({tokenA:e,tokenB:n,liquidityToken:i,border:r}){const s=(0,k.U)(e),o=(0,k.U)(n),a=(0,m.b)(e);return(0,t.jsxs)(T,{border:r,bgColor:a,children:[(0,t.jsx)(h.jK,{}),(0,t.jsx)(p.mm,{gap:"md",children:(0,t.jsxs)(x.SF,{children:[(0,t.jsxs)(u.eF,{gap:"8px",children:[(0,t.jsx)(c.g,{currencies:[s,o],size:20}),(0,t.jsx)(v.EY,{fontWeight:535,fontSize:20,children:s&&o?`${s.symbol}/${o.symbol}`:(0,t.jsx)(g.nv,{children:(0,t.jsx)(y.Trans,{i18nKey:"common.loading"})})}),(0,t.jsx)(d.A,{variant:d.x.WARNING,children:"Sushi"})]}),(0,t.jsx)(u.Bp,{gap:"8px",children:(0,t.jsx)(l.Wv,{padding:"0px 35px 0px 0px",$borderRadius:"12px",width:"fit-content",as:b.Link,to:`/migrate/v2/${i.address}`,children:(0,t.jsx)(y.Trans,{i18nKey:"common.migrate"})})})]})})]})}var w=i(8509),A=i(28438),$=i(78135),q=i(32849),z=i(48565),L=i.n(z),K=i(33962),E=i(56397),B=i(91144),C=i(97161),F=i(53736);const W=(0,j.Ay)(a.R4)`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,f.No)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function O({pair:e,border:n,stakedBalance:i}){var r,s,a,d;const j=(0,$.F)(),f=(0,k.U)(e.token0),T=(0,k.U)(e.token1),[S,z]=(0,K.useState)(!1),O=(0,C.nC)(j.address,e.liquidityToken),P=(0,q.P)(e.liquidityToken),R=i?null===(r=O)||void 0===r?void 0:r.add(i):O,Y=R&&P&&L().greaterThanOrEqual(P.quotient,R.quotient)?new o.Percent(R.quotient,P.quotient):void 0,[I,M]=e&&P&&R&&L().greaterThanOrEqual(P.quotient,R.quotient)?[e.getLiquidityValue(e.token0,P,R,!1),e.getLiquidityValue(e.token1,P,R,!1)]:[void 0,void 0],N=(0,m.b)(null===(s=e)||void 0===s?void 0:s.token0);return(0,t.jsxs)(W,{border:n,bgColor:N,children:[(0,t.jsx)(h.jK,{}),(0,t.jsxs)(p.mm,{gap:"md",children:[(0,t.jsxs)(x.SF,{children:[(0,t.jsxs)(u.eF,{gap:"8px",children:[(0,t.jsx)(c.g,{currencies:[f,T],size:20}),(0,t.jsx)(v.EY,{fontWeight:535,fontSize:20,children:f&&T?`${f.symbol}/${T.symbol}`:(0,t.jsx)(g.nv,{children:(0,t.jsx)(y.Trans,{i18nKey:"common.loading"})})})]}),(0,t.jsx)(u.Bp,{gap:"8px",children:(0,t.jsx)(l.Wv,{padding:"6px 8px",$borderRadius:"12px",width:"fit-content",onClick:()=>z(!S),children:S?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.Trans,{i18nKey:"common.manage"}),(0,t.jsx)(E.A,{size:"20",style:{marginLeft:"10px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.Trans,{i18nKey:"common.manage"}),(0,t.jsx)(B.A,{size:"20",style:{marginLeft:"10px"}})]})})})]}),S&&(0,t.jsxs)(p.mm,{gap:"sm",children:[(0,t.jsxs)(x.SF,{children:[(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(y.Trans,{i18nKey:"pool.totalTokens"})}),(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:R?R.toSignificant(4):"-"})]}),i&&(0,t.jsxs)(x.SF,{children:[(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(y.Trans,{i18nKey:"pool.rewardsPool.label"})}),(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:i.toSignificant(4)})]}),(0,t.jsxs)(x.SF,{children:[(0,t.jsx)(u.Bp,{children:(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(y.Trans,{i18nKey:"removeLiquidity.pooled",values:{symbol:f.symbol}})})}),I?(0,t.jsxs)(u.Bp,{children:[(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(a=I)||void 0===a?void 0:a.toSignificant(6)}),(0,t.jsx)(w.A,{size:20,style:{marginLeft:"8px"},currency:f})]}):"-"]}),(0,t.jsxs)(x.SF,{children:[(0,t.jsx)(u.Bp,{children:(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(y.Trans,{i18nKey:"pool.pooled",values:{sym:T.symbol}})})}),M?(0,t.jsxs)(u.Bp,{children:[(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(d=M)||void 0===d?void 0:d.toSignificant(6)}),(0,t.jsx)(w.A,{size:20,style:{marginLeft:"8px"},currency:T})]}):"-"]}),(0,t.jsxs)(x.SF,{children:[(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:(0,t.jsx)(y.Trans,{i18nKey:"pool.share.label"})}),(0,t.jsx)(v.EY,{fontSize:16,fontWeight:535,children:Y?("0.00"===Y.toFixed(2)?"<0.01":Y.toFixed(2))+"%":"-"})]}),O&&L().greaterThan(O.quotient,A.CL)&&(0,t.jsxs)(u.JA,{marginTop:"10px",children:[(0,t.jsx)(l.$$,{padding:"8px",$borderRadius:"8px",as:b.Link,to:`/migrate/v2/${e.liquidityToken.address}`,width:"64%",children:(0,t.jsx)(y.Trans,{i18nKey:"common.migrate"})}),(0,t.jsx)(l.nR,{padding:"8px",$borderRadius:"8px",as:b.Link,width:"32%",to:`/remove/v2/${(0,F.V)(f)}/${(0,F.V)(T)}`,children:(0,t.jsx)(y.Trans,{i18nKey:"common.remove.label"})})]})]})]})]})}var P=i(39729),R=i(11075),Y=i(95488),I=i(15306),M=i(18549),N=i(55199),V=i(52038),_=i(88361),D=i(36149),U=i(66954),H=i(4163),G=i(93810),J=i(53195),Q=i(52942);const X=(0,j.Ay)(U.P.H1Small)`
  font-weight: 535;
`;function Z({message:e}){return(0,t.jsx)(p.mm,{style:{minHeight:200,justifyContent:"center",alignItems:"center"},children:(0,t.jsx)(U.P.DeprecatedBody,{children:e})})}const ee=({tokenA:e,tokenB:n})=>{const[i,t]=e.sortsBefore(n)?[e,n]:[n,e];return(0,r.getCreate2Address)("0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",(0,s.keccak256)(["bytes"],[(0,s.pack)(["address","address"],[i.address,t.address])]),"0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303")};function ne(){const e=(0,N.useTheme)(),n=(0,$.F)(),i=(0,_.Zp)(),r=(0,_.wQ)(),s=n.chainId?o.V2_FACTORY_ADDRESSES[n.chainId]:void 0,d=(0,D.K8)(),l=(0,K.useMemo)((()=>d.map((e=>{const i=1===n.chainId?function([e,n]){return new o.Token(e.chainId,ee({tokenA:e,tokenB:n}),18,"SLP","SushiSwap LP Token")}(e):null;return{v2liquidityToken:s?(0,D.lg)(e):void 0,sushiLiquidityToken:i,tokens:e}}))),[d,n.chainId,s]),c=(0,K.useMemo)((()=>[...l.map((({v2liquidityToken:e})=>e)),...l.map((({sushiLiquidityToken:e})=>e)).filter((e=>!!e))]),[l]),[x,h]=(0,C.Uf)(n.address,c),m=(0,K.useMemo)((()=>h?[]:l.filter((({v2liquidityToken:e})=>{var n;return e&&(null===(n=x[e.address])||void 0===n?void 0:n.greaterThan(0))})).map((e=>e.tokens))),[h,l,x]),j=(0,K.useMemo)((()=>h?[]:l.filter((({sushiLiquidityToken:e})=>{var n;return!!e&&(null===(n=x[e.address])||void 0===n?void 0:n.greaterThan(0))}))),[h,l,x]),f=(0,M.hM)(m),b=h||f.some((([e])=>e===M.CN.LOADING));return(0,I.S)()?(0,t.jsxs)(J.default,{logImpression:!0,page:Q.InterfacePageNameLocal.MigrateV2,children:[(0,t.jsx)(V.q,{style:{padding:24},children:(0,t.jsxs)(p.mm,{gap:"16px",children:[(0,t.jsxs)(u.eF,{style:{alignItems:"center",justifyContent:"space-between"},gap:"8px",children:[(0,t.jsx)(G.$,{theme:"secondary",onPress:()=>{i("POP"!==r?-1:"/pools")},backgroundColor:"$transparent",size:"small",children:(0,t.jsx)(H.Kj,{})}),(0,t.jsx)(X,{children:(0,t.jsx)(y.Trans,{i18nKey:"migrate.v2Title"})}),(0,t.jsx)("div",{children:(0,t.jsx)(P.A,{text:(0,t.jsx)(y.Trans,{i18nKey:"migrate.v2Subtitle"})})})]}),(0,t.jsx)(U.P.DeprecatedBody,{style:{marginBottom:8,fontWeight:485},children:(0,t.jsx)(y.Trans,{i18nKey:"migrate.v2Instruction"})}),n?b?(0,t.jsx)(a.R4,{padding:"40px",children:(0,t.jsx)(U.P.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,t.jsx)(g.nv,{children:(0,t.jsx)(y.Trans,{i18nKey:"common.loading"})})})}):f.filter((([,e])=>!!e)).length>0?(0,t.jsxs)(t.Fragment,{children:[f.filter((([,e])=>!!e)).map((([,e])=>(0,t.jsx)(O,{pair:e},e.liquidityToken.address))),j.map((({sushiLiquidityToken:e,tokens:n})=>(0,t.jsx)(S,{tokenA:n[0],tokenB:n[1],liquidityToken:e},e.address)))]}):(0,t.jsx)(Z,{message:(0,t.jsx)(y.Trans,{i18nKey:"migrate.noV2Liquidity"})}):(0,t.jsx)(a.R4,{padding:"40px",children:(0,t.jsx)(U.P.DeprecatedBody,{color:e.neutral3,textAlign:"center",children:(0,t.jsx)(y.Trans,{i18nKey:"migrate.connectWallet"})})}),(0,t.jsx)(p.mm,{justify:"center",gap:"md",children:(0,t.jsx)(v.EY,{textAlign:"center",fontSize:14,style:{padding:".5rem 0 .5rem 0"},children:(0,t.jsx)(y.Trans,{i18nKey:"migrate.missingV2Position",components:{link:(0,t.jsx)(H.Bl,{id:"import-pool-link",to:"/pools/v2/find"})}})})})]})}),(0,t.jsx)(R.j,{})]}):(0,t.jsx)(Y.O,{})}}}]);
//# sourceMappingURL=9161.93cfca24.chunk.js.map
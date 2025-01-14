"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[355],{11964:(e,i,n)=>{n.d(i,{G:()=>t});var r=n(33962),l=n(85141);function o(e,i){var n,r,l,o,t,a,s,d,c,u,p,m,h,x,v,g,f,y,w,b,j,k,$,C,A,P,S,T,z,H,E,_,D,N,F,I,O,M,V,B,L;const U=null===(r=e)||void 0===r||null===(n=r.markets)||void 0===n?void 0:n[0];if(!i&&!(null===(t=e)||void 0===t||null===(o=t.nftContracts)||void 0===o||null===(l=o[0])||void 0===l?void 0:l.address))return{};const R={};var G;(null===(a=e)||void 0===a?void 0:a.traits)&&(null===(G=e)||void 0===G||G.traits.forEach((e=>{e.name&&e.stats&&(R[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:i??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(s=d[0])||void 0===s?void 0:s.address)??"",isVerified:null===(u=e)||void 0===u?void 0:u.isVerified,name:null===(p=e)||void 0===p?void 0:p.name,description:null===(m=e)||void 0===m?void 0:m.description,standard:null===(v=e)||void 0===v||null===(x=v.nftContracts)||void 0===x||null===(h=x[0])||void 0===h?void 0:h.standard,bannerImageUrl:null===(f=e)||void 0===f||null===(g=f.bannerImage)||void 0===g?void 0:g.url,stats:{num_owners:null===(y=U)||void 0===y?void 0:y.owners,floor_price:null===(b=U)||void 0===b||null===(w=b.floorPrice)||void 0===w?void 0:w.value,one_day_volume:null===(k=U)||void 0===k||null===(j=k.volume)||void 0===j?void 0:j.value,one_day_change:null===(C=U)||void 0===C||null===($=C.volumePercentChange)||void 0===$?void 0:$.value,one_day_floor_change:null===(P=U)||void 0===P||null===(A=P.floorPricePercentChange)||void 0===A?void 0:A.value,banner_image_url:null===(T=e)||void 0===T||null===(S=T.bannerImage)||void 0===S?void 0:S.url,total_supply:null===(z=e)||void 0===z?void 0:z.numAssets,total_listings:null===(E=U)||void 0===E||null===(H=E.listings)||void 0===H?void 0:H.value,total_volume:null===(D=U)||void 0===D||null===(_=D.totalVolume)||void 0===_?void 0:_.value},traits:R,marketplaceCount:null===(F=U)||void 0===F||null===(N=F.marketplaces)||void 0===N?void 0:N.map((e=>{var i;return{marketplace:(null===(i=e.marketplace)||void 0===i?void 0:i.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(O=e)||void 0===O||null===(I=O.image)||void 0===I?void 0:I.url)??"",twitterUrl:null===(M=e)||void 0===M?void 0:M.twitterName,instagram:null===(V=e)||void 0===V?void 0:V.instagramName,discordUrl:null===(B=e)||void 0===B?void 0:B.discordUrl,externalUrl:null===(L=e)||void 0===L?void 0:L.homepageUrl,rarityVerified:!1}}function t(e,i){var n,t,a,s;const{data:d,loading:c}=(0,l.useCollectionQuery)({variables:{addresses:e},skip:i}),u=null===(s=d)||void 0===s||null===(a=s.nftCollections)||void 0===a||null===(t=a.edges)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.node;return(0,r.useMemo)((()=>({data:o(u,e),loading:c})),[e,c,u])}},43140:(e,i,n)=>{n.d(i,{M:()=>s,e:()=>d});var r=n(23974),l=n(60347),o=n(31110),t=n(5525),a=n(26179);const s=(e=a.UniverseChainId.Mainnet)=>{var i;const n=(0,o.A)(e),r=(0,t.A)("1",n);return(null===(i=(0,l.v)(r))||void 0===i?void 0:i.data)??0};function d(e){var i,n,l,o;const t=s();return t&&(null===(n=e)||void 0===n||null===(i=n.priceInfo)||void 0===i?void 0:i.ETHPrice)?(parseFloat((0,r.formatEther)(null===(o=e)||void 0===o||null===(l=o.priceInfo)||void 0===l?void 0:l.ETHPrice))*t).toString():""}},60355:(e,i,n)=>{n.r(i),n.d(i,{default:()=>ri});var r=n(95682),l=n(29477),o=n(16444),t=n(33962),a=n(85141);function s(e,i){var n,r;const{data:l,loading:o,error:s}=(0,a.useTrendingCollectionsQuery)({variables:{size:e,timePeriod:i}}),d=(0,t.useMemo)((()=>{var e,i,n;return null===(n=l)||void 0===n||null===(i=n.topCollections)||void 0===i||null===(e=i.edges)||void 0===e?void 0:e.map((e=>{var i,n,r,l,o,t,a,s,d,c,u,p,m,h,x,v,g,f,y,w,b,j,k,$,C,A,P,S,T,z,H,E;const _=null===(i=e)||void 0===i?void 0:i.node;return{name:_.name,address:null===(r=_.nftContracts)||void 0===r||null===(n=r[0])||void 0===n?void 0:n.address,imageUrl:null===(l=_.image)||void 0===l?void 0:l.url,bannerImageUrl:null===(o=_.bannerImage)||void 0===o?void 0:o.url,isVerified:_.isVerified,volume:null===(s=_.markets)||void 0===s||null===(a=s[0])||void 0===a||null===(t=a.volume)||void 0===t?void 0:t.value,volumeChange:null===(u=_.markets)||void 0===u||null===(c=u[0])||void 0===c||null===(d=c.volumePercentChange)||void 0===d?void 0:d.value,floor:null===(h=_.markets)||void 0===h||null===(m=h[0])||void 0===m||null===(p=m.floorPrice)||void 0===p?void 0:p.value,floorChange:null===(g=_.markets)||void 0===g||null===(v=g[0])||void 0===v||null===(x=v.floorPricePercentChange)||void 0===x?void 0:x.value,marketCap:null===(w=_.markets)||void 0===w||null===(y=w[0])||void 0===y||null===(f=y.totalVolume)||void 0===f?void 0:f.value,percentListed:((null===(k=_.markets)||void 0===k||null===(j=k[0])||void 0===j||null===(b=j.listings)||void 0===b?void 0:b.value)??0)/((null===(C=_.nftContracts)||void 0===C||null===($=C[0])||void 0===$?void 0:$.totalSupply)??1),owners:null===(P=_.markets)||void 0===P||null===(A=P[0])||void 0===A?void 0:A.owners,sales:null===(z=_.markets)||void 0===z||null===(T=z[0])||void 0===T||null===(S=T.sales)||void 0===S?void 0:S.value,totalSupply:null===(E=_.nftContracts)||void 0===E||null===(H=E[0])||void 0===H?void 0:H.totalSupply}}))}),[null===(r=l)||void 0===r||null===(n=r.topCollections)||void 0===n?void 0:n.edges]);return{data:d,loading:o,error:s}}var d=n(94412);const c=(e,i)=>(e<0?e+i:e)%i,u=o.Ay.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,p=o.Ay.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,m=o.Ay.div`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  transition: transform 0.5s ease-in-out;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,h=o.Ay.div`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,x=({children:e,activeIndex:i,toggleNextSlide:n})=>{const l=(0,t.useCallback)(((i,n=e.length)=>c(i,n)),[e]),o=(0,t.useCallback)(((e,i,n)=>((e,i,n,r)=>r(e-i+n))(e,i,n,l)),[l]),a=(0,t.useRef)(null),s=(0,t.useCallback)((e=>{var i;const n=null===(i=a.current)||void 0===i?void 0:i.children;n&&Array.from(n).forEach(((i,n)=>{const r=800*(o(n,e,0)-e);i.style.transform=`translateX(${r}px)`}))}),[o]);(0,t.useEffect)((()=>{s(i)}),[i,s]);const x=(0,t.useRef)(0),v=(0,t.useCallback)((e=>{x.current=e,n(e)}),[n]);return(0,t.useEffect)((()=>{const e=setInterval((()=>{v(1)}),7e3);return()=>{clearInterval(e)}}),[v,i]),(0,r.jsxs)(u,{children:[(0,r.jsx)(h,{onClick:()=>v(-1),children:(0,r.jsx)(d.YJ,{width:"16px",height:"16px"})}),(0,r.jsx)(p,{ref:a,children:e.map(((e,i)=>(0,r.jsx)(m,{children:e},i)))}),(0,r.jsx)(h,{onClick:()=>v(1),children:(0,r.jsx)(d.vK,{width:"16px",height:"16px"})})]})},v=({children:e})=>(0,r.jsx)(x,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var g=n(12520),f=n(32034),y=n(11964),w=n(9881),b=n(66954),j=n(91071);const k=o.Ay.div`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,$=o.Ay.div`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,C=o.Ay.div`
  position: relative;
  animation: ${g.NX} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,A=o.Ay.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,P=o.Ay.div`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,S=o.Ay.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,T=(0,o.Ay)(f.P)`
  width: 50%;
`,z=o.Ay.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,H=o.Ay.img`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,E=o.Ay.div`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${g.NX} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,_=(0,o.Ay)(f.P)`
  width: 50px;
`,D=o.Ay.div`
  display: flex;
  align-items: center;
  gap: 6px;
`,N=o.Ay.div``,F=o.Ay.div`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,I=o.Ay.img`
  width: 20px;
  height: 20px;
`,O=o.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${D}:nth-child(3n-1), ${_}:nth-child(3n-1) {
    justify-self: center;
  }

  ${D}:nth-child(3n), ${_}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${N} {
      display: none;
    }
    ${D} {
      justify-self: left !important;
    }
    ${A} {
      padding: 0 20px;
    }
  }
`,M=({marketplace:e,floorInEth:i,listings:n})=>{const{formatNumberOrString:l}=(0,j.kc)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)(I,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,r.jsx)(N,{children:(0,r.jsx)(b.P.BodySmall,{color:"neutral2",children:e})})]}),(0,r.jsx)(D,{children:(0,r.jsx)(b.P.BodySmall,{color:"neutral2",children:Number(i)>0?`${l({input:i,type:j.wl.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,r.jsx)(D,{children:(0,r.jsx)(b.P.BodySmall,{color:"neutral2",children:Number(n)>0?n:"None"})})]})},V=[w.KD.Opensea,w.KD.X2Y2,w.KD.LooksRare],B={[w.KD.Opensea]:"OpenSea",[w.KD.X2Y2]:"X2Y2",[w.KD.LooksRare]:"LooksRare"},L=({collection:e,onClick:i})=>{var n;const{data:l,loading:o}=(0,y.G)(e.address??""),{formatNumber:t}=(0,j.kc)();return o?(0,r.jsx)(W,{}):(0,r.jsx)(k,{children:(0,r.jsxs)(O,{onClick:i,children:[(0,r.jsx)(G,{collection:e}),(0,r.jsx)(F,{children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(D,{children:[(0,r.jsx)(d.uQ,{width:"20",height:"20"}),(0,r.jsx)(N,{children:(0,r.jsx)(b.P.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,r.jsx)(D,{children:e.floor&&(0,r.jsxs)(b.P.SubHeaderSmall,{color:"userThemeColor",children:[t({input:e.floor,type:j.wl.NFTToken})," ETH Floor"]})}),(0,r.jsx)(D,{children:(0,r.jsxs)(b.P.SubHeaderSmall,{color:"userThemeColor",children:[null===(n=l.marketplaceCount)||void 0===n?void 0:n.reduce(((e,i)=>e+i.count),0)," Listings"]})}),V.map((i=>{var n;const o=null===(n=l.marketplaceCount)||void 0===n?void 0:n.find((e=>e.marketplace===i));return o?(0,r.jsx)(M,{marketplace:B[i],listings:o.count,floorInEth:o.floorPrice},`CarouselCard-key-${e.address}-${o.marketplace}`):null}))]})})]})})},U=()=>(0,r.jsx)(r.Fragment,{children:[...Array(12)].map((e=>(0,r.jsx)(_,{},e)))}),R=(0,o.Ay)(b.P.MediumHeader)`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,G=({collection:e})=>(0,r.jsxs)($,{src:e.bannerImageUrl??"",children:[(0,r.jsxs)(A,{children:[(0,r.jsx)(H,{src:e.imageUrl}),(0,r.jsxs)(S,{children:[(0,r.jsx)(R,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,r.jsx)(P,{children:(0,r.jsx)(d.M3,{width:"24px",height:"24px"})})]})]}),(0,r.jsx)(z,{})]}),W=({collection:e})=>(0,r.jsx)(k,{children:(0,r.jsxs)(O,{children:[e?(0,r.jsx)(G,{collection:e}):(0,r.jsxs)(C,{children:[(0,r.jsxs)(A,{children:[(0,r.jsx)(E,{}),(0,r.jsx)(T,{})]}),(0,r.jsx)(z,{})]}),(0,r.jsx)(F,{children:(0,r.jsx)(U,{})})]})});var Y=n(88361);const X=o.Ay.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,K=o.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,Q=o.Ay.div`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,Z=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],q=()=>{const e=(0,Y.Zp)(),{data:i}=s(5+Z.length,a.HistoryDuration.Day),n=(0,t.useMemo)((()=>{var e;return null===(e=i)||void 0===e?void 0:e.filter((e=>e.address&&!Z.includes(e.address))).slice(0,5)}),[i]),[l,o]=(0,t.useState)(0),d=(0,t.useCallback)((e=>{n&&o((i=>c(i+e,n.length)))}),[n]);return(0,r.jsx)(X,{children:(0,r.jsxs)(K,{children:[(0,r.jsxs)(Q,{children:["Better prices. ",(0,r.jsx)("br",{}),"More listings."]}),n?(0,r.jsx)(x,{activeIndex:l,toggleNextSlide:d,children:n.map((i=>(0,r.jsx)(L,{collection:i,onClick:()=>e(`/nfts/collection/${i.address}`)},i.address)))}):(0,r.jsx)(v,{children:(0,r.jsx)(W,{})})]})})};var J=n(79865),ee=n(23974),ie=n(71336),ne=n(69618),re=(n(91103),(e=>(e.OneDay="ONE_DAY",e.SevenDays="SEVEN_DAYS",e.ThirtyDays="THIRTY_DAYS",e.AllTime="ALL_TIME",e))(re||{})),le=(e=>(e.ETH="ETH",e.USD="USD",e))(le||{});const oe=o.Ay.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,te=(0,o.Ay)(oe)`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,ae=(0,o.Ay)(oe)`
  margin-left: 8px;
`,se=(0,o.Ay)(b.P.SubHeader)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,de=(0,o.Ay)(b.P.SubHeaderSmall)`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ce=o.Ay.div`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:i})=>e?`url(${e})`:i.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,ue=o.Ay.div`
  display: flex;
  color: ${({theme:e,change:i})=>i>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,pe=o.Ay.div`
  display: flex;
  justify-content: flex-end;
`,me=({value:e})=>{const i=(0,ne.a)();return(0,r.jsxs)(te,{children:[(0,r.jsx)(ce,{src:e.logo}),(0,r.jsx)(ae,{children:i?(0,r.jsx)(de,{children:e.name}):(0,r.jsx)(se,{children:e.name})}),e.isVerified&&(0,r.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,r.jsx)(d.M3,{})})]})},he=({value:e})=>{const{formatNumberOrString:i}=(0,j.kc)();return(0,r.jsx)("span",{children:e.value?i({input:e.value,type:j.wl.NFTCollectionStats}):"-"})},xe=(e,i,n,r)=>e===le.ETH?n:r&&n?r*(i?parseFloat((0,ee.formatEther)(n)):n):void 0,ve=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,j.kc)(),o=xe(i,!1,e,n),t=i===le.ETH,a=l({input:o,type:t?j.wl.NFTToken:j.wl.FiatTokenStats})+(t?" ETH":""),s=(0,ne.a)()?b.P.BodySmall:b.P.BodyPrimary;return(0,r.jsx)(pe,{children:(0,r.jsx)(s,{children:e?a:"-"})})},ge=({value:e})=>(0,r.jsx)(b.P.BodyPrimary,{children:e}),fe=({value:e,denomination:i,usdPrice:n})=>{const{formatNumberOrString:l}=(0,j.kc)(),o=xe(i,!1,e,n),t=i===le.ETH,a=l({input:o,type:t?j.wl.WholeNumber:j.wl.FiatTokenStats})+(t?" ETH":"");return(0,r.jsx)(pe,{children:(0,r.jsx)(b.P.BodyPrimary,{children:a})})},ye=({change:e,children:i})=>{const n=(0,ne.a)()?b.P.BodySmall:b.P.BodyPrimary;return(0,r.jsxs)(ue,{change:e??0,children:[(0,r.jsx)(ie.Is,{delta:e}),(0,r.jsx)(n,{color:"currentColor",children:i||`${e?Math.abs(Math.round(e)):0}%`})]})};var we=n(2097),be=n(13786),je=n(46529),ke=n(57913),$e=n(78135),Ce=n(55199),Ae="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",Pe="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",Se="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805",Te=n(46775),ze=n(53195);const He=o.Ay.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Ee=o.Ay.tr`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,_e=o.Ay.tr`
  height: 80px;
`,De=o.Ay.th`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:i})=>!i&&`opacity: ${e.opacity.click};`}
  }
`,Ne=o.Ay.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Fe=o.Ay.div`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ie=(0,o.Ay)(f.P)`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Oe=(0,o.Ay)(f.P)`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`;function Me({columns:e,data:i,smallHiddenColumns:n,mediumHiddenColumns:o,largeHiddenColumns:a,...s}){const d=(0,Ce.useTheme)(),{chainId:c}=(0,$e.F)(),{width:u}=(0,ke.l)(),p=(0,ne.a)(),{getTableProps:m,getTableBodyProps:h,headerGroups:x,rows:v,prepareRow:g,setHiddenColumns:f,visibleColumns:y}=(0,Te.useTable)({columns:e,data:i,initialState:{sortBy:[{desc:!0,id:Le.Volume}]},...s},Te.useSortBy),w=(0,Y.Zp)();return(0,t.useEffect)((()=>{u&&(u<=d.breakpoint.sm?f(n):u<=d.breakpoint.md?f(o):u<=d.breakpoint.lg?f(a):f([]))}),[u,f,e,n,o,a,d.breakpoint]),0===i.length?(0,r.jsx)(Ve,{headerGroups:x,visibleColumns:y,...m()}):(0,r.jsxs)("table",{...m(),className:Ae,children:[(0,r.jsx)("thead",{className:Se,children:x.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,t.createElement)(De,{className:Pe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?p?"16px":"52px":0},disabled:e.disableSortBy,key:i,children:[(0,r.jsx)(je.a,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(be.n,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,r.jsx)(we.E,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,r.jsx)(je.a,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,r.jsx)("tbody",{...h(),children:v.map(((e,i)=>(g(e),(0,r.jsx)(ze.default,{logPress:!0,eventOnTrigger:l.c6.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:c},element:l.nM.NFT_TRENDING_ROW,children:(0,t.createElement)(Ee,{...e.getRowProps(),key:e.id,onClick:()=>w(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,n)=>(0,t.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:n,style:{maxWidth:0===n?p?"240px":"360px":"160px"}},0===n?(0,r.jsxs)(He,{children:[!p&&(0,r.jsx)(b.P.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:i+1}),e.render("Cell")]}):e.render("Cell")))))},i))))})]})}function Ve({headerGroups:e,visibleColumns:i,...n}){return(0,r.jsxs)("table",{...n,className:Ae,children:[(0,r.jsx)("thead",{className:Se,children:e.map((e=>(0,t.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,i)=>(0,t.createElement)(De,{className:Pe,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===i?"left":"right",paddingLeft:0===i?"52px":0},disabled:0===i,key:i,children:[(0,r.jsx)(je.a,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,r.jsx)(be.n,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,r.jsx)(we.E,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,r.jsx)(je.a,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,r.jsx)("tbody",{...n,children:[...Array(10)].map(((e,n)=>(0,r.jsx)(_e,{children:[...Array(i.length)].map(((e,i)=>(0,r.jsx)("td",{className:"_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",children:0===i?(0,r.jsxs)(Fe,{children:[(0,r.jsx)(Oe,{}),(0,r.jsx)(Ie,{}),(0,r.jsx)(f.P,{})]}):(0,r.jsx)(Ne,{children:(0,r.jsx)(f.P,{})})},i)))},n)))})]})}var Be=n(4163),Le=(e=>(e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners",e))(Le||{});const Ue=(e,i)=>e?i?Math.round(1e5*e)>=Math.round(1e5*i)?1:-1:1:-1,Re=({data:e,timePeriod:i})=>{const n=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.floor.value,i.original.floor.value)),[]),l=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.floor.change,i.original.floor.change)),[]),o=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.volume.value,i.original.volume.value)),[]),a=(0,t.useMemo)((()=>(e,i)=>Ue(e.original.volume.change,i.original.volume.change)),[]),s=(0,t.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:me,disableSortBy:!0},{id:"Floor",Header:"Floor",accessor:({floor:e})=>e.value,sortType:n,Cell:function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ve,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),i!==re.AllTime&&(0,r.jsx)(Be.OC,{children:(0,r.jsx)(ye,{change:e.row.original.floor.change})})]})}},{id:"Floor change",Header:"Floor change",accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:i===re.AllTime,sortType:l,Cell:function(e){return i===re.AllTime?(0,r.jsx)(ge,{value:"-"}):(0,r.jsx)(ye,{change:e.row.original.floor.change})}},{id:"Volume",Header:"Volume",accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:o,Cell:function(e){return(0,r.jsx)(fe,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:"Volume change",Header:"Volume change",accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:i===re.AllTime,sortType:a,Cell:function(e){const{change:n}=e.row.original.volume;return i===re.AllTime?(0,r.jsx)(ge,{value:"-"}):n&&n>=9999?(0,r.jsxs)(ye,{change:n,children:[">9999","%"]}):(0,r.jsx)(ye,{change:n})}},{id:"Items",Header:"Items",accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(he,{value:{value:e.row.original.totalSupply}})}},{Header:"Owners",accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,r.jsx)(he,{value:e.row.original.owners})}}]),[l,n,a,o,i]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(Me,{smallHiddenColumns:["Items","Floor change","Volume","Volume change","Owners"],mediumHiddenColumns:["Items","Floor change","Volume change","Owners"],largeHiddenColumns:["Items","Owners"],data:e,columns:s})})};var Ge=n(43140),We=n(31470);const Ye=[{label:"1D",value:re.OneDay},{label:"1W",value:re.SevenDays},{label:"1M",value:re.ThirtyDays},{label:"All",value:re.AllTime}],Xe=o.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  padding: 0 16px;
`,Ke=o.Ay.h1`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,Qe=o.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Ze=o.Ay.div`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,qe=o.Ay.div`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:i})=>e?i.surface3:"none"};
  cursor: pointer;

  ${J.N}
`,Je=(0,o.Ay)(b.P.SubHeader)`
  color: ${({theme:e,active:i})=>i?e.neutral1:e.neutral2};
`;const ei=()=>{const e=(0,We.useAppFiatCurrency)(),[i,n]=(0,t.useState)(re.OneDay),[l,o]=(0,t.useState)(!0),{data:d,loading:c}=s(100,function(e){switch(e){case re.OneDay:return a.HistoryDuration.Day;case re.SevenDays:return a.HistoryDuration.Week;case re.ThirtyDays:return a.HistoryDuration.Month;case re.AllTime:return a.HistoryDuration.Max;default:return a.HistoryDuration.Day}}(i)),u=(0,Ge.M)(),p=(0,t.useMemo)((()=>!c&&d?d.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:l?le.ETH:le.USD,usdPrice:u}))):[]),[d,c,l,u]);return(0,r.jsxs)(Xe,{children:[(0,r.jsx)(Ke,{children:"Trending NFT collections"}),(0,r.jsxs)(Qe,{children:[(0,r.jsx)(Ze,{children:Ye.map((e=>(0,r.jsx)(qe,{active:e.value===i,onClick:()=>n(e.value),children:(0,r.jsx)(Je,{lineHeight:"20px",active:e.value===i,children:e.label})},e.value)))}),(0,r.jsxs)(Ze,{onClick:()=>o(!l),children:[(0,r.jsx)(qe,{active:l,children:(0,r.jsx)(Je,{lineHeight:"20px",active:l,children:"ETH"})}),(0,r.jsx)(qe,{active:!l,children:(0,r.jsx)(Je,{lineHeight:"20px",active:!l,children:e})})]})]}),(0,r.jsx)(Re,{data:p,timePeriod:i})]})};var ii=n(76191);const ni=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,ri=()=>{const e=(0,ii.s)((e=>e.setBagExpanded));return(0,t.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(ze.default,{logImpression:!0,page:l.Om.NFT_EXPLORE_PAGE,children:(0,r.jsxs)(ni,{children:[(0,r.jsx)(q,{}),(0,r.jsx)(ei,{})]})})})}}}]);
//# sourceMappingURL=355.e612b5c9.chunk.js.map
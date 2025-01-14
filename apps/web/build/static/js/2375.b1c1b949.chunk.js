"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2375],{56397:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(33962),r=i(77258),o=i.n(r);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var a=(0,n.forwardRef)((function(e,t){var i=e.color,r=void 0===i?"currentColor":i,o=e.size,a=void 0===o?24:o,d=s(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),n.createElement("polyline",{points:"18 15 12 9 6 15"}))}));a.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},a.displayName="ChevronUp";const d=a},15043:(e,t,i)=>{i.d(t,{S:()=>r});var n=i(95682);const r=e=>(0,n.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,n.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},43140:(e,t,i)=>{i.d(t,{M:()=>a,e:()=>d});var n=i(23974),r=i(60347),o=i(31110),l=i(5525),s=i(26179);const a=(e=s.UniverseChainId.Mainnet)=>{var t;const i=(0,o.A)(e),n=(0,l.A)("1",i);return(null===(t=(0,r.v)(n))||void 0===t?void 0:t.data)??0};function d(e){var t,i,r,o;const l=a();return l&&(null===(i=e)||void 0===i||null===(t=i.priceInfo)||void 0===t?void 0:t.ETHPrice)?(parseFloat((0,n.formatEther)(null===(o=e)||void 0===o||null===(r=o.priceInfo)||void 0===r?void 0:r.ETHPrice))*l).toString():""}},91786:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ri});var n=i(95682),r=i(29477),o=i(23974),l=i(47452),s=i(33962),a=i(85141);var d=i(16444),c=i(79865),p=i(42228),x=i(4163);const h=(0,d.Ay)(x.Gr)`
  display: flex;
  color: ${({theme:e})=>e.accent1};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  gap: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,p.e$)(.1,e.accent1)};
    text-decoration: none;
  }
`;function u({name:e,link:t}){return(0,n.jsxs)(h,{href:t,children:[e,(0,n.jsx)("sup",{children:"\u2197"})]})}var m=i(38108),v=i(46529),g=i(80999),y=i(31997),f=i(407),j="_1cf9gnw1",w=i(41723);const C=()=>(0,n.jsxs)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.8281 10.834C17.6159 9.88757 17.4333 9.13689 17.291 8.58997C17.1751 8.11971 16.9497 7.68339 16.6331 7.31649C16.2834 6.97574 15.8515 6.731 15.3791 6.60601C14.8206 6.43175 14.0365 6.24408 13.0457 6.04301C12.7771 5.98134 12.6321 5.83926 12.6321 5.61405C12.6286 5.56049 12.6369 5.50679 12.6564 5.45676C12.6758 5.40674 12.7061 5.36159 12.7449 5.32448C12.8303 5.25054 12.9343 5.20142 13.0457 5.18241C13.8337 5.03623 14.6127 4.84557 15.3791 4.61136C15.8508 4.48054 16.282 4.23345 16.6331 3.89283C16.9497 3.52593 17.1751 3.08961 17.291 2.61935C17.4468 2.06885 17.6258 1.32623 17.8281 0.39145C17.8791 0.123349 18.016 0 18.2416 0C18.4671 0 18.6095 0.131392 18.6739 0.39145C18.8726 1.32623 19.0516 2.06885 19.211 2.61935C19.3304 3.08988 19.5585 3.52599 19.8769 3.89283C20.229 4.23347 20.6611 4.48052 21.1336 4.61136C21.8997 4.84657 22.6788 5.03724 23.467 5.18241C23.576 5.18865 23.6782 5.23739 23.7515 5.31813C23.8249 5.39887 23.8635 5.50515 23.8591 5.61405C23.8591 5.83926 23.7275 5.98134 23.467 6.04301C22.6802 6.19136 21.9014 6.37926 21.1336 6.60601C20.6605 6.73103 20.2276 6.97574 19.8769 7.31649C19.5585 7.68333 19.3304 8.11943 19.211 8.58997C19.0472 9.12617 18.8672 9.88757 18.6739 10.834C18.6095 11.1021 18.4671 11.2281 18.2416 11.2281C18.016 11.2281 17.8737 11.0967 17.8281 10.834Z",fill:w.G6.colors.neutral2,className:j}),(0,n.jsx)("path",{d:"M32.4448 19.8364C32.2192 18.6679 32.0079 17.7366 31.8166 17.0452C31.6743 16.4509 31.3902 15.8999 30.9885 15.4396C30.5445 15.0113 29.9992 14.7027 29.4037 14.5425C28.4447 14.2629 27.4703 14.0397 26.4853 13.874C26.1398 13.8226 25.9656 13.6426 25.9656 13.3369C25.9618 13.2674 25.9723 13.1978 25.9964 13.1324C26.0204 13.0671 26.0576 13.0074 26.1055 12.9569C26.2105 12.8597 26.3433 12.7977 26.4853 12.7798C27.4694 12.6134 28.4437 12.3931 29.4037 12.1198C30.0021 11.9667 30.549 11.6571 30.9885 11.2228C31.389 10.7583 31.6729 10.2049 31.8166 9.60859C32.0079 8.91721 32.2192 7.98584 32.4448 6.81449C32.4458 6.74608 32.4607 6.67858 32.4886 6.61609C32.5164 6.5536 32.5567 6.49743 32.6068 6.45096C32.657 6.40448 32.7161 6.3687 32.7806 6.34574C32.845 6.32278 32.9134 6.31313 32.9816 6.31739C33.2672 6.31739 33.4528 6.48309 33.5213 6.81449C33.7479 7.98584 33.9573 8.91721 34.1495 9.60859C34.2907 10.2036 34.5706 10.7567 34.9662 11.2228C35.404 11.6593 35.9516 11.9693 36.551 12.1198C37.515 12.3926 38.493 12.6129 39.4808 12.7798C39.5532 12.7803 39.6248 12.7958 39.6909 12.8254C39.757 12.855 39.8162 12.8981 39.8648 12.9518C39.9134 13.0055 39.9503 13.0687 39.9732 13.1375C39.9961 13.2063 40.0044 13.279 39.9977 13.3512C39.9977 13.6569 39.8263 13.8369 39.4808 13.8883C38.4922 14.0545 37.514 14.2778 36.551 14.5568C35.9543 14.7142 35.4084 15.0232 34.9662 15.4539C34.5695 15.916 34.2894 16.4666 34.1495 17.0595C33.9592 17.7509 33.7498 18.6813 33.5213 19.8507C33.4528 20.185 33.2758 20.3507 32.9816 20.3507C32.912 20.3546 32.8424 20.3442 32.777 20.32C32.7116 20.2958 32.6519 20.2585 32.6015 20.2103C32.5512 20.1621 32.5113 20.104 32.4843 20.0396C32.4573 19.9753 32.4439 19.9062 32.4448 19.8364Z",fill:w.G6.colors.neutral2,className:j}),(0,n.jsx)("path",{d:"M12.6196 40.6995C12.5109 40.7023 12.4027 40.6829 12.3013 40.6422C12.2 40.6016 12.1075 40.5405 12.0294 40.4627C11.8673 40.3009 11.7574 40.0919 11.7145 39.8639C11.418 38.0492 11.1251 36.5322 10.8358 35.3128C10.6133 34.2663 10.2461 33.258 9.74531 32.3187C9.32818 31.5649 8.73049 30.9334 8.00907 30.4841C7.132 29.9745 6.18128 29.6124 5.19297 29.4117C4.03371 29.1449 2.58684 28.8918 0.852359 28.6523C0.616735 28.6254 0.397657 28.5147 0.23303 28.3393C0.0804808 28.1721 -0.00302245 27.9506 0.000117795 27.7214C-0.00358202 27.4921 0.0799998 27.2703 0.23303 27.1035C0.396979 26.9271 0.616416 26.8162 0.852359 26.7905C2.5886 26.5618 4.03812 26.3114 5.20091 26.0392C6.20136 25.8286 7.16449 25.4614 8.05671 24.9505C8.7902 24.5064 9.40286 23.8792 9.83794 23.1268C10.3473 22.1993 10.7151 21.1968 10.9284 20.1545C11.2054 18.9369 11.4701 17.4162 11.7224 15.5925C11.7547 15.3608 11.8619 15.147 12.0268 14.9855C12.1058 14.9052 12.1997 14.8418 12.3028 14.7993C12.406 14.7567 12.5164 14.7359 12.6276 14.7378C12.7392 14.7338 12.8506 14.7526 12.9551 14.7933C13.0596 14.834 13.1552 14.8956 13.2363 14.9747C13.398 15.1367 13.5079 15.3456 13.5513 15.5735C13.8583 17.3972 14.1565 18.9178 14.4459 20.1354C14.6712 21.1811 15.0382 22.189 15.5363 23.1295C15.9558 23.8807 16.5531 24.5108 17.2726 24.9614C18.1474 25.4733 19.095 25.8407 20.0807 26.0501C21.2347 26.3223 22.6789 26.5727 24.4134 26.8014C24.6493 26.8271 24.8688 26.938 25.0327 27.1144C25.185 27.2815 25.2677 27.5033 25.263 27.7323C25.2662 27.9634 25.1839 28.1872 25.0327 28.3583C24.8722 28.5382 24.6503 28.6474 24.4134 28.6632C22.9509 28.7659 21.4954 28.9559 20.0542 29.232C19.046 29.4136 18.075 29.7698 17.1826 30.2854C16.4365 30.7497 15.8216 31.4065 15.3987 32.1908C14.8949 33.1535 14.531 34.187 14.3188 35.2584C14.04 36.5068 13.7842 38.0429 13.5513 39.8666C13.5238 40.1013 13.4192 40.3193 13.2548 40.4845C13.1681 40.5618 13.0673 40.6207 12.9583 40.6576C12.8492 40.6945 12.7341 40.7087 12.6196 40.6995Z",fill:w.G6.colors.neutral2,className:j})]});var A=i(32034),$=i(49393),b=i(35249),k=i(76979),T=i(35480),N=i(2029),S=i(91071);const I=d.Ay.tr`
  border-bottom: ${({theme:e})=>`1px solid ${e.surface3}`};
  width: 100%;

  &:last-child {
    border-bottom: none;
  }
`,U=d.Ay.th`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 14px;
  line-height: 20px;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,_=d.Ay.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`,P=d.Ay.td`
  height: 56px;
  padding: 8px 0px;
  text-align: left;
  vertical-align: middle;
  width: 20%;

  @media (max-width: 960px) {
    &:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 720px) {
    &:nth-child(2) {
      display: none;
    }
  }
`,H=d.Ay.div`
  align-items: center;
  display: flex;
  gap: 8px;
`,z=d.Ay.a`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${c.N}
`,F=d.Ay.div`
  max-height: 310px;
  overflow: auto;

  ${c.r}
`,O=(0,d.Ay)(A.P)`
  height: 20px;
  width: 80px;
`,D=({children:e})=>(0,n.jsx)(F,{id:"activityContainer",children:(0,n.jsxs)(_,{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)(I,{children:[(0,n.jsx)(U,{children:(0,n.jsx)(T.Trans,{i18nKey:"nft.event"})}),(0,n.jsx)(U,{children:(0,n.jsx)(T.Trans,{i18nKey:"common.price"})}),(0,n.jsx)(U,{children:(0,n.jsx)(T.Trans,{i18nKey:"common.by"})}),(0,n.jsx)(U,{children:(0,n.jsx)(T.Trans,{i18nKey:"common.to"})}),(0,n.jsx)(U,{children:(0,n.jsx)(T.Trans,{i18nKey:"common.time"})})]})}),(0,n.jsx)("tbody",{children:e})]})}),L=({cellCount:e})=>(0,n.jsx)(I,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(P,{children:(0,n.jsx)(O,{})},t)))}),E=({rowCount:e})=>(0,n.jsx)(D,{children:Array(e).fill(null).map(((e,t)=>(0,n.jsx)(L,{cellCount:5},t)))}),B=({events:e})=>{const{formatNumberOrString:t}=(0,S.kc)();return(0,n.jsx)(D,{children:e&&e.map(((e,i)=>{const{eventTimestamp:r,eventType:o,fromAddress:l,marketplace:s,price:a,toAddress:d,transactionHash:c}=e,p=a?t({input:parseFloat(a),type:S.wl.NFTToken}):null;return o?(0,n.jsxs)(I,{children:[(0,n.jsx)(P,{children:(0,n.jsx)($.n6,{eventType:o,eventTimestamp:r,eventTransactionHash:c,eventOnly:!0})}),(0,n.jsx)(P,{children:p&&(0,n.jsxs)(H,{children:[s&&(0,b.$4)(s,"16"),p," ETH"]})}),(0,n.jsx)(P,{children:l&&(0,n.jsx)(z,{href:`https://etherscan.io/address/${l}`,target:"_blank",rel:"noopener noreferrer",children:(0,N.shortenAddress)(l,2)})}),(0,n.jsx)(P,{children:d&&(0,n.jsx)(z,{href:`https://etherscan.io/address/${d}`,target:"_blank",rel:"noopener noreferrer",children:(0,N.shortenAddress)(d,2)})}),(0,n.jsx)(P,{children:r&&(0,k.h)(r.toString())})]},i):null}))})};i(91103);var M="_1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",K=i(15043),R=i(40148),G=i(78135),V=i(55199),Z=i(94412),W=i(43140),Y=i(41698),X=i(90069),J=i(76191),q=i(4852),Q=i(43423),ee=i.n(Q),te=i(61452);const ie=ee()("1m"),ne=ee()("1h"),re=ee()("1d"),oe=e=>{const t=new Date(e).getTime()-(new Date).getTime(),i=Math.floor(t/re),n=Math.floor(t%re/ne),r=Math.floor(t%ne/ie);return`${0!==i?(0,te.e)(i,"day"):""} ${0!==n?(0,te.e)(n,"hour"):""} ${(0,te.e)(r,"minute")}`};var le=i(42150),se=i(88361),ae=i(66954),de=i(53412),ce=i(20722);const pe=V.css`
  :hover::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayHover};
    z-index: 0;
  }

  :active::after {
    border-radius: 12px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
    z-index: 0;
  }
`,xe=d.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media (min-width: calc(960px + 1px)) {
    position: fixed;
    width: 360px;
    margin-top: 20px;
  }
`,he=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
`,ue=d.Ay.div`
  display: flex;
  justify-content: space-between;
`,me=d.Ay.div`
  display: flex;
  gap: 12px;
  align-items: flex-end;
`,ve=d.Ay.div`
  position: relative;
  width: 100%;
  background-color: ${({theme:e,assetInBag:t,useAccentColor:i})=>t?e.critical:i?e.accent1:e.surface3};
  border-radius: 12px;
  padding: 10px 12px;
  margin-top: ${({margin:e})=>e?"12px":"0px"};
  text-align: center;
  cursor: pointer;

  ${pe}
`,ge=d.Ay.div`
  position: relative;
`,ye=(0,d.Ay)(ae.P.BodySecondary)`
  color: ${({theme:e})=>e.neutral3};
`,fe=d.Ay.a`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;

  ${c.N}
`,je=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,we=d.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ce=d.Ay.a`
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;

  ${c.N}
`,Ae=d.Ay.div`
  color: ${({theme:e})=>e.neutral2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 8px;
`,$e=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,be=d.Ay.h1`
  display: -webkit-box;
  align-items: center;
  font-size: 28px;
  font-weight: 535;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.neutral1};
  margin: 0;
`,ke=d.Ay.div`
  display: flex;
  justify-content: space-between;
`,Te=d.Ay.span`
  font-size: 16px;
  font-weight: 485;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${c.N};
`,Ne=d.Ay.span`
  position: relative;
`,Se=(0,d.Ay)(Z.M3)`
  position: absolute;
  top: 0px;
`,Ie=(0,d.Ay)(le.Link)`
  text-decoration: none;
`,Ue=(0,d.Ay)(x.Gr)`
  display: flex;
  align-items: center;
`,_e=({asset:e})=>{var t,i;const o=(0,se.Zp)(),l=(0,W.M)(),a=(0,Y.N)((e=>e.setProfilePageState)),d=(0,X.a)((e=>e.selectSellAsset)),c=(0,X.a)((e=>e.reset)),{formatEther:p,formatNumberOrString:x}=(0,S.kc)(),h=e.sellOrders&&e.sellOrders.length>0?e.sellOrders[0]:void 0,u=(null===(t=h)||void 0===t?void 0:t.endAt)?new Date(h.endAt):void 0,m=(0,s.useMemo)((()=>l&&e.floor_sell_order_price?l*e.floor_sell_order_price:void 0),[l,e.floor_sell_order_price]),v=(0,ce.useTrace)(),g=()=>{c(),o("/nfts/profile"),d(e),(0,de.sendAnalyticsEvent)(r.c6.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...v}),a(q.A.LISTING)};return(0,n.jsxs)(he,{children:[(0,n.jsxs)(ue,{children:[(0,n.jsx)(ae.P.SubHeader,{color:"accent1",children:h?"Your Price":"List for Sale"}),h&&(0,n.jsx)(Ue,{href:h.marketplaceUrl,children:(0,b.$4)(h.marketplace,"20")})]}),(0,n.jsx)(me,{children:h?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ae.P.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[p({input:null===(i=e.priceInfo)||void 0===i?void 0:i.ETHPrice,type:S.wl.NFTToken})," ","ETH"]}),m&&(0,n.jsx)(ae.P.BodySecondary,{lineHeight:"24px",children:x({input:m,type:S.wl.FiatNFTToken})})]}):(0,n.jsx)(ae.P.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Get the best price for your NFT by selling with Uniswap."})}),u&&(0,n.jsxs)(ae.P.BodySecondary,{fontSize:"14px",children:["Sale ends: ",oe(u)]}),h?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(ve,{assetInBag:!1,margin:!0,useAccentColor:!1,onClick:g,children:(0,n.jsx)(ae.P.SubHeader,{lineHeight:"20px",children:"Adjust listing"})})}):(0,n.jsx)(ve,{assetInBag:!1,margin:!0,useAccentColor:!0,onClick:g,children:(0,n.jsx)(ae.P.SubHeader,{lineHeight:"20px",color:"white",children:"List"})})]})},Pe=(0,d.Ay)(le.Link)`
  text-decoration: none;
  ${c.N}
`,He=({collectionName:e,collectionUrl:t})=>{const i=(0,V.useTheme)();return(0,n.jsx)(he,{children:(0,n.jsxs)(je,{children:[(0,n.jsx)(Z.Iv,{width:"79px",height:"79px",color:i.neutral3}),(0,n.jsx)(ae.P.SubHeader,{children:"Not for sale"}),(0,n.jsxs)(we,{children:[(0,n.jsx)(ae.P.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:"Discover similar NFTs for sale in"}),(0,n.jsx)(Pe,{to:`/nfts/collection/${t}`,children:(0,n.jsx)(ae.P.Link,{lineHeight:"20px",children:e})})]})]})})},ze=({asset:e,collection:t})=>{var i,r,o;const l=(0,G.F)(),{formatEther:a,formatNumberOrString:d}=(0,S.kc)(),c=e.sellorders&&e.sellorders.length>0?e.sellorders[0]:void 0,p=(null===(i=c)||void 0===i?void 0:i.endAt)?new Date(c.endAt):void 0,x=(0,J.s)((e=>e.itemsInBag)),h=(0,J.s)((e=>e.addAssetsToBag)),u=(0,J.s)((e=>e.removeAssetsFromBag)),m=(0,J.s)((e=>e.toggleBag)),v=(0,J.s)((e=>e.bagExpanded)),g=(0,W.e)(e),y=[{address:e.address,tokenId:e.tokenId}],{walletAssets:f}=(0,R.S)({ownerAddress:l.address??"",assetsFilter:y,first:1}),j=(0,s.useMemo)((()=>{var e;return null===(e=f)||void 0===e?void 0:e[0]}),[f]),{assetInBag:w}=(0,s.useMemo)((()=>({assetInBag:x.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address))})),[e,x]),C=e.ownerAddress&&!!j&&(null===(r=l.address)||void 0===r?void 0:r.toLowerCase())===(null===(o=e.ownerAddress)||void 0===o?void 0:o.toLowerCase()),A=c&&e.priceInfo;return(0,n.jsxs)(xe,{children:[(0,n.jsxs)($e,{children:[(0,n.jsxs)(ke,{children:[(0,n.jsx)(Ie,{to:`/nfts/collection/${e.address}`,children:(0,n.jsxs)(Te,{children:[t.collectionName,(0,n.jsx)(Ne,{children:t.isVerified&&(0,n.jsx)(Se,{})})]})}),(0,n.jsx)(fe,{onClick:()=>{window.open((0,b.uX)(e),"newwindow",`left=${(window.screen.width-560)/2}, top=${(window.screen.height-480)/2}, width=560, height=480`)},target:"_blank",children:(0,n.jsx)(K.S,{})})]}),(0,n.jsx)(be,{children:e.name??`${e.collectionName} #${e.tokenId}`})]}),C?(0,n.jsx)(_e,{asset:j}):A?(0,n.jsxs)(he,{children:[(0,n.jsxs)(ue,{children:[(0,n.jsx)(ae.P.SubHeader,{color:"accent1",children:"Best Price"}),(0,n.jsx)(Ue,{href:c.marketplaceUrl,children:(0,b.$4)(c.marketplace,"20")})]}),(0,n.jsxs)(me,{children:[(0,n.jsxs)(ae.P.MediumHeader,{fontSize:"28px",lineHeight:"36px",children:[a({input:e.priceInfo.ETHPrice,type:S.wl.NFTToken})," ETH"]}),g&&(0,n.jsx)(ae.P.BodySecondary,{lineHeight:"24px",children:d({input:g,type:S.wl.FiatNFTToken})})]}),p&&p>new Date&&(0,n.jsxs)(ye,{fontSize:"14px",children:["Sale ends: ",oe(p)]}),(0,n.jsx)("div",{children:(0,n.jsx)(ge,{children:(0,n.jsx)(ve,{assetInBag:w,margin:!0,useAccentColor:!0,onClick:()=>{w?u([e]):h([e]),w||v||m()},children:(0,n.jsx)(ae.P.SubHeader,{color:"white",lineHeight:"20px",children:(0,n.jsx)("span",{"data-testid":"nft-details-toggle-bag",children:w?"Remove":"Add to Bag"})})})})})]}):(0,n.jsx)(He,{collectionName:t.collectionName??"this collection",collectionUrl:e.address}),A&&(0,n.jsxs)(Ae,{children:["ERC1155"!==e.tokenType&&e.ownerAddress&&(0,n.jsx)(ae.P.BodySmall,{color:"neutral2",lineHeight:"20px",children:"Seller:"}),(0,n.jsx)(Ce,{target:"_blank",href:`https://etherscan.io/address/${e.ownerAddress}`,rel:"noopener noreferrer",children:"ERC1155"===e.tokenType?"":(0,n.jsxs)("span",{children:[" ",C?"You":e.ownerAddress&&(0,N.shortenAddress)(e.ownerAddress,2)]})})]})]})};var Fe=i(85869),Oe=i(52507);const De=d.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`,Le=d.Ay.div`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
`,Ee=d.Ay.div`
  color: ${({theme:e})=>e.neutral1};
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
`,Be=d.Ay.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 8px;

  ${c.N}
`,Me=d.Ay.a`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;

  ${c.N}
`,Ke=(0,d.Ay)(Oe.A)`
  cursor: pointer;
`,Re=({header:e,body:t})=>(0,n.jsxs)("div",{children:[(0,n.jsx)(Le,{children:e}),(0,n.jsx)(Ee,{children:t})]}),Ge=({asset:e,collection:t})=>{var i;const{formatNumber:r}=(0,S.kc)(),{address:o,tokenId:l,tokenType:a,creator:d}=e,{totalSupply:c}=t,[,p]=(0,Fe.A)(),x=(0,s.useCallback)((()=>{p(o??"")}),[o,p]);return(0,n.jsxs)(De,{children:[(0,n.jsx)(Re,{header:"Contract address",body:(0,n.jsxs)(Be,{onClick:x,children:[(0,N.shortenAddress)(o,2)," ",(0,n.jsx)(Ke,{size:13})]})}),(0,n.jsx)(Re,{header:"Token ID",body:l.length>9?(h=l,`${h.substring(0,4)}...${h.substring(h.length-4,h.length)}`):l}),(0,n.jsx)(Re,{header:"Token standard",body:a}),(0,n.jsx)(Re,{header:"Blockchain",body:"Ethereum"}),(0,n.jsx)(Re,{header:"Total supply",body:`${r({input:c??0,type:S.wl.WholeNumber})}`}),(0,n.jsx)(Re,{header:"Creator",body:(null===(i=d)||void 0===i?void 0:i.address)&&(0,n.jsx)(Me,{href:`https://etherscan.io/address/${d.address}`,rel:"noopener noreferrer",target:"_blank",children:(0,N.shortenAddress)(d.address,2)})})]});var h};var Ve=i(56397),Ze=i(91144);const We=d.Ay.div`
  display: flex;
  border-radius: ${({isOpen:e})=>e?"16px 16px 0px 0px":"16px"};
  justify-content: space-between;
  background-color: ${({theme:e})=>e.surface1};
  padding: 14px 20px;
  cursor: pointer;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 28px;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayHover};
  }

  &:active {
    background-color: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }

  transition: ${({theme:{transition:{duration:e,timing:t}}})=>V.css`background-color ${e.medium} ${t.ease}`};
`,Ye=d.Ay.span`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
  line-height: 28px;
  font-size: 20px;
`,Xe=d.Ay.span`
  font-size: 12px;
  color: ${({theme:e})=>e.neutral2};
`,Je=d.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: ${({theme:e})=>e.neutral1};
`,qe=d.Ay.div`
  padding: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-top: none;
  border-radius: 0px 0px 16px 16px;
  background-color: ${({theme:e})=>e.surface1};
`,Qe=({children:e,primaryHeader:t,secondaryHeader:i,defaultOpen:r,...o})=>{const[l,a]=(0,s.useState)(!!r);return(0,n.jsxs)("div",{children:[(0,n.jsxs)(We,{...o,isOpen:l,onClick:()=>a(!l),children:[(0,n.jsxs)(Ye,{children:[t," ",(0,n.jsx)(Xe,{children:i})]}),(0,n.jsx)(Je,{children:l?(0,n.jsx)(Ve.A,{}):(0,n.jsx)(Ze.A,{})})]}),l&&(0,n.jsx)(qe,{children:e})]})};var et=i(25813);const tt=d.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  max-width: 780px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`,it=(0,d.Ay)(le.Link)`
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 12px;
  cursor: pointer;
  padding: 12px;
  text-decoration: none;

  ${c.N}
  min-width: 0;
`,nt=d.Ay.div`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  white-space: nowrap;
  width: 100%;
`,rt=d.Ay.div`
  color: ${({theme:e})=>e.neutral1};
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
  display: inline-block;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`,ot=({trait:e,collectionAddress:t})=>{const{trait_type:i,trait_value:r}=e,o=et.stringify({traits:[`("${i}","${r}")`]},{arrayFormat:"comma"});return(0,n.jsxs)(it,{to:`/nfts/collection/${t}?${o}`,children:[(0,n.jsx)(nt,{children:i}),(0,n.jsx)(rt,{children:r})]})},lt=({asset:e})=>{var t;const i=(0,s.useMemo)((()=>{var t;return null===(t=e.traits)||void 0===t?void 0:t.sort(((e,t)=>e.trait_type.localeCompare(t.trait_type)))}),[e]);return(0,n.jsx)(tt,{children:null===(t=i)||void 0===t?void 0:t.map((t=>(0,n.jsx)(ot,{trait:t,collectionAddress:e.address},t.trait_type)))})};var st=i(70148),at=i(96349),dt=i(90720),ct=i(72964);const pt=d.Ay.div`
  margin-top: 20px;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`,xt=d.Ay.div`
  display: flex;
  justify-content: center;
`,ht=d.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 780px;
`,ut=d.Ay.a`
  display: inline-block;
  color: ${({theme:e})=>e.neutral2};
  text-decoration: none;
  max-width: 100%;
  word-wrap: break-word;
  ${c.N};
`,mt=d.Ay.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`,vt=d.Ay.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
`,gt=d.Ay.span`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  padding: 2px 4px;
  border-radius: 4px;
  align-items: center;
  gap: 4px;
`,yt=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral1};
  font-size: 28px;
  line-height: 36px;
  padding: 56px 0px;
`,ft=(0,d.Ay)(le.Link)`
  color: ${({theme:e})=>e.accent1};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  margin-top: 12px;
  cursor: pointer;
  ${c.N};
`,jt=d.Ay.div`
  display: flex;
  gap: 8px;
  margin-bottom: 34px;
  overflow-x: auto;
  ${c.r}

  @media (max-width: 720px) {
    padding-bottom: 8px;
  }
`,wt=d.Ay.div`
  display: flex;
  background-color: ${({theme:e})=>e.surface1};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 450px;
  height: 450px;
`,Ct=d.Ay.div`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e})=>e};
  font-size: 14px;
  font-weight: 535;
  line-height: 14px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  ${c.N};
`,At=d.Ay.span`
  font-size: 14px;
  line-height: 20px;
`,$t=d.Ay.img`
  background-color: white;
`,bt=d.Ay.div`
  display: flex;
  margin-right: 4px;
`,kt=d.Ay.div`
  display: flex;
`,Tt=d.Ay.span`
  font-size: 14px;
`,Nt=({imageUrl:e,animationUrl:t,name:i,collectionName:r,dominantColor:o})=>(0,n.jsxs)(v.a,{position:"relative",display:"inline-block",alignSelf:"center",children:[(0,n.jsx)(v.a,{as:"audio",className:"_1yohfdwd",width:"292",controls:!0,src:t}),(0,n.jsx)("img",{className:M,src:e,alt:i||r,style:{"--shadow":`rgba(${o.join(", ")}, 0.5)`,minWidth:"300px",minHeight:"300px"}})]}),St={[st.o5.Listing]:!0,[st.o5.Sale]:!0,[st.o5.Transfer]:!1,[st.o5.CancelListing]:!1};const It=({mediaType:e,asset:t,dominantColor:i})=>{const r={"--shadow":`rgba(${i.join(", ")}, 0.5)`};switch(e){case"video":return(0,n.jsx)("video",{src:t.animationUrl,className:M,autoPlay:!0,controls:!0,muted:!0,loop:!0,style:r});case"image":return(0,n.jsx)("img",{className:M,src:t.imageUrl,alt:t.name||t.collectionName,style:r});case"audio":return(0,n.jsx)(Nt,{...t,dominantColor:i});case"embed":return(0,n.jsx)("div",{className:"_1yohfdw2",children:(0,n.jsx)("iframe",{title:t.name??`${t.collectionName} #${t.tokenId}`,src:t.animationUrl,className:"_1yohfdw3 _1yohfdw1 rgw6ez819 rgw6ez1dr rgw6ez53",style:r,frameBorder:0,height:"100%",width:"100%",sandbox:"allow-scripts",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}},Ut=({asset:e,collection:t})=>{var i,r,o,l,d,c,p,x;const{formatNumberOrString:h}=(0,S.kc)(),[v]=(0,s.useState)([0,0,0]),{rarityProvider:j}=(0,s.useMemo)((()=>{var t,i,n;return e.rarity?{rarityProvider:null===(n=e)||void 0===n||null===(i=n.rarity)||void 0===i||null===(t=i.providers)||void 0===t?void 0:t.find((({provider:t})=>{var i;return t===(null===(i=e.rarity)||void 0===i?void 0:i.primaryProvider)}))}:{}}),[e.rarity]),A=(0,s.useMemo)((()=>(0,at.J)(e.animationUrl??"")?"audio":(0,dt.c)(e.animationUrl??"")?"video":e.animationUrl?"embed":"image"),[e]),{address:$,tokenId:b}=e,{nftActivity:k}=(0,g.N)({activityTypes:[a.NftActivityType.Sale],address:$,tokenId:b},1,"no-cache"),T=null===(r=k)||void 0===r||null===(i=r[0])||void 0===i?void 0:i.price,I=T?h({input:parseFloat(T),type:S.wl.NFTToken}):void 0,[U,_]=(0,s.useReducer)(f.K,St),P=(0,s.useCallback)((function({eventType:e}){const t=U[e];return(0,n.jsx)(Ct,{backgroundColor:t?w.f.color.surface1:w.G6.colors.surface3,onClick:()=>_({eventType:e}),children:e===st.o5.CancelListing?"Cancellations":e.charAt(0)+e.slice(1).toLowerCase()+"s"})}),[U]),{nftActivity:H,hasNext:z,loadMore:F,loading:O,error:D}=(0,g.N)({activityTypes:Object.keys(U).map((e=>e)).filter((e=>U[e])),address:$,tokenId:b},25),L=null===(d=e)||void 0===d||null===(l=d.rarity)||void 0===l||null===(o=l.providers)||void 0===o?void 0:o[0],[K,R]=(0,s.useState)(!1);return(0,n.jsxs)(ht,{children:[(0,n.jsx)(xt,{children:void 0===e.imageUrl||K?(0,n.jsx)(wt,{children:"Content not available yet"}):"image"===A?(0,n.jsx)($t,{className:M,src:e.imageUrl,alt:e.name||t.collectionName,onError:()=>R(!0)}):(0,n.jsx)(It,{asset:e,mediaType:A,dominantColor:v})}),(0,n.jsx)(pt,{children:(0,n.jsx)(ze,{asset:e,collection:t})}),e.traits&&(0,n.jsx)(Qe,{"data-testid":"nft-details-traits",primaryHeader:"Traits",defaultOpen:!0,secondaryHeader:j&&L&&L.score?(0,n.jsx)(m.PD,{text:(0,n.jsxs)(kt,{children:[(0,n.jsx)(bt,{children:(0,n.jsx)("img",{src:"/nft/svgs/gem.svg",alt:"cardLogo",width:16})}),(0,n.jsx)(Tt,{children:"Ranking by Rarity Sniper"})]}),placement:"top",children:(0,n.jsxs)(gt,{children:["Rarity: ",h({input:L.score,type:S.wl.WholeNumber})]})}):null,children:(0,n.jsx)(lt,{asset:e})}),(0,n.jsx)(Qe,{primaryHeader:"Activity",defaultOpen:!0,secondaryHeader:I?`Last Sale: ${I} ETH`:void 0,"data-testid":"nft-details-activity",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(jt,{$isHorizontalScroll:!0,children:[(0,n.jsx)(P,{eventType:st.o5.Listing}),(0,n.jsx)(P,{eventType:st.o5.Sale}),(0,n.jsx)(P,{eventType:st.o5.Transfer}),(0,n.jsx)(P,{eventType:st.o5.CancelListing})]}),O?(0,n.jsx)(E,{rowCount:10}):H&&H.length>0?(0,n.jsx)(ct.A,{next:F,hasMore:!!z,loader:O&&(0,n.jsx)(y.ov,{children:(0,n.jsx)(C,{})}),dataLength:(null===(c=H)||void 0===c?void 0:c.length)??0,scrollableTarget:"activityContainer",children:(0,n.jsx)(B,{events:H})}):(0,n.jsx)(n.Fragment,{children:!D&&H&&(0,n.jsxs)(yt,{children:[(0,n.jsx)("div",{children:"No activities yet"}),(0,n.jsx)(ft,{to:`/nfts/collection/${e.address}`,children:"View collection items"})," "]})})]})}),(0,n.jsx)(Qe,{primaryHeader:"Description",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-description",children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(At,{children:"By "}),(null===(p=e)||void 0===p?void 0:p.creator)&&(null===(x=e.creator)||void 0===x?void 0:x.address)&&(0,n.jsx)(ut,{href:`https://etherscan.io/address/${e.creator.address}`,target:"_blank",rel:"noopener noreferrer",children:(0,N.shortenAddress)(e.creator.address,2)}),(0,n.jsx)(vt,{"data-testid":"nft-details-description-text",children:t.collectionDescription}),(0,n.jsxs)(mt,{children:[t.externalUrl&&(0,n.jsx)(u,{name:"Website",link:`${t.externalUrl}`}),t.twitterUrl&&(0,n.jsx)(u,{name:"Twitter",link:`https://twitter.com/${t.twitterUrl}`}),t.discordUrl&&(0,n.jsx)(u,{name:"Discord",link:t.discordUrl})]})]})}),(0,n.jsx)(Qe,{primaryHeader:"Details",defaultOpen:!0,secondaryHeader:null,"data-testid":"nft-details-asset-details",children:(0,n.jsx)(Ge,{asset:e,collection:t})})]})};var _t=i(45353),Pt=i(87367),Ht=i(81827);const zt="960px",Ft=(0,d.Ay)(A.P)`
  height: 16px;
  width: 136px;
`,Ot=(0,d.Ay)(A.P)`
  height: 40px;
  width: 200px;
  margin-top: 8px;

  @media (max-width: ${zt}) {
    width: 100%;
  }
`,Dt=(0,d.Ay)(A.P)`
  height: 16px;
  width: 40px;
`,Lt=(0,d.Ay)(A.P)`
  margin-top: 4px;
  height: 24px;
  width: 95px;
`,Et=(0,d.Ay)(A.P)`
  width: 100%;
  height: 260px;
`,Bt=(0,d.Ay)(A.P)`
  width: 100%;
  height: 428px;
`,Mt=(0,d.Ay)(_t.Ay)`
  max-width: 780px;
  margin-top: 28px;
  width: 100%;
  gap: 28px;

  @media (max-width: ${zt}) {
    max-width: 100%;
  }
`,Kt=d.Ay.div`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`,Rt=(0,d.Ay)(A.P)`
  height: 180px;
  width: 360px;

  @media (max-width: ${zt}) {
    width: 100%;
  }
`,Gt=d.Ay.div`
  display: flex;
  margin-top: 48px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1296px;

  ${Ht.Tv}

  @media (max-width: ${zt}) {
    max-width: 100%;
    margin-top: 0;
  }
`,Vt=(0,d.Ay)(_t.Ay)`
  max-width: 780px;
  width: 100%;

  @media (max-width: ${zt}) {
    max-width: 100%;
  }
`,Zt=(0,d.Ay)(_t.Ay)`
  margin-top: 20px;
  padding-left: 60px;
  gap: 24px;

  @media (max-width: ${zt}) {
    display: none;
  }
`,Wt=(0,d.Ay)(_t.Ay)`
  display: none;
  margin-top: 16px;
  gap: 24px;

  @media (max-width: ${zt}) {
    display: flex;
  }
`,Yt=()=>{const e=(0,V.useTheme)();return(0,n.jsxs)(Gt,{children:[(0,n.jsxs)(Vt,{children:[(0,n.jsx)(Kt,{children:(0,n.jsx)(Pt.Ay,{stroke:e.accent1,size:"40px"})}),(0,n.jsxs)(Wt,{children:[(0,n.jsxs)(_t.Ay,{children:[(0,n.jsx)(Ft,{}),(0,n.jsx)(Ot,{})]}),(0,n.jsx)(Rt,{}),(0,n.jsxs)(_t.Ay,{children:[(0,n.jsx)(Dt,{}),(0,n.jsx)(Lt,{})]})]}),(0,n.jsxs)(Mt,{children:[(0,n.jsx)(Et,{}),(0,n.jsx)(Bt,{}),(0,n.jsx)(Et,{}),(0,n.jsx)(Et,{})]})]}),(0,n.jsxs)(Zt,{children:[(0,n.jsxs)(_t.Ay,{children:[(0,n.jsx)(Ft,{}),(0,n.jsx)(Ot,{})]}),(0,n.jsx)(Rt,{}),(0,n.jsxs)(_t.Ay,{children:[(0,n.jsx)(Dt,{}),(0,n.jsx)(Lt,{})]})]})]})};var Xt=i(38362),Jt=i(12085),qt=i(68957),Qt=i(96676),ei=i(53195),ti=i(3008);const ii=d.Ay.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 60px;
  padding: 48px 48px 0 48px;

  @media (max-width: 960px) {
    padding: 40px 40px 0 40px;
  }
  @media (max-width: 540px) {
    padding: 20px 20px 0 20px;
  }
  @media (max-width: 420px) {
    padding: 16px 16px 0 16px;
  }
`,ni=d.Ay.div`
  min-width: 360px;
  position: relative;

  @media (max-width: 960px) {
    display: none;
  }
`,ri=()=>{const{t:e}=(0,T.useTranslation)(),{tokenId:t="",contractAddress:i=""}=(0,se.g)(),{data:d,loading:c}=function(e,t){var i,n,r,d,c,p,x,h,u,m,v;const{data:g,loading:y}=(0,a.useNftDetailsQuery)({variables:{address:e,tokenId:t}}),f=null===(r=g)||void 0===r||null===(n=r.nftAssets)||void 0===n||null===(i=n.edges[0])||void 0===i?void 0:i.node,j=null===(d=f)||void 0===d?void 0:d.collection,w=null===(x=f)||void 0===x||null===(p=x.listings)||void 0===p||null===(c=p.edges[0])||void 0===c?void 0:c.node,C=(0,o.parseEther)((0,l.S)((null===(m=w)||void 0===m||null===(u=m.price)||void 0===u||null===(h=u.value)||void 0===h?void 0:h.toString())??"0")).toString();return(0,s.useMemo)((()=>{var i,n,r,o,l,s,a,d,c,p,x,h,u,m,v,g,A,$,b,k,T,N,S,I,U,_,P,H,z,F,O,D,L,E,B,M,K,R,G,V,Z,W,Y;return{data:[{id:null===(i=f)||void 0===i?void 0:i.id,address:e,notForSale:null===(null===(n=f)||void 0===n?void 0:n.listings),collectionName:null===(o=f)||void 0===o||null===(r=o.collection)||void 0===r?void 0:r.name,collectionSymbol:null===(a=f)||void 0===a||null===(s=a.collection)||void 0===s||null===(l=s.image)||void 0===l?void 0:l.url,imageUrl:null===(c=f)||void 0===c||null===(d=c.image)||void 0===d?void 0:d.url,animationUrl:null===(p=f)||void 0===p?void 0:p.animationUrl,marketplace:null===(x=w)||void 0===x?void 0:x.marketplace.toLowerCase(),name:null===(h=f)||void 0===h?void 0:h.name,priceInfo:{ETHPrice:C,baseAsset:"ETH",baseDecimals:"18",basePrice:C},susFlag:null===(u=f)||void 0===u?void 0:u.suspiciousFlag,sellorders:null===(v=f)||void 0===v||null===(m=v.listings)||void 0===m?void 0:m.edges.map((e=>({...e.node,protocolParameters:e.node.protocolParameters?JSON.parse(e.node.protocolParameters.toString()):void 0}))),smallImageUrl:null===(A=f)||void 0===A||null===(g=A.smallImage)||void 0===g?void 0:g.url,tokenId:t,tokenType:null===(T=f)||void 0===T||null===(k=T.collection)||void 0===k||null===(b=k.nftContracts)||void 0===b||null===($=b[0])||void 0===$?void 0:$.standard,collectionIsVerified:null===(S=f)||void 0===S||null===(N=S.collection)||void 0===N?void 0:N.isVerified,rarity:{primaryProvider:"Rarity Sniper",providers:null===(U=f)||void 0===U||null===(I=U.rarities)||void 0===I?void 0:I.map((e=>({rank:e.rank,score:e.score,provider:"Rarity Sniper"})))},ownerAddress:null===(_=f)||void 0===_?void 0:_.ownerAddress,creator:{profile_img_url:(null===(z=f)||void 0===z||null===(H=z.creator)||void 0===H||null===(P=H.profileImage)||void 0===P?void 0:P.url)??"",address:(null===(O=f)||void 0===O||null===(F=O.creator)||void 0===F?void 0:F.address)??""},metadataUrl:(null===(D=f)||void 0===D?void 0:D.metadataUrl)??"",traits:null===(E=f)||void 0===E||null===(L=E.traits)||void 0===L?void 0:L.map((e=>({trait_type:e.name??"",trait_value:e.value??""})))},{collectionDescription:null===(B=j)||void 0===B?void 0:B.description,collectionImageUrl:null===(K=j)||void 0===K||null===(M=K.image)||void 0===M?void 0:M.url,collectionName:null===(R=j)||void 0===R?void 0:R.name,isVerified:null===(G=j)||void 0===G?void 0:G.isVerified,totalSupply:null===(V=j)||void 0===V?void 0:V.numAssets,twitterUrl:null===(Z=j)||void 0===Z?void 0:Z.twitterName,discordUrl:null===(W=j)||void 0===W?void 0:W.discordUrl,externalUrl:null===(Y=j)||void 0===Y?void 0:Y.homepageUrl}],loading:y}}),[e,f,j,C,null===(v=w)||void 0===v?void 0:v.marketplace,y,t])}(i,t),[p,x]=d,h=(0,s.useMemo)((()=>({title:(0,Qt.A)(p.name,x.collectionName,t),image:window.location.origin+"/api/image/nfts/asset/"+i+"/"+t,url:window.location.href,description:x.collectionDescription??"View traits, trading activity, descriptions, and other details on your NFTs."})),[p.name,x.collectionDescription,x.collectionName,i,t]),u=(0,Jt.t)(h);return Xt.u.includes(i)||(0,ti.l)(!0)?(0,n.jsx)(se.C5,{to:"/nfts",replace:!0}):c?(0,n.jsx)(Yt,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(qt.Helmet,{children:[(0,n.jsxs)("title",{children:[p.name??""," ",p.name?"|":""," ",x.collectionName??e("nft.explore")," on Uniswap"]}),u.map(((e,t)=>(0,n.jsx)("meta",{...e},t))),(0,n.jsx)("meta",{name:"robots",content:"max-image-preview:large"})]}),(0,n.jsx)(ei.default,{logImpression:!0,page:r.Om.NFT_DETAILS_PAGE,properties:{collection_address:i,token_id:t},children:p&&x?(0,n.jsxs)(ii,{children:[(0,n.jsx)(Ut,{collection:x,asset:p}),(0,n.jsx)(ni,{children:(0,n.jsx)(ze,{collection:x,asset:p})})]}):null})]})}},35249:(e,t,i)=>{i.d(t,{$4:()=>d,NA:()=>p,Y4:()=>x,uX:()=>c,w2:()=>s,yU:()=>a});var n=i(95682),r=i(94412),o=i(9881),l=i(36046);function s(e,t,i){if(e.has(t))return e.get(t);const n=i&&Array.from(i).reduce(((e,t)=>{var i;return!(!e&&!(null===(i=t)||void 0===i?void 0:i.rarity))}),!1);return n&&e.set(t,n),n}const a=(e,t)=>`/nfts/asset/${void 0!==e.address?e.address:e.asset_contract.address}/${e.tokenId}${t?`?origin=${t}`:""}`,d=(e,t="16")=>{switch(e.toLowerCase()){case o.KD.Opensea:return(0,n.jsx)(r.DL,{width:t,height:t});case o.KD.LooksRare:return(0,n.jsx)(r.Ij,{width:t,height:t});case o.KD.X2Y2:return(0,n.jsx)(r.td,{width:t,height:t,gradientId:(0,l.A)()});case o.KD.Blur:return(0,n.jsx)(r.p7,{width:t,height:t});case o.KD.Sudoswap:return(0,n.jsx)(r.YS,{width:t,height:t});case o.KD.NFTX:return(0,n.jsx)(r._u,{width:t,height:t,gradientId:(0,l.A)()});case o.KD.Gem:return(0,n.jsx)(r.v5,{width:t,height:t,gradientId:(0,l.A)()});case o.KD.Zora:return(0,n.jsx)(r.Cp,{width:t,height:t,gradientId:(0,l.A)()});case o.KD.Ensvision:return(0,n.jsx)(r.qO,{width:t,height:t});case o.KD.Cryptopunks:case"larvalabs":return(0,n.jsx)(r.Mo,{width:t,height:t});case o.KD.Rarible:return(0,n.jsx)(r.Jj,{width:t,height:t});case o.KD.Foundation:return(0,n.jsx)(r.p3,{width:t,height:t});case o.KD.NFT20:return(0,n.jsx)(r.Io,{width:t,height:t});default:return null}},c=e=>`https://twitter.com/intent/tweet?text=Check%20out%20${e.name?encodeURIComponent(e.name):`${e.collectionName}%20%23${e.tokenId}`}%20(${e.collectionName})%20https://app.uniswap.org/nfts/asset/${e.address}/${e.tokenId}%20via%20@uniswap`,p=(e,t)=>{const i=e.length>0&&e.some((t=>t.address!==e[0].address)),n=e.length>0&&!i?`collection/${e[0].address}`:"",r=`I just purchased ${i?`${e.length} NFTs`:`${e.length} ${e[0].collectionName??"NFT"}`} with @Uniswap \ud83e\udd84\n\nhttps://app.uniswap.org/nfts/${n}\n${t}`;return`https://twitter.com/intent/tweet?text=${encodeURIComponent(r)}`};const x=e=>{var t,i,n,r,o;const l=1==e.length?`I just listed ${(null===(t=e[0].collection)||void 0===t?void 0:t.twitterUrl)?`${null===(i=e[0].collection)||void 0===i?void 0:i.twitterUrl} `:`${null===(n=e[0].collection)||void 0===n?void 0:n.name} `??0}${e[0].name} for ${s=e[0].newListings??[],Math.min(...s.map((e=>e.price??0)))??0} ETH on ${null===(r=e[0].marketplaces)||void 0===r?void 0:r.map((e=>e.name)).join(", ")}. Buy it on @Uniswap at https://app.uniswap.org/${a(e[0])}`:`I just listed ${e.length} items on @Uniswap at https://app.uniswap.org/nfts/profile\n\nCollections: ${function(e){const t=e.map((e=>{var t,i;return(null===(t=e.collection)||void 0===t?void 0:t.twitterUrl)??(null===(i=e.collection)||void 0===i?void 0:i.name)??""}));return[...new Set(t)].map((t=>({collection:t,items:e.filter((e=>{var i,n;return(null===(i=e.collection)||void 0===i?void 0:i.twitterUrl)===t||(null===(n=e.collection)||void 0===n?void 0:n.name)===t})).map((e=>e.name??""))})))}(e).map((({collection:e,items:t})=>`${e} ${t.map((e=>e)).join(", ")}`)).join(", ")} \n\nMarketplaces: ${null===(o=e[0].marketplaces)||void 0===o?void 0:o.map((e=>e.name)).join(", ")}`;var s;return`https://twitter.com/intent/tweet?text=${encodeURIComponent(l)}`}},96676:(e,t,i)=>{function n(e,t){return e?"Get "+e+" on Uniswap":t?"Get "+t+" on Uniswap":"View Token on Uniswap"}function r(e,t,i){return e||(t&&i?t+" #"+i:i?"Asset #"+i:"View NFT on Uniswap")}i.d(t,{A:()=>r,v:()=>n})}}]);
//# sourceMappingURL=2375.b1c1b949.chunk.js.map
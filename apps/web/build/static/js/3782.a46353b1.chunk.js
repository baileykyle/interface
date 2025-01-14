"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3782],{55077:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Zs});var i=n(95682),s=n(29477),r=n(15260),o=n(70819),a=n(9656),l=n(78135),c=n(77415),d=n(16444),p=n(83286),h=n(45353),x=n(63247),u=n(69618),m=n(29681),g=n(31110),f=n(5525),y=n(55199),v=n(87654),A=n(94270),w=n(95060),j=n(83799),b=n(35480),k=n(73763),P=n(66954),L=n(17960),S=n(91071);const E=(0,d.Ay)(h.Ay)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${L.M.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${k.LO.sm}px) {
    width: 100%;
  }
`,T=d.Ay.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,I=(0,d.Ay)(w.A)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,$=d.Ay.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,C=(0,d.Ay)(o.$$)`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,N=d.Ay.span`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,R=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const{t:s}=(0,b.useTranslation)(),r=(0,y.useTheme)(),{formatDelta:o}=(0,S.kc)(),a=o(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)));return(0,i.jsxs)(v.Z,{children:[(0,i.jsxs)(E,{children:[(0,i.jsxs)(T,{children:[(0,i.jsx)(I,{width:24,height:24,onClick:t})," "]}),(0,i.jsx)($,{children:(0,i.jsx)(j.A,{height:90,width:90,color:r.critical})}),(0,i.jsx)(P.P.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.lowPrice"})}),(0,i.jsx)(P.P.BodyPrimary,{textAlign:"center",children:s("nft.listedSignificantly",{count:e.length,percentage:a})}),(0,i.jsx)(C,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,i.jsx)(b.Trans,{i18nKey:"common.button.continue"})}),(0,i.jsx)(N,{onClick:t,children:(0,i.jsx)(b.Trans,{i18nKey:"nft.editListings"})})]}),(0,i.jsx)(A.h,{onClick:t})]})};var O=n(36952),_=n(43423),F=n.n(_);const M=d.Ay.div`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,D=(0,d.Ay)(x.Ay)`
  justify-content: space-between;
  margin-bottom: 8px;
`;var G=(e=>(e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM",e))(G||{}),H=(e=>(e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE",e))(H||{}),B=n(90069),V=n(4852),z=n(98267),K=n(74617);const W=(0,n(96858).h)()((0,z.lt)(((e,t)=>({looksRareNonce:0,listings:[],collectionsRequiringApproval:[],setLooksRareNonce:t=>e((()=>({looksRareNonce:t}))),getLooksRareNonce:()=>t().looksRareNonce,setListings:n=>e((()=>({listings:n.map((e=>{var n,i;const s=t().listings.find((t=>t.asset.asset_contract.address===e.asset.asset_contract.address&&t.asset.tokenId===e.asset.tokenId&&t.marketplace.name===e.marketplace.name&&t.price===e.price)),r=null===(n=s)||void 0===n?void 0:n.status,o=null===(i=s)||void 0===i?void 0:i.callback;return{...e,status:(()=>{switch(r){case V.L.APPROVED:return V.L.APPROVED;case V.L.FAILED:return e.status===V.L.SIGNING?V.L.SIGNING:V.L.FAILED;case V.L.REJECTED:return e.status===V.L.SIGNING?V.L.SIGNING:V.L.REJECTED;default:return e.status}})(),callback:o??e.callback}}))}))),setCollectionsRequiringApproval:n=>e((()=>({collectionsRequiringApproval:n.map((e=>{var n,i;const s=t().collectionsRequiringApproval.find((t=>t.collectionAddress===e.collectionAddress&&t.marketplace.name===e.marketplace.name)),r=null===(n=s)||void 0===n?void 0:n.status,o=null===(i=s)||void 0===i?void 0:i.callback;return{...e,status:(()=>{switch(r){case V.L.APPROVED:return V.L.APPROVED;case V.L.FAILED:return e.status===V.L.SIGNING?V.L.SIGNING:V.L.FAILED;case V.L.REJECTED:return e.status===V.L.SIGNING?V.L.SIGNING:V.L.REJECTED;default:return e.status}})(),callback:o??e.callback}}))}))),setListingStatusAndCallback:(t,n,i)=>e((({listings:e})=>{const s=[...e],r=s.findIndex((e=>e.name===t.name&&e.price===t.price&&e.marketplace.name===t.marketplace.name));if(r>-1){const t={...e[r],status:n,callback:i??e[r].callback};s.splice(r,1,t)}return{listings:s}})),setCollectionStatusAndCallback:(t,n,i)=>e((({collectionsRequiringApproval:e})=>{const s=[...e],r=s.findIndex((e=>e.name===t.name&&e.marketplace.name===t.marketplace.name));if(r>-1){const e={...s[r],status:n,callback:i??s[r].callback};s.splice(r,1,e)}return{collectionsRequiringApproval:s}}))}))),K.x),q="0x59728544B08AB483533076417FbBB2fD0B17CE3a",Y="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",J="0x1e0049783f008a0085193e00003d00cd54003c71",U={[Y]:J},X=1e4;function Z(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Z(r,i,s,o,a,"next",e)}function a(e){Z(r,i,s,o,a,"throw",e)}o(void 0)}))}}const ee=function(){var e=Q((function*(e){const t=JSON.stringify(e),n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),s=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(s)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Q((function*(e,t){var n,i,s,r;const o=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,a=yield fetch(o,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(r=yield a.json())||void 0===r||null===(s=r.data)||void 0===s||null===(i=s.data)||void 0===i||null===(n=i[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(55043),ie=n(16746),se=n(23974),re=n(28465),oe=n(69912),ae=n(28438);function le(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}const ce=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){le(r,i,s,o,a,"next",e)}function a(e){le(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();function de(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}function pe(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,i=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),s=setTimeout((()=>n.abort()),F()("60s"));try{const e=yield fetch(i);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(s)}},pe=function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){de(r,i,s,o,a,"next",e)}function a(e){de(r,i,s,o,a,"throw",e)}o(void 0)}))},pe.apply(this,arguments)}var he=n(99645),xe=n(96370),ue=n(90950),me=n(99968),ge=n(22615),fe=n(85141);function ye(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}const ve="tuple(uint256 price, bytes data)",Ae=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${ve}[]`],we=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${ve}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,je=function(){var e,t=(e=function*(e,t){const n=he.D.encode(Ae,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),i=(0,me.keccak256)(n),s=yield e.send("personal_sign",[i,t.user]);t.r=`0x${s.slice(2,66)}`,t.s=`0x${s.slice(66,130)}`,t.v=parseInt(s.slice(130,132),16),be(t)},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){ye(r,i,s,o,a,"next",e)}function a(e){ye(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),be=e=>{e.v<27&&(e.v=e.v+27)},ke=e=>he.D.encode([we],[e]),Pe=(e,t,n,i=fe.NftStandard.Erc721)=>({salt:(()=>{const e=ne.gH.from((0,ge.p)(16)).toHexString();return(0,xe.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:i===fe.NftStandard.Erc721?1:2,deadline:t,currency:ue.L,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,he.D.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});var Le=n(60546),Se=n(21094);function Ee(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}function Te(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Ee(r,i,s,o,a,"next",e)}function a(e){Ee(r,i,s,o,a,"throw",e)}o(void 0)}))}}const Ie=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],$e=(e,t)=>({amount:e,recipient:t});function Ce(){return(Ce=Te((function*(e,t,n,i,s=fe.NftStandard.Erc721){const r=new ie.Contract(t,s===fe.NftStandard.Erc721?Se:Le,n),o=yield n.getAddress();try{if(yield r.isApprovedForAll(o,e))return void i(V.L.APPROVED);i(V.L.SIGNING);const t=yield r.setApprovalForAll(e,!0);i(V.L.PENDING);1===(yield t.wait()).status?i(V.L.APPROVED):i(V.L.FAILED)}catch(a){4001===a.code?i(V.L.REJECTED):i(V.L.FAILED)}}))).apply(this,arguments)}function Ne(){return Ne=Te((function*(e,t,n,i,s=0,r){var o,a;const l=new re.l(i,{conduitKeyToConduit:U,overrides:{defaultConduitKey:Y},seaportVersion:"1.5"}),c=yield n.getAddress(),d=null===(a=t.newListings)||void 0===a||null===(o=a.find((t=>t.marketplace.name===e.name)))||void 0===o?void 0:o.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,se.parseEther)(`${d}`),{sellerFee:n,creatorFee:i,openSeaFee:s}=((e,t,n)=>{var i,s,r,o;const a=(null===(i=e)||void 0===i?void 0:i.basisPoints)??0,l=100*((null===(s=Ie.find((e=>"OpenSea"===e.name)))||void 0===s?void 0:s.fee)??0),c=X-a-l,d=t.mul(ne.gH.from(a)).div(ne.gH.from(X)).toString(),p=t.mul(ne.gH.from(c)).div(ne.gH.from(X)).toString(),h=t.mul(ne.gH.from(l)).div(ne.gH.from(X)).toString();return{sellerFee:$e(p,n),creatorFee:a>0?$e(d,(null===(o=e)||void 0===o||null===(r=o.asset_contract)||void 0===r?void 0:r.payout_address)??""):void 0,openSeaFee:l?$e(h,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}})(t,e,c),o=[n,i,s].filter((e=>void 0!==e)),{executeAllActions:a}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===fe.NftStandard.Erc721?oe.ItemType.ERC721:oe.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:o,endTime:t.expirationTime.toString(),zone:ae.cF,allowPartialFills:!0},c),p={...yield a(),protocol_address:"0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC"};r(V.L.PENDING);const h=yield function(e){return pe.apply(this,arguments)}(p);return r(h?V.L.APPROVED:V.L.FAILED),h}catch(p){return 4001===p.code?r(V.L.REJECTED):r(V.L.FAILED),!1}case"LooksRare":{const e=O.cJ[O.L.MAINNET],i=Math.round(Date.now()/1e3),o={isOrderAsk:!0,signer:c,collection:t.asset_contract.address,price:(0,se.parseEther)(d.toString()),tokenId:ne.gH.from(t.tokenId),amount:ne.gH.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:ne.gH.from(s),startTime:ne.gH.from(i),endTime:ne.gH.from(t.expirationTime),minPercentageToAsk:ne.gH.from(1e4).sub(ne.gH.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const a=yield(0,O.It)(n,O.L.MAINNET,o,q);r(V.L.PENDING);const l={signature:a,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:c,isOrderAsk:!0,nonce:s,amount:1,price:(0,se.parseEther)(d.toString()).toString(),startTime:i,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield ce(l);return r(p?V.L.APPROVED:V.L.FAILED),p}catch(p){return 4001===p.code?r(V.L.REJECTED):r(V.L.FAILED),!1}}case"X2Y2":{const e={price:(0,se.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:ne.gH.from(t.tokenId),amount:1}]},n=Pe(c,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield je(i,n);const s={order:ke(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};r(V.L.PENDING);const o=yield ee(s);return r(o?V.L.APPROVED:V.L.FAILED),o}catch(p){return 4001===p.code?r(V.L.REJECTED):r(V.L.FAILED),!1}}default:return!1}})),Ne.apply(this,arguments)}var Re=n(33962);function Oe(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}function _e(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Oe(r,i,s,o,a,"next",e)}function a(e){Oe(r,i,s,o,a,"throw",e)}o(void 0)}))}}function Fe(e,t,n){return Me.apply(this,arguments)}function Me(){return Me=_e((function*(e,t,n){const i=()=>Fe(e,t,n);n(e,V.L.SIGNING,i);const{marketplace:s,collectionAddress:r,nftStandard:o}=e,a=O.cJ[O.L.MAINNET],l="OpenSea"===s.name?J:"LooksRare"===s.name?e.nftStandard===fe.NftStandard.Erc721?q:"0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051":"X2Y2"===s.name?e.nftStandard===fe.NftStandard.Erc721?"0xf849de01b080adc3a814fabe1e2087475cf2e354":"0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779":a.TRANSFER_MANAGER_ERC721;r&&(yield function(e,t,n,i){return Ce.apply(this,arguments)}(l,r,t,(t=>n(e,t,i)),o))})),Me.apply(this,arguments)}function De(e,t,n,i,s,r){return Ge.apply(this,arguments)}function Ge(){return Ge=_e((function*(e,t,n,i,s,r){const o=i(),a=()=>De(e,t,n,i,s,r);r(e,V.L.SIGNING,a);const{asset:l,marketplace:c}=e,d=yield function(e,t,n,i){return Ne.apply(this,arguments)}(c,l,t,n,o,(t=>r(e,t,a)));d&&"LooksRare"===e.marketplace.name&&s(o+1)})),Ge.apply(this,arguments)}const He=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var i;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),s=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(i=t)||void 0===i?void 0:i.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(s/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Be(){const e=(0,B.a)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=W((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,Re.useEffect)((()=>{const[i,s]=(e=>{const t=[],n=[];return e.forEach((e=>{var i;null===(i=e.marketplaces)||void 0===i||i.forEach((i=>{var s,r;const o={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:V.L.DEFINED,asset:e,marketplace:i,price:null===(r=e.newListings)||void 0===r||null===(s=r.find((e=>e.marketplace.name===i.name)))||void 0===s?void 0:s.price};if(n.push(o),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===i.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:V.L.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:i,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(s),n(i)}),[e,n,t])}const Ve=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),ze=(0,d.Ay)(o.SC)`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${k.LO.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Ke=({onClick:e})=>{const{t:t}=(0,b.useTranslation)(),{sellAssets:n,showResolveIssues:s,toggleShowResolveIssues:r,issues:o,setIssues:a}=(0,B.a)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:s})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:i,setIssues:s}))),[l,c]=(0,Re.useState)(!1),d=(0,u.a)(),[p,h]=(0,Re.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:t,listingsMissingPrice:i,listingsBelowFloor:o,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<F()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>F()("180d"))),i=[],s=[],r=[];for(const a of e)if(a.newListings)for(const e of a.newListings){var o;e.price?e.price<.8*((null===(o=a)||void 0===o?void 0:o.floorPrice)??0)&&!e.overrideFloorPrice?s.push([a,e]):a.floor_sell_order_price&&e.price>=a.floor_sell_order_price&&a.asset_contract.tokenType!==fe.NftStandard.Erc1155&&r.push([a,e]):i.push([a,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:i,listingsBelowFloor:s,listingsAboveSellOrderFloor:r}})(n),c=Number(e)+Number(t)+i.length+l.length;return a(c),!c&&s&&r(),(e||t||l.length)&&!s&&r(),[i,o]}),[n,a,s,r]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ze,{onClick:()=>{o?!s&&r():h.length?c(!0):e()},missingPrices:!!p.length,showResolveIssues:s,children:s?t("common.resolveIssues",{count:o}):p.length&&!d?t("nft.setPrices"):t("nft.startListing")}),l&&(0,i.jsx)(R,{listingsBelowFloor:h,closeModal:()=>c(!1),startListing:e})]})};var We=n(96906),qe=n(79865),Ye=n(38108),Je=n(94412),Ue=n(87367),Xe=n(35249),Ze=n(89932),Qe=n(41858),et=n(47165);const tt=(0,d.Ay)(h.Ay)`
  background-color: ${({theme:e,failed:t})=>t&&(0,et.mI)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,nt=(0,d.Ay)(x.Ay)`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,it=d.Ay.img`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,st=d.Ay.img`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,rt=d.Ay.div`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ot=(0,d.Ay)(P.P.SubHeaderSmall)`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,at=d.Ay.span`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,lt=d.Ay.span`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,ct=(0,d.Ay)(Je.M3)`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,dt=d.Ay.div`
  margin-left: auto;
  margin-right: 0px;
`,pt=(0,d.Ay)(x.Ay)`
  padding: 0px 16px;
  justify-content: space-between;
`,ht=y.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,xt=d.Ay.button`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${ht}
`,ut=d.Ay.button`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${ht}
`,mt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const s=(0,y.useTheme)(),r=(0,Re.useRef)(),o=e.status===V.L.FAILED||e.status===V.L.REJECTED;return(0,Re.useEffect)((()=>{var t;e.status===V.L.SIGNING&&(null===(t=r.current)||void 0===t||t.scroll)}),[e.status]),(0,i.jsxs)(tt,{failed:o,children:[(0,i.jsxs)(nt,{active:e.status===V.L.SIGNING||e.status===V.L.APPROVED,failed:o,ref:r,children:[t?(0,i.jsx)(it,{src:e.image}):(0,i.jsx)(st,{src:e.image}),(0,i.jsx)(rt,{children:(0,Xe.$4)(e.marketplace.name,"24")}),(0,i.jsx)(ot,{children:e.name}),t&&e.isVerified&&(0,i.jsx)(ct,{}),(0,i.jsx)(dt,{children:e.status===V.L.DEFINED||e.status===V.L.PENDING?(0,i.jsx)(Ue.Ay,{height:"14px",width:"14px",stroke:e.status===V.L.PENDING?s.accent1:s.neutral3}):e.status===V.L.SIGNING?(0,i.jsx)(at,{children:(0,i.jsx)(b.Trans,{i18nKey:"common.proceedInWallet.short"})}):e.status===V.L.APPROVED?(0,i.jsx)(Ze.A,{height:"20",width:"20",stroke:s.success}):o&&(0,i.jsxs)(x.Ay,{children:[(0,i.jsx)(Qe.A,{height:"20",width:"20",color:s.critical}),(0,i.jsx)(lt,{children:e.status===V.L.FAILED?(0,i.jsx)(b.Trans,{i18nKey:"common.failed.error"}):(0,i.jsx)(b.Trans,{i18nKey:"common.rejected"})})]})})]}),o&&(0,i.jsxs)(pt,{justify:"space-between",children:[(0,i.jsx)(xt,{onClick:()=>n(e),children:(0,i.jsx)(b.Trans,{i18nKey:"common.remove.label"})}),(0,i.jsx)(ut,{onClick:e.callback,children:(0,i.jsx)(b.Trans,{i18nKey:"common.button.retry"})})]})]})};var gt=n(33606),ft=n(59514),yt=n(13068);const vt=(0,d.Ay)(x.Ay)`
  justify-content: space-between;
`,At=(0,d.Ay)(P.P.SubHeader)`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,wt=(0,d.Ay)(Je.Mt)`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${yt.YD.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,jt=(0,d.Ay)(h.Ay)`
  border-left: 1.5px solid ${ft.Tj.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${qe.r}
`,bt=(0,d.Ay)(gt.A)`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,kt=(0,d.Ay)(h.Ay)`
  gap: 8px;
  scroll-behavior: smooth;
`;var Pt=(e=>(e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN",e))(Pt||{});const Lt=({sectionType:e,active:t,content:n,toggleSection:s})=>{const{t:r}=(0,b.useTranslation)(),o=(0,y.useTheme)(),a=(0,B.a)((e=>e.sellAssets)),l=(0,B.a)((e=>e.removeAssetMarketplace)),c=(0,Re.useMemo)((()=>!n.some((e=>e.status!==V.L.APPROVED))),[n]),d=0===e,p=(0,Re.useMemo)((()=>{if(d){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,d]),u=e=>{if(d){const t=e;for(const e of a)e.asset_contract.address===t.collectionAddress&&l(e,t.marketplace)}else{const t=e;l(t.asset,t.marketplace)}};return(0,i.jsxs)(h.Ay,{children:[(0,i.jsxs)(vt,{children:[(0,i.jsxs)(x.Ay,{children:[t||c?(0,i.jsx)(Je.uf,{fill:c?o.success:o.accent1}):(0,i.jsx)(Je.kZ,{}),(0,i.jsx)(At,{active:t,marginLeft:"12px",approved:c,children:d?r("nfts.collection.action.approve",{count:p??1}):r("nfts.collection.action.sign",{count:n.length})})]}),(0,i.jsx)(wt,{active:t,secondaryColor:t?o.neutral1:o.neutral2,onClick:s})]}),t&&(0,i.jsxs)(jt,{children:[d&&(0,i.jsxs)(x.Ay,{height:"16px",marginBottom:"16px",children:[(0,i.jsx)(P.P.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.whyTransaction"})}),(0,i.jsx)(Ye.PD,{text:(0,i.jsx)(b.Trans,{i18nKey:"nft.whyTransaction.reason"}),children:(0,i.jsx)(bt,{})})]}),(0,i.jsx)(kt,{children:n.map((e=>{var t;return(0,i.jsx)(mt,{row:e,removeRow:u,isCollectionApprovalSection:d},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var St=n(61452),Et=n(61331),Tt=n(88438);const It=d.Ay.img`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,$t=(0,d.Ay)(x.Ay)`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${qe.r}
`,Ct=(0,d.Ay)(h.Ay)`
  text-align: right;
`,Nt=y.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${k.LO.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,Rt=d.Ay.button`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Nt}
`,Ot=d.Ay.a`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Nt}
`,_t=(0,d.Ay)(x.Ay)`
  justify-content: center;
  gap: 4px;
`,Ft=({overlayClick:e})=>{const t=(0,y.useTheme)(),{formatNumberOrString:n}=(0,S.kc)(),s=(0,B.a)((e=>e.sellAssets)),{chainId:r}=(0,l.F)(),o=(0,g.A)(r),{formatCurrencyAmount:a}=(0,S.kc)(),c=(0,Re.useMemo)((()=>He(s)),[s]),d=(0,f.A)(c.toString(),o),p=(0,Tt.useUSDCValue)(d);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{children:[(0,i.jsxs)(P.P.HeadlineSmall,{lineHeight:"28px",children:[(0,i.jsx)(b.Trans,{i18nKey:"nft.successListed"}),"\xa0",s.length>1?` ${s.length} `:"","NFT",(0,St.t)(s.length),"!"]}),(0,i.jsx)(w.A,{size:24,cursor:"pointer",onClick:e})]}),(0,i.jsx)($t,{children:s.map((e=>{var t,n,r;return(0,i.jsx)(It,{src:e.imageUrl,numImages:s.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(r=e)||void 0===r?void 0:r.tokenId))}))}),(0,i.jsxs)(x.Ay,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,i.jsx)(P.P.SubHeader,{children:(0,i.jsx)(b.Trans,{i18nKey:"nft.proceedsIfSold"})}),(0,i.jsxs)(Ct,{children:[(0,i.jsxs)(P.P.SubHeader,{children:[n({input:c,type:S.wl.NFTToken})," ETH"]}),p&&(0,i.jsx)(P.P.BodySmall,{lineHeight:"20px",color:"neutral2",children:a({amount:p,type:S.wl.FiatTokenPrice})})]})]}),(0,i.jsxs)(x.Ay,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,i.jsx)(Rt,{onClick:()=>window.location.reload(),children:(0,i.jsx)(b.Trans,{i18nKey:"nft.returnToMy"})}),(0,i.jsx)(Ot,{href:(0,Xe.Y4)(s),target:"_blank",rel:"noreferrer",children:(0,i.jsxs)(_t,{children:[(0,i.jsx)(Et.A,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,i.jsx)(b.Trans,{i18nKey:"common.share.twitter"})]})})]})]})};var Mt=n(53195),Dt=n(53412),Gt=n(20722);function Ht(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}const Bt=d.Ay.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${L.M.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${k.LO.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Vt=({overlayClick:e})=>{var t;const n=(0,l.F)(),r=(0,We.jS)(),o=null===(t=r)||void 0===t?void 0:t.getSigner(),a=(0,Gt.useTrace)({modal:s.CV.NFT_LISTING}),{formatCurrencyAmount:c}=(0,S.kc)(),d=(0,B.a)((e=>e.sellAssets)),{setListingStatusAndCallback:p,setLooksRareNonce:h,getLooksRareNonce:x,collectionsRequiringApproval:u,listings:m}=W((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:s})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:i,listings:s}))),y=(0,Re.useMemo)((()=>He(d)),[d]),[j,k]=(0,Re.useReducer)((e=>e===Pt.APPROVE?Pt.SIGN:Pt.APPROVE),Pt.APPROVE),L=(0,g.A)(n.chainId),E=(0,f.A)(y.toString(),L),T=c({amount:(0,Tt.useUSDCValue)(E),type:S.wl.FiatTokenPrice}),I=(0,Re.useMemo)((()=>u.every((e=>e.status===V.L.APPROVED))),[u]),$=(0,Re.useMemo)((()=>m.every((e=>e.status===V.L.APPROVED))),[m]),C=function(){var e,t=(e=function*(){if(o&&r){for(const e of m)yield De(e,o,r,x,h,p);(0,Dt.sendAnalyticsEvent)(s.c6.NFT_LISTING_COMPLETED,{signatures_approved:m.filter((e=>e.status===V.L.APPROVED)),list_quantity:m.length,usd_value:T,...a})}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Ht(r,i,s,o,a,"next",e)}function a(e){Ht(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,Re.useEffect)((()=>{I&&(C(),j===Pt.APPROVE&&k())}),[I]);const N=(0,Re.useCallback)((()=>{$?window.location.reload():e()}),[$,e]);return(0,Re.useEffect)((()=>{!m.length&&N()}),[m,N]),(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(Mt.default,{modal:s.CV.NFT_LISTING,children:(0,i.jsx)(Bt,{children:$?(0,i.jsx)(Ft,{overlayClick:N}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{children:[(0,i.jsx)(P.P.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.list.title"})}),(0,i.jsx)(w.A,{size:24,cursor:"pointer",onClick:N})]}),(0,i.jsx)(Lt,{sectionType:Pt.APPROVE,active:j===Pt.APPROVE,content:u,toggleSection:k}),(0,i.jsx)(Lt,{sectionType:Pt.SIGN,active:j===Pt.SIGN,content:m,toggleSection:k})]})})}),(0,i.jsx)(A.h,{onClick:N})]})};var zt=n(28800);const Kt=(0,d.Ay)(h.Ay)`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Wt=(0,d.Ay)(x.Ay)`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,qt=({dropDownOptions:e,width:t})=>{const n=(0,y.useTheme)();return(0,i.jsx)(Kt,{$width:t,children:e.map((e=>(0,i.jsxs)(Wt,{onClick:e.onClick,children:[(0,i.jsx)(P.P.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,i.jsx)(Ze.A,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var Yt=n(16941),Jt=n(0),Ut=n(74291),Xt=n(87877),Zt=n(84890);const Qt=(0,d.Ay)(h.Ay)`
  gap: 12px;
  position: relative;
`,en=(0,d.Ay)(x.Ay)`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,tn=d.Ay.div`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,nn=d.Ay.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,sn=(0,d.Ay)(x.Ay)`
  gap: 4px;
`,rn=(0,d.Ay)(x.Ay)`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${k.LO.md}px) {
    right: unset;
  }
`,on=d.Ay.div`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,an=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:s,globalOverride:r,asset:o})=>{const{t:a}=(0,b.useTranslation)(),{formatNumberOrString:l,formatDelta:c}=(0,S.kc)(),[d,p]=(0,Re.useState)(H.NONE),h=(0,B.a)((e=>e.removeSellAsset)),x=(0,B.a)((e=>e.showResolveIssues)),u=(0,Re.useRef)(),m=(0,y.useTheme)(),g=100*(1-(e??0)/(o.floorPrice??0)),f=x&&!e||d===H.ALREADY_LISTED||d===H.BELOW_FLOOR&&g>=20?ft.Tj.red400:d===H.BELOW_FLOOR?m.deprecated_accentWarning:n||e?m.accent1:m.neutral2;let v="";switch(d){case H.BELOW_FLOOR:v=a("nft.profile.priceInput.warning.belowFloor",{percentage:c(g)});break;case H.ALREADY_LISTED:var A;v=a("nft.profile.priceInput.warning.alreadyListed",{tokenAmountWithSymbol:`${l({input:(null===(A=o)||void 0===A?void 0:A.floor_sell_order_price)??0,type:S.wl.NFTToken})} ETH`})}return function(e,t,n,i){var s;(0,Re.useEffect)((()=>{var s;e(H.NONE);const r=i??0;t.current.value=`${r}`,r<((null===(s=n)||void 0===s?void 0:s.floorPrice)??0)&&r>0?e(H.BELOW_FLOOR):n.floor_sell_order_price&&r>=n.floor_sell_order_price&&n.asset_contract.tokenType!==fe.NftStandard.Erc1155&&e(H.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(s=n)||void 0===s?void 0:s.floorPrice,n.floor_sell_order_price,t,i,e])}(p,u,o,e),(0,i.jsxs)(Qt,{children:[(0,i.jsxs)(en,{borderColor:f,children:[(0,i.jsx)(Ut.O,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Xt.rf,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:u,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const i=parseFloat(n.target.value);t(isNaN(i)?void 0:i)}}),(0,i.jsx)(tn,{listPrice:e,children:"\xa0ETH"}),(n||r)&&(0,i.jsx)(nn,{onClick:()=>s(!r),children:r?(0,i.jsx)(Je.rZ,{}):(0,i.jsx)(Zt.A,{size:20,color:f})})]}),(0,i.jsx)(rn,{$color:f,children:d!==H.NONE&&(0,i.jsxs)(sn,{children:[(0,i.jsx)(j.A,{height:16,width:16,color:f}),(0,i.jsx)("span",{children:v}),(0,i.jsx)(on,{onClick:()=>{d===H.ALREADY_LISTED&&h(o),p(H.NONE)},children:d===H.BELOW_FLOOR?(0,i.jsx)(b.Trans,{i18nKey:"common.dismiss"}):(0,i.jsx)(b.Trans,{i18nKey:"common.removeItem"})})]})})]})},ln=(0,d.Ay)(x.Ay)`
  margin-bottom: 4px;
  justify-content: space-between;
`,cn=(0,d.Ay)(h.Ay)`
  gap: 12px;
  padding: 4px 0px;
`,dn=y.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,pn=d.Ay.div`
  border-radius: 4px;
  ${dn}
`,hn=d.Ay.img`
  object-fit: cover;
  border-radius: 50%;
  ${dn}
`,xn=(0,d.Ay)(P.P.BodySmall)`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,un=(0,d.Ay)(x.Ay)`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,mn=({selectedMarkets:e,asset:t,fees:n})=>{var s;const{t:r}=(0,b.useTranslation)(),{formatNumberOrString:o,formatDelta:a}=(0,S.kc)(),l=Math.max(...e.map((e=>Ve(e,t)??0)));return(0,i.jsxs)(cn,{children:[e.map((e=>{var n;return(0,i.jsxs)(ln,{children:[(0,i.jsxs)(x.Ay,{children:[(0,i.jsx)(pn,{children:(0,Xe.$4)(e.name,"16")}),(0,i.jsx)(P.P.BodySmall,{lineHeight:"16px",marginRight:"12px",children:r("nft.marketplace.royalty.header",{marketName:e.name})})]}),(0,i.jsx)(xn,{children:a(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,i.jsxs)(ln,{children:[(0,i.jsxs)(x.Ay,{children:[(0,i.jsx)(hn,{src:null===(s=t.collection)||void 0===s?void 0:s.imageUrl}),(0,i.jsx)(P.P.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.maxRoyalties"})})]}),(0,i.jsxs)(xn,{children:[l,"%"]})]}),(0,i.jsxs)(un,{children:[(0,i.jsx)(P.P.BodySmall,{lineHeight:"16px",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.maxFees"})}),(0,i.jsxs)(P.P.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?o({input:n,type:S.wl.NFTToken}):"-"," ETH"]})]})]})};var gn=n(43140);const fn=(0,d.Ay)(h.Ay)`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${k.LO.lg}px) {
    display: flex;
  }
`,yn=(0,d.Ay)(h.Ay)`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${k.LO.md}px) {
    display: flex;
  }
`,vn=(0,d.Ay)(M)`
  top: 8px;
  left: 16px;
  z-index: 3;
`,An=(0,d.Ay)(x.Ay)`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${k.LO.sm}px) {
    display: none;
  }
`,wn=(0,d.Ay)(h.Ay)`
  position: relative;
  cursor: pointer;
`,jn=d.Ay.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,bn=d.Ay.div`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${k.LO.sm}px) {
    display: none;
  }
`,kn=(0,d.Ay)(h.Ay)`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${k.LO.md}px) {
    display: flex;
  }
`,Pn=d.Ay.div`
  width: min-content;
  white-space: nowrap;
`,Ln=(0,d.Ay)(h.Ay)`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${k.LO.md}px) {
    display: flex;
  }
`,Sn=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:s,removeMarket:r,asset:o,expandMarketplaceRows:a,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{t:d}=(0,b.useTranslation)(),{formatNumberOrString:p,formatDelta:h}=(0,S.kc)(),u=(0,B.a)((e=>e.setAssetListPrice)),m=(0,B.a)((e=>e.removeAssetMarketplace)),[g,f]=(0,Re.useReducer)((e=>!e),!1),[y,v]=(0,Re.useReducer)((e=>!e),!1),[A,w]=(0,Re.useState)((()=>{var e,t;return null===(t=o.newListings)||void 0===t||null===(e=t.find((e=>{var t;return a?e.marketplace.name===(null===(t=s)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[j,k]=(0,Re.useState)(!1),L=e===G.SAME_PRICE&&!j,E=L?t:A,T=(0,Re.useCallback)((e=>{L?n(e):w(e);for(const t of s)u(o,e,t)}),[o,s,u,n,L]),I=(0,Re.useMemo)((()=>{let e=0;for(const t of s){const n=Ve(t,o)+t.fee;e=Math.max(n,e)}return e}),[o,s]),$=h(I),C=s.length>1?d("nfts.marketplace.fees.deltaMax",{percentChanged:$}):$,N=E&&E*I/100,R=E&&N&&E-N;return function(e,t,n,i,s){(0,Re.useEffect)((()=>{let r;e?(i||t(s),r=s):r=i,n(r)}),[e])}(j,w,T,A,t),function(e,t,n,i,s,r,o){(0,Re.useEffect)((()=>{var a;o===G.FLOOR_PRICE?(t(null===(a=e)||void 0===a?void 0:a.floorPrice),n(e.floorPrice)):o===G.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):o===G.SAME_PRICE&&(s&&!r?n(s):t(r)),i(!1)}),[o])}(o,w,n,k,A,t,e),(0,Re.useEffect)((()=>{L&&T(t)}),[t]),(0,i.jsxs)(x.Ay,{onMouseEnter:v,onMouseLeave:v,children:[(0,i.jsx)(yn,{children:(0,i.jsx)(P.P.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:o.floorPrice,type:S.wl.NFTToken})+o.floorPrice?" ETH":""})}),(0,i.jsx)(fn,{children:(0,i.jsx)(P.P.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:o.lastPrice?`${p({input:o.lastPrice,type:S.wl.NFTToken})} ETH`:"-"})}),(0,i.jsxs)(x.Ay,{flex:"2",children:[(a||s.length>1)&&(0,i.jsx)(An,{onMouseEnter:f,onMouseLeave:f,children:s.map(((e,t)=>{var n;return(0,i.jsxs)(wn,{onClick:t=>{t.stopPropagation(),m(o,e),r&&r()},children:[(0,i.jsx)(jn,{index:t,children:(0,Xe.$4)(e.name,"20")}),(0,i.jsx)(vn,{hovered:g&&(a??!1),children:(0,i.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=o.collection)||void 0===n?void 0:n.address)+o.tokenId)}))}),(0,i.jsx)(an,{listPrice:E,setListPrice:T,isGlobalPrice:L,setGlobalOverride:k,globalOverride:j,asset:o}),c&&(a&&y||s.length>1)&&(0,i.jsx)(bn,{onClick:l,children:a?(0,i.jsx)(Jt.m,{}):(0,i.jsx)(Yt.v,{})})]}),(0,i.jsx)(kn,{children:(0,i.jsx)(Ye.PD,{text:(0,i.jsx)(mn,{selectedMarkets:s,asset:o,fees:N}),placement:"left",children:(0,i.jsx)(Pn,{children:(0,i.jsx)(P.P.BodyPrimary,{color:"neutral2",children:I>0?C:"--%"})})})}),(0,i.jsx)(Ln,{children:(0,i.jsx)(En,{ethPrice:R})})]})},En=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,S.kc)(),n=(0,gn.M)();return(0,i.jsx)(x.Ay,{width:"100%",justify:"flex-end",children:(0,i.jsx)(P.P.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,i.jsxs)(h.Ay,{children:[(0,i.jsxs)("span",{children:[t({input:e,type:S.wl.NFTToken})," ETH"]}),(0,i.jsx)(P.P.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:S.wl.FiatNFTToken})})]}):"- ETH"})})};var Tn=n(1657);const In=(0,d.Ay)(x.Ay)`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,$n=d.Ay.div`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${k.LO.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Cn=(0,d.Ay)(x.Ay)`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${k.LO.md}px) {
    flex: 1.5;
  }
`,Nn=d.Ay.img`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Rn=y.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,On=(0,d.Ay)(h.Ay)`
  margin-right: 8px;
  min-width: 0px;
`,_n=d.Ay.div`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Rn}
`,Fn=(0,d.Ay)(P.P.BodySmall)`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Rn};
`,Mn=(0,d.Ay)(h.Ay)`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${k.LO.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${k.LO.md}px) {
    flex: 3;
  }
`,Dn=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:r})=>{var o;const[a,l]=(0,Re.useReducer)((e=>!e),!1),c=(0,B.a)((e=>e.removeSellAsset)),[d,p]=(0,Re.useState)([]),[h,x]=(0,Re.useReducer)((e=>!e),!1),u=(0,y.useTheme)();return(0,Re.useEffect)((()=>{p(JSON.parse(JSON.stringify(r)))}),[r]),(0,i.jsxs)(In,{onMouseEnter:()=>{!h&&x()},onMouseLeave:()=>{h&&x()},children:[(0,i.jsx)($n,{children:h&&(0,i.jsx)(Tn.A,{size:20,color:u.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,i.jsxs)(Cn,{children:[(0,i.jsx)(Nn,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,i.jsxs)(On,{children:[(0,i.jsx)(_n,{children:e.name?e.name:`#${e.tokenId}`}),(0,i.jsxs)(Fn,{children:[null===(o=e.collection)||void 0===o?void 0:o.name,e.collectionIsVerified&&(0,i.jsx)(Je.M3,{style:{marginBottom:"-5px"}})]})]})]}),(0,i.jsx)(Mn,{children:a&&d.length>1?d.map((r=>(0,i.jsx)(Sn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:[r],removeMarket:()=>p(d.filter((e=>e.name!==r.name))),asset:e,expandMarketplaceRows:a,rowHovered:h,toggleExpandMarketplaceRows:l},e.name+r.name))):(0,i.jsx)(Sn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:s,selectedMarkets:d,asset:e,rowHovered:h,toggleExpandMarketplaceRows:l})})]})};var Gn=n(91144);const Hn=d.Ay.div`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${k.LO.sm}px) {
    padding-left: 48px;
  }
`,Bn=d.Ay.div`
  flex: 2;

  @media screen and (min-width: ${k.LO.md}px) {
    flex: 1.5;
  }
`,Vn=(0,d.Ay)(x.Ay)`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${k.LO.md}px) {
    flex: 3;
  }
`,zn=d.Ay.div`
  display: none;
  flex: 1;

  @media screen and (min-width: ${k.LO.lg}px) {
    display: flex;
  }
`,Kn=d.Ay.div`
  display: none;
  flex: 1;

  @media screen and (min-width: ${k.LO.md}px) {
    display: flex;
  }
`,Wn=(0,d.Ay)(x.Ay)`
  flex: 2;
  gap: 4px;
`,qn=(0,d.Ay)(h.Ay)`
  position: relative;
  @media screen and (max-width: ${k.LO.sm}px) {
    display: none;
  }
`,Yn=(0,d.Ay)(x.Ay)`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Jn=(0,d.Ay)(Gn.A)`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,Un=d.Ay.div`
  position: absolute;
  top: 36px;
  right: 0px;
`,Xn=y.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${k.LO.md}px) {
    display: flex;
  }
`,Zn=d.Ay.div`
  flex: 1;
  ${Xn}
`,Qn=d.Ay.div`
  flex: 1.5;
  ${Xn}
`,ei=d.Ay.hr`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,ti=({selectedMarkets:e})=>{const t=(0,B.a)((e=>e.sellAssets)),[n,s]=(0,Re.useState)(G.CUSTOM),[r,o]=(0,Re.useState)(),[a,l]=(0,Re.useReducer)((e=>!e),!1),c=(0,Re.useRef)(null);(0,zt.W)(c,a?l:void 0);const d=(0,Re.useMemo)((()=>[{displayText:"Custom",isSelected:n===G.CUSTOM,onClick:()=>{s(G.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===G.FLOOR_PRICE,onClick:()=>{s(G.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===G.LAST_PRICE,onClick:()=>{s(G.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===G.SAME_PRICE,onClick:()=>{s(G.SAME_PRICE),l()}}]),[n]);let p;switch(n){case G.CUSTOM:p=(0,i.jsx)(b.Trans,{i18nKey:"common.custom"});break;case G.FLOOR_PRICE:p=(0,i.jsx)(b.Trans,{i18nKey:"common.floorPrice"});break;case G.LAST_PRICE:p=(0,i.jsx)(b.Trans,{i18nKey:"common.lastPrice"});break;case G.SAME_PRICE:p=(0,i.jsx)(b.Trans,{i18nKey:"common.samePrice"})}return(0,i.jsxs)(h.Ay,{children:[(0,i.jsxs)(Hn,{children:[(0,i.jsx)(Bn,{children:"NFT"}),(0,i.jsxs)(Vn,{children:[(0,i.jsx)(Kn,{children:(0,i.jsx)(b.Trans,{i18nKey:"common.floor"})}),(0,i.jsx)(zn,{children:(0,i.jsx)(b.Trans,{i18nKey:"nft.list.header.lastPrice"})}),(0,i.jsxs)(Wn,{ref:c,children:[(0,i.jsx)(b.Trans,{i18nKey:"common.price"}),(0,i.jsxs)(qn,{children:[(0,i.jsxs)(Yn,{onClick:l,children:[p," ",(0,i.jsx)(Jn,{isOpen:a})]}),a&&(0,i.jsx)(Un,{children:(0,i.jsx)(qt,{dropDownOptions:d,width:200})})]})]}),(0,i.jsx)(Zn,{children:(0,i.jsx)(b.Trans,{i18nKey:"common.fees"})}),(0,i.jsx)(Qn,{children:(0,i.jsx)(b.Trans,{i18nKey:"common.youRecieve"})})]})]}),t.map((s=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Dn,{asset:s,globalPriceMethod:n,globalPrice:r,setGlobalPrice:o,selectedMarkets:e}),t.indexOf(s)<t.length-1&&(0,i.jsx)(ei,{})]})))]})};var ni=n(80667),ii=n(31997),si=n(41723),ri=n(31352);const oi=(0,d.Ay)(ii.fI)`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,ai=d.Ay.div`
  color: ${({theme:e})=>e.neutral2};
`,li=(0,d.Ay)(ii.fI)`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${ni.dh}) {
    width: 220px;
  }
`,ci=d.Ay.div`
  display: flex;
`,di=d.Ay.div`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,pi=(0,d.Ay)(Je.Mt)`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,hi=d.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
`,xi=(0,d.Ay)(ii.VP)`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${L.M.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,ui=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,s]=(0,Re.useReducer)((e=>!e),!1),r=(0,Re.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),o=(0,Re.useRef)(null);return(0,zt.W)(o,(()=>n&&s())),(0,i.jsxs)(hi,{ref:o,children:[(0,i.jsxs)(li,{className:Xt.hY,onClick:s,children:[(0,i.jsxs)(ci,{children:[t.map(((e,n)=>(0,i.jsx)(di,{totalSelected:t.length,index:n,children:(0,Xe.$4)(e.name,"20")},n))),r]}),(0,i.jsx)(pi,{isOpen:n,secondaryColor:si.G6.colors.neutral1})]}),(0,i.jsx)(xi,{isOpen:n,children:Ie.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const s=n.includes(e),r=()=>{1===n.length&&s||t(s?n.filter((t=>t!==e)):[...n,e])};return(0,i.jsxs)(oi,{onClick:r,children:[(0,i.jsxs)(ii.fI,{gap:"12",onClick:r,children:[(0,Xe.$4)(e.name,"24"),(0,i.jsxs)(ii.VP,{children:[(0,i.jsx)(P.P.BodyPrimary,{children:e.name}),(0,i.jsxs)(ai,{className:Xt.pG,children:[e.fee,"% fee"]})]})]}),(0,i.jsx)(ri.S,{checked:s,onPress:r,variant:"branded"})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},mi=(0,d.Ay)(ii.VP)`
  gap: 4px;
  position: relative;
`,gi=(0,d.Ay)(ii.fI)`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,fi=(0,d.Ay)(ii.fI)`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,yi=(0,d.Ay)(Gn.A)`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,vi=d.Ay.div`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${L.M.dropdown};
`,Ai=(0,d.Ay)(ii.fI)`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,wi=(0,d.Ay)(j.A)`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;const ji=()=>{const{t:e}=(0,b.useTranslation)(),[t,n]=(0,Re.useState)("day"),[s,r]=(0,Re.useState)("7"),[o,a]=(0,Re.useState)(0),l=(0,B.a)((e=>e.setGlobalExpiration)),[c,d]=(0,Re.useReducer)((e=>!e),!1),p=(0,Re.useRef)(null);(0,zt.W)(p,c?d:void 0);const h=(0,Re.useMemo)((()=>[{displayText:e("common.time.hours"),isSelected:"hour"===t,onClick:()=>{n("hour"),d()}},{displayText:e("common.time.days"),isSelected:"day"===t,onClick:()=>{n("day"),d()}},{displayText:e("common.time.weeks"),isSelected:"week"===t,onClick:()=>{n("week"),d()}},{displayText:e("common.time.months"),isSelected:"month"===t,onClick:()=>{n("month"),d()}}]),[t,e]);let x;switch(t){case"hour":x=e("common.time.hours",{count:+s});break;case"day":x=e("common.time.days",{count:+s});break;case"week":x=e("common.time.weeks",{count:+s});break;case"month":x=e("common.time.months",{count:+s})}return(0,Re.useEffect)((()=>{const e=bi(parseFloat(s),t);1e3*e-Date.now()<F()("60s")||isNaN(e)?a(1):1e3*e-Date.now()>F()("180d")?a(2):a(0),l(e)}),[s,t,l]),(0,i.jsxs)(mi,{ref:p,children:[(0,i.jsxs)(gi,{isInvalid:0!==o,children:[(0,i.jsx)(Ut.O,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Xt.rf,color:{placeholder:"neutral2",default:"neutral1"},value:s,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{r(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,i.jsxs)(fi,{onClick:d,children:[x," ",(0,i.jsx)(yi,{isOpen:c})]}),c&&(0,i.jsx)(vi,{children:(0,i.jsx)(qt,{dropDownOptions:h,width:125})})]}),0!==o&&(0,i.jsxs)(Ai,{className:Xt.pG,children:[" ",(0,i.jsx)(wi,{})," ",2===o?"Maximum 6 months":"Set duration"]})]})},bi=(e,t)=>Math.round((Date.now()+F()("1h")*(()=>{switch(t){case"hour":return 1;case"day":return 24;case"week":return 168;default:return 720}})()*e)/1e3);var ki=n(41698);var Pi=n(81971);function Li(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}const Si=(0,d.Ay)(h.Ay)`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${k.LO.xs}px) {
    gap: 4px;
  }
`,Ei=d.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${k.LO.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Ti=(0,d.Ay)(Pi.A)`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${k.LO.sm}px) {
    height: 20px;
    width: 20px;
  }
`,Ii=(0,d.Ay)(x.Ay)`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${k.LO.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,$i=(0,d.Ay)(x.Ay)`
  gap: 12px;
  width: min-content;
`,Ci=d.Ay.section`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Ni=(0,d.Ay)(x.Ay)`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${k.LO.sm}px) {
    padding-left: 40px;
  }
`,Ri=d.Ay.div`
  margin-top: 24px;
  margin-bottom: 48px;
`,Oi=(0,d.Ay)(x.Ay)`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>`${e.maxWidth}px`};
  z-index: ${L.M.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${k.LO.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${k.LO.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,_i=d.Ay.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Fi=(0,d.Ay)(P.P.SubHeader)`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${k.LO.lg}px) {
    display: flex;
  }
`,Mi=(0,d.Ay)(x.Ay)`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${k.LO.sm}px) {
    gap: 20px;
  }
`,Di=(0,d.Ay)(x.Ay)`
  width: min-content;
  gap: 16px;
`,Gi=d.Ay.span`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${k.LO.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Hi=()=>{const{formatNumberOrString:e}=(0,S.kc)(),{setProfilePageState:t}=(0,ki.N)(),n=(0,l.F)(),r=(0,m.N)(),o=(0,u.a)(),a=(0,Gt.useTrace)({modal:s.CV.NFT_LISTING}),{formatCurrencyAmount:c}=(0,S.kc)(),{setGlobalMarketplaces:d,sellAssets:p,issues:y}=(0,B.a)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:v,collectionsRequiringApproval:A,setCollectionStatusAndCallback:w}=W((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),j=(0,Re.useMemo)((()=>He(p)),[p]),k=(0,g.A)(n.chainId),L=(0,f.A)(j.toString(),k),E=(0,Tt.useUSDCValue)(L),T=c({amount:E,type:S.wl.FiatTokenPrice}),[I,$]=(0,Re.useReducer)((e=>!e),!1),[C,N]=(0,Re.useState)([Ie[0]]);Be(),(0,Re.useEffect)((()=>{d(C)}),[C,d]);const R={collection_addresses:p.map((e=>e.asset_contract.address)),token_ids:p.map((e=>e.tokenId)),marketplaces:Array.from(new Set(v.map((e=>e.marketplace.name)))),list_quantity:v.length,usd_value:T,...a},O=function(){var e,t=(e=function*(){if(r){(0,Dt.sendAnalyticsEvent)(s.c6.NFT_SELL_START_LISTING,{...R});for(const t of A)(e=t.status)!==V.L.PAUSED&&e!==V.L.APPROVED&&(o?yield Fe(t,r,w):Fe(t,r,w));var e}},function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Li(r,i,s,o,a,"next",e)}function a(e){Li(r,i,s,o,a,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),_=o?(0,i.jsx)(P.P.SubHeader,{children:(0,i.jsx)(b.Trans,{i18nKey:"common.receive"})}):(0,i.jsx)(P.P.HeadlineSmall,{lineHeight:"28px",children:(0,i.jsx)(b.Trans,{i18nKey:"common.youRecieve"})});return(0,i.jsxs)(h.Ay,{children:[(0,i.jsxs)(Ci,{children:[(0,i.jsxs)(Si,{children:[(0,i.jsxs)(x.Ay,{children:[(0,i.jsx)(Ei,{children:(0,i.jsx)(Ti,{onClick:()=>t(V.A.VIEWING)})}),(0,i.jsx)(P.P.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,i.jsx)(b.Trans,{i18nKey:"nfts.my"})})]}),(0,i.jsxs)(Ni,{children:[(0,i.jsx)(Ii,{children:(0,i.jsx)(b.Trans,{i18nKey:"nfts.sell"})}),(0,i.jsxs)($i,{children:[(0,i.jsx)(ui,{setSelectedMarkets:N,selectedMarkets:C}),(0,i.jsx)(ji,{})]})]})]}),(0,i.jsx)(Ri,{children:(0,i.jsx)(ti,{selectedMarkets:C})})]}),(0,i.jsxs)(Oi,{issues:!!y,children:[_,(0,i.jsxs)(Mi,{children:[(0,i.jsxs)(Di,{children:[(0,i.jsxs)(Gi,{totalEthListingValue:!!j,children:[j>0?e({input:j,type:S.wl.NFTToken}):"-"," ","ETH"]}),!!E&&(0,i.jsx)(Fi,{children:T})]}),(0,i.jsx)(Ke,{onClick:()=>{$(),O()}})]})]}),(0,i.jsx)(_i,{}),I&&(0,i.jsx)(Vt,{overlayClick:$})]})};var Bi=n(14600),Vi=n(46529),zi=n(40148),Ki=n(81098),Wi=n(10118),qi=n(50946),Yi=n(35614),Ji=n(55258),Ui=n(32034),Xi=(n(91103),n(31151)),Zi=n(57728),Qi=n(62735),es=n(87381),ts=n(16440),ns=n(89093),is=n(28244);const ss=(0,d.Ay)(ii.VP)`
  ${qe.r}
  height: 100vh;
`,rs=(0,d.Ay)(Ui.P)`
  min-height: 15px;
  width: 75%;
`,os=(0,d.Ay)(Ui.P)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,as=(0,d.Ay)(ii.fI)`
  justify-content: space-between;
  padding-bottom: 8px;
`,ls=({style:e})=>(0,i.jsxs)(ii.fI,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,i.jsxs)(ii.fI,{display:"flex",flex:"1",children:[(0,i.jsx)(os,{}),(0,i.jsx)(rs,{})]}),(0,i.jsx)(Vi.a,{as:"span",borderColor:"surface3","aria-hidden":"true"})]}),cs=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:s})=>{const r=(0,Xi.I)((e=>e.collectionFilters)),o=(0,Xi.I)((e=>e.setCollectionFilters)),[a,l]=(0,Zi.s)(),c=(0,u.a)(),d=(0,Re.useMemo)((()=>{var e;return s&&(null===(e=s)||void 0===e?void 0:e.length)>=Gs||n}),[s,n]);return(0,i.jsx)(Vi.a,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:a?"flex":"none",style:{transform:c?void 0:`translateX(${a?0:-360}px)`},children:(0,i.jsxs)(Vi.a,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,i.jsxs)(as,{children:[(0,i.jsx)(P.P.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Je.fK,{height:28,width:28,fill:si.G6.colors.neutral1,onClick:()=>l(!1)})]}),(0,i.jsx)(ds,{collections:s,collectionFilters:r,setCollectionFilters:o,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:d})]})})},ds=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:s,hasNextPage:r,isFetchingNextPage:o,hideSearch:a})=>{const[l,c]=(0,Re.useState)(""),[d,p]=(0,Re.useState)(e);(0,Re.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));p(t)}else p(e)}),[l,e]);const h=(0,Re.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),x=r?d.length+1:d.length,u=o?is.default:s,m=(0,Re.useCallback)((e=>!r||e<d.length),[d.length,r]),g=(0,Re.useCallback)((({index:e,style:s})=>!(!!d&&d[e])||o?(0,i.jsx)(ls,{style:s},e):(0,i.jsx)(hs,{style:s,collection:d[e],collectionFilters:t,setCollectionFilters:n},h(e,d))),[d,o,h,t,n]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Vi.a,{className:Xt.Hu,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,i.jsx)(Vi.a,{paddingBottom:"12",borderRadius:"8",children:(0,i.jsxs)(ii.VP,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!a&&(0,i.jsx)(ps,{collectionSearchText:l,setCollectionSearchText:c}),(0,i.jsx)(ss,{children:(0,i.jsx)(Qi.default,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(ts.A,{isItemLoaded:m,itemCount:x,loadMoreItems:u,children:({onItemsRendered:t,ref:n})=>(0,i.jsx)(es.FixedSizeList,{height:e,width:"100%",itemCount:x,itemSize:44,onItemsRendered:t,itemKey:h,ref:n,children:g})})})})]})})]})},ps=({collectionSearchText:e,setCollectionSearchText:t})=>(0,i.jsx)(Ut.p,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),hs=({collection:e,collectionFilters:t,setCollectionFilters:n,style:s})=>{const[r,o]=(0,Re.useState)(!1),a=(0,Re.useCallback)((e=>t.some((t=>t===e))),[t]),l=()=>{o(!r),n(e.address)};return(0,i.jsxs)(ii.fI,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...s},maxHeight:"44",as:"li",onClick:l,children:[(0,i.jsxs)(ii.fI,{children:[(0,i.jsx)(Vi.a,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsxs)(Vi.a,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,i.jsx)(ns.R,{checked:a(e.address),onCheckPressed:l,text:String(e.count)})]})};var xs=n(65528);const us=d.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,ms=d.Ay.div`
  display: flex;
  flex-direct: row;
  width: 100%;
`,gs=(0,d.Ay)(ms)`
  gap: 12px;
  margin-bottom: 30px;
`,fs=d.Ay.div`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,ys=(0,d.Ay)(ms)`
  justify-content: space-between;
`,vs=d.Ay.div`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,As=d.Ay.div`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,ws=d.Ay.div`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,js=()=>(0,i.jsx)(Vi.a,{width:"full",className:Wi.l,children:Array.from(Array(Ds),((e,t)=>(0,i.jsx)(ws,{className:xs.J},t)))}),bs=()=>(0,i.jsxs)(us,{children:[(0,i.jsx)(gs,{children:(0,i.jsx)(fs,{className:xs.J})}),(0,i.jsxs)(ys,{children:[(0,i.jsx)(vs,{className:xs.J}),(0,i.jsx)(As,{className:xs.J})]}),(0,i.jsx)(js,{})]});var ks=n(84226),Ps=n(47256),Ls=n(76191),Ss=n(88361);const Es=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:r})=>{const o=(0,B.a)((e=>e.sellAssets)),a=(0,B.a)((e=>e.selectSellAsset)),l=(0,B.a)((e=>e.removeSellAsset)),c=(0,Ls.s)((e=>e.bagExpanded)),d=(0,Ls.s)((e=>e.toggleBag)),p=(0,u.a)(),h=(0,Ss.Zp)(),x=(0,Re.useMemo)((()=>o.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,o]),m=(0,Gt.useTrace)(),g=t=>{t?l(e):(a(e),(0,Dt.sendAnalyticsEvent)(s.c6.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...m})),c||o.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||p||d()},f=e.susFlag,y=(0,Re.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,i.jsx)(Je.M3,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,i.jsx)(b.Trans,{i18nKey:"nft.removeFromBag"}),notSelectedInfo:(0,i.jsx)(b.Trans,{i18nKey:"nft.listForSale"}),disabledInfo:(0,i.jsx)(b.Trans,{i18nKey:"nft.unavailableToList"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,i.jsx)(ks.R,{asset:e,display:y,isSelected:x,isDisabled:Boolean(f),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(x),onCardClick:()=>{r||h((0,Ps.Ge)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})};var Ts=n(81827),Is=n(1147),$s=(e=>(e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG",e))($s||{});function Cs(e,t,n,i,s,r,o){try{var a=e[r](o),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(i,s)}function Ns(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function o(e){Cs(r,i,s,o,a,"next",e)}function a(e){Cs(r,i,s,o,a,"throw",e)}o(void 0)}))}}const Rs=function(){var e=Ns((function*({params:e}){let t=!1;if(!e)return[];for(const s of Object.values(e))void 0===s&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),i=yield n.json();return i?i.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var Os=n(72964);const _s=(0,d.Ay)(ii.VP)`
  ${Ts.Tv}
`,Fs=d.Ay.div`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Ms=d.Ay.div`
  margin-top: 164px;
`,Ds=25,Gs=300,Hs=()=>{const e=(0,l.F)(),t=(0,Xi.I)((e=>e.walletCollections)),n=(0,Xi.I)((e=>e.setWalletCollections)),{resetSellAssets:s}=(0,B.a)((({reset:e})=>({resetSellAssets:e}))),r=(0,B.a)((e=>e.sellAssets)),o=(0,Ls.s)((e=>e.toggleBag)),[a,c]=(0,Zi.s)(),d=(0,u.a)(),{data:p,fetchNextPage:h,hasNextPage:x,isFetchingNextPage:m,isSuccess:g}=(0,Bi.q)((f=e.address??"",(0,Is.L)({queryKey:["ownerCollections",{address:f}],queryFn:function(){var e=Ns((function*({pageParam:e}){const t={asset_owner:f,offset:""+e*Gs,limit:`${Gs}`};return{data:yield Rs(t),nextPage:e+1}}));return function(t){return e.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:$s.MEDIUM})));var f;const y=(0,Re.useMemo)((()=>{var e;return g?null===(e=p)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[g,p]);return(0,Re.useEffect)((()=>{y&&n(y)}),[y,n]),(0,i.jsxs)(_s,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Fs,{children:"My NFTs"}),(0,i.jsxs)(ii.fI,{alignItems:"flex-start",position:"relative",children:[(0,i.jsx)(cs,{fetchNextPage:h,hasNextPage:x,isFetchingNextPage:m,walletCollections:t}),(!d||!a)&&(0,i.jsx)(Re.Suspense,{fallback:(0,i.jsx)(bs,{}),children:(0,i.jsx)(Bs,{walletCollections:t,isFiltersExpanded:a,setFiltersExpanded:c})})]})]}),r.length>0&&(0,i.jsxs)(ii.fI,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Xt.Hu,children:[r.length," NFT",1===r.length?"":"s",(0,i.jsx)(Vi.a,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:s,lineHeight:"16",children:"Clear"}),(0,i.jsx)(Vi.a,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:o,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Bs=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var s,r,o,a,c;const d=(0,l.F)(),p=(0,Xi.I)((e=>e.setCollectionFilters)),h=(0,Xi.I)((e=>e.collectionFilters)),x=(0,Xi.I)((e=>e.clearCollectionFilters)),m=(0,Ls.s)((e=>e.bagExpanded)),[g,f]=(0,Re.useState)(),y=(0,u.a)(),v=(0,B.a)((e=>e.sellAssets)),{walletAssets:A,loading:w,hasNext:j,loadMore:b}=(0,zi.S)({ownerAddress:d.address??"",collectionFilters:h,first:Ds});return w?(0,i.jsx)(bs,{}):(0,i.jsx)(ii.VP,{width:"full",children:0===(null===(s=A)||void 0===s?void 0:s.length)?(0,i.jsx)(Ms,{children:(0,i.jsx)(Ji.V,{})}):(0,i.jsxs)(Vi.a,{flexShrink:"0",position:y&&m?"fixed":"static",style:{transform:`translate(${Number(t?300:-16)-(!y&&t?300:-16)}px)`},paddingY:"20",children:[(0,i.jsx)(ii.fI,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,i.jsx)(qi.F,{isMobile:y,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,i.jsx)(ii.fI,{children:(0,i.jsx)(Vs,{collections:e,collectionFilters:h,setCollectionFilters:p,clearCollectionFilters:x})}),(0,i.jsx)(Os.A,{next:b,hasMore:j??!1,loader:Boolean(j&&(null===(r=A)||void 0===r?void 0:r.length))&&(0,i.jsx)(Ki.O,{count:Ds}),dataLength:(null===(o=A)||void 0===o?void 0:o.length)??0,className:(null===(a=A)||void 0===a?void 0:a.length)?Wi.l:void 0,style:{overflow:"unset"},children:(null===(c=A)||void 0===c?void 0:c.length)?A.map(((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(Es,{asset:e,mediaShouldBePlaying:e.tokenId===g,setCurrentTokenPlayingMedia:f,hideDetails:v.length>0})},t))):null})]})})},Vs=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:s})=>{var r,o;const a=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,Re.useCallback)((()=>s()),[s]);return(0,i.jsxs)(ii.fI,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(r=t)||void 0===r?void 0:r.length)&&t.map(((e,t)=>(0,i.jsx)(zs,{collection:a(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(o=t)||void 0===o?void 0:o.length)&&(0,i.jsx)(Yi.n,{onClick:l,children:"Clear all"})]})},zs=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,i.jsxs)(ii.fI,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,i.jsx)(Vi.a,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,i.jsx)(Vi.a,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,i.jsx)(Vi.a,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,i.jsx)(Je.w0,{})})]}):null};var Ks=n(68957),Ws=n(2029);const qs=d.Ay.div`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${k.LO.lg}px) {
    height: auto;
  }
`,Ys=d.Ay.div`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.Lg:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${k.LO.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Js=d.Ay.div`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Us=(0,d.Ay)(o.$$)`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Xs(e,t,n){return t?n?e("nft.authorsCollectionOnUni",{name:n}):e("nft.collectonOnAddress",{address:(0,Ws.shortenAddress)(t)}):e("nft.collectionOnUni")}function Zs(){const{t:e}=(0,b.useTranslation)(),t=(0,ki.N)((e=>e.state)),n=(0,ki.N)((e=>e.setProfilePageState)),o=(0,B.a)((e=>e.reset)),d=(0,Xi.I)((e=>e.clearCollectionFilters)),p=(0,l.F)(),{ENSName:h}=(0,c.A)(p.address),x=(0,Re.useRef)(p.address),u=(0,r.O)();(0,Re.useEffect)((()=>{x.current!==p.address&&(x.current=p.address,o(),n(V.A.VIEWING),d())}),[p.address,o,n,d]);const m=(0,Ls.s)((e=>e.bagExpanded)),g=t===V.A.LISTING;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ks.Helmet,{children:(0,i.jsx)("title",{children:Xs(e,p.address,h)})}),(0,i.jsx)(Mt.default,{logImpression:!0,page:s.Om.NFT_PROFILE_PAGE,children:(0,i.jsx)(qs,{children:p.isConnected?(0,i.jsx)(Ys,{cartExpanded:m,isListingNfts:g,children:g?(0,i.jsx)(Hi,{}):(0,i.jsx)(Hs,{})}):(0,i.jsxs)(Js,{children:[(0,i.jsx)(P.P.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,i.jsx)(b.Trans,{i18nKey:"nft.noItems"})}),(0,i.jsx)(Us,{onClick:u.open,children:(0,i.jsx)(P.P.SubHeader,{color:"white",lineHeight:"20px",children:(0,i.jsx)(a.$,{})})})]})})})]})}}}]);
//# sourceMappingURL=3782.a46353b1.chunk.js.map
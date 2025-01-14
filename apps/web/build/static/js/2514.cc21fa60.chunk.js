"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[2514],{11964:(e,t,r)=>{r.d(t,{G:()=>n});var i=r(33962),a=r(85141);function s(e,t){var r,i,a,s,n,o,l,d,c,p,g,u,h,x,m,f,v,w,y,j,b,k,T,C,z,I,_,S,A,E,N,$,R,M,P,F,H,B,L,O,D;const U=null===(i=e)||void 0===i||null===(r=i.markets)||void 0===r?void 0:r[0];if(!t&&!(null===(n=e)||void 0===n||null===(s=n.nftContracts)||void 0===s||null===(a=s[0])||void 0===a?void 0:a.address))return{};const W={};var K;(null===(o=e)||void 0===o?void 0:o.traits)&&(null===(K=e)||void 0===K||K.traits.forEach((e=>{e.name&&e.stats&&(W[e.name]=e.stats.map((e=>({trait_type:e.name,trait_value:e.value,trait_count:e.assets}))))})));return{address:t??(null===(c=e)||void 0===c||null===(d=c.nftContracts)||void 0===d||null===(l=d[0])||void 0===l?void 0:l.address)??"",isVerified:null===(p=e)||void 0===p?void 0:p.isVerified,name:null===(g=e)||void 0===g?void 0:g.name,description:null===(u=e)||void 0===u?void 0:u.description,standard:null===(m=e)||void 0===m||null===(x=m.nftContracts)||void 0===x||null===(h=x[0])||void 0===h?void 0:h.standard,bannerImageUrl:null===(v=e)||void 0===v||null===(f=v.bannerImage)||void 0===f?void 0:f.url,stats:{num_owners:null===(w=U)||void 0===w?void 0:w.owners,floor_price:null===(j=U)||void 0===j||null===(y=j.floorPrice)||void 0===y?void 0:y.value,one_day_volume:null===(k=U)||void 0===k||null===(b=k.volume)||void 0===b?void 0:b.value,one_day_change:null===(C=U)||void 0===C||null===(T=C.volumePercentChange)||void 0===T?void 0:T.value,one_day_floor_change:null===(I=U)||void 0===I||null===(z=I.floorPricePercentChange)||void 0===z?void 0:z.value,banner_image_url:null===(S=e)||void 0===S||null===(_=S.bannerImage)||void 0===_?void 0:_.url,total_supply:null===(A=e)||void 0===A?void 0:A.numAssets,total_listings:null===(N=U)||void 0===N||null===(E=N.listings)||void 0===E?void 0:E.value,total_volume:null===(R=U)||void 0===R||null===($=R.totalVolume)||void 0===$?void 0:$.value},traits:W,marketplaceCount:null===(P=U)||void 0===P||null===(M=P.marketplaces)||void 0===M?void 0:M.map((e=>{var t;return{marketplace:(null===(t=e.marketplace)||void 0===t?void 0:t.toLowerCase())??"",count:e.listings??0,floorPrice:e.floorPrice??0}})),imageUrl:(null===(H=e)||void 0===H||null===(F=H.image)||void 0===F?void 0:F.url)??"",twitterUrl:null===(B=e)||void 0===B?void 0:B.twitterName,instagram:null===(L=e)||void 0===L?void 0:L.instagramName,discordUrl:null===(O=e)||void 0===O?void 0:O.discordUrl,externalUrl:null===(D=e)||void 0===D?void 0:D.homepageUrl,rarityVerified:!1}}function n(e,t){var r,n,o,l;const{data:d,loading:c}=(0,a.useCollectionQuery)({variables:{addresses:e},skip:t}),p=null===(l=d)||void 0===l||null===(o=l.nftCollections)||void 0===o||null===(n=o.edges)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.node;return(0,i.useMemo)((()=>({data:s(p,e),loading:c})),[e,c,p])}},4177:(e,t,r)=>{r.r(t),r.d(t,{BannerWrapper:()=>Nr,CollectionBannerLoading:()=>Sr,default:()=>Br});var i=r(95682),a=r(29477),s=r(79865),n=r(32034),o=r(45353),l=r(63247),d=r(11964),c=r(69618),p=r(68069),g=r(78135),u=r(16444),h=r(83286),x=r(46529),m=r(31997),f=(r(91103),r(87877)),v=r(76191),w=r(46973),y=r(61452),j=r(91071);const b=()=>{const e=(0,v.s)((e=>e.itemsInBag)),t=(0,v.s)((e=>e.toggleBag)),r=(0,w.y)(),a=(0,w.z)(),{formatEther:s,formatNumberOrString:n}=(0,j.kc)(),o=e.length>0;return(0,i.jsxs)(m.fI,{display:{sm:o?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,i.jsxs)(m.fI,{gap:"8",children:[(0,i.jsx)(x.a,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,i.jsx)(x.a,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,i.jsxs)(m.VP,{children:[(0,i.jsx)(x.a,{className:f.rf,fontWeight:"medium",children:(0,y.e)(e.length,"NFT")}),(0,i.jsxs)(m.fI,{gap:"8",children:[(0,i.jsxs)(x.a,{className:f.rf,children:[`${s({input:r.toString(),type:j.wl.NFTToken})}`," ETH"]}),(0,i.jsx)(x.a,{color:"neutral2",className:f.ct,children:n({input:a,type:j.wl.FiatNFTToken})})]})]})]}),(0,i.jsx)(x.a,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var k=r(71336),T=r(55199),C=(r(60033),"_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf"),z="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",I="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha",_=r(94412),S=r(65528),A=r(41723),E=r(38089),N=r(98267);const $=(0,E.vt)()((0,N.lt)((e=>({isCollectionNftsLoading:!1,setIsCollectionNftsLoading:t=>e((()=>({isCollectionNftsLoading:t}))),isCollectionStatsLoading:!1,setIsCollectionStatsLoading:t=>e((()=>({isCollectionStatsLoading:t})))})),{name:"useIsCollectionLoading"}));var R=r(9881);const M=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var P=r(33962),F=r(70117),H=r.n(F),B=r(66954);const L=u.Ay.div`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,O=u.Ay.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,D=u.Ay.div`
  ${S.J}
  height: 32px;
  width: 236px;
`,U=u.Ay.div`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,W=({children:e,href:t})=>(0,i.jsx)(x.a,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),K=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:r})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(U,{onClick:r,children:t?(0,i.jsx)(_.fK,{width:"28",height:"28",fill:A.G6.colors.neutral2}):(0,i.jsx)(_.z_,{width:"28",height:"20",fill:A.G6.colors.neutral2})}),t&&(0,i.jsxs)(m.fI,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,i.jsx)(W,{href:e.discordUrl,children:(0,i.jsx)(x.a,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(_.EI,{width:28,height:28,color:A.G6.colors.neutral2})})}):null,e.twitterUrl?(0,i.jsx)(W,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(x.a,{margin:"auto",paddingTop:"6",children:(0,i.jsx)(_.Fi,{fill:A.G6.colors.neutral2,color:A.G6.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,i.jsx)(W,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(x.a,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,i.jsx)(_.oW,{fill:A.G6.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,i.jsx)(W,{href:e.externalUrl,children:(0,i.jsx)(x.a,{margin:"auto",paddingTop:"4",children:(0,i.jsx)(_.XM,{fill:A.G6.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),V=({children:e,href:t})=>(0,i.jsx)(m.VP,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),G=({collectionStats:e,name:t,isVerified:r,isMobile:a,collectionSocialsIsOpen:s,toggleCollectionSocials:n})=>{const o=$((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(m.fI,{justifyContent:"space-between",children:[(0,i.jsxs)(m.fI,{minWidth:"0",children:[o?(0,i.jsx)(D,{}):(0,i.jsx)(O,{isVerified:r,className:a?f.OC:f.YU,children:t}),r&&(0,i.jsx)(_.M3,{style:{width:"32px",height:"32px"}}),(0,i.jsxs)(m.fI,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,i.jsx)(V,{href:e.discordUrl??"",children:(0,i.jsx)(_.EI,{fill:A.G6.colors.neutral2,color:A.G6.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,i.jsx)(V,{href:"https://twitter.com/"+e.twitterUrl,children:(0,i.jsx)(_.Fi,{fill:A.G6.colors.neutral2,color:A.G6.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,i.jsx)(V,{href:"https://instagram.com/"+e.instagram,children:(0,i.jsx)(_.oW,{fill:A.G6.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,i.jsx)(V,{href:e.externalUrl??"",children:(0,i.jsx)(_.XM,{fill:A.G6.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),a&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,i.jsx)(K,{collectionStats:e,collectionSocialsIsOpen:s,toggleCollectionSocials:n})]})},X=u.Ay.p`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?T.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:T.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,Y=u.Ay.span`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,J=()=>(0,i.jsx)(x.a,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),q=({description:e})=>{const[t,r]=(0,P.useState)(!1),[a,s]=(0,P.useReducer)((e=>!e),!1),n=(0,P.useRef)(null),o=(0,P.useRef)(null),l=$((e=>e.isCollectionStatsLoading)),d=(0,c.a)();return(0,P.useEffect)((()=>{var e;n&&o&&n.current&&o.current&&(o.current.getBoundingClientRect().width>=(null===(e=n.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||o.current.getBoundingClientRect().width>=590)?r(!0):r(!1)}),[o,n,l,e]),l?(0,i.jsx)(J,{}):(0,i.jsxs)(x.a,{ref:n,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,i.jsx)(X,{readMore:a,ref:o,className:d?f.ct:f.rf,children:(0,i.jsx)(H(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,i.jsxs)(Y,{className:d?f.ct:f.rf,onClick:s,children:["show ",a?"less":"more"]})]})},Q=({children:e,label:t,shouldHide:r})=>(0,i.jsxs)(x.a,{display:r?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,i.jsx)(B.P.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,i.jsx)(x.a,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),Z=e=>new Array(e?3:5).fill(null).map(((t,r)=>(0,i.jsxs)(x.a,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,i.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,i.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${r}`))),ee=({stats:e,isMobile:t,...r})=>{var a,s,n,o,l,d,c,g,u,h,x,f,w,y;const{formatNumberOrString:b,formatDelta:T}=(0,j.kc)(),C=(null===(s=e)||void 0===s||null===(a=s.stats)||void 0===a?void 0:a.total_supply)?M((e.stats.num_owners??0)/e.stats.total_supply*100):0,z=e.stats?b({input:e.stats.total_supply??0,type:j.wl.NFTCollectionStats}):0,I=(null===(o=e)||void 0===o||null===(n=o.stats)||void 0===n?void 0:n.total_supply)?M((e.stats.total_listings??0)/e.stats.total_supply*100):0,_=$((e=>e.isCollectionStatsLoading)),S=b({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:j.wl.NFTCollectionStats}),A=b({input:(null===(d=e.stats)||void 0===d?void 0:d.floor_price)??0,type:j.wl.NFTTokenFloorPrice}),E=T(Math.round(Math.abs((null===(g=e)||void 0===g||null===(c=g.stats)||void 0===c?void 0:c.one_day_floor_change)??0))),N=(0,v.s)((e=>e.bagExpanded)),P=(0,p.l)(),F=t||!P.lg&&N;return(0,i.jsx)(m.fI,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...r,children:_?Z(t??!1):(0,i.jsxs)(i.Fragment,{children:[(null===(u=e.stats)||void 0===u?void 0:u.floor_price)?(0,i.jsxs)(Q,{label:"Global floor",shouldHide:!1,children:[A," ETH"]}):null,void 0!==(null===(h=e.stats)||void 0===h?void 0:h.one_day_floor_change)?(0,i.jsx)(Q,{label:"Floor 24H",shouldHide:!1,children:(0,i.jsxs)(L,{isNegative:e.stats.one_day_floor_change<0,children:[(0,i.jsx)(k.Is,{delta:null===(f=e)||void 0===f||null===(x=f.stats)||void 0===x?void 0:x.one_day_floor_change}),E]})}):null,(null===(w=e.stats)||void 0===w?void 0:w.total_volume)?(0,i.jsxs)(Q,{label:"Total volume",shouldHide:!1,children:[S," ETH"]}):null,z?(0,i.jsx)(Q,{label:"Items",shouldHide:t??!1,children:z}):null,C&&e.standard!==R.ks.ERC1155?(0,i.jsxs)(Q,{label:"Unique owners",shouldHide:F??!1,children:[C,"%"]}):null,(null===(y=e.stats)||void 0===y?void 0:y.total_listings)&&e.standard!==R.ks.ERC1155?(0,i.jsxs)(Q,{label:"Listed",shouldHide:F??!1,children:[I,"%"]}):null]})})},te=({isMobile:e})=>(0,i.jsxs)(m.VP,{position:"relative",width:"full",children:[(0,i.jsx)(x.a,{className:z}),(0,i.jsx)(x.a,{className:C}),(0,i.jsxs)(x.a,{className:I,children:[(0,i.jsx)(x.a,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J,{}),(0,i.jsx)(m.fI,{gap:"60",marginTop:"20",children:Z(!1)})]})]}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(J,{}),(0,i.jsx)(m.fI,{gap:"20",marginTop:"20",children:Z(!0)})]})]}),re=({stats:e,isMobile:t})=>{const[r,a]=(0,P.useReducer)((e=>!e),!1),s=$((e=>e.isCollectionStatsLoading));return(0,i.jsxs)(x.a,{display:"flex",marginTop:t&&!e.bannerImageUrl?r?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[s&&(0,i.jsx)(x.a,{as:"div",borderRadius:"round",position:"absolute",className:z}),(0,i.jsx)(x.a,{as:s?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:s?C:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,i.jsxs)(x.a,{className:I,children:[(0,i.jsx)(G,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:r,toggleCollectionSocials:a}),(e.description||s)&&!t&&(0,i.jsx)(q,{description:e.description??""}),(0,i.jsx)(ee,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||s)&&t&&(0,i.jsx)(q,{description:e.description??""}),(0,i.jsx)("div",{id:"nft-anchor-mobile"}),(0,i.jsx)(ee,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var ie="_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf",ae="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9",se=r(53195);const ne=(0,u.Ay)(m.fI)`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,oe=new Array(2).fill(null).map(((e,t)=>(0,i.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),le=({showActivity:e,toggleActivity:t})=>{const r=$((e=>e.isCollectionStatsLoading));return(0,i.jsx)(ne,{gap:"24",marginBottom:"16",children:r?oe:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.a,{as:"button",className:e?ie:ae,onClick:()=>e&&t(),children:"Items"}),(0,i.jsx)(se.default,{logPress:!0,element:a.nM.NFT_ACTIVITY_TAB,eventOnTrigger:a.c6.NFT_ACTIVITY_SELECTED,children:(0,i.jsx)(x.a,{as:"button",className:e?ae:ie,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var de=r(55043),ce=r(23974),pe=r(23143),ge=r(18070),ue=r(59409),he=r(50946),xe=(e=>(e[e.LowToHigh=0]="LowToHigh",e[e.HighToLow=1]="HighToLow",e[e.RareToCommon=2]="RareToCommon",e[e.CommonToRare=3]="CommonToRare",e))(xe||{});const me={1:"highest",0:"lowest",2:"rare",3:"common"},fe={1:{field:"PRICE",asc:!1},0:{field:"PRICE",asc:!0},2:{field:"RARITY",asc:!0},3:{field:"RARITY",asc:!1}},ve={minPrice:"",maxPrice:"",minRarity:"",maxRarity:"",traits:[],hasRarity:!1,markets:[],marketCount:{},buyNow:!1,search:"",sortBy:0,showFullTraitName:{shouldShow:!1,trait_value:"",trait_type:""}},we=(0,E.vt)()((0,N.lt)((e=>({...ve,setHasRarity:t=>e({hasRarity:t}),setSortBy:t=>e({sortBy:t}),setSearch:t=>e({search:t}),setBuyNow:t=>e({buyNow:t}),setMarketCount:t=>e({marketCount:t}),addMarket:t=>e((({markets:e})=>({markets:[...e,t]}))),removeMarket:t=>e((({markets:e})=>({markets:e.filter((e=>t!==e))}))),addTrait:t=>e((({traits:e})=>({traits:[...e,t]}))),removeTrait:t=>e((({traits:e})=>({traits:e.filter((e=>JSON.stringify(e)!==JSON.stringify(t)))}))),reset:()=>e((()=>({traits:[],minRarity:"",maxRarity:"",markets:[],minPrice:"",maxPrice:""}))),setMinPrice:t=>e((()=>({minPrice:t}))),setMaxPrice:t=>e((()=>({maxPrice:t}))),setMinRarity:t=>e((()=>({minRarity:t}))),setMaxRarity:t=>e((()=>({maxRarity:t}))),toggleShowFullTraitName:({shouldShow:t,trait_value:r,trait_type:i})=>e((()=>({showFullTraitName:{shouldShow:t,trait_value:r,trait_type:i}})))})),{name:"useCollectionTraits"})),ye=()=>{const e=we((e=>e.setSearch)),t=we((e=>e.search)),r=$((e=>e.isCollectionStatsLoading));return(0,i.jsx)(x.a,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:r?"":"Search by name",className:(0,pe.default)(r&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var je=r(84226),be=r(68097),ke=r(35480),Te=r(53412),Ce=r(20722);const ze=({asset:e,isMobile:t,mediaShouldBePlaying:r,setCurrentTokenPlayingMedia:s,uniformAspectRatio:n,setUniformAspectRatio:o,renderedHeight:l,setRenderedHeight:d})=>{var c,p;const{formatEther:g}=(0,j.kc)(),u=(0,v.s)((e=>e.bagManuallyClosed)),h=(0,v.s)((e=>e.addAssetsToBag)),x=(0,v.s)((e=>e.removeAssetsFromBag)),m=(0,v.s)((e=>e.itemsInBag)),f=(0,v.s)((e=>e.bagExpanded)),w=(0,v.s)((e=>e.setBagExpanded)),y=(0,Ce.useTrace)({page:a.Om.NFT_COLLECTION_PAGE}),{isSelected:b}=(0,P.useMemo)((()=>({isSelected:m.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,m]),k=e.notForSale||de.gH.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(p=e)||void 0===p||null===(c=p.rarity)||void 0===c?void 0:c.providers)?e.rarity.providers[0]:void 0,C=(0,P.useCallback)((()=>{var r;de.gH.from((null===(r=e.priceInfo)||void 0===r?void 0:r.ETHPrice)??0).gt(0)&&(h([e]),f||t||u||w({bagExpanded:!0}),(0,Te.sendAnalyticsEvent)(a.c6.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...y}))}),[h,e,f,u,t,w,y]),z=(0,P.useCallback)((()=>{x([e])}),[e,x]),I=(0,P.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,i.jsx)(be.kY,{}):null,primaryInfoRight:e.rarity&&T?(0,i.jsx)(be.JO,{provider:T}):null,secondaryInfo:k?"":`${g({input:e.priceInfo.ETHPrice,type:j.wl.NFTToken})} ETH`,selectedInfo:(0,i.jsx)(ke.Trans,{i18nKey:"nft.removeFromBag"}),notSelectedInfo:(0,i.jsx)(ke.Trans,{i18nKey:"nft.addToBag"}),disabledInfo:(0,i.jsx)(ke.Trans,{i18nKey:"nft.notListed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,g,k,T]);return(0,i.jsx)(je.R,{asset:e,display:I,isSelected:b,isDisabled:Boolean(e.notForSale),selectAsset:C,unselectAsset:z,mediaShouldBePlaying:r,uniformAspectRatio:n,setUniformAspectRatio:o,renderedHeight:l,setRenderedHeight:d,setCurrentTokenPlayingMedia:s,testId:"nft-collection-asset"})};var Ie=r(81098),_e=r(10118),Se="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",Ae="_10b1b4vc",Ee="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",Ne="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",$e="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",Re="_10b1b4v2",Me=(e=>(e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX",e))(Me||{});const Pe=(0,E.vt)()((0,N.lt)((e=>({traitsOpen:{},setTraitsOpen:(t,r)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:r}})))}})),{name:"useTraitsOpen"}));var Fe=r(35249),He=r(89093);const Be=(0,u.Ay)(m.fI)`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,Le=(0,u.Ay)(m.fI)`
  gap: 10px;
`,Oe={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},De=({title:e,element:t,onClick:r})=>(0,i.jsxs)(Be,{onClick:r,children:[(0,i.jsx)(B.P.BodyPrimary,{children:e}),(0,i.jsx)(B.P.SubHeaderSmall,{children:t})]}),Ue=({title:e,value:t,addMarket:r,removeMarket:s,isMarketSelected:n,count:o})=>{const[l,d]=(0,P.useState)(!1);(0,P.useEffect)((()=>{d(n)}),[n]);const c=()=>{l?(s(t),d(!1)):(r(t),d(!0)),(0,Te.sendAnalyticsEvent)(a.c6.NFT_FILTER_SELECTED,{filter_type:a.AI.MARKETPLACE})},p=(0,i.jsx)(He.R,{variant:"branded",checked:l,onCheckPressed:c,text:String(o)}),g=(0,i.jsxs)(Le,{children:[(0,Fe.$4)(e,"16"),e]});return(0,i.jsx)("div",{children:(0,i.jsx)(De,{title:g,element:p,onClick:c})},t)},We=({title:e,items:t,onClick:r,isOpen:a})=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.a,{className:Ee,opacity:a?"1":"0"}),(0,i.jsxs)(x.a,{as:"details",className:(0,pe.default)(f.Q6,!a&&Re),open:a,borderRadius:a?"0":"12",children:[(0,i.jsxs)(x.a,{as:"summary",className:`${$e} ${Re}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:r,children:[e,(0,i.jsx)(x.a,{display:"flex",alignItems:"center",children:(0,i.jsx)(x.a,{className:Se,style:{transform:`rotate(${a?0:180}deg)`},children:(0,i.jsx)(_.Mt,{className:Ae})})})]}),(0,i.jsx)(m.VP,{className:Ne,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),Ke=()=>{const{addMarket:e,removeMarket:t,markets:r,marketCount:a}=we((({markets:e,marketCount:t,removeMarket:r,addMarket:i})=>({markets:e,marketCount:t,removeMarket:r,addMarket:i}))),[s,n]=(0,P.useState)(!!r.length),o=Pe((e=>e.setTraitsOpen)),l=(0,P.useMemo)((()=>Object.entries(Oe).map((([s,n])=>{var o;return(0,i.jsx)(Ue,{title:n,value:s,count:(null===(o=a)||void 0===o?void 0:o[s])||0,addMarket:e,removeMarket:t,isMarketSelected:r.includes(s)},s)}))),[e,a,t,r]);return(0,i.jsx)(We,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),n(!s),o(Me.MARKPLACE_INDEX,!s)},isOpen:s})};r(36515);var Ve=r(19321),Ge=r(29663),Xe=r(72797);const Ye=u.Ay.div`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background:
    linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,Je=(0,u.Ay)(Xe.A)`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,qe=u.Ay.div`
  display: flex;
  width: 100%;
  gap: 24px;
`,Qe=u.Ay.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ze=u.Ay.div`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,et=u.Ay.div`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,tt=u.Ay.input`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,rt=u.Ay.div`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,it=u.Ay.div`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,at=u.Ay.div`
  position: relative;
  width: 34px;
  height: 34px;
`,st=u.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,nt=RegExp("^(0|[1-9][0-9]*)$"),ot=RegExp("^\\d*\\.?\\d{0,2}$"),lt=({nfts:e})=>(0,i.jsx)(at,{children:[...Array(3)].map(((t,r)=>(0,i.jsx)(st,{index:r,src:e.length-1>=r?e[e.length-1-r].smallImageUrl:void 0},r)))}),dt=({contractAddress:e,minPrice:t,maxPrice:r})=>{var a;const s=(0,T.useTheme)(),{formatEther:n}=(0,j.kc)(),[o,l]=(0,P.useReducer)((e=>!e),!0),[d,c]=(0,P.useState)(""),p=(0,v.s)((e=>e.addAssetsToBag)),g=(0,v.s)((e=>e.removeAssetsFromBag)),u=(0,v.s)((e=>e.itemsInBag)),h=(0,v.s)((e=>e.lockSweepItems)),x=(0,v.s)((e=>e.setBagExpanded)),m=we((e=>e.traits)),f=we((e=>e.markets)),w=pt(e,"others",t,r),y=pt(e,R.KD.Sudoswap,t,r),b=pt(e,R.KD.NFTX,t,r),k=pt(e,R.KD.NFT20,t,r),{data:C}=(0,ge.BM)(w),{data:z}=(0,ge.BM)(y),{data:I}=(0,ge.BM)(b),{data:_}=(0,ge.BM)(k),{sortedAssets:S,sortedAssetsTotalEth:A}=(0,P.useMemo)((()=>{var e,t,r,i;if(!C&&!z&&!I&&!_)return{sortedAssets:void 0,sortedAssetsTotalEth:de.gH.from(0)};let a=0,s=0,n=[];z&&(n=[...n,...z]),I&&(n=[...n,...I]),_&&(n=[...n,..._]);const o=n.filter((e=>e.marketplace===R.KD.Sudoswap&&!e.susFlag));n.forEach((e=>{if(!e.susFlag)if(e.marketplace===R.KD.Sudoswap){const t=(0,Ve.XO)(e,o.filter((t=>(0,Ge.q)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===R.KD.NFTX,r=(0,Ve.XO)(e,t?a:s);de.gH.from(r).gt(0)&&(t?a++:s++),e.priceInfo.ETHPrice=r}})),n=C?C.concat(n):n,n.sort(((e,t)=>de.gH.from(e.priceInfo.ETHPrice).gt(de.gH.from(t.priceInfo.ETHPrice))?1:-1));let l=n.filter((e=>de.gH.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=C)||void 0===e?void 0:e.length)??0,(null===(t=z)||void 0===t?void 0:t.length)??0,(null===(r=I)||void 0===r?void 0:r.length)??0,(null===(i=_)||void 0===i?void 0:i.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(de.gH.from(t.priceInfo.ETHPrice))),de.gH.from(0))}}),[C,z,I,_]),{sweepItemsInBag:E,sweepEthPrice:N}=(0,P.useMemo)((()=>{const t=u.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),r=t.reduce(((e,t)=>e.add(de.gH.from(t.priceInfo.ETHPrice))),de.gH.from(0));return{sweepItemsInBag:t,sweepEthPrice:r}}),[u,e]);(0,P.useEffect)((()=>{0===E.length&&c("")}),[E]),(0,P.useEffect)((()=>{h(e)}),[e,m,f,t,r,h]);const $=e=>{if(S)if(o)0===E.length&&e>0&&x({bagExpanded:!0}),E.length<e?p(S.slice(E.length,e),!0):g(E.slice(e,E.length),!0),c(e<1?"":e.toString());else{const t=(0,ce.parseEther)(e.toString());if(N.lte(t)){let e=E.length,r=N;const i=[];for(;e<S.length&&r.add(de.gH.from(S[e].priceInfo.ETHPrice)).lte(t);)i.push(S[e]),r=r.add(de.gH.from(S[e].priceInfo.ETHPrice)),e++;i.length>0&&(0===E.length&&x({bagExpanded:!0}),p(i,!0))}else{let e=E.length-1,r=N;const i=[];for(;e>=0&&r.gt(t);)i.push(E[e]),r=r.sub(de.gH.from(E[e].priceInfo.ETHPrice)),e--;i.length>0&&g(i,!0)}c(0===e?"":e.toFixed(2))}};return(0,i.jsxs)(Ye,{"data-testid":"nft-sweep-slider",children:[(0,i.jsxs)(qe,{children:[(0,i.jsx)(Ze,{children:(0,i.jsx)(B.P.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.sweep"})})}),(0,i.jsxs)(et,{children:[(0,i.jsx)(Je,{defaultValue:0,min:0,max:o?(null===(a=S)||void 0===a?void 0:a.length)??0:parseFloat((0,ce.formatEther)(A).toString()),value:o?E.length:parseFloat((0,ce.formatEther)(N.toString())),step:o?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${s.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${s.surface3}`},onChange:e=>{"number"===typeof e&&S&&(o?(Math.floor(e)!==Math.floor(""!==d?parseFloat(d):0)&&$(Math.floor(e)),c(e<1?"":e.toString())):($(e),c(0===e?"":e.toFixed(2))))}}),(0,i.jsx)(tt,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:o&&""!==d?Math.floor(parseFloat(d)):d,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?($(0),c("")):(o&&nt.test(t)||!o&&ot.test(t))&&($(parseFloat(t)),c(t))}}),(0,i.jsxs)(rt,{onClick:()=>{c(""),g(E),l()},children:[(0,i.jsx)(it,{active:o,children:"Items"}),(0,i.jsx)(it,{active:!o,children:"ETH"})]})]})]}),(0,i.jsxs)(Qe,{children:[(0,i.jsx)(B.P.SubHeader,{"font-size":"14px",children:`${n({input:N.toString(),type:j.wl.NFTToken})} ETH`}),(0,i.jsx)(lt,{nfts:E})]})]})},ct=[R.KD.Opensea,R.KD.X2Y2,R.KD.LooksRare];function pt(e,t,r,i){const a=we((e=>e.traits)),s=we((e=>e.markets)),n=!!s.length;return(0,P.useMemo)((()=>{if(n){if("others"===t){const t=s.filter((e=>!(0,R.qv)(e)));return t.length>0?{contractAddress:e,traits:a,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!s.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case R.KD.Sudoswap:case R.KD.NFTX:case R.KD.NFT20:return{contractAddress:e,traits:a,markets:[t],price:{low:r,high:i,symbol:"ETH"}};case"others":return{contractAddress:e,traits:a,markets:ct,price:{low:r,high:i,symbol:"ETH"}}}}),[e,n,t,s,i,r,a])}const gt=u.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,ut=u.Ay.div`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,ht=({onClick:e,value:t})=>(0,i.jsxs)(gt,{children:[(0,i.jsx)("span",{children:t}),(0,i.jsx)(ut,{onClick:e,children:(0,i.jsx)(_.w0,{cursor:"pointer"})})]});var xt=r(35614),mt=r(28800);const ft=({dropDownOptions:e,inFilters:t,mini:r,miniPrompt:a,top:s,left:n})=>{const o=we((e=>e.sortBy)),[l,d]=(0,P.useReducer)((e=>!e),!1),[c,p]=(0,P.useReducer)((e=>!e),!1),[g,u]=(0,P.useState)(o),h=$((e=>e.isCollectionStatsLoading)),[v,w]=(0,P.useState)(0);(0,P.useEffect)((()=>{u(o)}),[o]);const y=(0,P.useRef)(null);(0,mt.W)(y,(()=>l&&d())),(0,P.useEffect)((()=>w(0)),[e]);const j=(0,P.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),b=h?220:t?"full":r?"min":v||"300px";return(0,i.jsxs)(x.a,{ref:y,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:b},children:[(0,i.jsx)(x.a,{as:"button",borderRadius:"12",borderStyle:"solid",background:r?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":r?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:d,cursor:"pointer",className:h?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,pe.default)(l&&!r&&"_12q7kth0"),children:!h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.a,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&j&&(0,i.jsxs)(m.fI,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick){var r,i;null===(r=(i=e[g]).reverseOnClick)||void 0===r||r.call(i),p()}else{const t=e[g].reverseIndex??1;e[t-1].onClick(),u(t-1)}},children:[e[g].reverseOnClick&&(c?(0,i.jsx)(_.g2,{}):(0,i.jsx)(_.oz,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,i.jsx)(_.g2,{}):(0,i.jsx)(_.oz,{}))]}),(0,i.jsx)(x.a,{marginLeft:j?"4":"0",marginRight:r?"2":"0",color:"neutral1",className:f.hY,children:r?a:l?"Sort by":e[g].displayText})]}),(0,i.jsx)(_.Mt,{secondaryColor:r?A.G6.colors.neutral1:void 0,secondaryWidth:r?"20":void 0,secondaryHeight:r?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,i.jsx)(x.a,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:r?void 0:"0",borderTopRightRadius:r?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:r?"12":"0",className:(0,pe.default)(!r&&"_12q7kth1"),style:{top:s?`${s}px`:"inherit",left:t?"16px":n?`${n}px`:"inherit"},children:v?l&&e.map(((t,a)=>(0,i.jsx)(vt,{option:t,index:a,mini:r,onClick:()=>{e[a].onClick(),u(a),d(),c&&p()}},a))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,i.jsx)(wt,{option:e,index:t,setMaxWidth:w},t)))})]})},vt=({option:e,index:t,onClick:r,mini:a})=>(0,i.jsx)(x.a,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:a?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:r,cursor:"pointer",children:(0,i.jsx)(x.a,{marginLeft:"8",className:f.hY,children:e.displayText})},t),wt=({option:e,index:t,setMaxWidth:r})=>{const a=(0,P.useRef)(null);return(0,P.useLayoutEffect)((()=>{a&&a.current&&r(Math.ceil(a.current.getBoundingClientRect().width)+52)})),(0,i.jsx)(x.a,{position:"absolute",ref:a,children:(0,i.jsx)(vt,{option:e,index:t})},t)};var yt=r(57728);const jt=(0,E.vt)()((0,N.lt)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var bt=r(70148);const kt="undefined"!==typeof window;const Tt=()=>{var e;const t=!!kt&&window.innerWidth<A.fi.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var Ct=r(25813);const zt=e=>{const t={...e};for(const i in t){const e=t[i],r=ve[i];JSON.stringify(e)===JSON.stringify(r)&&delete t[i]}t.all!==ve.buyNow&&delete t.all;const r=me[ve.sortBy];return t.sort===r&&delete t.sort,t},It=(e,t)=>{const r={...e};["traits","markets"].forEach((e=>{r[e]||(r[e]=[]),r[e]&&"string"===typeof r[e]&&(r[e]=[r[e]])}));try{const{buyNow:e,search:i}=ve;if(Object.entries(me).forEach((([e,t])=>{t===r.sort&&(r.sortBy=Number(e))})),r.buyNow=!(void 0===r.all?!e:r.all),r.search=void 0===r.search?i:String(r.search),2===r.traits.length){const[e,t]=r.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(r.traits=[`${e},${t}`])}r.traits=r.traits.map((e=>{const r=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[i,a]=r.split(",");return(t.traits&&t.traits[i].find((e=>e.trait_value===a)))??{trait_type:i,trait_value:a,trait_count:0}}))}catch(i){r.traits=[]}return r};var _t=r(72964),St=r(88361),At=r(85141);const Et=new Map,Nt=T.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,$t=u.Ay.div`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Nt}
`,Rt=u.Ay.div`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,Mt=u.Ay.div`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Pt=u.Ay.div`
  display: block;
  text-align: center;
`,Ft=u.Ay.span`
  ${s.N}
`,Ht=u.Ay.div`
  ${Nt}
`,Bt=u.Ay.div`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:r})=>e&&!t?r.deprecated_accentTextLightPrimary:r.neutral1};
  background: ${({theme:e,toggled:t,disabled:r})=>!r&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,Lt=(0,u.Ay)(B.P.BodyPrimary)`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Ot=(0,u.Ay)(m.fI)`
  gap: 8px;
`,Dt=({height:e})=>(0,i.jsx)(x.a,{width:"full",className:_e.l,children:(0,i.jsx)(Ie.O,{height:e})}),Ut=()=>(0,i.jsx)(Ht,{children:(0,i.jsxs)(m.VP,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,i.jsxs)(m.fI,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,i.jsx)(x.a,{className:S.J,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,i.jsx)(x.a,{className:S.J,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,i.jsx)(x.a,{className:S.J,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,i.jsx)(Dt,{})]})}),Wt=(e,t)=>{const r=[{displayText:"Price: Low to High",onClick:()=>e(xe.LowToHigh),reverseIndex:2,sortBy:xe.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(xe.HighToLow),reverseIndex:1,sortBy:xe.HighToLow}];return t?r.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(xe.RareToCommon),reverseIndex:4,sortBy:xe.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(xe.CommonToRare),reverseIndex:3,sortBy:xe.CommonToRare}]):r},Kt=({contractAddress:e,collectionStats:t,rarityVerified:r})=>{var s,n,o,l,d;const{chainId:u}=(0,g.F)(),h=we((e=>e.traits)),w=we((e=>e.minPrice)),j=we((e=>e.maxPrice)),b=we((e=>e.markets)),k=we((e=>e.sortBy)),T=we((e=>e.search)),C=we((e=>e.setMarketCount)),z=we((e=>e.setSortBy)),I=we((e=>e.buyNow)),S=jt((e=>e.setPriceRangeLow)),A=jt((e=>e.priceRangeLow)),E=jt((e=>e.priceRangeHigh)),N=jt((e=>e.setPriceRangeHigh)),M=jt((e=>e.setPrevMinMax)),F=$((e=>e.setIsCollectionNftsLoading)),H=we((e=>e.removeTrait)),B=we((e=>e.removeMarket)),L=we((e=>e.reset)),O=we((e=>e.setMinPrice)),D=we((e=>e.setMaxPrice)),U=we((e=>e.setHasRarity)),W=(0,v.s)((e=>e.toggleBag)),K=(0,v.s)((e=>e.bagExpanded)),V=(0,v.s)((e=>e.itemsInBag)),G=(0,ue.A)(w,500),X=(0,ue.A)(j,500),Y=(0,ue.A)(T,500),[J,q]=(0,P.useState)(bt.jK.unset),[Q,Z]=(0,P.useState)(),[ee,te]=(0,P.useState)(!1),re={address:e,orderBy:fe[k].field,asc:fe[k].asc,filter:{listed:I,marketplaces:b.length>0?b.map((e=>e.toUpperCase())):void 0,maxPrice:X?(0,ce.parseEther)(X.toString()).toString():void 0,minPrice:G?(0,ce.parseEther)(G.toString()).toString():void 0,tokenSearchQuery:Y,traits:h.length>0?h.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:ge.dm},{data:ie,loading:ae,hasNext:ne,loadMore:oe}=(0,ge.LZ)(re),le=(0,P.useCallback)((e=>{const t=V.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===R.KD.Sudoswap){const r=V.filter((t=>(0,Ge.q)(e,t.asset)));return t?r.findIndex((t=>t.asset.tokenId===e.tokenId)):r.length}return t?V.filter((t=>(0,Ge.J)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):V.filter((t=>(0,Ge.J)(e,t.asset))).length}),[V]),je=(0,P.useCallback)((e=>(0,Ve.XO)(e,le(e))),[le]),be=(0,P.useMemo)((()=>{if(!ie||!ie.some((e=>e.marketplace&&(0,R.qv)(e.marketplace))))return ie;const e=[...ie];return e.forEach((e=>e.marketplace&&(0,R.qv)(e.marketplace)&&(e.priceInfo.ETHPrice=je(e)??"0"))),k!==xe.HighToLow&&k!==xe.LowToHigh||e.sort(((e,t)=>{var r,i;const a=de.gH.from((null===(r=e.priceInfo)||void 0===r?void 0:r.ETHPrice)??0),s=de.gH.from((null===(i=t.priceInfo)||void 0===i?void 0:i.ETHPrice)??0);if(a.gt(0)&&s.lte(0))return-1;if(s.gt(0)&&a.lte(0))return 1;const n=a.sub(s);return n.gt(0)?k===xe.LowToHigh?1:-1:n.lt(0)?k===xe.LowToHigh?-1:1:0})),e}),[ie,k,je]),[ke,Te]=(0,P.useState)(),[Ce,Se]=(0,yt.s)(),Ae=(0,P.useRef)(null),Ee=(0,c.a)(),Ne=(0,p.l)();(0,P.useEffect)((()=>{F(ae)}),[ae,F]);const $e=(0,P.useMemo)((()=>{var e;const r=(0,Fe.w2)(Et,null===(e=t)||void 0===e?void 0:e.address,be)??!1;return U(r),r}),[t.address,be,U]),Re=(0,P.useMemo)((()=>Wt(z,$e)),[$e,z]);(0,P.useEffect)((()=>(te(!1),()=>{we.setState(ve)})),[e]);const Me=(0,P.useMemo)((()=>be?be.map((e=>(0,i.jsx)(ze,{asset:e,isMobile:Ee,mediaShouldBePlaying:e.tokenId===ke,setCurrentTokenPlayingMedia:Te,rarityVerified:r,uniformAspectRatio:J,setUniformAspectRatio:q,renderedHeight:Q,setRenderedHeight:Z},e.address+e.tokenId))):null),[be,Ee,ke,r,J,Q]),Pe=be&&be.length>0,He=Pe&&be[0]&&(null===(s=be[0])||void 0===s?void 0:s.tokenType)===At.NftStandard.Erc1155,Be=(0,P.useMemo)((()=>G&&X?`Price: ${G} - ${X} ETH`:G?`Min. Price: ${G} ETH`:X?`Max Price: ${X} ETH`:void 0),[G,X]);(0,P.useEffect)((()=>{var e,r;const i={};null===(r=t)||void 0===r||null===(e=r.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{i[e]=t})),C(i),Ae.current=we.getState()}),[null===(n=t)||void 0===n?void 0:n.marketplaceCount,C]);const Le=(0,St.zy)();(0,P.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const r=Ct.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return It(r,t)})(Le,t);requestAnimationFrame((()=>{e&&we.setState(e)})),we.subscribe((e=>{JSON.stringify(Ae.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((r=>{switch(r){case"traits":{const r=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=r;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=me[e.sortBy];break;default:t[r]=e[r]}}));const r=zt(t),i=window.location.href.split("?")[0],a=Ct.stringify(r,{arrayFormat:"comma"});window.history.replaceState({},"",`${i}${a&&`?${a}`}`)})(e),Ae.current=e)}))}}),[Le]),(0,P.useEffect)((()=>{q(bt.jK.unset),Z(void 0)}),[e]),(0,P.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var r,i;const e=null===(r=t.stats)||void 0===r?void 0:r.floor_price,s=10*(null===(i=t.stats)||void 0===i?void 0:i.floor_price);var a;if(""===A)S(null===(a=e)||void 0===a?void 0:a.toFixed(2));""===E&&N(s.toFixed(2))}}),[t,A,E,N,S]);const De=(0,P.useCallback)((()=>{He||(ee||(Tt(),K||Ee||W()),te(!ee))}),[K,He,Ee,ee,W]),Ue=(0,P.useCallback)((()=>{L(),M([0,100]),Tt()}),[L,M]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(x.a,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,i.jsxs)($t,{children:[(0,i.jsxs)(Rt,{children:[(0,i.jsx)(se.default,{logPress:!0,element:a.nM.NFT_FILTER_BUTTON,eventOnTrigger:a.c6.NFT_FILTER_OPENED,logImpression:!Ce,properties:{collection_address:e,chain_id:u},children:(0,i.jsx)(he.F,{isMobile:Ee,isFiltersExpanded:Ce,collectionCount:(null===(l=be)||void 0===l||null===(o=l[0])||void 0===o?void 0:o.totalCount)??0,onClick:()=>{K&&!Ne.xl&&W(),Se(!Ce)}})}),(0,i.jsx)(Mt,{isFiltersExpanded:Ce,children:(0,i.jsx)(ft,{dropDownOptions:Re})}),(0,i.jsx)(ye,{})]}),!He&&(0,i.jsxs)(Bt,{toggled:ee,disabled:He,className:f.hY,onClick:De,"data-testid":"nft-sweep-button",children:[(0,i.jsx)(_.Ak,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,i.jsx)(Lt,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,i.jsxs)(Ht,{children:[ee&&(0,i.jsx)(dt,{contractAddress:e,minPrice:G,maxPrice:X}),(0,i.jsxs)(m.fI,{paddingTop:b.length||h.length||Be?"12":"0",gap:"8",flexWrap:"wrap",children:[b.map((e=>(0,i.jsx)(ht,{value:(0,i.jsxs)(Ot,{children:[(0,Fe.$4)(e,"16"),Oe[e]]}),onClick:()=>{Tt(),B(e)}},e))),h.map((e=>(0,i.jsx)(ht,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y.t)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{Tt(),H(e)}},e.trait_value))),Be&&(0,i.jsx)(ht,{value:Be,onClick:()=>{Tt(),O(""),D(""),M([0,100])}}),Boolean(h.length||b.length||Be)&&(0,i.jsx)(xt.n,{onClick:Ue,children:"Clear All"})]})]})]}),(0,i.jsx)(Ht,{children:ae?(0,i.jsx)(Dt,{height:Q}):(0,i.jsx)(_t.A,{next:oe,hasMore:ne??!1,loader:Boolean(ne&&Pe)&&(0,i.jsx)(Ie.O,{}),dataLength:(null===(d=be)||void 0===d?void 0:d.length)??0,style:{overflow:"unset"},className:Pe?_e.l:void 0,children:Pe?Me:(0,i.jsx)(m.ov,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,i.jsxs)(Pt,{children:[(0,i.jsx)("p",{className:f.YU,children:"No NFTS found"}),(0,i.jsx)(x.a,{onClick:L,type:"button",className:(0,pe.default)(f.ct,f.hY),color:"accent1",cursor:"pointer",children:(0,i.jsx)(Ft,{children:"View full collection"})})]})})})})]})};var Vt="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Gt=u.Ay.div`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Xt=e=>{const{children:t,index:r,title:a}=e,[s,n]=(0,P.useState)(!1),o=Pe((e=>e.traitsOpen)),l=Pe((e=>e.setTraitsOpen)),d=(0,c.a)(),p=void 0!==r&&o[r-1],g=r!==Me.TRAIT_START_INDEX;return(0,P.useEffect)((()=>{void 0!==r&&l(r,s)}),[s,r,l]),(0,i.jsxs)(i.Fragment,{children:[g&&(0,i.jsx)(x.a,{className:(0,pe.default)(f.Q6,!s&&Re,Ee),opacity:!p&&s&&0!==r?"1":"0",marginTop:p?"0":"8"}),(0,i.jsxs)(x.a,{as:"details",className:(0,pe.default)(f.Q6,!s&&Re),open:s,children:[(0,i.jsxs)(x.a,{as:"summary",className:`${$e} ${Re}`,onClick:e=>{e.preventDefault(),n(!s)},children:[a,(0,i.jsxs)(x.a,{display:"flex",alignItems:"center",children:[(0,i.jsx)(x.a,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,i.jsx)(x.a,{className:Se,style:{transform:`rotate(${s?0:180}deg)`},children:(0,i.jsx)(_.Mt,{className:Ae})})]})]}),(0,i.jsx)(Gt,{isMobile:d,children:t})]})]})};var Yt=r(74291),Jt=r(97139);const qt=(0,u.Ay)(Xe.A)`
  cursor: pointer;
`,Qt=()=>{const[e,t]=(0,P.useState)(""),r=we((e=>e.setMinPrice)),s=we((e=>e.setMaxPrice)),n=we((e=>e.minPrice)),o=we((e=>e.maxPrice)),l=jt((e=>e.priceRangeLow)),d=jt((e=>e.priceRangeHigh)),c=jt((e=>e.setPriceRangeLow)),p=jt((e=>e.setPriceRangeHigh)),g=jt((e=>e.prevMinMax)),u=jt((e=>e.setPrevMinMax)),h=(0,T.useTheme)(),v=(0,St.zy)();(0,P.useEffect)((()=>{r(""),s(""),c(""),p("")}),[v.pathname,r,s,c,p]);const w=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},y=r=>{r.currentTarget.placeholder=e,t(""),(n||o)&&(0,Te.sendAnalyticsEvent)(a.c6.NFT_FILTER_SELECTED,{filter_type:a.AI.PRICE_RANGE})};return(0,i.jsxs)(Xt,{title:"Price range",index:Me.PRICE_RANGE_INDEX,children:[(0,i.jsxs)(m.fI,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,i.jsx)(m.fI,{position:"relative",children:(0,i.jsx)(Yt.O,{style:{width:"126px"},className:Vt,placeholder:l,onChange:e=>{const[,t]=g;if(e.currentTarget.value){const r=parseInt(e.currentTarget.value)-parseInt(l),i=Math.floor(r/(parseInt(d)-parseInt(l))*100);parseInt(e.currentTarget.value)>=parseInt(o)?u([t,t]):u([i,t])}else u([0,t]);r(e.currentTarget.value.toString()),Tt()},onFocus:w,value:n,onBlur:y})}),(0,i.jsx)(x.a,{className:f.rf,children:"to"}),(0,i.jsx)(m.fI,{position:"relative",children:(0,i.jsx)(Yt.O,{style:{width:"126px"},className:Vt,placeholder:d,value:o,onChange:e=>{const[t]=g;if(e.currentTarget.value){const r=parseInt(d)-parseInt(e.currentTarget.value),i=Math.floor(100-r/(parseInt(d)-parseInt(l))*100);parseInt(e.currentTarget.value)<=parseInt(n)?u([t,t]):u([t,i])}else u([t,100]);s(e.currentTarget.value),Tt()},onFocus:w,onBlur:y})})]}),(0,i.jsx)(m.fI,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,i.jsx)(qt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:g,trackStyle:{top:"3px",height:"8px",background:`${h.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Jt.l.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${h.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,i]=e,a=parseFloat(d.replace(/,/g,"")),n=parseFloat(l.replace(/,/g,"")),o=a-n,c=a-(100-i)/100*o;r((t/100*o+n).toFixed(2).toString()),s(c.toFixed(2).toString()),0===t&&r(""),100===i&&s(""),u(e)}})})]})};var Zt=r(62735),er=r(87381);const tr=({trait:e,addTrait:t,removeTrait:r,isTraitSelected:s,style:n})=>{const[o,l]=(0,P.useState)(!1),[d,c]=(0,P.useState)(!1),p=()=>c(!d),g=we((e=>e.toggleShowFullTraitName)),{shouldShow:u,trait_value:h,trait_type:v}=we((e=>e.showFullTraitName));(0,P.useEffect)((()=>{l(s)}),[s]);const w=()=>{Tt(),o?(r(e),l(!1)):(t(e),l(!0)),(0,Te.sendAnalyticsEvent)(a.c6.NFT_FILTER_SELECTED,{filter_type:a.AI.TRAIT})},j=u&&v===e.trait_type&&h===e.trait_value;return(0,i.jsxs)(m.fI,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${f.Q6} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...n},maxHeight:"44",onMouseEnter:p,onMouseLeave:p,onClick:w,children:[(0,i.jsx)(x.a,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:j?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&g({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>g({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,y.t)(Number(e.trait_value))}`:e.trait_value}),(0,i.jsx)(He.R,{checked:o,onCheckPressed:w,text:j?String(e.trait_count):"",variant:"branded"})]},e.trait_value)},rr=({traits:e,type:t,index:r})=>{const a=we((e=>e.addTrait)),s=we((e=>e.removeTrait)),n=we((e=>e.traits)),[o,l]=(0,P.useState)(""),d=(0,ue.A)(o,300),c=(0,P.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(d.toLowerCase())}))),[d,e]),p=(0,P.useCallback)((function({data:e,index:t,style:r}){const o=e[t],l=n.find((({trait_type:e,trait_value:t})=>e===o.trait_type&&String(t)===String(o.trait_value)));return(0,i.jsx)(tr,{style:r,isTraitSelected:!!l,trait:o,addTrait:a,removeTrait:s})}),[n,a,s]),g=(0,P.useCallback)(((e,t)=>{const r=t[e];return`${r.trait_type}_${r.trait_value}_${e}`}),[]);return e.length?(0,i.jsxs)(Xt,{index:r,numTraits:e.length,title:t,children:[(0,i.jsx)(Yt.p,{value:o,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,i.jsx)(m.VP,{className:Ne,style:{height:`${Math.min(44*c.length,302)}px`},children:(0,i.jsx)(Zt.default,{disableWidth:!0,children:({height:e})=>(0,i.jsx)(er.FixedSizeList,{height:e,width:"100%",itemData:c,itemCount:c.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:r})=>(0,i.jsx)(p,{style:t,data:r,index:e},g(e,r))})})})]}):null};var ir=r(89932);const ar=(0,u.Ay)(ir.A)`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,sr=({sortDropDownOptions:e})=>{const[t,r]=(0,P.useState)(!1),a=e=>{e.preventDefault(),r(!t)},s=e.map((e=>(0,i.jsx)(nr,{dropDownOption:e,parentOnClick:a},e.displayText)));return(0,i.jsx)(We,{title:"Sort by",items:s,onClick:a,isOpen:t})},nr=({dropDownOption:e,parentOnClick:t})=>{const r=we((e=>e.sortBy)),a=void 0!==e.sortBy&&r===e.sortBy?(0,i.jsx)(ar,{}):(0,i.jsx)(i.Fragment,{});return(0,i.jsx)(De,{title:e.displayText,element:a,onClick:r=>{r.preventDefault(),t(r),e.onClick()}})};var or=r(79253),lr=r(14021),dr=r(31352),cr=r(79712);const pr=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:r}=we((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),a=we((e=>e.setSortBy)),s=we((e=>e.hasRarity)),n=(0,P.useMemo)((()=>Wt(a,s??!1)),[s,a]);return(0,i.jsxs)(x.a,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,i.jsx)(m.fI,{width:"full",justifyContent:"space-between"}),(0,i.jsxs)(m.VP,{marginTop:"8",children:[(0,i.jsxs)(or.s,{row:!0,width:"100%",justifyContent:"space-between",px:"$spacing12",children:[(0,i.jsx)(lr.EY,{children:"Buy now"}),(0,i.jsx)(dr.S,{testID:"nft-collection-filter-buy-now",checked:t,onPress:()=>{r(!t)},variant:"branded"})]}),cr.isMobileWeb&&(0,i.jsx)(sr,{sortDropDownOptions:n}),(0,i.jsx)(Ke,{}),(0,i.jsx)(Qt,{}),Object.entries(e).length>0&&(0,i.jsx)(x.a,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,i.jsx)(m.VP,{children:Object.entries(e).map((([e,t],r)=>(0,i.jsx)(rr,{type:e,traits:t,index:r+Me.TRAIT_START_INDEX},e)))})]})]})};var gr=r(407),ur=r(81827);const hr=(0,u.Ay)(o.Ay)`
  ${ur.Tv}
`,xr=(0,u.Ay)(o.Ay)`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.uT+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.Lg+16}px)`:"100%"};
  }
`,mr=(0,u.Ay)(l.Ay)`
  gap: 24px;
  margin-bottom: 28px;
`,fr=()=>{const e=(0,v.s)((e=>e.bagExpanded)),t=(0,c.a)();return(0,i.jsxs)(xr,{isBagExpanded:e,children:[(0,i.jsx)(Nr,{children:(0,i.jsx)(Sr,{})}),(0,i.jsxs)(hr,{children:[(0,i.jsx)(te,{isMobile:t}),(0,i.jsx)(mr,{children:oe})]}),(0,i.jsx)(Ut,{})]})};var vr=r(83799),wr=r(4163),yr=r(95020);const jr=(0,u.Ay)(o.Ay)`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,br=(0,u.Ay)(wr.Gr)`
  color: ${({theme:e})=>e.neutral2};
`;function kr({isBlocked:e}){const t=(0,T.useTheme)();return e?(0,i.jsxs)(jr,{children:[(0,i.jsx)(vr.A,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,i.jsx)(B.P.HeadlineMedium,{children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.blockedCollection"})}),(0,i.jsx)(wr.Bl,{to:"/nfts",children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.returnToExplore"})}),(0,i.jsx)(br,{href:yr.uniswapUrls.helpArticleUrls.unsupportedTokenPolicy,children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.learnWhy"})})]}):(0,i.jsxs)(jr,{children:[(0,i.jsx)(B.P.HeadlineMedium,{children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.noneAtAddress"})}),(0,i.jsx)(wr.Bl,{to:"/nfts",children:(0,i.jsx)(ke.Trans,{i18nKey:"nft.returnToExplore"})})]})}var Tr=r(38362),Cr=r(12085),zr=r(68957),Ir=r(17960);const _r={},Sr=(0,u.Ay)(n.P)`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,Ar=(0,u.Ay)(o.Ay)`
  width: 100%;
  align-self: start;
  will-change: width;
`,Er=u.Ay.div`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,Nr=u.Ay.div`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,$r=u.Ay.div`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,Rr=(0,u.Ay)(o.Ay)`
  ${ur.Tv}
`,Mr=u.Ay.div`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${Ir.M.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,Pr=(0,u.Ay)(l.Ay)`
  padding: 20px 16px;
  justify-content: space-between;
`,Fr=(0,u.Ay)(l.Ay)`
  align-items: flex-start;
  position: relative;
`,Hr=u.Ay.button`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${s.N}
`,Br=()=>{var e,t,r,s,n,o;const{t:l}=(0,ke.useTranslation)(),{contractAddress:u}=(0,St.g)(),x=(0,c.a)(),[m,f]=(0,yt.s)(),{pathname:w}=(0,St.zy)(),y=(0,St.Zp)(),j=w.includes("/activity"),k=we((e=>e.setMarketCount)),T=(0,v.s)((e=>e.bagExpanded)),C=(0,v.s)((e=>e.setBagExpanded)),{chainId:z}=(0,g.F)(),I=(0,p.l)(),{data:S,loading:A}=(0,d.G)(u),E=(0,P.useMemo)((()=>({title:S.name+" on Uniswap",image:window.location.origin+"/api/image/nfts/collection/"+u,url:window.location.href,description:S.description})),[S.description,S.name,u]),N=(0,Cr.t)(E);if((0,P.useEffect)((()=>{var e,t;const r={};null===(t=S)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{r[e]=t})),k(r)}),[null===(e=S)||void 0===e?void 0:e.marketplaceCount,k]),(0,P.useEffect)((()=>{T&&m&&!I.xl&&f(!1)}),[T,m,I,f]),(0,P.useEffect)((()=>{C({bagExpanded:!1,manualClose:!1})}),[]),A)return(0,i.jsx)(fr,{});if(!S.name)return(0,i.jsx)(kr,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(zr.Helmet,{children:[(0,i.jsxs)("title",{children:[S.name," | ",l("nft.collection.title")]}),N.map(((e,t)=>(0,i.jsx)("meta",{...e},t))),(0,i.jsx)("meta",{name:"robots",content:"max-image-preview:large"})]}),(0,i.jsx)(se.default,{logImpression:!0,page:a.Om.NFT_COLLECTION_PAGE,properties:{collection_address:u,chain_id:z,is_activity_view:j},children:(0,i.jsx)(Ar,{style:{width:`calc(100% - ${T&&!x?(I.xxxl?h.Lg:h.uT)+16:0}px)`},children:u&&!Tr.u.includes(u)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Nr,{children:(0,i.jsx)($r,{src:(null===(t=S)||void 0===t?void 0:t.bannerImageUrl)?`${S.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,i.jsxs)(Rr,{children:[S&&(0,i.jsx)(re,{stats:S,isMobile:x}),(0,i.jsx)("div",{id:"nft-anchor"}),(0,i.jsx)(le,{showActivity:j,toggleActivity:()=>{m&&f(!1),y(j?`/nfts/collection/${u}`:`/nfts/collection/${u}/activity`)}})]}),(0,i.jsxs)(Fr,{children:[(0,i.jsx)(Mr,{isMobile:x,isFiltersExpanded:m,children:m&&(0,i.jsxs)(i.Fragment,{children:[x&&(0,i.jsxs)(Pr,{children:[(0,i.jsx)(B.P.HeadlineSmall,{children:"Filter"}),(0,i.jsx)(Hr,{onClick:()=>f(!1),children:(0,i.jsx)(_.Iu,{})})]}),(0,i.jsx)(pr,{traitsByGroup:(null===(r=S)||void 0===r?void 0:r.traits)??_r})]})}),(0,i.jsx)(Er,{hideUnderneath:x&&(m||T),style:{transform:`translate(${m&&!x?332:0}px)`,width:`calc(100% - ${m&&!x?332:0}px)`},children:j?u&&(0,i.jsx)(gr.I,{contractAddress:u,rarityVerified:(null===(s=S)||void 0===s?void 0:s.rarityVerified)??!1,collectionName:(null===(n=S)||void 0===n?void 0:n.name)??"",chainId:z}):u&&S&&(0,i.jsx)(P.Suspense,{fallback:(0,i.jsx)(Ut,{}),children:(0,i.jsx)(Kt,{collectionStats:S,contractAddress:u,rarityVerified:null===(o=S)||void 0===o?void 0:o.rarityVerified})})})]})]}):(0,i.jsx)(kr,{isBlocked:!0})})}),(0,i.jsx)(b,{})]})}}}]);
//# sourceMappingURL=2514.cc21fa60.chunk.js.map
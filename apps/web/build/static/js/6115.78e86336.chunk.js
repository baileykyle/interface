"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[6115],{81986:(n,e,r)=>{r.d(e,{A:()=>s});r(33962);const s=r.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},83752:(n,e,r)=>{r.d(e,{Y:()=>Tn,A:()=>wn});var s=r(95682),o=r(3072),t=r(81986),i=r(97404),a=r(96837),c=r(65475),u=r(77415),d=r(48565),l=r.n(d),m=r(35480),x=(n=>(n[n.Against=0]="Against",n[n.For=1]="For",n[n.Abstain=2]="Abstain",n))(x||{}),y=r(78065),p=r(69104);function j(n,e,r){return new i.Fraction(n,l().exponentiate(l().BigInt(10),l().BigInt(e))).toSignificant(r)}function h({rawAmount:n,symbol:e,decimals:r,sigFigs:o}){return(0,s.jsxs)(s.Fragment,{children:[j(n,r,o)," ",e]})}function f({rawAmount:n,currencyId:e,sigFigs:r=6}){const o=(0,c.H2)(e);return o?(0,s.jsx)(h,{rawAmount:n,decimals:o.decimals,sigFigs:r,symbol:o.symbol??"???"}):null}function g({info:{recipient:n,uniAmountRaw:e}}){const{ENSName:r}=(0,u.A)(),o=r??n;return"string"===typeof e?(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.claimFor",components:{currency:(0,s.jsx)(h,{rawAmount:e,symbol:"UNI",decimals:18,sigFigs:4})},values:{username:o}}):(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.claimReward",values:{username:o}})}function v(){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.submitProposal"})}function b({info:n}){var e,r,o;const t=(0,c.rd)(n.tokenAddress);return(null===(e=a.BigNumber.from(n.amount))||void 0===e?void 0:e.eq(0))?(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.revoke",values:{tokenSymbol:null===(r=t)||void 0===r?void 0:r.symbol}}):(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.approve",values:{sym:null===(o=t)||void 0===o?void 0:o.symbol}})}function A({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;if(n.reason&&n.reason.trim().length>0)switch(n.decision){case x.For:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.vote.for",values:{proposalKey:e}});case x.Abstain:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.vote.abstain",values:{proposalKey:e}});case x.Against:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.vote.against",values:{proposalKey:e}})}else switch(n.decision){case x.For:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.decision.for",values:{proposalKey:e,reason:n.reason}});case x.Abstain:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.decision.abstain",values:{proposalKey:e,reason:n.reason}});case x.Against:return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.decision.against",values:{proposalKey:e,reason:n.reason}})}}function T({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.queueProposal",values:{proposalKey:e}})}function I({info:n}){const e=`${n.governorAddress}/${n.proposalId}`;return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.executeProposal",values:{proposalKey:e}})}function S({info:{delegatee:n}}){const{ENSName:e}=(0,u.A)(n),r=e??n;return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.delegateSummary",values:{username:r}})}function w({info:{chainId:n,currencyAmountRaw:e,unwrapped:r}}){const o=n?(0,p.nativeOnChain)(n):void 0;var t,i,a,c,u,d;return r?(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.unwrapTo",components:{amount:(0,s.jsx)(h,{rawAmount:e,symbol:(null===(i=o)||void 0===i||null===(t=i.wrapped)||void 0===t?void 0:t.symbol)??"WETH",decimals:18,sigFigs:6})},values:{symbol:(null===(a=o)||void 0===a?void 0:a.symbol)??"ETH"}}):(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.wrapTo",components:{amount:(0,s.jsx)(h,{rawAmount:e,symbol:(null===(c=o)||void 0===c?void 0:c.symbol)??"ETH",decimals:18,sigFigs:6})},values:{symbol:(null===(d=o)||void 0===d||null===(u=d.wrapped)||void 0===u?void 0:u.symbol)??"WETH"}})}function k(){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.depositLiquidity"})}function C(){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.withdrawLiquidity"})}function K({info:{baseCurrencyId:n,quoteCurrencyId:e}}){var r,o;const t=(0,c.H2)(n),i=(0,c.H2)(e);return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.migrateLiquidity",values:{baseSymbol:null===(r=t)||void 0===r?void 0:r.symbol,quoteSymbol:null===(o=i)||void 0===o?void 0:o.symbol}})}function D({info:{quoteCurrencyId:n,baseCurrencyId:e}}){var r,o;const t=(0,c.H2)(e),i=(0,c.H2)(n);return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.createPool",values:{baseSymbol:null===(r=t)||void 0===r?void 0:r.symbol,quoteSymbol:null===(o=i)||void 0===o?void 0:o.symbol}})}function E({info:{token0CurrencyId:n,token1CurrencyId:e}}){var r,o;const t=(0,c.H2)(n),i=(0,c.H2)(e);return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.collectFees",values:{symbol0:null===(r=t)||void 0===r?void 0:r.symbol,symbol1:null===(o=i)||void 0===o?void 0:o.symbol}})}function L({info:{baseCurrencyId:n,quoteCurrencyId:e,expectedAmountBaseRaw:r,expectedAmountQuoteRaw:o}}){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.removeLiquiditySummary",components:{base:(0,s.jsx)(f,{rawAmount:r,currencyId:n,sigFigs:3}),quote:(0,s.jsx)(f,{rawAmount:o,currencyId:e,sigFigs:3})}})}function _({info:{createPool:n,quoteCurrencyId:e,baseCurrencyId:r}}){var o,t,i,a;const u=(0,c.H2)(r),d=(0,c.H2)(e);return n?(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.createAddLiquidity",values:{baseSymbol:null===(o=u)||void 0===o?void 0:o.symbol,quoteSymbol:null===(t=d)||void 0===t?void 0:t.symbol}}):(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(i=u)||void 0===i?void 0:i.symbol,quoteSymbol:null===(a=d)||void 0===a?void 0:a.symbol}})}function P({info:{quoteCurrencyId:n,expectedAmountBaseRaw:e,expectedAmountQuoteRaw:r,baseCurrencyId:o}}){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.addLiquidityv2",components:{baseAmountAndToken:(0,s.jsx)(f,{rawAmount:e,currencyId:o,sigFigs:3}),quoteAmountAndToken:(0,s.jsx)(f,{rawAmount:r,currencyId:n,sigFigs:3})}})}function $({info:n}){return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.sendSummary",components:{amount:(0,s.jsx)(f,{rawAmount:n.amount,currencyId:n.currencyId,sigFigs:6})},values:{recipient:n.recipient}})}function O({info:n}){return n.tradeType===i.TradeType.EXACT_INPUT?(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.swapExactIn",components:{amount1:(0,s.jsx)(f,{rawAmount:n.inputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,s.jsx)(f,{rawAmount:n.settledOutputCurrencyAmountRaw??n.expectedOutputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}}):(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.swapExactOut",components:{amount1:(0,s.jsx)(f,{rawAmount:n.expectedInputCurrencyAmountRaw,currencyId:n.inputCurrencyId,sigFigs:6}),amount2:(0,s.jsx)(f,{rawAmount:n.outputCurrencyAmountRaw,currencyId:n.outputCurrencyId,sigFigs:6})}})}function R({info:n}){var e,r;const{token0CurrencyId:o,token1CurrencyId:t}=n,i=(0,c.H2)(o),a=(0,c.H2)(t);return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.addLiquidity",values:{baseSymbol:null===(e=i)||void 0===e?void 0:e.symbol,quoteSymbol:null===(r=a)||void 0===r?void 0:r.symbol}})}function F({info:n}){const{token0CurrencyId:e,token1CurrencyId:r,token0CurrencyAmountRaw:o,token1CurrencyAmountRaw:t}=n;return(0,s.jsx)(m.Trans,{i18nKey:"account.transactionSummary.removeLiquiditySummary",components:{base:(0,s.jsx)(f,{rawAmount:o,currencyId:e,sigFigs:3}),quote:(0,s.jsx)(f,{rawAmount:t,currencyId:r,sigFigs:3})}})}function H({info:n}){switch(n.type){case y.D.ADD_LIQUIDITY_V3_POOL:return(0,s.jsx)(_,{info:n});case y.D.ADD_LIQUIDITY_V2_POOL:return(0,s.jsx)(P,{info:n});case y.D.CLAIM:return(0,s.jsx)(g,{info:n});case y.D.DEPOSIT_LIQUIDITY_STAKING:return(0,s.jsx)(k,{});case y.D.WITHDRAW_LIQUIDITY_STAKING:return(0,s.jsx)(C,{});case y.D.SWAP:return(0,s.jsx)(O,{info:n});case y.D.APPROVAL:return(0,s.jsx)(b,{info:n});case y.D.VOTE:return(0,s.jsx)(A,{info:n});case y.D.DELEGATE:return(0,s.jsx)(S,{info:n});case y.D.WRAP:return(0,s.jsx)(w,{info:n});case y.D.CREATE_V3_POOL:return(0,s.jsx)(D,{info:n});case y.D.MIGRATE_LIQUIDITY_V2_TO_V3:return(0,s.jsx)(K,{info:n});case y.D.COLLECT_FEES:return(0,s.jsx)(E,{info:n});case y.D.REMOVE_LIQUIDITY_V3:return(0,s.jsx)(L,{info:n});case y.D.QUEUE:return(0,s.jsx)(T,{info:n});case y.D.EXECUTE:return(0,s.jsx)(I,{info:n});case y.D.SUBMIT_PROPOSAL:return(0,s.jsx)(v,{});case y.D.SEND:return(0,s.jsx)($,{info:n});case y.D.INCREASE_LIQUIDITY:return(0,s.jsx)(R,{info:n});case y.D.DECREASE_LIQUIDITY:return(0,s.jsx)(F,{info:n});case y.D.CREATE_POSITION:case y.D.MIGRATE_LIQUIDITY_V3_TO_V4:case y.D.BRIDGE:return(0,s.jsx)(s.Fragment,{})}}var q=r(71068),N=r(70819),U=r(95699),B=r(16444),Y=r(55199);const M=B.Ay.div`
  height: 90px;
  width: 90px;
`,Q=Y.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,W=Y.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,V=B.Ay.circle`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${Q} 0.9s ease-in-out;
  animation: ${Q} 0.9s ease-in-out;
`,G=B.Ay.polyline`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${W} 0.9s 0.35s ease-in-out forwards;
  animation: ${W} 0.9s 0.35s ease-in-out forwards;
`;function z({className:n}){const e=(0,Y.useTheme)();return(0,s.jsx)(M,{className:n,"data-testid":"animated-confirmation",children:(0,s.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,s.jsx)(V,{className:"path circle",fill:"none",stroke:e.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,s.jsx)(G,{className:"path check",fill:"none",stroke:e.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}var J=r(45353),X=r(63247),Z=r(78135),nn=r(33962),en=r(19872),rn=r(13017),sn=r(19495),on=r(86396),tn=r(13445),an=r(4163),cn=r(66954),un=r(32753),dn=r(85141),ln=r(99759),mn=r(7740),xn=r(26179),yn=r(84551),pn=r(52942),jn=r(33900);const hn=B.Ay.div`
  background-color: ${({theme:n})=>n.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:n})=>n.surface3};
  width: 100%;
  padding: 16px;
`,fn=(0,B.Ay)(J.mm)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,gn=(0,B.Ay)(J.YA)`
  padding: ${({inline:n})=>n?"20px 0":"32px 0;"};
`,vn=(0,B.Ay)(J.mm)`
  padding-bottom: 12px;
`;function bn({onDismiss:n,pendingText:e,inline:r}){return(0,s.jsx)(hn,{children:(0,s.jsxs)(J.mm,{gap:"md",children:[!r&&(0,s.jsxs)(X.JA,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(an.US,{onClick:n})]}),(0,s.jsx)(gn,{inline:r,children:(0,s.jsx)(an.Nx,{src:t.A,alt:"loader",size:r?"40px":"90px"})}),(0,s.jsxs)(J.mm,{gap:"md",justify:"center",children:[(0,s.jsx)(cn.P.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,s.jsx)(m.Trans,{i18nKey:"transaction.confirmation.waiting"})}),(0,s.jsx)(cn.P.SubHeader,{color:"neutral1",textAlign:"center",children:e}),(0,s.jsx)(cn.P.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,s.jsx)(m.Trans,{i18nKey:"common.confirmTransaction.button"})})]})]})})}function An({onDismiss:n,chainId:e,hash:r,currencyToAdd:t,inline:i}){var a,u,d;const l=(0,Y.useTheme)(),{connector:x}=(0,o.Y)(),y=null===(a=t)||void 0===a?void 0:a.wrapped,p=(null===(u=(0,c.Ts)(y))||void 0===u?void 0:u.logoUrl)??"",[j,h]=(0,nn.useState)(),f=(0,nn.useCallback)((()=>{var n,e,r;(null===(n=y)||void 0===n?void 0:n.symbol)&&(null===(e=x)||void 0===e?void 0:e.watchAsset)&&(null===(r=x)||void 0===r||r.watchAsset({address:y.address,symbol:y.symbol,decimals:y.decimals,image:p}).then((()=>h(!0))).catch((()=>h(!1))))}),[x,p,y]),g=e===xn.UniverseChainId.Mainnet?(0,s.jsx)(m.Trans,{i18nKey:"common.etherscan.link"}):(0,s.jsx)(m.Trans,{i18nKey:"common.viewOnBlockExplorer"});return(0,s.jsx)(hn,{children:(0,s.jsxs)(J.mm,{children:[!i&&(0,s.jsxs)(X.JA,{children:[(0,s.jsx)("div",{}),(0,s.jsx)(an.US,{onClick:n})]}),(0,s.jsx)(gn,{inline:i,children:(0,s.jsx)(en.A,{strokeWidth:1,size:i?"40px":"75px",color:l.accent1})}),(0,s.jsxs)(vn,{gap:"md",justify:"center",children:[(0,s.jsx)(cn.P.MediumHeader,{textAlign:"center",children:(0,s.jsx)(m.Trans,{i18nKey:"common.transactionSubmitted"})}),t&&(null===(d=x)||void 0===d?void 0:d.watchAsset)&&(0,s.jsx)(N.N$,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:f,children:j?(0,s.jsxs)(X.Bp,{children:[(0,s.jsx)(m.Trans,{i18nKey:"transaction.confirmation.submitted.currency.added",values:{currency:t.symbol}}),(0,s.jsx)(rn.A,{size:"16px",stroke:l.success,style:{marginLeft:"6px"}})]}):(0,s.jsx)(X.Bp,{children:(0,s.jsx)(m.Trans,{i18nKey:"transaction.confirmation.submitted.currency.add",values:{currency:t.symbol}})})}),(0,s.jsx)(N.$$,{onClick:n,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,s.jsx)(cn.P.HeadlineSmall,{color:l.deprecated_accentTextLightPrimary,children:i?(0,s.jsx)(m.Trans,{i18nKey:"common.return.label"}):(0,s.jsx)(m.Trans,{i18nKey:"common.close"})})}),e&&r&&(0,s.jsx)(an.Gr,{href:(0,jn.getExplorerLink)(e,r,jn.ExplorerDataType.TRANSACTION),children:(0,s.jsx)(cn.P.Link,{color:l.accent1,children:g})})]})]})})}function Tn({title:n,bottomContent:e,onDismiss:r,topContent:o,headerContent:t}){var i;return(0,s.jsxs)(hn,{children:[(0,s.jsxs)(J.mm,{gap:"sm",children:[(0,s.jsxs)(X.Ay,{children:[null===(i=t)||void 0===i?void 0:i(),(0,s.jsx)(X.Ay,{justify:"center",marginLeft:"24px",children:(0,s.jsx)(cn.P.SubHeader,{children:n})}),(0,s.jsx)(an.US,{onClick:r,"data-testid":"confirmation-close-icon"})]}),o()]}),e&&(0,s.jsx)(fn,{gap:"16px",children:e()})]})}const In=(0,B.Ay)(q.A)`
  padding: 6px 8px;
`;function Sn({onDismiss:n,chainId:e,hash:r,pendingText:o,inline:i}){var a;const c=(0,Y.useTheme)(),u=(0,on.OA)(r),d=u&&(0,tn.G)(u),l=(null===(a=u)||void 0===a?void 0:a.status)===dn.TransactionStatus.Confirmed,x=d&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,y=(0,ln.getChainInfo)(e);return(0,s.jsx)(hn,{children:(0,s.jsxs)(J.mm,{children:[!i&&(0,s.jsxs)(X.JA,{mb:"16px",children:[(0,s.jsx)(In,{children:(0,s.jsxs)(X.Bp,{gap:"sm",children:[(0,s.jsx)(U.P,{chainId:e}),(0,s.jsx)(cn.P.SubHeaderSmall,{children:y.label})]})}),(0,s.jsx)(an.US,{onClick:n})]}),(0,s.jsx)(gn,{inline:i,children:d?l?(0,s.jsx)(z,{}):(0,s.jsx)(sn.A,{strokeWidth:1,size:i?"40px":"90px",color:c.critical}):(0,s.jsx)(an.Nx,{src:t.A,alt:"loader",size:i?"40px":"90px"})}),(0,s.jsxs)(J.mm,{gap:"md",justify:"center",children:[(0,s.jsx)(cn.P.SubHeaderLarge,{textAlign:"center",children:r?d?l?(0,s.jsx)(m.Trans,{i18nKey:"common.success"}):(0,s.jsx)(m.Trans,{i18nKey:"common.error.label"}):(0,s.jsx)(m.Trans,{i18nKey:"common.transactionSubmitted"}):(0,s.jsx)(m.Trans,{i18nKey:"transaction.confirmation.pending.wallet"})}),(0,s.jsx)(cn.P.BodySecondary,{textAlign:"center",children:u?(0,s.jsx)(H,{info:u.info}):o}),e&&r?(0,s.jsx)(an.Gr,{href:(0,jn.getExplorerLink)(e,r,jn.ExplorerDataType.TRANSACTION),children:(0,s.jsx)(cn.P.SubHeaderSmall,{color:c.accent1,children:(0,s.jsx)(m.Trans,{i18nKey:"common.viewOnExplorer"})})}):(0,s.jsx)("div",{style:{height:"17px"}}),(0,s.jsx)(cn.P.SubHeaderSmall,{color:c.neutral3,marginTop:"20px",children:x?(0,s.jsx)("div",{children:(0,s.jsx)(m.Trans,{i18nKey:"transaction.confirmation.completionTime",components:{highlight:(0,s.jsx)("span",{style:{fontWeight:535,marginLeft:"4px",color:c.neutral1}})},count:x})}):(0,s.jsx)("div",{style:{height:"24px"}})}),(0,s.jsx)(N.$$,{onClick:n,style:{margin:"4px 0 0 0"},children:i?(0,s.jsx)(m.Trans,{i18nKey:"common.return.label"}):(0,s.jsx)(m.Trans,{i18nKey:"common.close"})})]})]})})}function wn({isOpen:n,onDismiss:e,attemptingTxn:r,hash:o,pendingText:t,reviewContent:i,currencyToAdd:a}){const{chainId:c}=(0,Z.F)(),u=(0,mn.oe)(c);return c&&u?(0,s.jsx)(un.Modal,{name:pn.ModalName.TransactionConfirmation,isModalOpen:n,onClose:e,maxHeight:700,padding:0,children:(0,yn.isL2ChainId)(c)&&(o||r)?(0,s.jsx)(Sn,{chainId:c,hash:o,onDismiss:e,pendingText:t}):r?(0,s.jsx)(bn,{onDismiss:e,pendingText:t}):o?(0,s.jsx)(An,{chainId:c,hash:o,onDismiss:e,currencyToAdd:a}):i()}):null}},94873:(n,e,r)=>{r.d(e,{qC:()=>x,LR:()=>u,dX:()=>d,jK:()=>l,yj:()=>m,pL:()=>c});const s=r.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=r.p+"static/media/noise.3c7efafc83614205bd1a.png",t=r.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var i=r(45353),a=r(16444);const c=(0,a.Ay)(i.mm)`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,u=a.Ay.span`
  background: url(${s});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:n})=>n&&"filter: saturate(0)"}
`,d=a.Ay.span`
  background: url(${t});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:n})=>n&&"filter: saturate(0)"}
`,l=a.Ay.span`
  background: url(${o});
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
`,m=(0,a.Ay)(i.mm)`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:n})=>n&&"0.4"};
`,x=a.Ay.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},66064:(n,e,r)=>{r.d(e,{LJ:()=>c,SC:()=>a,ar:()=>d,mO:()=>i,nv:()=>u});var s=r(12520),o=r(16444),t=r(45355);const i=o.Ay.div`
  position: relative;
  padding: 20px;
`,a=(0,o.Ay)(t.EY)`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:n})=>n.accent1};
`,c=o.Ay.button`
  padding: 0.5rem 1rem;
  background-color: ${({theme:n})=>n.accent2};
  border: 1px solid ${({theme:n})=>n.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:n})=>n.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:n})=>n.accent1};
  :hover {
    border: 1px solid ${({theme:n})=>n.accent1};
  }
  :focus {
    border: 1px solid ${({theme:n})=>n.accent1};
    outline: none;
  }
`,u=o.Ay.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,d=(0,o.Ay)(s.ar)`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`}}]);
//# sourceMappingURL=6115.78e86336.chunk.js.map
(window["webpackJsonp_aleth_io_ethMemento"]=window["webpackJsonp_aleth_io_ethMemento"]||[]).push([[7],{"UA+Z":function(e,t,r){"use strict";r.r(t);var a=r("cDcd");var i=r("bb6g");var o=r("pFxa");var s=r("IZzZ");var n=r("VBo9");var l=r("sGQ9");var d=r("ZpAB");var c=r("IcBp");var h=r("nt0g");var g=r("7M1p");var u=r("dckH");var p=r("lvN2");var m=r("INKD");var b=r("C4qQ");var v=r("0jj9");var w=r("0p73");var P=r("hfe/");var y=r("jW0/");var f=r("u7wM");var S=r("X/Uc");var x=r("sLbY");var E=r("CC9R");var V=r("CcTz");var C=r("It4M");var N=r("F3RY");const k=N["b"].div.withConfig({displayName:"IconWrapper",componentId:"sc-1ur9v7n"})`
    position: absolute;
    left: -8px;
    top: -4px;
    transform: translateX(-100%);
`;class T{constructor(e,t){this.txLinkRendererBase=e;this.translation=t}render(e){return a["createElement"]("div",{style:{position:"relative"}},!1===e.success?a["createElement"](k,null,a["createElement"](V["a"],{placement:"left",content:this.translation.get("txView.content.txStatus.error")},a["createElement"](C["a"],{size:24}))):null,this.txLinkRendererBase.render(e))}}var I;!function(e){e["Hash"]="hash";e["From"]="from";e["Direction"]="direction";e["To"]="to";e["Value"]="value";e["Fee"]="fee";e["BlockNo"]="blockNumber";e["BlockTime"]="blockTime"}(I||(I={}));class F extends w["a"]{constructor(e,t,r,a){super();this.fields=[{label:e.get("general.hash"),fieldKey:I.Hash,type:"string",isSortable:!1,selected:!0,alwaysVisible:!0,getFieldValue:e=>e.hash,renderer:new T(new E["a"](e=>e.hash),e)},{label:e.get("general.from"),fieldKey:I.From,type:"string",isSortable:!1,alwaysVisible:!0,selected:!0,getFieldValue:e=>e.from,renderer:new y["a"](a,e=>e.from)},{label:"",fieldKey:I.Direction,type:"string",isSortable:!1,alwaysVisible:!0,selected:!0,getFieldValue:e=>"",renderer:new x["a"](a,e)},{label:e.get("general.to"),fieldKey:I.To,type:"string",isSortable:!1,alwaysVisible:!0,selected:!0,getFieldValue:e=>e.to,renderer:new y["a"](a,e=>e.to)},{label:e.get("general.valueEth",{"%s":r}),fieldKey:I.Value,type:"number",isSortable:!1,selected:!0,getFieldValue:e=>e.value,renderer:new P["a"](t,e=>e.value)},{label:e.get("general.feeEth",{"%s":r}),fieldKey:I.Fee,type:"number",isSortable:!1,selected:!0,getFieldValue:e=>e.gasUsed.multipliedBy(e.gasPrice),renderer:new P["a"](t,e=>e.gasUsed.multipliedBy(e.gasPrice))},{label:e.get("accountView.content.accountSummary.transactions.blockNumber.label"),fieldKey:I.BlockNo,type:"number",isSortable:!1,selected:!1,getFieldValue:e=>e.block.id,renderer:new f["a"](t,e=>e.block.id)},{label:e.get("accountView.content.accountSummary.transactions.blockTime.label"),fieldKey:I.BlockTime,type:"string",isSortable:!1,selected:!0,getFieldValue:e=>e.block.creationTime,renderer:new S["a"](t,e=>e.block.creationTime)}]}}var B=r("1/6t");var z=r("RekV");var M=r("qJXn");let L=class e extends a["Component"]{constructor(e){super(e);this.rangeStart=1;this.loadStatus=z["a"].Loaded;this.handleNextPage=(()=>i["a"](this,void 0,void 0,function*(){this.loadStatus=z["a"].NotLoaded;try{yield this.props.paginatedView.goToNextPage()}catch(e){this.props.onPageError(e);this.loadStatus=z["a"].Error;return}Object(n["runInAction"])(()=>{this.items=this.props.paginatedView.getItems();this.loadStatus=z["a"].Loaded;this.rangeStart+=this.props.paginatedView.getPageSize()});this.scrollToGridTop()}));this.handlePrevPage=(()=>i["a"](this,void 0,void 0,function*(){this.loadStatus=z["a"].NotLoaded;try{yield this.props.paginatedView.goToPreviousPage()}catch(e){this.props.onPageError(e);this.loadStatus=z["a"].Error;return}Object(n["runInAction"])(()=>{this.items=this.props.paginatedView.getItems();this.loadStatus=z["a"].Loaded;this.rangeStart-=this.props.paginatedView.getPageSize()});this.scrollToGridTop()}));this.scrollToGridTop=(()=>{this.gridContainer.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})});this.items=this.props.paginatedView.getItems()}componentDidUpdate(e){this.props.paginatedView!==e.paginatedView&&(this.items=this.props.paginatedView.getItems())}render(){let{translation:e,locale:t}=this.props;let r=this.rangeStart+this.items.length-1;let i=this.items.map((e,t)=>({key:t,data:e}));return a["createElement"](a["Fragment"],null,a["createElement"]("div",{ref:e=>this.gridContainer=e},a["createElement"](M["a"],{rows:i,limitRows:!1,fields:this.props.fields,sortingOptions:this.props.sortingOptions,translation:e})),this.hasMorePages()||this.rangeStart>1?a["createElement"](B["a"],{rangeStart:this.rangeStart,rangeEnd:r,isLastPage:!this.hasMorePages(),loadStatus:this.loadStatus,onPrevPage:this.handlePrevPage,onNextPage:this.handleNextPage,errorText:e.get("general.error"),locale:t}):null)}hasMorePages(){return this.props.paginatedView.hasMorePages()}};i["b"]([n["observable"]],L.prototype,"rangeStart",void 0);i["b"]([n["observable"]],L.prototype,"loadStatus",void 0);L=i["b"]([l["observer"]],L);class R extends a["Component"]{constructor(e){super(e);this.gridFields=new F(e.translation,e.locale,e.ethSymbol,e.accountAddress);this.gridSortingOptions=new v["a"]}render(){return a["createElement"](L,{paginatedView:this.props.paginatedView,fields:this.gridFields,sortingOptions:this.gridSortingOptions,translation:this.props.translation,locale:this.props.locale,onPageError:e=>this.props.logger.error(e)})}}class _{constructor(e){this.baseCursorPaginatedView=e;this._hasMorePages=!0}loadFirstPage(){return i["a"](this,void 0,void 0,function*(){yield this.baseCursorPaginatedView.loadFirstPage();try{yield this.baseCursorPaginatedView.loadNextPage()}catch(e){this._hasMorePages=!1}})}goToNextPage(){return i["a"](this,void 0,void 0,function*(){yield this.baseCursorPaginatedView.goToNextPage();try{yield this.baseCursorPaginatedView.loadNextPage()}catch(e){this._hasMorePages=!1}})}goToPreviousPage(){return i["a"](this,void 0,void 0,function*(){yield this.baseCursorPaginatedView.goToPreviousPage();this._hasMorePages=!0})}getItems(){return this.baseCursorPaginatedView.getItems()}getPageSize(){return this.baseCursorPaginatedView.getPageSize()}hasMorePages(){return this._hasMorePages}}class A{constructor(e,t,r,a){this.store=e;this.initialCursor=t;this.pageSize=r;this.getCursor=a;this.storage=[]}loadFirstPage(){return i["a"](this,void 0,void 0,function*(){this.currentPage=0;yield this.loadItems(this.initialCursor,this.currentPage)})}goToNextPage(){return i["a"](this,void 0,void 0,function*(){if(void 0===this.currentPage)throw new Error("Not initialized");yield this.loadNextPage();this.currentPage++})}loadNextPage(){return i["a"](this,void 0,void 0,function*(){if(void 0===this.currentPage)throw new Error("Not initialized");let e=this.getItems();if(!e)throw new Error(`Page ${this.currentPage+1} can't be loaded because the previous page is not loaded`);if(e.length<this.pageSize)throw new RangeError("We are already on the last page");let t=e[e.length-1];let r=this.getCursor(t);yield this.loadItems(r,this.currentPage+1)})}goToPreviousPage(){return i["a"](this,void 0,void 0,function*(){if(void 0===this.currentPage)throw new Error("Not initialized");if(0===this.currentPage)throw new RangeError("We are already on the first page");this.currentPage--})}loadItems(e,t){return i["a"](this,void 0,void 0,function*(){let r=this.storage[t];if(!r){r=yield this.store.fetch(e,this.pageSize);this.storage[t]=r}})}getItems(){if(void 0===this.currentPage)throw new Error("Not initialized");return this.storage[this.currentPage]}getPageSize(){return this.pageSize}}const D=N["b"].div.withConfig({displayName:"GridRoot",componentId:"sc-1de3yzg"})`
    max-width: 100vw;
`;const H=50;let K=class e extends a["Component"]{constructor(e){super(e);this.renderExpander=(({config:e,isOpen:t,onClick:r,onResize:i,isFullWidth:o})=>a["createElement"](s["a"],{label:e.label,open:t,onClick:r,onResize:i,fullWidth:o,locale:this.props.locale}));this.renderContent=(({content:e,status:t,arrowPosition:r})=>{if(t!==u["a"].Loaded)return a["createElement"](p["a"],null,a["createElement"](m["a"],null,a["createElement"](b["a"],null),e));return a["createElement"](g["ThemeContext"].Consumer,null,t=>a["createElement"](h["a"],{arrowPosition:r,backgroundColor:t.colors.gridEvenRowBg,borderColor:t.colors.gridBorder,noBorder:!0},e))});this.items=this.buildItems(this.props.accountHash,this.props.latestBlockNumber)}componentDidUpdate(e){this.props.accountHash===e.accountHash&&this.props.translation===e.translation||(this.items=this.buildItems(this.props.accountHash,this.props.latestBlockNumber))}render(){const{translation:e}=this.props;return a["createElement"](d["a"],{label:e.get("accountView.content.accountSummary.label"),noDataContent:a["createElement"](o["a"],{translation:e}),renderExpander:this.renderExpander,renderContent:this.renderContent,loadingText:`${e.get("general.loading")}...`,errorText:e.get("general.error"),onContentError:(e,t)=>{this.props.logger.error(`Couldn't load content for account summary tab #${t.index}`,e)}},this.items)}buildItems(e,t){let r=this.props.translation;let o;return a["createElement"](a["Fragment"],null,a["createElement"](c["a"],{label:r.get("accountView.content.accountSummary.minedTransactions.label"),content:()=>i["a"](this,void 0,void 0,function*(){let i=new _(new A({fetch:(t,r)=>this.props.txLiteByAccountStore.fetch(e,t,r)},{blockNo:t,txIndex:0},50,e=>({blockNo:e.block.id,txIndex:e.txIndex})));yield i.loadFirstPage();return a["createElement"](D,null,a["createElement"](R,{paginatedView:i,accountAddress:e,translation:r,locale:this.props.locale,ethSymbol:this.props.ethSymbol,logger:this.props.logger}))})}))}};i["b"]([n["observable"].shallow],K.prototype,"items",void 0);K=i["b"]([l["observer"]],K);r.d(t,"Summary",function(){return O});class O extends a["Component"]{render(){let{translation:e,locale:t,txLiteByAccountStore:r,accountHash:i,ethSymbol:o}=this.props;return a["createElement"](K,{accountHash:i,translation:e,locale:t,ethSymbol:o,logger:this.props.logger,latestBlockNumber:this.props.latestBlockNumber,txLiteByAccountStore:r})}}},qJXn:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r("bb6g");var i=r("cDcd");var o=r.n(i);var s=r("ptEp");class n extends i["Component"]{render(){let e=this.props,{translation:t}=e,r=a["c"](e,["translation"]);return i["createElement"](s["a"],Object.assign({},r,{noDataText:t.get("general.grid.footer.norowsavailable.label"),loadMoreText:t.get("general.grid.footer.loadMore.label")}))}}}}]);
//# sourceMappingURL=962066ba4fa124765c0e.bundle.js.map
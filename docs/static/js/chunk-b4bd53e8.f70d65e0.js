(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4bd53e8"],{"1fcf":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return l}));var i=a("b775");function n(e){return Object(i["a"])({url:"/vue-element-admin/quote/list",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/vue-element-admin/quote/pv",method:"get",params:{pv:e}})}},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,a){var i=s(),n=e-i,r=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=r;var s=Math.easeInOutQuad(u,i,n,t);o(s),u<t?l(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},c=u,d=(a("5660"),a("2877")),p=Object(d["a"])(c,i,n,!1,null,"6af373ef",null);t["a"]=p.exports},4559:function(e,t,a){},5660:function(e,t,a){"use strict";a("7a30")},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),s=l.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":(s=document.createElement("span"),s.className="waves-ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",l.appendChild(s)),n.type){case"center":s.style.top=o.height/2-s.offsetHeight/2+"px",s.style.left=o.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(a.pageY-o.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(a.pageX-o.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=n.color,s.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;t["a"]=l},"7a30":function(e,t,a){},"8d41":function(e,t,a){},"9b55":function(e,t,a){"use strict";a("4559")},b513:function(e,t,a){"use strict";a("d9c7")},bfd5:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"quote",attrs:{model:e.form,"label-width":"120px"}},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Quote Number:"}},[a("el-input",{attrs:{placeholder:"KHI-"},model:{value:e.quote.quotenumber,callback:function(t){e.$set(e.quote,"quotenumber",t)},expression:"quote.quotenumber"}})],1),a("el-form-item",{attrs:{label:"Quote date:"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date"},model:{value:e.quote.date_quote,callback:function(t){e.$set(e.quote,"date_quote",t)},expression:"quote.date_quote"}})],1),a("el-form-item",{attrs:{label:"Owner"}},[a("el-select",{attrs:{placeholder:"please select the Owner"},model:{value:e.quote.owner,callback:function(t){e.$set(e.quote,"owner",t)},expression:"quote.owner"}},[a("el-option",{attrs:{label:"Diane",value:"Diane"}}),a("el-option",{attrs:{label:"Tony",value:"Tony"}})],1)],1)],1),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Company"}},[a("el-input",{model:{value:e.quote.company,callback:function(t){e.$set(e.quote,"company",t)},expression:"quote.company"}})],1),a("el-form-item",{attrs:{label:"Contact"}},[a("el-input",{model:{value:e.quote.contact,callback:function(t){e.$set(e.quote,"contact",t)},expression:"quote.contact"}})],1)],1),a("ComplexTable"),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Currency"}},[a("el-input",{model:{value:e.quote.currency,callback:function(t){e.$set(e.quote,"currency",t)},expression:"quote.currency"}})],1),a("el-form-item",{attrs:{label:"Price"}},[a("el-input",{model:{value:e.quote.price,callback:function(t){e.$set(e.quote,"price",t)},expression:"quote.price"}})],1),a("el-form-item",{attrs:{label:"Trade Term"}},[a("el-input",{model:{value:e.quote.trade_term,callback:function(t){e.$set(e.quote,"trade_term",t)},expression:"quote.trade_term"}})],1)],1),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Delivery"}},[a("el-input",{model:{value:e.quote.delivery,callback:function(t){e.$set(e.quote,"delivery",t)},expression:"quote.delivery"}})],1),a("el-form-item",{attrs:{label:"Payment Term"}},[a("el-input",{model:{value:e.quote.payment,callback:function(t){e.$set(e.quote,"payment",t)},expression:"quote.payment"}})],1)],1),a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"Validity"}},[a("el-input",{model:{value:e.quote.validity,callback:function(t){e.$set(e.quote,"validity",t)},expression:"quote.validity"}})],1),a("el-form-item",{attrs:{label:"Warranty"}},[a("el-input",{model:{value:e.quote.warranty,callback:function(t){e.$set(e.quote,"warranty",t)},expression:"quote.warranty"}})],1)],1)],1)],1)},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{label:"No.",type:"index",sortable:"custom",align:"center",width:"80","class-name":e.getSortClass("id")}}),a("el-table-column",{attrs:{label:"Item",width:"300px",align:"Left"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",{staticStyle:{"text-align":"left"}},[e._v(e._s(i.item))])]}}])}),a("el-table-column",{attrs:{label:"Quantity",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.quantity))])]}}])}),a("el-table-column",{attrs:{label:"Price",width:"110px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("span",[e._v(e._s(i.price))])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row,n=t.$index;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleUpdate(i)}}},[e._v(" Edit ")]),"deleted"!=i.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(i,n)}}},[e._v(" Delete ")]):e._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"Type",prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.calendarTypeOptions,(function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1)],1),a("el-form-item",{attrs:{label:"Date",prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:e.temp.timestamp,callback:function(t){e.$set(e.temp,"timestamp",t)},expression:"temp.timestamp"}})],1),a("el-form-item",{attrs:{label:"Title",prop:"title"}},[a("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),a("el-form-item",{attrs:{label:"Status"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"Please select"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),a("el-form-item",{attrs:{label:"Imp"}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:e.temp.importance,callback:function(t){e.$set(e.temp,"importance",t)},expression:"temp.importance"}})],1),a("el-form-item",{attrs:{label:"Remark"}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.remark,callback:function(t){e.$set(e.temp,"remark",t)},expression:"temp.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" Cancel ")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" Confirm ")])],1)],1),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("Add")])],1)},o=[],s=(a("13d5"),a("d3b7"),a("4e82"),a("c740"),a("a434"),a("3ca3"),a("ddb0"),a("d81d"),a("1fcf")),r=a("6724"),u=a("ed08"),c=a("333d"),d=[{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}],p=d.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),m={name:"ComplexTable",components:{Pagination:c["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return p[e]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:d,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(s["b"])(this.listQuery).then((function(t){e.list=t.data.items,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),1500)}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(s["createArticle"])(e.temp).then((function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})})))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){var a=Object.assign({},e.temp);a.timestamp=+new Date(a.timestamp),Object(s["updateArticle"])(a).then((function(){var t=e.list.findIndex((function(t){return t.id===e.temp.id}));e.list.splice(t,1,e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handleDelete:function(e,t){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(s["c"])(e).then((function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-0d1c46e8"),a.e("chunk-181fab9f"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],n=e.formatJson(i);t.export_json_to_excel({header:a,data:n,filename:"table-list"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"timestamp"===e?Object(u["d"])(t[e]):t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},f=m,b=(a("9b55"),a("2877")),g=Object(b["a"])(f,l,o,!1,null,null,null),h=g.exports,y={name:"create",components:{ComplexTable:h},data:function(){return{quote:{number:"",currency:"",vat:"",discount_direct:"",discount:"",total:"",company:"",contact:"",greeting:"",owner:"",date_quote:"",ending:"",price:"",trade_term:"",delivery:"",payment:"",validity:"",warranty:""}}},methods:{onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}},v=y,w=(a("b513"),Object(b["a"])(v,i,n,!1,null,"c4fc18be",null));t["default"]=w.exports},d9c7:function(e,t,a){}}]);
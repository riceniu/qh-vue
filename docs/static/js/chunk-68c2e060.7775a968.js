(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c2e060"],{"1db3":function(t,e,a){"use strict";a("4e4f")},"1fcf":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return l})),a.d(e,"d",(function(){return r}));var i=a("b775");function o(t){return Object(i["a"])({url:"/vue-element-admin/quote/list",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/vue-element-admin/quote/detail",method:"get",params:{quote_number:t}})}function s(t){return Object(i["a"])({url:"/vue-element-admin/quote/create",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/vue-element-admin/quote/update",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/vue-element-admin/quote/items",method:"get",params:t})}},"4d01":function(t,e,a){"use strict";a("cb5b")},"4e4f":function(t,e,a){},c4c8:function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return r})),a.d(e,"f",(function(){return u}));var i=a("b775");function o(t){return Object(i["a"])({url:"/vue-element-admin/product/list",method:"get",params:t})}function n(){return Object(i["a"])({url:"/vue-element-admin/product/lastid",method:"get"})}function s(t){return Object(i["a"])({url:"/vue-element-admin/product/add",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/vue-element-admin/product/delete",method:"delete",data:t})}function r(t){return Object(i["a"])({url:"/vue-element-admin/product/edit",method:"post",data:t})}function u(){return Object(i["a"])({url:"/vue-element-admin/product/category",method:"get"})}},cb5b:function(t,e,a){},ee97:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"quote",staticStyle:{"margin-right":"30px"},attrs:{model:t.quote,"label-width":"120px",rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"Quote No.:",prop:"quote_number"}},[a("el-input",{attrs:{disabled:t.isEdit,placeholder:"KHI-"},on:{change:t.changeQuoteNumber},model:{value:t.quote.quote_number,callback:function(e){t.$set(t.quote,"quote_number",e)},expression:"quote.quote_number"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"Quote date:",prop:"quote_date"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Pick a date","value-format":"yyyy-MM-dd"},model:{value:t.quote.quote_date,callback:function(e){t.$set(t.quote,"quote_date",e)},expression:"quote.quote_date"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"Owner",prop:"owner"}},[a("el-select",{attrs:{placeholder:"Please select"},model:{value:t.quote.owner,callback:function(e){t.$set(t.quote,"owner",e)},expression:"quote.owner"}},t._l(t.ownerList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"Contact",prop:"contact"}},[a("el-input",{model:{value:t.quote.contact,callback:function(e){t.$set(t.quote,"contact",e)},expression:"quote.contact"}})],1)],1),a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"Company",prop:"company"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.quote.company,callback:function(e){t.$set(t.quote,"company",e)},expression:"quote.company"}})],1)],1)],1),a("el-form-item",{attrs:{label:"Greeting",prop:"greeting"}},[a("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.quote.greeting,callback:function(e){t.$set(t.quote,"greeting",e)},expression:"quote.greeting"}})],1),a("ComplexTable",{attrs:{quoteNumber:t.PassQuoteNumber},on:{itemChange:t.itemChange}}),a("div",[a("el-row",[a("div",[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Currency"}},[a("el-input",{model:{value:t.quote.currency,callback:function(e){t.$set(t.quote,"currency",e)},expression:"quote.currency"}})],1)],1),a("el-col",{attrs:{span:6,offset:7}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Direct discount"}},[a("el-input",{on:{change:t.updateTotal},model:{value:t.quote.discount_direct,callback:function(e){t.$set(t.quote,"discount_direct",e)},expression:"quote.discount_direct"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Trade Term"}},[a("el-input",{model:{value:t.quote.trade_term,callback:function(e){t.$set(t.quote,"trade_term",e)},expression:"quote.trade_term"}})],1)],1),a("el-col",{attrs:{span:6,offset:5}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Discount %"}},[a("el-input",{on:{change:t.updateTotal},model:{value:t.quote.discount,callback:function(e){t.$set(t.quote,"discount",e)},expression:"quote.discount"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Price"}},[a("el-input",{model:{value:t.quote.price,callback:function(e){t.$set(t.quote,"price",e)},expression:"quote.price"}})],1)],1),a("el-col",{attrs:{span:6,offset:5}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"VAT"}},[a("el-input",{on:{change:t.updateTotal},model:{value:t.quote.vat,callback:function(e){t.$set(t.quote,"vat",e)},expression:"quote.vat"}})],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Delivery"}},[a("el-input",{model:{value:t.quote.delivery,callback:function(e){t.$set(t.quote,"delivery",e)},expression:"quote.delivery"}})],1)],1),a("el-col",{attrs:{span:6,offset:5}},[a("hr",{staticStyle:{"margin-bottom":"0","margin-top":"0"}}),a("el-form-item",{staticClass:"narrow",attrs:{label:"Total"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.quote.total,callback:function(e){t.$set(t.quote,"total",e)},expression:"quote.total"}})],1)],1)],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{staticClass:"narrow",attrs:{label:"Payment Term"}},[a("el-input",{model:{value:t.quote.payment,callback:function(e){t.$set(t.quote,"payment",e)},expression:"quote.payment"}})],1),a("el-form-item",{staticClass:"narrow",attrs:{label:"Validity"}},[a("el-input",{model:{value:t.quote.validity,callback:function(e){t.$set(t.quote,"validity",e)},expression:"quote.validity"}})],1),a("el-form-item",{staticClass:"narrow",attrs:{label:"Warranty"}},[a("el-input",{model:{value:t.quote.warranty,callback:function(e){t.$set(t.quote,"warranty",e)},expression:"quote.warranty"}})],1)],1)],1)],1),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.isEdit?t.editQuote():t.addQuote()}}},[t._v("Save")])],1)},o=[],n=a("b85c"),s=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("Add")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"No.",type:"index",align:"center",width:"auto","min-width":"10%"}}),a("el-table-column",{attrs:{label:"Item",align:"Left",width:"auto","min-width":"40%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.row.item))])]}}])}),a("el-table-column",{attrs:{label:"Quantity",width:"auto",align:"center","min-width":"15%"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("el-input-number",{attrs:{size:"mini"},on:{change:t.handleQuantityChange},model:{value:i.quantity,callback:function(e){t.$set(i,"quantity",e)},expression:"row.quantity"}},[t._v(" "+t._s(i.quantity)+" ")])]}}])}),a("el-table-column",{attrs:{label:"Unit price",width:"auto",align:"left","min-width":"10%"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.price))])]}}])}),a("el-table-column",{attrs:{label:"Sum",width:"auto",align:"left","min-width":"10%"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[a("span",[t._v(t._s(i.price*i.quantity))])]}}])}),a("el-table-column",{attrs:{label:"Actions",align:"center",width:"auto","class-name":"small-padding fixed-width","min-width":"15%"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row,o=e.$index;return[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(e){return t.handleEdit(i,o)}}}),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(e){return t.handleDelete(i,o)}}})],1)]}}])})],1),a("el-col",{attrs:{span:6,offset:15}},[a("el-form-item",{attrs:{label:"Subtotal"}},[a("el-input",{staticStyle:{width:"100px"},attrs:{type:"text",disabled:!0},model:{value:t.subtotal,callback:function(e){t.subtotal=e},expression:"subtotal"}})],1)],1),a("br"),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"close-on-click-modal":!1,"before-close":t.closeDialog},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"20px","margin-right":"40px"},attrs:{rules:t.rules,model:t.temp,"label-width":"90px"}},[a("el-form-item",{attrs:{label:"Product",prop:"productname"}},[a("el-cascader",{staticStyle:{width:"260px","margin-bottom":"20px"},attrs:{options:t.optionedItme},on:{change:t.handleOptionChange},model:{value:t.tempOption,callback:function(e){t.tempOption=e},expression:"tempOption"}})],1),a("el-form-item",{attrs:{label:"Price",prop:"price"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.temp.price,callback:function(e){t.$set(t.temp,"price",e)},expression:"temp.price"}})],1),a("el-form-item",{attrs:{label:"Quantity",prop:"quantity"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.temp.quantity,callback:function(e){t.$set(t.temp,"quantity",e)},expression:"temp.quantity"}})],1),a("el-form-item",{attrs:{label:"Currency",prop:"currency"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.temp.currency,callback:function(e){t.$set(t.temp,"currency",e)},expression:"temp.currency"}})],1),a("el-form-item",{attrs:{label:"Quote text",prop:"text"}},[a("el-input",{attrs:{type:"textarea",placeholder:"Quote text",rows:"4"},model:{value:t.temp.quote_text,callback:function(e){t.$set(t.temp,"quote_text",e)},expression:"temp.quote_text"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeDialog}},[t._v(" Close ")]),"Add"===t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addItem()}}},[t._v(" Add ")]):t._e(),"Edit"===t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.editItem()}}},[t._v(" Confirm ")]):t._e()],1)],1)],1)}),l=[],r=a("c7eb"),u=a("1da1"),c=a("2909"),d=a("ade3"),m=(a("a434"),a("1fcf")),p=a("c4c8"),f={name:"ComplexTable",props:["quoteNumber"],data:function(){var t;return t={list:[],listLoading:!0,QueryList:{quote_number:""},rules:{quantity:[{required:!0,message:"This is mandatory",trigger:"blur"}],price:[{required:!0,message:"This is mandatory",trigger:"blur"},{type:"number",transform:function(t){return""===t?0:Number(t)},trigger:"blur"}]},temp:{item:"",quote_text:"",quantity:0,price:0,currency:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[]},Object(d["a"])(t,"rules",{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]}),Object(d["a"])(t,"textMap",{Edit:"Edit",Add:"Add a new item"}),Object(d["a"])(t,"dialogStatus",""),Object(d["a"])(t,"downloadLoading",!1),Object(d["a"])(t,"subtotal",0),Object(d["a"])(t,"Items",[]),Object(d["a"])(t,"uniqueKey",584651274321768),Object(d["a"])(t,"dialogVisible",!0),Object(d["a"])(t,"optionedItme",[]),Object(d["a"])(t,"tempOption",""),Object(d["a"])(t,"editingRow",0),t},watch:{quoteNumber:function(t,e){this.QueryList.quote_number=this.quoteNumber,this.getList()}},created:function(){var t=this;this.resetTemp(),this.listLoading=!1,Object(p["f"])().then((function(e){t.optionedItme=Object(c["a"])(e.data)})),this.updateSubtotal()},methods:{getList:function(){var t=this;return Object(u["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(m["d"])(t.QueryList).then((function(e){t.list=e.data,t.listLoading=!1}));case 3:t.updateSubtotal();case 4:case"end":return e.stop()}}),e)})))()},handleAdd:function(){this.dialogFormVisible=!0,this.dialogStatus="Add"},handleItemChange:function(t){console.log(t)},resetTemp:function(){this.temp={}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleEdit:function(t,e){this.editingRow=e,this.tempOption=[{},{}],console.log(this.editingRow);var a,i=Object(n["a"])(this.optionedItme);try{for(i.s();!(a=i.n()).done;){var o,s=a.value,l=Object(n["a"])(s.children);try{for(l.s();!(o=l.n()).done;){var r=o.value;if(r.productname===t.item){this.temp=r,this.temp.quantity=t.quantity,this.tempOption[1]=r.productname;break}}}catch(u){l.e(u)}finally{l.f()}if(this.temp.category){this.tempOption[0]=s.value;break}}}catch(u){i.e(u)}finally{i.f()}this.dialogFormVisible=!0,this.dialogStatus="Edit"},handleDelete:function(t,e){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(e,1),this.handleQuantityChange()},handleQuantityChange:function(){console.log("handelQuantityChange()"),console.log(this.list),this.$emit("itemChange",this.list),this.updateSubtotal()},updateSubtotal:function(){if(this.subtotal=0,this.list){var t,e=Object(n["a"])(this.list);try{for(e.s();!(t=e.n()).done;){var a=t.value;this.subtotal+=a.price*a.quantity}}catch(i){e.e(i)}finally{e.f()}}this.$emit("itemChange",this.list)},handleOptionChange:function(){var t,e=0,a=Object(n["a"])(this.optionedItme);try{for(a.s();!(t=a.n()).done;){var i=t.value;if(i.value.indexOf(this.tempOption[0])>=0)break;e+=1}}catch(u){a.e(u)}finally{a.f()}var o,s=this.optionedItme[e].children,l=Object(n["a"])(s);try{for(l.s();!(o=l.n()).done;){var r=o.value;if(1,r.value===this.tempOption[1]){this.temp=Object.assign({},r),this.temp.quantity=1;break}}}catch(u){l.e(u)}finally{l.f()}console.log("handoptionChange end+temp"),console.log(this.temp)},closeDialog:function(){this.dialogFormVisible=!1,this.resetTemp(),this.tempOption=""},addItem:function(){this.saveItem(-1),this.$notify({title:"Success",message:"Item is successfully added",type:"success",duration:2e3}),this.dialogFormVisible=!1,this.resetTemp(),this.tempOption=""},editItem:function(){var t=this.editingRow;this.saveItem(t),this.$notify({title:"Success",message:"Item is successfully edited",type:"success",duration:2e3}),this.dialogFormVisible=!1,this.resetTemp(),this.tempOption=""},saveItem:function(t){if(t<0){console.log("saveItem - add");var e={};e.item=this.temp.productname,e.quantity=this.temp.quantity,e.price=this.temp.price,e.quote_number=this.quoteNumber,this.list.push(e)}else console.log("saveItem - edit"),console.log(this.list[t]),console.log(this.temp),this.list[t].item=this.temp.productname,this.list[t].quantity=this.temp.quantity,this.list[t].price=this.temp.price,this.list[t].quote_number=this.quoteNumber,console.log(this.list[t]);this.updateSubtotal()}}},h=f,b=(a("1db3"),a("2877")),g=Object(b["a"])(h,s,l,!1,null,null,null),q=g.exports,y={name:"create",components:{ComplexTable:q},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{ownerList:[{label:"Diane",value:"Diane"},{label:"NZ",value:"NZ"}],quote:{quote_number:"",currency:"",vat:"",discount_direct:"",discount:"",total:"",company:"",contact:"",greeting:"",owner:"",quote_date:"",ending:"",price:"",trade_term:"",delivery:"",payment:"",validity:"",warranty:""},items:[],rules:{quote_number:[{required:!0,message:"This is mandatory",trigger:"blur"}],quote_date:[{required:!0,message:"This is mandatory",trigger:"blur"}],owner:[{required:!0,message:"This is mandatory",trigger:"change"}],company:[{required:!0,message:"This is mandatory",trigger:"blur"}],contact:[{required:!0,message:"This is mandatory",trigger:"blur"}],nnn:[{required:!0,message:"This is mandatory",trigger:"blur"},{type:"number",transform:function(t){return""===t?0:Number(t)},trigger:"blur"}]},quoteItem:{quote_number:""},PassQuoteNumber:"",subtotal:0}},created:function(){console.log("created"),this.isEdit&&this.fetchDate(this.$route.params.id)},mounted:function(){},beforeDestroy:function(){},updated:function(){},methods:{fetchDate:function(t){var e=this;console.log("fetch"),Object(m["c"])(t).then((function(t){e.quote=t.data,e.PassQuoteNumber=e.quote.quote_number})).catch((function(t){console.log(t)}))},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},addQuote:function(){var t=this;this.$refs["quote"].validate((function(e){if(e){var a={quote:t.quote,items:t.items};console.log("adddQuote"),console.log(a),Object(m["a"])(a),t.$message({type:"success",message:"Successfully added"})}t.$router.push({path:"/quote/list"})}))},changeQuoteNumber:function(){this.PassQuoteNumber=this.quote.quote_number},editQuote:function(){var t=this;this.$refs["quote"].validate((function(e){if(e){var a={quote:t.quote,items:t.items};console.log("editQuote"),console.log(a),Object(m["e"])(a),t.$message({type:"success",message:"Successfully saved"})}t.$router.push({path:"/quote/list"})}))},itemChange:function(t){if(t.length>0){console.log(t);var e,a=0,i=Object(n["a"])(t);try{for(i.s();!(e=i.n()).done;){var o=e.value;a+=o.price*(1*o.quantity)}}catch(s){i.e(s)}finally{i.f()}console.log(a),this.subtotal=a,this.quote.total=(a-this.quote.discount_direct)*(1-this.quote.discount)*(1+this.quote.vat),t[0].quote_number===this.quote.quote_number?(this.items=t,console.log("this.items"),console.log(this.items)):alert("Error: quotate_number error")}},updateTotal:function(){this.quote.total=(this.subtotal-this.quote.discount_direct)*(1-this.quote.discount)*(1+this.quote.vat)}}},v=y,w=(a("4d01"),Object(b["a"])(v,i,o,!1,null,"d1065272",null));e["a"]=w.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f934982"],{a90e:function(t,e,r){"use strict";r("f7ac")},e6dc:function(t,e,r){"use strict";r.r(e);var c=r("7a23"),o={class:"tw-mt-20 tw-px-28"},n={class:"tw-w-full tw-py-6"},l={class:"tw-w-full tw-text-6xl tw-py-1 tw-font-bold tw-text-transparent tw-bg-gradient-to-br tw-from-primary-gradient2 tw-to-primary-gradient4 tw-bg-clip-text"},w={class:"tw-w-full tw-text-3xl tw-text-gray-500 tw-px-8 tw-py-2"},a=Object(c["h"])("div",{class:"tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"},null,-1),u={class:"tw-grid tw-grid-cols-1"},d=Object(c["h"])("div",{class:"tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"},null,-1);function b(t,e,r,b,i,s){var p=Object(c["E"])("ProductModal"),j=Object(c["E"])("ProductInformation");return Object(c["x"])(),Object(c["g"])("div",o,[Object(c["h"])("div",n,[Object(c["h"])("div",l,Object(c["G"])(b.t("Products.our")),1),Object(c["h"])("div",w,Object(c["G"])(b.t("Products.qual")),1),a]),Object(c["h"])("div",u,[Object(c["k"])(p,{product:i.product,active:i.active.product_drawer,onCloseProductDrawer:e[0]||(e[0]=function(t){return s.closeProductDrawer()})},null,8,["product","active"]),(Object(c["x"])(!0),Object(c["g"])(c["a"],null,Object(c["D"])(s.products,(function(t){return Object(c["x"])(),Object(c["g"])("div",{key:t.id},[Object(c["k"])(j,{product:t,onViewProduct:e[1]||(e[1]=function(t){return s.viewProduct(t)})},null,8,["product"]),d])})),128))])])}var i=r("47e2"),s=(r("b0c0"),{class:"tw-grid tw-grid-cols-3 lg:tw-grid-cols-8 tw-gap-4 tw-overflow-hidden",style:{"background-color":"light-grey"}}),p={class:"tw-col-span-3 lg:tw-col-span-2 lg:tw-pl-5"},j=["src"],h={class:"tw-col-span-3 tw-p-10"},O={class:"tw-text-3xl tw-text-center lg:tw-text-left"},g=Object(c["h"])("br",null,null,-1),f={class:"tw-text-lg tw-font-bold tw-text-center lg:tw-text-left"},x={class:"tw-text-center lg:tw-text-left"},m={class:"tw-col-span-3 tw-h-52 lg:tw-h-full tw-p-10"},v={key:0,class:"tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold"},y={key:1,class:"tw-text-3xl tw-text-center lg:tw-text-right tw-font-bold"},P={class:"tw-h-full tw-w-full tw-relative"};function k(t,e,r,o,n,l){var w=Object(c["E"])("router-link");return Object(c["x"])(),Object(c["g"])("div",s,[Object(c["h"])("div",p,[Object(c["h"])("img",{class:"tw-object-contain tw-object-center lg:tw-max-h-80",src:r.product.imageUrl},null,8,j)]),Object(c["h"])("div",h,[Object(c["h"])("h3",O,Object(c["G"])(r.product.name),1),g,Object(c["h"])("p",f,Object(c["G"])(o.t("ProductInformation.heading")),1),Object(c["h"])("p",x,Object(c["G"])(o.t("ProductInformation.description",{pName:r.product.name})),1)]),Object(c["h"])("div",m,[r.product.priceStarting?(Object(c["x"])(),Object(c["g"])("h3",v,Object(c["G"])(o.t("ProductInformation.ab"))+" "+Object(c["G"])(o.n(l.getBrutto(r.product.price,l.taxes),"currency",l.currency)),1)):(Object(c["x"])(),Object(c["g"])("h3",y,Object(c["G"])(o.n(l.getBrutto(r.product.price,l.taxes),"currency",l.currency)),1)),Object(c["h"])("div",P,[r.product.customizable?(Object(c["x"])(),Object(c["e"])(w,{key:0,class:"tw-bg-blue hover:tw-bg-primary tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-absolute tw-bottom-10 tw-right-1/2 tw-transform tw-translate-x-1/2 lg:tw-translate-x-0 lg:tw-right-0",to:"/configurator"},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["G"])(o.t("ProductInformation.config")),1)]})),_:1})):(Object(c["x"])(),Object(c["g"])("button",{key:1,class:"tw-bg-blue hover:tw-bg-primary tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-absolute tw-bottom-10 tw-right-1/2 tw-transform tw-translate-x-1/2 lg:tw-translate-x-0 lg:tw-right-0",onClick:e[0]||(e[0]=function(e){t.$emit("view-product",r.product),l.addToCart()})},Object(c["G"])(o.t("ProductInformation.cart")),1))])])])}var G={name:"ProductInfotmation",props:["product"],setup:function(){var t=Object(i["b"])({inheritLocale:!0,useScope:"global"}),e=t.t,r=t.n,c=t.locale;return{t:e,n:r,locale:c}},computed:{currency:function(){return this.$store.state.currency},taxes:function(){return this.$store.state.taxRate}},methods:{addToCart:function(){this.$store.commit("addToCart",{product:this.product})},getBrutto:function(t,e){return t+t*e}}},C=r("6b0d"),$=r.n(C);const M=$()(G,[["render",k]]);var _=M,I={key:0,class:"product-details"},T={class:"tw-text-2xl tw-font-bold tw-text-center tw-pt-5"},D={class:"tw-w-full tw-p-7"},E={key:0,class:"tw-table-fixed tw-border-collapse tw-border-2 tw-border-gray-400 tw-text-left"},S={class:"tw-bg-gray-200"},B={class:"tw-w-1/2 tw-border-2 tw-border-gray-400 tw-pl-3"},F={class:"tw-w-1/4 tw-border-2 tw-border-gray-400 tw-pl-3"},L={class:"tw-w-1/4 tw-border-2 tw-border-gray-400 tw-pl-3"},J={class:"tw-border-2 tw-border-gray-400 tw-pl-3"},K={class:"tw-border-2 tw-border-gray-400 tw-pl-3"},q={class:"tw-border-2 tw-border-gray-400 tw-h-full"},z={class:"tw-w-1/2 tw-text-center tw-inline-block"},N={key:1,class:"tw-w-full"},Q={class:"tw-text-center tw-text-xl"},R={class:"tw-w-full tw-flex tw-items-center tw-content-center"},U=Object(c["h"])("div",{class:"tw-h-0.5 tw-bg-gray-100 tw-rounded-full tw-w-full"},null,-1),V={class:"tw-float-right tw-pt-5 tw-px-5"};function A(t,e,r,o,n,l){var w=Object(c["E"])("router-link");return Object(c["x"])(),Object(c["g"])("div",null,[Object(c["h"])("div",{class:Object(c["r"])(["drawer_background tw-fixed tw-w-full tw-h-full tw-left-0 tw-top-0",{show:r.active}]),onClick:e[0]||(e[0]=function(e){return t.$emit("close-product-drawer")})},null,2),Object(c["h"])("div",{class:Object(c["r"])([{show:r.active},"drawer tw-w-1/2 tw-mx-auto tw-bg-white tw-fixed tw-p-4 tw-left-1/4 tw-rounded-2xl"])},[r.product?(Object(c["x"])(),Object(c["g"])("div",I,[Object(c["h"])("p",T,Object(c["G"])(r.product.name)+" "+Object(c["G"])(o.t("ProductModal.cart")),1),Object(c["h"])("div",D,[l.product_total?(Object(c["x"])(),Object(c["g"])("table",E,[Object(c["h"])("thead",S,[Object(c["h"])("tr",null,[Object(c["h"])("th",B,Object(c["G"])(o.t("ProductModal.narticle")),1),Object(c["h"])("th",F,Object(c["G"])(o.t("ProductModal.nprice")),1),Object(c["h"])("th",L,Object(c["G"])(o.t("ProductModal.ncount")),1)])]),Object(c["h"])("tbody",null,[Object(c["h"])("tr",null,[Object(c["h"])("td",J,Object(c["G"])(r.product.name),1),Object(c["h"])("td",K,Object(c["G"])(o.n(r.product.price,"currency",l.currency)),1),Object(c["h"])("td",q,[Object(c["h"])("button",{type:"button",class:"btn tw-w-1/4 tw-bg-yellow-600 tw-inline-block tw-rounded-l-lg tw-rounded-r-none",onClick:e[1]||(e[1]=function(t){return l.removeFromCart()})}," - "),Object(c["h"])("div",z,[Object(c["h"])("p",null,Object(c["G"])(l.product_total),1)]),Object(c["h"])("button",{type:"button",class:"btn tw-w-1/4 tw-bg-green-600 tw-inline-block tw-rounded-r-lg tw-rounded-l-none",onClick:e[2]||(e[2]=function(t){return l.addToCart()})}," + ")])])])])):(Object(c["x"])(),Object(c["g"])("div",N,[Object(c["h"])("p",Q,Object(c["G"])(o.t("ProductModal.emptycart")),1),Object(c["h"])("div",R,[Object(c["h"])("button",{type:"button",class:"btn tw-mx-auto tw-my-5 tw-w-52 tw-text-xl tw-transition tw-text-white tw-duration-700 tw-border-green tw-shadow-lg tw-ease-in-out tw-bg-gradient-to-tl tw-from-green-gradient2 tw-to-green-gradient1 hover:tw-from-green-gradient4 hover:tw-to-green-gradient2 hover:tw-shadow-xl hover:tw-text-white",onClick:e[3]||(e[3]=function(t){return l.addToCart()})},Object(c["G"])(o.t("ProductModal.add")),1)])]))])])):Object(c["f"])("",!0),U,Object(c["h"])("div",V,[Object(c["h"])("button",{type:"button",class:"btn btn-secondary",onClick:e[4]||(e[4]=function(e){return t.$emit("close-product-drawer")})},Object(c["G"])(o.t("ProductModal.shop")),1),Object(c["k"])(w,{class:"btn btn-primary tw-ml-4",to:"/cart",onClick:e[5]||(e[5]=function(e){return t.$emit("close-product-drawer")})},{default:Object(c["K"])((function(){return[Object(c["j"])(Object(c["G"])(o.t("ProductModal.goto")),1)]})),_:1})])],2)])}var H={name:"ProductDrawer",props:["product","active"],setup:function(){var t=Object(i["b"])({inheritLocale:!0,useScope:"global"}),e=t.t,r=t.n,c=t.locale;return{t:e,n:r,locale:c}},computed:{product_total:function(){return this.$store.getters.productQuantity(this.product)},currency:function(){return this.$store.state.currency}},methods:{addToCart:function(){this.$store.commit("addToCart",{product:this.product})},removeFromCart:function(){this.$store.commit("removeFromCart",{product:this.product})}}};r("a90e");const W=$()(H,[["render",A]]);var X=W,Y={name:"Products",components:{ProductInformation:_,ProductModal:X},setup:function(){var t=Object(i["b"])({inheritLocale:!0,useScope:"global"}),e=t.t,r=t.locale;return{t:e,locale:r}},data:function(){return{product:null,active:{product_drawer:!1}}},computed:{products:function(){return this.$store.getters.getProducts}},methods:{viewProduct:function(t){this.product=t,this.active.product_drawer=!0},closeProductDrawer:function(){this.active.product_drawer=!1}}};const Z=$()(Y,[["render",b]]);e["default"]=Z},f7ac:function(t,e,r){}}]);
//# sourceMappingURL=chunk-3f934982.b9deb846.js.map
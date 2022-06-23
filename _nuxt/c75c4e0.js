(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4,5,6,7,8],{157:function(t,e,r){"use strict";var n=r(497);e.a=n.a},520:function(t,e,r){"use strict";r.r(e);var n={name:"DwfIntegrationArtifact.vue",props:{name:{default:"name",type:String},description:{default:"description",type:String},github:{default:"github url",type:String},docs:{default:"docs url",type:String},icon:{default:"mdi-toy-brick-outline",type:String}}},o=r(46),l=r(45),c=r.n(l),v=r(497),d=r(244),h=r(196),_=r(241),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex flex-wrap float-left"},[r("v-card",{staticClass:"ma-3 align-start",attrs:{width:"290","max-height":"400"}},[r("v-card-title",[r("v-icon",{attrs:{large:""}},[t._v("\n        "+t._s(t.icon)+"\n      ")])],1),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-h4 text--primary"},[t._v("\n        "+t._s(t.name)+"\n      ")]),t._v(" "),r("div",{staticClass:"text--primary"},[t._v("\n        "+t._s(t.description)+"\n      ")])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"black",href:t.github,target:"_blank",nuxt:""}},[r("v-icon",[t._v("\n          mdi-github\n        ")]),t._v("\n        "+t._s(t.$t("integrationartifact.github"))+"\n      ")],1),t._v(" "),r("v-btn",{attrs:{text:"",color:"black",to:t.localePath(t.docs),nuxt:""}},[r("v-icon",[t._v("\n          mdi-file-document-outline\n        ")]),t._v("\n        "+t._s(t.$t("integrationartifact.documentation"))+"\n      ")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VIcon:_.a})},521:function(t,e,r){"use strict";r.r(e);var n=r(15),o=(r(76),r(519)),l={name:"DwfMarkdownLoader",props:{source:{default:"",type:String}},data:function(){return{markdown:""}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get(t.source);case 2:t.markdown=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{htmlcontent:function(){return o.marked.parse(this.markdown)}}},c=r(46),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlcontent)}})}),[],!1,null,null,null);e.default=component.exports},522:function(t,e,r){"use strict";r.r(e);var n=r(15),o=(r(76),{name:"DwfElementTemplateDocs",props:{jsonurl:{default:"json url",type:String}},data:function(){return{elementtemplate:""}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.$get(t.jsonurl);case 2:t.elementtemplate=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),l=r(46),c=r(45),v=r.n(c),d=r(244),h=r(196),_=r(509),m=r(510),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"ma-3 align-start",attrs:{width:"100%"}},[r("v-card-title",[r("div",{staticClass:"text-h4 text--primary"},[t._v("\n      "+t._s(t.elementtemplate.name)+"\n    ")])]),t._v(" "),r("v-card-subtitle",[t._v("\n    "+t._s(t.elementtemplate.id)+"\n  ")]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"font-weight-medium"},[r("v-col",[t._v("\n        Label\n      ")]),t._v(" "),r("v-col",[t._v("\n        Type\n      ")]),t._v(" "),r("v-col",[t._v("\n        Binding Type\n      ")]),t._v(" "),r("v-col",[t._v("\n        Constraints\n      ")])],1),t._v(" "),t._l(t.elementtemplate.properties,(function(e){return r("v-row",{key:e.label},[r("v-col",[t._v("\n        "+t._s(e.label)+"\n      ")]),t._v(" "),r("v-col",[r("code",[t._v("\n          "+t._s(e.type)+"\n        ")])]),t._v(" "),r("v-col",[r("code",[t._v("\n          "+t._s(e.binding.type)+"\n        ")])]),t._v(" "),r("v-col",[t._v("\n        "+t._s(e.constraints)+"\n      ")])],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:d.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCol:_.a,VRow:m.a})},523:function(t,e,r){"use strict";r.r(e);var n=r(51),o=(r(9),r(4),{name:"DwfTutorials.vue",data:function(){return{tutorials:[]}},mounted:function(){var t=this;this.$content("resources/tutorials",{deep:!0}).fetch().then((function(e){var r,o=e.filter((function(p){return p.position>1}));(r=t.tutorials).push.apply(r,Object(n.a)(o))}))}}),l=r(46),c=r(45),v=r.n(c),d=r(497),h=r(244),_=r(196),m=r(241),f=r(510),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",t._l(t.$data.tutorials,(function(e){return r("div",{key:e.title,staticClass:"d-flex flex-wrap float-left"},[r("v-card",{staticClass:"ma-3 align-start",attrs:{width:"290",height:"230"}},[r("v-card-title",[r("v-icon",{attrs:{large:""}},[t._v("mdi-school")])],1),t._v(" "),r("v-card-text",[r("div",{staticClass:"text-h6 text--primary"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:"",color:"black",to:t.localePath(e.path),nuxt:""}},[r("v-icon",[t._v("\n            mdi-file-document-outline\n          ")]),t._v("\n          "+t._s(t.$t("tutorials.view"))+"\n        ")],1)],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:h.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VIcon:m.a,VRow:f.a})},524:function(t,e,r){"use strict";r.r(e);var n={name:"DwfNavigationDrawer.vue",props:{navigation:Array},data:function(){return{drawer:!0}}},o=r(46),l=r(45),c=r.n(l),v=r(511),d=r(241),h=r(242),_=r(150),m=r(156),f=r(134),x=r(544),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",t._b({model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},"v-navigation-drawer",t.$attrs,!1),[r("v-list-item",{staticClass:"px-2"},[r("v-list-item-icon",[r("v-icon",[t._v("\n        "+t._s(t.navigation[0].categoryIcon)+"\n      ")])],1),t._v(" "),r("v-list-item-title",[t._v("\n      "+t._s(t.navigation[0].category)+"\n    ")])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{nav:"",dense:""}},t._l(t.navigation,(function(nav){return r("v-list-item",{key:nav.path,attrs:{nuxt:"",to:t.localePath(nav.path)}},[r("v-list-item-content",[r("v-list-item-title",[t._v("\n          "+t._s(nav.title)+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VDivider:v.a,VIcon:d.a,VList:h.a,VListItem:_.a,VListItemContent:m.a,VListItemIcon:f.a,VListItemTitle:m.b,VNavigationDrawer:x.a})},526:function(t,e,r){var content=r(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5db1c400",content,!0,{sourceMap:!1})},527:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=n},543:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r(15),l=(r(76),r(22),r(62),r(28),r(11),r(10),r(9),r(4),r(17),r(12),r(18),r(2)),c=(r(38),r(526),r(102)),v=r(157),d=r(116),h=r(86),_=r(42),m=r(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(14),x=r(16);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(f.a)(c.a,h.a,m).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(l.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(v.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(d.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(d.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=y(y({},c.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||_.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(x.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),$=r(318),V=r(512),k=r(520),O=r(521),j=r(522),I=r(523),D={components:{VAlert:C,VImg:$.a,VSpacer:V.a,DwfIntegrationArtifact:k.default,DwfMarkdownLoader:O.default,DwfElementTemplateDocs:j.default,DwfTutorials:I.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,v,path,d,h,article,_,m,f,x,w,p,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,l=t.error,c=t.app,v=(v=c.localePath("/")+"/").replace("//","/"),path="".concat(v).concat(o.pathMatch||"index"),e.next=6,r({deep:!0}).where({path:path}).fetch();case 6:if(d=e.sent,h=Object(n.a)(d,1),article=h[0],_=[],m=null,f=null,article){e.next=16;break}return e.abrupt("return",l({statusCode:404,message:"Article not found"}));case 16:return e.next=18,r(article.dir).only(["title","path","category","categoryIcon","navIcon"]).sortBy("position").fetch();case 18:return _=e.sent,e.next=21,r(article.dir).only(["title","path"]).sortBy("position").surround(article.path).fetch();case 21:x=e.sent,w=Object(n.a)(x,2),p=w[0],y=w[1],p&&(m=p),y&&(f=y);case 27:return e.abrupt("return",{article:article,navigation:_,prev:m,next:f});case 28:case"end":return e.stop()}}),e)})))()},computed:{mobile:function(){return this.$vuetify.breakpoint.mobile}}},B=r(46),S=r(45),T=r.n(S),E=r(497),L=r(509),A=r(518),P=r(241),R=r(242),M=r(150),z=r(156),N=r(510),component=Object(B.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[t.mobile?r("v-row",[r("dwf-navigation-drawer",{attrs:{navigation:t.navigation,"hide-overlay":"",elevation:"0",width:"100%"}})],1):t._e(),t._v(" "),r("v-row",[t.mobile?t._e():r("v-col",{attrs:{cols:"2"}},[r("dwf-navigation-drawer",{attrs:{navigation:t.navigation}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"7",xl:"5"}},[r("h1",{staticClass:"mb-6 mt-6 text-h5 text-xl-h1 text-lg-h2 text-md-h3 text-sm-h4"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),r("p",{staticClass:"text-caption"},[t._v("\n        "+t._s(t.$t("documentation.lastchange"))+": "+t._s(t.$d(new Date(t.article.createdAt),"short"))+"\n      ")]),t._v(" "),r("nuxt-content",{attrs:{document:t.article,tag:"article"}}),t._v(" "),r("v-row",[t.prev?r("v-btn",{staticClass:"my-5",attrs:{small:"",text:"",nuxt:"",to:t.prev.path,"aria-label":t.$t("documentation.prev")+": "+t.prev.title}},[r("v-icon",[t._v("\n            mdi-arrow-left\n          ")]),t._v("\n          "+t._s(t.prev.title)+"\n        ")],1):t._e(),t._v(" "),r("v-spacer"),t._v(" "),t.next?r("v-btn",{staticClass:"my-5",attrs:{small:"",text:"",nuxt:"",to:t.next.path,"aria-label":t.$t("documentation.next")+": "+t.next.title}},[t._v("\n          "+t._s(t.next.title)+"\n          "),r("v-icon",[t._v("\n            mdi-arrow-right\n          ")])],1):t._e()],1)],1),t._v(" "),t.mobile?t._e():r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"subtitle-1 grey--text text--darken-1 mt-6 mb-4 ml-3"},[t._v("\n        "+t._s(t.$t("documentation.toc"))+"\n      ")]),t._v(" "),r("v-list",{attrs:{dense:""}},t._l(t.article.toc,(function(link){return r("v-list-item",{key:link.id,attrs:{nuxt:"",to:"#"+link.id}},[r("v-list-item-content",[r("v-list-item-title",{class:{"ml-3":3===link.depth}},[t._v("\n              "+t._s(link.text)+"\n            ")])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;T()(component,{DwfNavigationDrawer:r(524).default}),T()(component,{VBtn:E.a,VCol:L.a,VContainer:A.a,VIcon:P.a,VList:R.a,VListItem:M.a,VListItemContent:z.a,VListItemTitle:z.b,VRow:N.a,VSpacer:V.a})}}]);
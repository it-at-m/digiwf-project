(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{224:function(t,e,o){"use strict";o.r(e);o(9),o(3);var n={name:"DwfLanguageSwitcher",computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},r=o(43),l=o(40),c=o.n(l),f=o(417),v=o(222),d=o(223),m=o(134),h=o(140),w=o(436),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-menu",{attrs:{"offset-y":"",rounded:"lg"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.attrs,r=e.on;return[o("v-btn",t._g(t._b({staticClass:"px-1",attrs:{"aria-label":t.$t("toolbar.language.aria")}},"v-btn",n,!1),r),[o("v-icon",[t._v("\n        mdi-translate\n      ")]),t._v(" "),o("v-icon",[t._v("\n        mdi-chevron-down\n      ")])],1)]}}])},[t._v(" "),o("v-list",t._l(t.availableLocales,(function(e){return o("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code),nuxt:""}},[o("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:f.a,VIcon:v.a,VList:d.a,VListItem:m.a,VListItemTitle:h.b,VMenu:w.a})},277:function(t,e,o){var content=o(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("56b15182",content,!0,{sourceMap:!1})},291:function(t,e,o){"use strict";o.r(e);var n=o(43),r=o(40),l=o.n(r),c=o(417),f=o(222),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-btn",{staticClass:"px-1",attrs:{icon:"","aria-label":t.$t("social.github.aria"),href:"https://github.com/it-at-m/digiwf-project",target:"_blank"}},[o("v-icon",[t._v("\n    mdi-github\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:f.a})},292:function(t,e,o){"use strict";o.r(e);var n=o(43),r=o(40),l=o.n(r),c=o(417),f=o(222),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-btn",{staticClass:"px-1",attrs:{icon:"","aria-label":t.$t("social.twitter.aria"),href:"https://twitter.com/digiwf_munich",target:"_blank"}},[o("v-icon",[t._v("\n    mdi-twitter\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:f.a})},293:function(t,e,o){"use strict";o.r(e);var n=o(43),r=o(40),l=o.n(r),c=o(417),f=o(222),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-btn",{staticClass:"px-1",attrs:{icon:"","aria-label":t.$t("social.slack.aria"),href:"https://join.slack.com/t/digiwf/shared_invite/zt-14jxazj1j-jq0WNtXp7S7HAwJA7tKgpw",target:"_blank"}},[o("v-icon",[t._v("\n    mdi-slack\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VIcon:f.a})},298:function(t){t.exports=JSON.parse('{"index":{"foo":"This is a test"},"documentation":{"lastchange":"Last Change","toc":"Table of contents","prev":"previous page","next":"next page"},"footer":{"about":{"title":"About","roadmap":"Roadmap","coc":"Code of Conduct","contact":"Contact us","impress":"Impress"},"ecosystem":{"title":"Ecosystem"},"resources":{"title":"Resources","architecture":"Concept"},"social":{"title":"Stay tuned!","text":"Star us on github, follow on twitter or chat on slack."}},"toolbar":{"language":{"aria":"You can switch the language here."}},"social":{"github":{"aria":"link to our github account"},"twitter":{"aria":"opens our twitter account in a new tab"},"slack":{"aria":"opens our slack channel in a new tab"}}}')},299:function(t){t.exports=JSON.parse('{"index":{"foo":"This is a test"},"documentation":{"lastchange":"Letzte Änderung","toc":"Inhaltsverzeichnis","prev":"vorherige Seite","next":"nächste Seite"},"footer":{"about":{"title":"Das Projekt","roadmap":"Roadmap","coc":"Code of Conduct","contact":"Kontakt","impress":"Impressum"},"ecosystem":{"title":"Öko-System"},"resources":{"title":"Quellen","architecture":"Konzeption"},"social":{"title":"Stay tuned!","text":"Folge uns auf github, twitter oder slack."}},"toolbar":{"language":{"aria":"Hier kann die Sprache umgestellt werden."}},"social":{"github":{"aria":"Öffnet den Github Projekt Space in einem eigenen Browser Tab."},"twitter":{"aria":"Öffnet den DigiWF Twitter Account in einem eigenen Browser Tab."},"slack":{"aria":"Öffnet Slack, oder die Registrierungsseite von Slack in einem eigenen Browser Tab."}}}')},303:function(t,e,o){"use strict";o(377);var n=o(43),r=o(40),l=o.n(r),c=o(434),f=o(435),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("dwf-toolbar"),t._v(" "),o("v-main",[o("Nuxt")],1),t._v(" "),o("dwf-footer")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{DwfToolbar:o(414).default,DwfFooter:o(415).default}),l()(component,{VApp:c.a,VMain:f.a})},305:function(t,e,o){o(306),t.exports=o(307)},377:function(t,e,o){"use strict";o(277)},378:function(t,e,o){var n=o(22)(!1);n.push([t.i,".nuxt-content a{color:#000}.nuxt-content a:hover{color:#fdd835}.nuxt-content figcaption{font-size:smaller;color:#616161;margin-bottom:2em;text-align:left}.nuxt-content p{margin-top:2em}.nuxt-content figure p{margin:0;padding:0}.nuxt-content figure div{border:1px solid #000}.nuxt-content h2{font-weight:300;font-size:3rem;margin-top:.7em;margin-bottom:.4em}.nuxt-content h3{font-weight:400;font-size:2rem;margin-top:.4em;margin-bottom:.2em}.nuxt-content div.v-alert{margin-top:2em}",""]),t.exports=n},414:function(t,e,o){"use strict";o.r(e);var n={components:{DwfLanguageSwitcher:o(224).default},methods:{goHome:function(){var path=this.localePath("/");this.$router.push(path)}}},r=o(43),l=o(40),c=o.n(l),f=o(437),v=o(431),d=o(432),m=o(297),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"","elevate-on-scroll":"",flat:"",dark:""}},[o("v-toolbar-title",{staticClass:"font-weight-light",staticStyle:{cursor:"pointer"},on:{click:t.goHome}},[t._v("\n    Digi\n    "),o("span",{staticClass:"font-weight-medium"},[t._v("\n        WF\n      ")])]),t._v(" "),o("v-spacer"),t._v(" "),o("dwf-github-button"),t._v(" "),o("dwf-twitter-button"),t._v(" "),o("dwf-slack-button"),t._v(" "),o("v-divider",{attrs:{vertical:"",light:""}}),t._v(" "),o("dwf-language-switcher")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DwfGithubButton:o(291).default,DwfTwitterButton:o(292).default,DwfSlackButton:o(293).default,DwfLanguageSwitcher:o(224).default}),c()(component,{VAppBar:f.a,VDivider:v.a,VSpacer:d.a,VToolbarTitle:m.a})},415:function(t,e,o){"use strict";o.r(e);var n={},r=o(43),l=o(40),c=o.n(l),f=o(429),v=o(438),d=o(433),m=o(430),h=o(66),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{staticClass:"ma-0 pa-8",attrs:{dark:"",padless:""}},[o("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[o("v-sheet",{attrs:{height:"60",color:"transparent"}}),t._v(" "),o("v-row",{staticClass:"pb-8"},[o("v-col",{attrs:{cols:"0",sm:"0",md:"0",lg:"2",xl:"2"}}),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"2"}},[o("v-row",{staticClass:"font-weight-medium mt-10"},[t._v("\n            "+t._s(t.$t("footer.about.title"))+"\n          ")]),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[o("NuxtLink",{staticClass:"text-decoration-none white--text",attrs:{to:t.localePath("/about/roadmap")}},[t._v("\n              "+t._s(t.$t("footer.about.roadmap"))+"\n            ")])],1),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[o("NuxtLink",{staticClass:"text-decoration-none white--text",attrs:{to:t.localePath("/about/rules")}},[t._v("\n              "+t._s(t.$t("footer.about.coc"))+"\n            ")])],1),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[o("NuxtLink",{staticClass:"text-decoration-none white--text",attrs:{to:t.localePath("/about/contact")}},[t._v("\n              "+t._s(t.$t("footer.about.contact"))+"\n            ")])],1),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[o("NuxtLink",{staticClass:"text-decoration-none white--text",attrs:{to:t.localePath("/about/impress")}},[t._v("\n              "+t._s(t.$t("footer.about.impress"))+"\n            ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"2"}},[o("v-row",{staticClass:"font-weight-medium mt-10"},[t._v("\n            "+t._s(t.$t("footer.ecosystem.title"))+"\n          ")])],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"2"}},[o("v-row",{staticClass:"font-weight-medium mt-10"},[t._v("\n            "+t._s(t.$t("footer.resources.title"))+"\n          ")]),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[o("NuxtLink",{staticClass:"text-decoration-none white--text",attrs:{to:t.localePath("/resources/documentation/concept/overview")}},[t._v("\n              "+t._s(t.$t("footer.resources.architecture"))+"\n            ")])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"3",md:"3",lg:"2",xl:"2"}},[o("v-row",{staticClass:"font-weight-medium mt-10"},[t._v("\n            "+t._s(t.$t("footer.social.title"))+"\n          ")]),t._v(" "),o("v-row",{staticClass:"text-body-2 mt-6"},[t._v("\n            "+t._s(t.$t("footer.social.text"))+"\n          ")]),t._v(" "),o("v-row",{staticClass:"text-body-2 "},[o("dwf-github-button"),t._v(" "),o("dwf-twitter-button"),t._v(" "),o("dwf-slack-button")],1)],1),t._v(" "),o("v-col",{attrs:{cols:"0",sm:"0",md:"0",lg:"2",xl:"2"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DwfGithubButton:o(291).default,DwfTwitterButton:o(292).default,DwfSlackButton:o(293).default}),c()(component,{VCol:f.a,VContainer:v.a,VFooter:d.a,VRow:m.a,VSheet:h.a})},93:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=o(43),l=o(40),c=o.n(l),f=o(417),v=o(225),d=o(221),m=o(429),h=o(438),w=o(290),_=o(430),x=o(66),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":""}},[o("v-sheet",{staticClass:"fill-height",attrs:{color:"yellow darken-1",width:"100%"}},[o("v-container",{attrs:{"fill-height":""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[o("v-img",{attrs:{src:"images/404.png",width:"100%"}}),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{text:"",nuxt:"",to:"/"}},[t._v("\n                Go Home\n              ")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:f.a,VCard:v.a,VCardActions:d.a,VCol:m.a,VContainer:h.a,VImg:w.a,VRow:_.a,VSheet:x.a})}},[[305,6,2,7]]]);
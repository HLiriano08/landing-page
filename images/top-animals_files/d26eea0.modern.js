(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1157:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(2),r=function(){var e=Object(o.a)((function*(data){window.dataLayer.push(data)}));return function(t){return e.apply(this,arguments)}}()},1342:function(e,t,n){"use strict";n.r(t);n(13);var o=n(11),r=n(97),c=n(118),l=n(1157),d=n(15);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}c.a.$on(r.a.AnalyticsGA4Event,(e=>{d.a.debug("Tracking GA4 ".concat(e.event," event:"),e),Object(l.a)(e)})),c.a.$on(r.a.AnalyticsButtonClick,(e=>{d.a.debug("Tracking GA4 button_click event:",e),Object(l.a)(y({event:"button_click"},e))})),c.a.$on(r.a.AnalyticsDownloadFile,(e=>{d.a.debug("Tracking GA4 download event:",e),Object(l.a)(y({event:"download"},e))})),c.a.$on(r.a.AnalyticsSearch,(e=>{d.a.debug("Tracking GA4 search event:",e),Object(l.a)(y({event:"search"},e))})),c.a.$on(r.a.AnalyticsSelectLogo,(e=>{var t,n,o,{logo:l,list:d}=e,{wordmark_fonts:v,slogan_fonts:f,template:template,palette:O,icons:w}=l.assets;[{type:"design_alignment",id:null==template?void 0:template.orientation},{type:"background_shape",id:null==template?void 0:template.shape},{type:"font",id:null==v||null===(t=v[0])||void 0===t?void 0:t.id},{type:"font",id:null==f||null===(n=f[0])||void 0===n?void 0:n.id},{type:"template",id:l.template},{type:"palette",id:null==O?void 0:O.id},{type:"icon",id:null==w||null===(o=w[0])||void 0===o?void 0:o.id}].forEach((e=>{e.id&&c.a.$emit(r.a.EcommerceSelectContent,y(y({},e),{},{list:d}))}))}))}}]);
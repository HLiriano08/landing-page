(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1340:function(e,t,n){"use strict";n.r(t);var r=n(2),o=(n(21),n(23),n(97)),d=n(118),l=n(15),m=n(22),c=n.n(m),v=n(331);function w(){return h.apply(this,arguments)}function h(){return(h=Object(r.a)((function*(){l.a.debug("Handling UserSignup UTM params"),yield new Promise((e=>setTimeout(e,1e3)));var e=window.$nuxt.$api;if(e){var t={};for(var n of v.a)sessionStorage.getItem(n)&&(t[n]=sessionStorage.getItem(n));if(0!==Object.keys(t).length)try{var{data:data}=yield e.get("/api/v3/users/me");yield e.patch("/api/v3/users/".concat(data.id,"/setup"),t)}catch(e){if(console.log(e.response),!e.response)throw e;if(404===e.response.status)return w()}}}))).apply(this,arguments)}d.a.$on(o.a.UserSignedIn,(e=>{var t,n,{user:r,method:m,enterprise:v,track_analytics:w=!0}=e;l.a.debug("Handling UserSignedIn",r);var h="user_".concat(r.attributes.sub);w&&d.a.$emit(o.a.AnalyticsGA4Event,{event:"login",userId:h,method:m}),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:{id:h}}}),c.a.remove("unauthed_cart"),v.is_whitelabel||window.Intercom("boot",{app_id:"fuchdm6u",user_id:h,name:r.attributes.given_name+" "+r.attributes.family_name,email:r.attributes.email,eid:v.id})})),d.a.$on(o.a.UserRegistered,(e=>{var t,n,{user:r,method:m,enterprise:v}=e;l.a.debug("Handling UserRegistered",r);var w="user_".concat(r.attributes.sub);d.a.$emit(o.a.AnalyticsGA4Event,{event:"sign_up",userId:w,method:m}),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:{id:w}}}),c.a.remove("unauthed_cart"),v.is_whitelabel||window.Intercom("boot",{app_id:"fuchdm6u",user_id:w,name:r.attributes.given_name+" "+r.attributes.family_name,email:r.attributes.email,eid:v.id})})),d.a.$on(o.a.UserUpdatedAttributes,(e=>{var{user:t,enterprise:n}=e;l.a.debug("Handling UserUpdatedAttributes",t),c.a.remove("unauthed_cart"),n.is_whitelabel||window.Intercom("update",{name:t.attributes.given_name+" "+t.attributes.family_name})})),d.a.$on(o.a.UserSignedOut,(e=>{var t,n,{enterprise:r}=e;l.a.debug("Handling UserSignedOut"),null===(t=window.$nuxt)||void 0===t||null===(n=t.$rollbar)||void 0===n||n.configure({payload:{person:null}}),r.is_whitelabel||window.Intercom("shutdown")})),d.a.$on(o.a.UserRegistered,w)}}]);
(()=>{var e={};e.id=477,e.ids=[477],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2650:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>a.a,__next_app__:()=>c,pages:()=>p,routeModule:()=>m,tree:()=>d});var t=s(5239),n=s(8088),i=s(8170),a=s.n(i),l=s(893),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(r,o);let d={children:["",{children:["supes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9995)),"/Users/linix/Desktop/CS391/mp-4/app/supes/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6803)),"/Users/linix/Desktop/CS391/mp-4/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,p=["/Users/linix/Desktop/CS391/mp-4/app/supes/page.tsx"],c={require:s,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/supes/page",pathname:"/supes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2704:()=>{},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},6152:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,6444,23)),Promise.resolve().then(s.t.bind(s,6042,23)),Promise.resolve().then(s.t.bind(s,8170,23)),Promise.resolve().then(s.t.bind(s,9477,23)),Promise.resolve().then(s.t.bind(s,9345,23)),Promise.resolve().then(s.t.bind(s,2089,23)),Promise.resolve().then(s.t.bind(s,6577,23)),Promise.resolve().then(s.t.bind(s,1307,23))},6487:()=>{},6803:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>m,metadata:()=>c});var t=s(7413),n=s(6389),i=s.n(n),a=s(1189),l=s.n(a),o=s(4536),d=s.n(o);function p(){let e="p-1 m-2 text-xl hover:underline";return(0,t.jsxs)("header",{className:"flex justify-between items-center h-20 bg-red-300 text-purple-900",children:[(0,t.jsx)("h2",{className:"text-4xl font-semibold p-4",children:"HEROS AND VILLIANS"}),(0,t.jsxs)("nav",{className:"p-2 m-4",children:[(0,t.jsx)(d(),{href:"/",className:e,children:"Home"}),(0,t.jsx)(d(),{href:"/supes",className:e,children:"Supes"})]})]})}s(2704);let c={title:"Create Next App",description:"Generated by create next app"};function m({children:e}){return(0,t.jsx)("html",{lang:"en",children:(0,t.jsxs)("body",{className:`${i().variable} ${l().variable} antialiased`,children:[(0,t.jsx)(p,{}),e]})})}},6824:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,6346,23)),Promise.resolve().then(s.t.bind(s,7924,23)),Promise.resolve().then(s.t.bind(s,5656,23)),Promise.resolve().then(s.t.bind(s,99,23)),Promise.resolve().then(s.t.bind(s,8243,23)),Promise.resolve().then(s.t.bind(s,8827,23)),Promise.resolve().then(s.t.bind(s,2763,23)),Promise.resolve().then(s.t.bind(s,7173,23))},7928:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,5814,23))},8200:(e,r,s)=>{Promise.resolve().then(s.t.bind(s,4536,23))},8335:()=>{},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9995:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(7413);function n({id:e,name:r,fullname:s,image:n,publisher:i}){return(0,t.jsxs)("div",{className:"bg-white dark:bg-zinc-800 rounded-2xl",children:[n&&(0,t.jsx)("img",{src:n,alt:r,className:"w-64 h-64 object-cover rounded-xl mb-4"}),(0,t.jsxs)("div",{className:"flex flex-col flex-wrap justify-center items-center p-3",children:[(0,t.jsx)("h1",{className:"text-xl font-semibold text-zinc-800 dark:text-white mb-1",children:r}),(0,t.jsxs)("p",{className:"text-sm text-zinc-500 dark:text-zinc-300 mb-1",children:["ID: ",e]}),(0,t.jsxs)("p",{className:"text-sm text-zinc-500 dark:text-zinc-300 mb-1",children:["Full Name: ",s]}),(0,t.jsxs)("p",{className:"text-sm text-zinc-500 dark:text-zinc-300",children:["Publisher: ",i]})]})]})}function i({comics:e}){return(0,t.jsx)("div",{className:"flex flex-wrap justify-center align-center gap-6 p-2 bg-yellow-100 font-mono p-3",children:e.map(e=>(0,t.jsx)(n,{id:e.id,name:e.name,fullname:e.fullname,image:e.image,publisher:e.publisher},e.id))})}async function a(){let e=process.env.COMICS_API_KEY,r=[31,63,455,330,138,316,69,9,11,13].map(r=>fetch(`https://superheroapi.com/api/${e}/${r}`).then(e=>e.json()));return(await Promise.all(r)).map(e=>({id:e.id,name:e.name,fullname:e.biography?.["full-name"],image:e.image?.url??"",publisher:e.biography?.publisher}))}async function l(){let e=await a();return(0,t.jsxs)("main",{className:"flex flex-col justify-center items-center bg-red-300",children:[(0,t.jsx)("h1",{className:"text-gray-900 text-4xl font-semibold p-3",children:"ALL MY FAVORITE SUPES"}),(0,t.jsx)(i,{comics:e})]})}}};var r=require("../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[359],()=>s(2650));module.exports=t})();
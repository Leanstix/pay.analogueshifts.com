(()=>{var e={};e.id=278,e.ids=[278],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4943:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>r.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var l=a(7096),s=a(6132),n=a(7284),r=a.n(n),i=a(2564),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(t,o);let c=["",{children:["[paymentMethod]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,652)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\pay.analogueshifts.com\\app\\[paymentMethod]\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,9954)),"C:\\Users\\USER\\Promise\\AnalogueShifts\\pay.analogueshifts.com\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\USER\\Promise\\AnalogueShifts\\pay.analogueshifts.com\\app\\[paymentMethod]\\page.js"],u="/[paymentMethod]/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new l.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[paymentMethod]/page",pathname:"/[paymentMethod]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8808:(e,t,a)=>{Promise.resolve().then(a.bind(a,4930))},683:(e,t,a)=>{Promise.resolve().then(a.bind(a,1887)),Promise.resolve().then(a.t.bind(a,7490,23)),Promise.resolve().then(a.bind(a,4210)),Promise.resolve().then(a.bind(a,6557))},6185:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,3579,23)),Promise.resolve().then(a.t.bind(a,619,23)),Promise.resolve().then(a.t.bind(a,1459,23)),Promise.resolve().then(a.t.bind(a,3456,23)),Promise.resolve().then(a.t.bind(a,847,23)),Promise.resolve().then(a.t.bind(a,7303,23))},4930:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var l=a(3854),s=a(4218),n=a(1956),r=a.n(n),i=a(6557),o=function(){return(o=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c={},d="https://checkout.flutterwave.com/v3.js";function u({data:e}){var t,a,n,r,i,u;let p={public_key:process.env.NEXT_PUBLIC_FlUTTER_KEY,tx_ref:Date.now(),amount:e[5].value,currency:"USD",payment_options:"card,mobilemoney,ussd,nqr",customer:{email:e[1].value,phone_number:e[2].value,name:e[0].value},customizations:{title:e[3].value,description:e[4].value,logo:"pay.analogueshifts.com/analogueShifts.png"}},m=(i=(a=(t=(0,s.useState)({loaded:!1,error:!1}))[0],n=t[1],(0,s.useEffect)(function(){if(c.hasOwnProperty(d))n({loaded:!0,error:!1});else{c.src=d;var e=document.createElement("script");e.src=d,e.async=!0;var t=function(){n({loaded:!0,error:!1})},a=function(){delete c.src,n({loaded:!0,error:!0})};return e.addEventListener("load",t),e.addEventListener("complete",t),e.addEventListener("error",a),document.body.appendChild(e),function(){e.removeEventListener("load",t),e.removeEventListener("error",a)}}},[]),r=[a.loaded,a.error])[0],u=r[1],(0,s.useEffect)(function(){if(u)throw Error("Unable to load flutterwave payment modal")},[u]),function(e){var t,a,l=this,s=e.callback,n=e.onClose;if(u)throw Error("Unable to load flutterwave payment modal");if(i){var r=o(o({},p),{amount:null!==(t=p.amount)&&void 0!==t?t:0,callback:function(e){var t,a,n;return t=void 0,a=void 0,n=function(){var t;return function(e,t){var a,l,s,n,r={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function i(n){return function(i){return function(n){if(a)throw TypeError("Generator is already executing.");for(;r;)try{if(a=1,l&&(s=2&n[0]?l.return:n[0]?l.throw||((s=l.return)&&s.call(l),0):l.next)&&!(s=s.call(l,n[1])).done)return s;switch(l=0,s&&(n=[2&n[0],s.value]),n[0]){case 0:case 1:s=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,l=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(!(s=(s=r.trys).length>0&&s[s.length-1])&&(6===n[0]||2===n[0])){r=0;continue}if(3===n[0]&&(!s||n[1]>s[0]&&n[1]<s[3])){r.label=n[1];break}if(6===n[0]&&r.label<s[1]){r.label=s[1],s=n;break}if(s&&r.label<s[2]){r.label=s[2],r.ops.push(n);break}s[2]&&r.ops.pop(),r.trys.pop();continue}n=t.call(e,r)}catch(e){n=[6,e],l=0}finally{a=s=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,i])}}}(this,function(a){switch(a.label){case 0:if("successful"!==e.status)return[3,2];return s(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:p.public_key,language:"Flutterwave-React-v3",version:"1.0.7",title:(null==p?void 0:p.payment_options.split(",").length)>1?"Initiate-Charge-Multiple":"Initiate-Charge-"+(null==p?void 0:p.payment_options),message:"15s"})})];case 1:return a.sent(),[3,4];case 2:return s(e),[4,fetch("https://cors-anywhere.herokuapp.com/https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({publicKey:null!==(t=p.public_key)&&void 0!==t?t:"",language:"Flutterwave-React-v3",version:"1.0.7",title:(null==p?void 0:p.payment_options.split(",").length)>1?"Initiate-Charge-Multiple-error":"Initiate-Charge-"+(null==p?void 0:p.payment_options)+"-error",message:"15s"})})];case 3:a.sent(),a.label=4;case 4:return[2]}})},new(a||(a=Promise))(function(e,s){function r(e){try{o(n.next(e))}catch(e){s(e)}}function i(e){try{o(n.throw(e))}catch(e){s(e)}}function o(t){var l;t.done?e(t.value):((l=t.value)instanceof a?l:new a(function(e){e(l)})).then(r,i)}o((n=n.apply(l,t||[])).next())})},onclose:n,payment_options:null!==(a=null==p?void 0:p.payment_options)&&void 0!==a?a:"card, ussd, mobilemoney"});return window.FlutterwaveCheckout&&window.FlutterwaveCheckout(r)}});return l.jsx("button",{onClick:()=>{m({callback:e=>{console.log(e),document.getElementsByName("checkout").forEach(function(e){e.setAttribute("style","position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"),e.setAttribute("id","flwpugpaidid"),e.setAttribute("src","https://checkout.flutterwave.com/?"),document.body.style.overflow=""})},onClose:()=>{}})},className:"w-full flex justify-center h-10 items-center rounded-md text-white text-sm bg-[#FFC800] hover:bg-[#FFC800]/80",children:"Continue to payment"})}function p({params:e}){let[t,a]=(0,s.useState)([{id:1,label:"Full Name",type:"text",value:"",fullWidth:!0},{id:2,label:"Email",type:"email",value:"",fullWidth:!0},{id:3,label:"Phone",type:"number",value:0,fullWidth:!0},{id:4,label:"Title",type:"text",value:"Payment",fullWidth:!0},{id:5,label:"Description",type:"text",value:"Payment",fullWidth:!0},{id:6,label:"Amount",type:"number",value:0,fullWidth:!0}]),[n,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(""),p=(e,t)=>{a(a=>a.map(a=>a.id!==e?a:{...a,value:t}))},m=t[5].value;return l.jsx("main",{className:"w-full flex justify-center pb-10 pt-[100px]",children:(0,l.jsxs)("div",{className:"bg-yellow-50 p-2 md:p-9 rounded-md shadow-2xl w-[1100px] max-[1100px]:w-[90%]",children:[l.jsx("p",{className:"text-black font-extrabold text-3xl",children:"Payment details"}),(0,l.jsxs)("div",{className:"w-full max-[900px]:flex-col pt-10 flex gap-[60px] max-[900px]:gap-[35px]",children:[(0,l.jsxs)("div",{className:"w-[calc(50%-30px)] flex flex-wrap gap-x-4 gap-y-4 max-[900px]:w-full",children:[t.map(e=>(0,l.jsxs)("div",{className:"flex flex-col gap-1",style:{width:`${e.fullWidth?"100%":"calc(50% - 8px)"}`},children:[l.jsx("p",{className:"text-sm text-black/80 font-semibold",children:e.label}),l.jsx("input",{type:e.type,value:e.value,className:"w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold",onChange:t=>p(e.id,t.target.value)})]},e.id)),(0,l.jsxs)("div",{className:"pt-3 w-full flex flex-col gap-4",children:[(0,l.jsxs)("div",{onClick:()=>o(e=>!e),className:"w-full cursor-pointer flex gap-2 items-center",children:[l.jsx("input",{checked:n,type:"checkbox",value:n,onChange:e=>o(e.target.checked)}),l.jsx("p",{className:"text-sm text-black/90 font-semibold",children:"I have promo code"})]}),n&&l.jsx("input",{type:"text",placeholder:"Enter Promo Code",value:c,className:"w-full border rounded px-2 py-2 outline-1 outline-[#FAE315] text-sm text-black/80 font-semibold",onChange:e=>d(e.target.value)})]}),(0,l.jsxs)("div",{className:"pt-3 w-full flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"w-full flex justify-between items-center",children:[l.jsx("p",{className:"text-sm text-black/80 font-semibold",children:"Subtotal"}),(0,l.jsxs)("p",{className:"text-sm text-black/90 font-bold",children:["$",m]})]}),(0,l.jsxs)("div",{className:"w-full flex justify-between items-center",children:[l.jsx("p",{className:"text-sm text-black/80 font-semibold",children:"Fee"}),l.jsx("p",{className:"text-sm text-black/90 font-bold",children:"$0"})]}),l.jsx("div",{className:"w-full border-t"}),(0,l.jsxs)("div",{className:"w-full flex justify-between items-center",children:[l.jsx("p",{className:"text-base text-black/80 font-semibold",children:"Total Amount"}),(0,l.jsxs)("p",{className:"text-base text-black/90 font-bold",children:["$",m]})]}),l.jsx(u,{data:t})]})]}),(0,l.jsxs)("div",{className:"w-[calc(50%-30px)] relative max-[900px]:w-full xl:max-[900px]:h-[700px] z-0",children:[l.jsx(r(),{src:i.default,alt:"AnalogueShift's Logo",className:"w-full h-[90%] max-[900px]:h-full object-cover rounded-lg z-0"}),(0,l.jsxs)("div",{className:"absolute bottom-[calc(10%+50px)] max-[900px]:bottom-[30px] left-[15px] w-[calc(100%-30px)] flex justify-between items-center",children:[l.jsx("p",{className:"text-black font-bold text-xl",children:"AnalogueShifts"}),l.jsx("button",{className:"flex justify-center h-9 items-center rounded-md text-[#FFC800] text-sm border hover:scale-110 duration-300 border-[#FFC800] px-10",children:"PAY"})]})]})]})]})})}},1887:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var l=a(3854),s=a(4218),n=a(5548),r=a.n(n),i=a(1956),o=a.n(i),c=a(4210);let d=()=>(0,l.jsxs)("div",{className:"flex gap-3",children:[l.jsx(o(),{src:c.default,className:"w-10 h-10",alt:""}),(0,l.jsxs)("h3",{className:"text-lg font-bold uppercase text-zinc-600 leading-5",children:[l.jsx("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),l.jsx("br",{}),l.jsx("span",{className:"tracking-[1rem]",children:"Shifts"})]})]});function u(){let[e,t]=(0,s.useState)(1),[a,n]=(0,s.useState)(0),[i,o]=(0,s.useState)(0),[c,u]=(0,s.useState)(-900),[p,m]=(0,s.useState)(0);return(0,l.jsxs)("nav",{className:"w-full",children:[(0,l.jsxs)("div",{style:{boxShadow:"1px 1px 50px rgba(0,0,0,0.1)"},className:"w-[calc(100%-12px)] h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed z-50 rounded-full px-7 flex justify-between items-center",children:[l.jsx("div",{className:"flex items-center",children:l.jsx("div",{className:"flex-shrink-0 flex items-center",children:l.jsx(r(),{href:"/",children:l.jsx(d,{className:"block h-10 w-auto fill-current text-gray-600"})})})}),(0,l.jsxs)("div",{className:"flex gap-4 max-[850px]:hidden",children:[l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black font-semibold",children:"Details"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black font-semibold",children:"Feedback"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black font-semibold",children:"Queries"})})]}),(0,l.jsxs)("div",{style:{transform:`rotate(${p}deg)`},onClick:()=>{0!==c?(u(0),t(0),n(-90),o(-10),m(45)):(u(-900),t(1),n(0),o(0),m(0))},className:"hidden max-[850px]:flex duration-300 origin-left flex-col w-5 h-3 cursor-pointer justify-between",children:[l.jsx("div",{style:{transform:`rotate(${a}deg)`},className:"w-full duration-300 h-0.5 bg-black/80 rounded"}),l.jsx("div",{style:{opacity:e},className:"w-full h-0.5 duration-300 bg-black/80 rounded"}),l.jsx("div",{style:{transform:`translateY(${i}px)`},className:"w-full h-0.5 bg-black/80 duration-300 rounded"})]})]}),(0,l.jsxs)("div",{style:{left:`${c}px`},className:"w-[70%] h-screen static hidden duration-300 max-[850px]:fixed z-50 bg-white pt-6 pl-5 max-[850px]:flex flex-col gap-5",children:[l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Payment"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Options"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Support"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Details"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Feedback"})}),l.jsx(r(),{href:"#",children:l.jsx("p",{className:"text-sm text-black/70 hover:text-black/90 font-semibold",children:"Queries"})})]})]})}},652:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>r,__esModule:()=>n,default:()=>o});var l=a(5153);let s=(0,l.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\pay.analogueshifts.com\app\[paymentMethod]\page.js`),{__esModule:n,$$typeof:r}=s,i=s.default,o=i},9954:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h,metadata:()=>x});var l=a(4656),s=a(519),n=a.n(s);a(7272);var r=a(4353),i=a.n(r);function o(){return(0,l.jsxs)("footer",{className:"w-full bg-white grid xl:flex justify-between items-center gap-16 py-5 pl-10 pr-[75px]",children:[(0,l.jsxs)("div",{children:[l.jsx("p",{className:"text-sm text-black font-bold",children:"PAY AT ANALOGUESHIFTS"}),l.jsx("p",{className:"text-[15px] text-black pt-9 font-medium max-[800px]:pt-4",children:"Simplifying Transactions"})]}),l.jsx("div",{className:"grid grid-cols-2 xl:grid-cols-4 gap-24",children:[{title:"Company",links:[{link:"About",path:"#"},{link:"Careers",path:"#"},{link:"Newsroom",path:"#"}]},{title:"Features",links:[{link:"Fast",path:"#"},{link:"Secure",path:"#"},{link:"Reliable",path:"#"}]},{title:"Social",links:[{link:"Twitter",path:"#"},{link:"Instagram",path:"#"},{link:"Threads",path:"#"}]},{title:"Legal",links:[{link:"Terms",path:"#"},{link:"Privacy",path:"#"}]}].map(e=>(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[l.jsx("p",{className:"text-base text-black font-bold",children:e.title}),e.links.map(e=>l.jsx(i(),{href:e.path,children:l.jsx("p",{className:"text-sm text-black tracking-wide font-medium",children:e.link})},e.link))]},Math.random+e.title))})]})}var c=a(5153);let d=(0,c.createProxy)(String.raw`C:\Users\USER\Promise\AnalogueShifts\pay.analogueshifts.com\components\application\navbar.js`),{__esModule:u,$$typeof:p}=d,m=d.default;a(73);let x={title:"AnalogueShifts Payment Gateway",description:"AnalogueShifts Payment Gateway"};function h({children:e}){return(0,l.jsxs)("html",{lang:"en",children:[l.jsx("meta",{property:"og:image",content:"https://pay.analogueshifts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpay.3200bbd6.png&w=3840&q=75"}),l.jsx("meta",{property:"og:image:height",content:"630"}),l.jsx("meta",{property:"og:image:width",content:"1200"}),l.jsx("link",{rel:"icon",type:"image/x-icon",href:"https://pay.analogueshifts.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79a82f19.png&w=1080&q=75"}),(0,l.jsxs)("body",{className:n().className,children:[l.jsx(m,{}),e,l.jsx(o,{})]})]})}},4210:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});let l={src:"/_next/static/media/logo.79a82f19.png",height:490,width:509,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42mMAgSvrzZnB9AargqsbbDRAbCDNBJa8t8OOEUSfXG4nAFT49cp6iwkg/tmVJiwMEIYZK4i+u806+8p6y4VXN1gt+HvJUxwkdmYl0BQY6C3VTL220WLn7rkuAlHeSlYMyMDWSCQSSPXd32HTdm+HdTKQPdtCTyQMSQnLuqWdes0PdtqF39piucHJXNqagYlnD1iKjZM/hoGBb9m97dbbgHaqX1prMfHZfrs4oNRkYy3hRJDuncu7dDtvbrb4dmmd2ZnL68xeA005zikoYcHFzXsCAD4STx6c6i8HAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},6557:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});let l={src:"/_next/static/media/pay.3200bbd6.png",height:1080,width:1080,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAuUlEQVR42gVAvWoCQRD+ZnYhl7ugooloIsQmqfIMsbO28lXtxcpSGyt/sFAUFPeEu/V2Z4T8pG44ikQmiBIAJi0rMCD3QkXVVwCEOQSBNbCE6uIkL1BLdX9+mS7S8cD99JgB6nfsb8/2P0M9bc7m7XYrRFGOgsKrgoLXrywb/XcT/wYYLh+oIsqHcMzO12TrsF19+Dy1WQIiUgQOrf36NmycdsfXWoetCBRqDB8O7u+72X1vLDe5Q/4EaP9acaiBBg0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var l=a(8531);let s=e=>{let t=(0,l.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),l=t.X(0,[271,791,323],()=>a(4943));module.exports=l})();
import{j as e,o as a,p as r,b as t,q as s,r as l,s as d}from"./index-D-M7Cfv2.js";import{r as n}from"./vendor-DYlogLjF.js";import{H as i,a as o,b as c,C as m,c as g,B as x}from"./Badge-CqT6jOkQ.js";import{L as h}from"./Loading-DEZxOGOK.js";import"./api-BXm3BkPp.js";import{b as y,t as u}from"./formatters-Qc2P36Ej.js";const b=({currentPage:t,totalPages:s,onPageChange:l,siblingCount:d=1,className:n=""})=>{const i=(()=>{if(s<=2*d+3+2)return Array.from({length:s},((e,a)=>a+1));const e=Math.max(t-d,1),a=Math.min(t+d,s),r=e>2,l=a<s-1;if(!r&&l){const e=3+2*d;return[...Array.from({length:e},((e,a)=>a+1)),"...",s]}if(r&&!l){const e=3+2*d;return[1,"...",...Array.from({length:e},((a,r)=>s-e+r+1))]}return r&&l?[1,"...",...Array.from({length:a-e+1},((a,r)=>e+r)),"...",s]:void 0})();return s<=1?null:e.jsxs("div",{className:`flex justify-center items-center mt-6 ${n}`,children:[e.jsx("button",{onClick:()=>l(t-1),disabled:1===t,className:"p-2 rounded-md border border-gray-300 dark:border-gray-600 mr-2 disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Previous page",children:e.jsx(a,{className:"text-gray-600 dark:text-gray-400"})}),null==i?void 0:i.map(((a,r)=>"..."===a?e.jsx("span",{className:"px-3 py-1 mx-1 text-gray-600 dark:text-gray-400",children:"..."},`ellipsis-${r}`):e.jsx("button",{onClick:()=>l(a),className:"px-3 py-1 mx-1 rounded-md "+(t===a?"bg-primary text-white":"text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"),children:a},a))),e.jsx("button",{onClick:()=>l(t+1),disabled:t===s,className:"p-2 rounded-md border border-gray-300 dark:border-gray-600 ml-2 disabled:opacity-50 disabled:cursor-not-allowed","aria-label":"Next page",children:e.jsx(r,{className:"text-gray-600 dark:text-gray-400"})})]})},p=({columns:a,data:r,isLoading:t=!1,pagination:s=null,onPageChange:l=()=>{},emptyMessage:d="No data available",className:n="",compact:m=!1,sortable:g=!1,sortColumn:x=null,sortDirection:y="asc",onSort:u=()=>{},highlightOnHover:p=!0,striped:v=!1,bordered:j=!1})=>{const f=a=>g?x===a.key?"asc"===y?e.jsx(i,{className:"w-4 h-4"}):e.jsx(o,{className:"w-4 h-4"}):e.jsx(c,{className:"w-4 h-4 text-gray-400"}):null,k=e=>{let a="";return a+=v&&e%2==1?"bg-gray-50 dark:bg-gray-800/50 ":"bg-white dark:bg-gray-900 ",p&&(a+="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 "),a};return!t||r&&0!==r.length?r&&0!==r.length?e.jsxs("div",{className:"overflow-hidden rounded-xl shadow-sm bg-white dark:bg-gray-800",children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:(()=>{let e="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ";return j&&(e+="border border-gray-200 dark:border-gray-700 "),e+n})(),children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-800/80",children:e.jsx("tr",{children:a.map(((a,r)=>e.jsx("th",{scope:"col",className:"px-6 py-3.5 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider "+(g&&a.sortable?"cursor-pointer select-none":""),style:a.width?{width:a.width}:{},onClick:()=>a.sortable&&(e=>{if(!g)return;u(e,x===e&&"asc"===y?"desc":"asc")})(a.key),children:e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("span",{children:a.header}),a.sortable&&f(a)]})},a.key||r)))})}),e.jsx("tbody",{className:"bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",children:r.map(((r,t)=>e.jsx("tr",{className:k(t),children:a.map(((a,t)=>e.jsx("td",{className:`px-6 ${m?"py-2":"py-4"} whitespace-nowrap text-sm text-gray-900 dark:text-gray-200`,children:a.cell?a.cell(r):r[a.accessor]},t)))},t)))})]})}),s&&e.jsx("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:e.jsx(b,{currentPage:s.currentPage,totalPages:s.totalPages,onPageChange:l})})]}):e.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm bg-white dark:bg-gray-800",children:e.jsxs("div",{className:"text-center py-12",children:[e.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})}),e.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:d})]})}):e.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm bg-white dark:bg-gray-800",children:e.jsxs("div",{className:"flex justify-center items-center py-12",children:[e.jsx(h,{className:"my-8"}),e.jsx("span",{className:"ml-3 text-sm text-gray-500 dark:text-gray-400",children:"Loading data..."})]})})},v=()=>{const[a,r]=n.useState([]),[i,o]=n.useState({currentPage:1,totalPages:1,totalItems:0,itemsPerPage:25}),[c,h]=n.useState(!0),[v,j]=n.useState("all"),[f,k]=n.useState("all"),[N,w]=n.useState("desc"),[P,S]=n.useState(null);n.useEffect((()=>{(async()=>{h(!0),S(null);try{setTimeout((()=>{const e=Array(25).fill().map(((e,a)=>({hash:`0x${Math.random().toString(16).substr(2,40)}${a.toString(16).padStart(2,"0")}`,from:`0x${Math.random().toString(16).substr(2,40)}`,to:`0x${Math.random().toString(16).substr(2,40)}`,value:1e3*Math.random(),fee:.1*Math.random(),timestamp:Date.now()-Math.floor(1e6*Math.random()),status:["success","success","success","pending","failed"][Math.floor(5*Math.random())]})));r(e),o({currentPage:1,totalPages:10,totalItems:234,itemsPerPage:25}),h(!1)}),800)}catch(e){S("Failed to fetch transactions"),h(!1)}})()}),[v,f,N]);const C=[{header:"Tx Hash",key:"hash",cell:a=>e.jsx(g,{hash:a.hash,type:"tx",length:"medium"})},{header:"From",key:"from",cell:a=>e.jsx(g,{hash:a.from,type:"account",length:"short"})},{header:"To",key:"to",cell:a=>e.jsx(g,{hash:a.to,type:"account",length:"short"})},{header:"Value",key:"value",cell:e=>y(e.value)},{header:"Fee",key:"fee",cell:e=>y(e.fee)},{header:"Status",key:"status",cell:a=>(a=>{const{variant:r,label:t,dot:s}={success:{variant:"success",label:"Success",dot:!0},pending:{variant:"warning",label:"Pending",dot:!0},failed:{variant:"danger",label:"Failed",dot:!0},invalid:{variant:"danger",label:"Invalid",dot:!0}}[a]||{variant:"default",label:a,dot:!0};return e.jsx(x,{variant:r,dot:s,children:t})})(a.status)},{header:"Age",key:"timestamp",cell:e=>u(e.timestamp)}];return e.jsxs("div",{className:"container-custom py-8 pt-24",children:[e.jsx("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-6",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 dark:text-white mb-2",children:"Transactions"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-400",children:"Browse and explore transactions on the Dharitri network"})]})}),e.jsxs(m,{className:"mb-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700",children:[e.jsxs("h2",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4 md:mb-0",children:[e.jsx(t,{className:"inline-block mr-2 text-primary"}),"Transaction History"]}),e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4",children:[e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx(s,{className:"text-gray-500"}),e.jsx("span",{children:"Filter:"}),e.jsx("select",{value:v,onChange:e=>{return a=e.target.value,void j(a);var a},className:"bg-gray-100 dark:bg-gray-800 border-0 rounded py-1 px-2 focus:ring-primary focus:border-primary",children:[{value:"all",label:"All Transactions"},{value:"success",label:"Successful"},{value:"pending",label:"Pending"},{value:"failed",label:"Failed"}].map((a=>e.jsx("option",{value:a.value,children:a.label},a.value)))})]})}),e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300",children:[e.jsx(l,{className:"text-gray-500"}),e.jsx("span",{children:"Time:"}),e.jsx("select",{value:f,onChange:e=>{return a=e.target.value,void k(a);var a},className:"bg-gray-100 dark:bg-gray-800 border-0 rounded py-1 px-2 focus:ring-primary focus:border-primary",children:[{value:"all",label:"All Time"},{value:"24h",label:"Last 24 hours"},{value:"7d",label:"Last 7 days"},{value:"30d",label:"Last 30 days"}].map((a=>e.jsx("option",{value:a.value,children:a.label},a.value)))})]})}),e.jsxs("button",{onClick:()=>{w("desc"===N?"asc":"desc")},className:"flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded py-1 px-3",children:[e.jsx(d,{className:"transition-transform "+("asc"===N?"rotate-180":"")}),e.jsx("span",{children:"desc"===N?"Newest First":"Oldest First"})]})]})]}),e.jsx(p,{columns:C,data:a,isLoading:c,emptyMessage:"No transactions found",striped:!0,highlightOnHover:!0}),a.length>0&&!c&&e.jsx("div",{className:"px-6 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0",children:["Showing"," ",(i.currentPage-1)*i.itemsPerPage+1," to"," ",Math.min(i.currentPage*i.itemsPerPage,i.totalItems)," ","of ",i.totalItems," transactions"]}),e.jsx(b,{currentPage:i.currentPage,totalPages:i.totalPages,onPageChange:e=>{o({...i,currentPage:e}),window.scrollTo(0,0)}})]})})]}),P&&e.jsxs("div",{className:"bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg text-center",children:[e.jsx("p",{children:P}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded",children:"Retry"})]})]})};export{v as default};

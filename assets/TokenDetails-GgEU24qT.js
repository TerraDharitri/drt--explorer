import{j as e,D as a,E as s,m as t,W as r}from"./index-D-M7Cfv2.js";import{e as d,r as l,L as i}from"./vendor-DYlogLjF.js";import{a as c}from"./api-BXm3BkPp.js";import{b as x,f as n,e as m,g as o}from"./formatters-Qc2P36Ej.js";import{L as h,C as g,a as p,b as y,P as j,c as N,p as v,d as b,e as u}from"./charts-DE2lKvh4.js";g.register(p,y,j,N,v,b,u);const f=()=>{const{tokenId:g}=d(),[p,y]=l.useState(null),[j,N]=l.useState([]),[v,b]=l.useState(!0),[u,f]=l.useState(null),[k,w]=l.useState(!1),[T,S]=l.useState("1w"),[C,D]=l.useState(null);l.useEffect((()=>{(async()=>{var e;b(!0),f(null);try{const a=await c.getToken(g);y(a),$(T);const s=await c.getTokenTransactions(g);N((null==(e=s.data)?void 0:e.slice(0,10))||[])}catch(a){f("Failed to fetch token data")}finally{b(!1)}})()}),[g,T]);const M=e=>{navigator.clipboard.writeText(e),w(!0),setTimeout((()=>w(!1)),2e3)},$=e=>{let a;switch(e){case"1d":a=1;break;case"1w":default:a=7;break;case"1m":a=30;break;case"3m":a=90;break;case"1y":a=365}const s=[],t=[],r=new Date;for(let d=a;d>=0;d--){const e=new Date(r);e.setDate(e.getDate()-d),s.push(e.toLocaleDateString("en-US",{month:"short",day:"numeric"}));const l=5+5*Math.random(),i=2*Math.sin(d/a*Math.PI),c=.4*Math.random()-.2;t.push((l+i+c).toFixed(2))}D({labels:s,datasets:[{label:"Price (USD)",data:t,fill:!1,backgroundColor:"#1a4dda",borderColor:"#1a4dda",tension:.4}]})};if(v)return e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})})});if(u||!p)return e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsx("div",{className:"bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 p-4 rounded-lg",children:u||"Token not found"})});return e.jsxs("div",{className:"container mx-auto px-4 py-8 max-w-7xl",children:[e.jsx("div",{className:"mb-6",children:e.jsx("nav",{className:"flex","aria-label":"Breadcrumb",children:e.jsxs("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:[e.jsx("li",{className:"inline-flex items-center",children:e.jsx(i,{to:"/",className:"text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary",children:"Home"})}),e.jsx("li",{children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mx-2 text-gray-400",children:"/"}),e.jsx(i,{to:"/tokens",className:"text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary",children:"Tokens"})]})}),e.jsx("li",{"aria-current":"page",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mx-2 text-gray-400",children:"/"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:p.name})]})})]})})}),e.jsx("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8",children:e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex-shrink-0 h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center text-xl font-medium text-primary",children:p.symbol.substring(0,2)}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:p.name}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx("span",{className:"text-gray-600 dark:text-gray-400",children:p.symbol}),e.jsx("div",{className:"ml-4 flex items-center",children:e.jsx("button",{onClick:()=>M(p.id),className:"text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary",children:k?e.jsx(a,{className:"h-4 w-4"}):e.jsx(s,{className:"h-4 w-4"})})})]})]})]}),e.jsxs("div",{className:"mt-4 md:mt-0",children:[e.jsx("div",{className:"text-3xl font-bold",children:x(p.price)}),e.jsxs("div",{className:"text-sm "+(p.change24h>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"),children:[p.change24h>=0?"+":"",p.change24h.toFixed(2),"% (24h)"]})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Market Cap"}),e.jsx("div",{className:"text-xl font-semibold mt-1",children:x(p.marketCap)})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"24h Volume"}),e.jsx("div",{className:"text-xl font-semibold mt-1",children:x(p.volume24h)})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Holders"}),e.jsx("div",{className:"text-xl font-semibold mt-1",children:n(p.holders)})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Total Supply"}),e.jsx("div",{className:"text-xl font-semibold mt-1",children:n(p.totalSupply)})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between mb-4",children:[e.jsxs("h2",{className:"text-xl font-bold flex items-center gap-2",children:[e.jsx(t,{})," Price History"]}),e.jsx("div",{className:"flex space-x-2 mt-2 md:mt-0",children:["1d","1w","1m","3m","1y"].map((a=>e.jsx("button",{onClick:()=>S(a),className:"px-3 py-1 rounded-md text-sm "+(T===a?"bg-primary text-white":"bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"),children:a.toUpperCase()},a)))})]}),e.jsx("div",{className:"h-80",children:C&&e.jsx(h,{data:C,options:{responsive:!0,plugins:{legend:{display:!1},tooltip:{mode:"index",intersect:!1}},scales:{y:{grid:{color:"rgba(160, 174, 192, 0.1)"}},x:{grid:{display:!1}}},interaction:{mode:"index",intersect:!1}}})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"Recent Transactions"}),e.jsxs(i,{to:`/token/${p.id}/transactions`,className:"text-primary hover:text-primary-600 text-sm flex items-center",children:["View all ",e.jsx(r,{className:"ml-1 h-3 w-3"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-800",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Hash"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"From"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"To"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Value"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",children:"Time"})]})}),e.jsx("tbody",{className:"bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",children:j.length>0?j.map((a=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800/50",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx(i,{to:`/transaction/${a.hash}`,className:"text-primary hover:underline",children:m(a.hash,8)})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx(i,{to:`/account/${a.from}`,className:"text-primary hover:underline",children:m(a.from,6)})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx(i,{to:`/account/${a.to}`,className:"text-primary hover:underline",children:m(a.to,6)})}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[n(a.value)," ",p.symbol]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400",children:o(a.timestamp)})]},a.hash))):e.jsx("tr",{children:e.jsx("td",{colSpan:"5",className:"px-6 py-4 text-center text-gray-500 dark:text-gray-400",children:"No transactions found"})})})]})})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Token Information"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Owner"}),e.jsx(i,{to:`/account/${p.owner}`,className:"text-primary hover:underline",children:m(p.owner,10)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Token ID"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2",children:p.id}),e.jsx("button",{onClick:()=>M(p.id),className:"text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary",children:k?e.jsx(a,{className:"h-4 w-4"}):e.jsx(s,{className:"h-4 w-4"})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Total Transfers"}),e.jsx("div",{children:n(p.transfers||0)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"text-sm text-gray-500 dark:text-gray-400 mb-1",children:"Total Accounts"}),e.jsx("div",{children:n(p.accounts||0)})]})]})]})]})]})};export{f as default};

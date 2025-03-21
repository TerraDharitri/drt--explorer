import{j as e,F as a,l as t,H as s,I as r,J as i}from"./index-D-M7Cfv2.js";import{r as l,R as c,L as n}from"./vendor-DYlogLjF.js";import{f as d,s as o,t as x}from"./formatters-Qc2P36Ej.js";const m=()=>{const[m,h]=l.useState([]),[g,p]=l.useState(!0),[y,u]=l.useState(null),[b,k]=l.useState({key:"nonce",direction:"desc"}),[j,N]=l.useState(""),[f,v]=l.useState(1),[w]=l.useState(15),[C,S]=l.useState({totalBlocks:0,averageBlockTime:0,averageBlockSize:0,totalTransactions:0});l.useEffect((()=>{(async()=>{p(!0),u(null);try{setTimeout((()=>{const e=Array.from({length:100}).map(((e,a)=>{const t=(new Date).getTime()-6e3*a,s=Math.floor(3*Math.random()),r=Math.floor(50*Math.random());return{nonce:8547690-a,hash:`${Math.random().toString(36).substring(2,15)}${Math.random().toString(36).substring(2,15)}`,timestamp:t,shard:s,txCount:r,size:Math.floor(5e4+15e4*Math.random()),gasConsumed:Math.floor(5e6+15e6*Math.random()),proposer:`erd1${Math.random().toString(36).substring(2,15)}${Math.random().toString(36).substring(2,15)}`}})),a=e.reduce(((e,a)=>e+a.txCount),0),t=e.reduce(((e,a)=>e+a.size),0)/e.length;S({totalBlocks:8547690,averageBlockTime:6,averageBlockSize:t,totalTransactions:a}),h(e),p(!1)}),800)}catch(e){u("Failed to fetch blocks"),p(!1)}})()}),[]);const B=c.useMemo((()=>{let e=[...m];return null!==b&&e.sort(((e,a)=>e[b.key]<a[b.key]?"asc"===b.direction?-1:1:e[b.key]>a[b.key]?"asc"===b.direction?1:-1:0)),e}),[m,b]),T=c.useMemo((()=>{if(!j)return B;const e=j.toLowerCase();return B.filter((a=>a.hash.toLowerCase().includes(e)||a.nonce.toString().includes(e)||a.proposer.toLowerCase().includes(e)||a.shard.toString()===e))}),[B,j]),M=f*w,z=M-w,$=T.slice(z,M),A=Math.ceil(T.length/w),L=e=>v(e),D=e=>{let a="asc";b.key===e&&"asc"===b.direction&&(a="desc"),k({key:e,direction:a})},F=a=>b.key===a?"asc"===b.direction?e.jsx(r,{className:"inline-block ml-1"}):e.jsx(i,{className:"inline-block ml-1"}):e.jsx(i,{className:"inline-block ml-1 opacity-30"});return g?e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsx("div",{className:"flex justify-center items-center h-64",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"})})}):y?e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsxs("div",{className:"text-center text-red-500",children:[e.jsx("p",{children:y}),e.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 btn-primary",children:"Retry"})]})}):e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"Blocks"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-4",children:[e.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm mb-1",children:"Total Blocks"}),e.jsx("p",{className:"text-2xl font-semibold",children:d(C.totalBlocks)})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-4",children:[e.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm mb-1",children:"Average Block Time"}),e.jsxs("p",{className:"text-2xl font-semibold",children:[C.averageBlockTime," sec"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-4",children:[e.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm mb-1",children:"Average Block Size"}),e.jsxs("p",{className:"text-2xl font-semibold",children:[d(C.averageBlockSize)," bytes"]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md p-4",children:[e.jsx("p",{className:"text-gray-500 dark:text-gray-400 text-sm mb-1",children:"Total Transactions"}),e.jsx("p",{className:"text-2xl font-semibold",children:d(C.totalTransactions)})]})]}),e.jsx("div",{className:"flex justify-between items-center mb-6",children:e.jsxs("div",{className:"relative w-full sm:w-64 md:w-96",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(a,{className:"text-gray-400"})}),e.jsx("input",{type:"text",placeholder:"Search by block hash, nonce, proposer...",value:j,onChange:e=>{N(e.target.value),v(1)},className:"pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden mb-8",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",children:[e.jsx("thead",{className:"bg-gray-50 dark:bg-gray-800",children:e.jsxs("tr",{children:[e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("nonce"),children:["Block ",F("nonce")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("hash"),children:["Hash ",F("hash")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("shard"),children:["Shard ",F("shard")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("timestamp"),children:["Age ",F("timestamp")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("txCount"),children:["Transactions ",F("txCount")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("size"),children:["Size ",F("size")]}),e.jsxs("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer",onClick:()=>D("gasConsumed"),children:["Gas Used ",F("gasConsumed")]})]})}),e.jsx("tbody",{className:"bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700",children:0===$.length?e.jsx("tr",{children:e.jsx("td",{colSpan:"7",className:"px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400",children:"No blocks found matching your criteria"})}):$.map(((a,s)=>e.jsxs("tr",{className:"hover:bg-gray-50 dark:hover:bg-gray-800",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"bg-primary bg-opacity-10 p-2 rounded-full mr-3",children:e.jsx(t,{className:"text-primary h-4 w-4"})}),e.jsx(n,{to:`/block/${a.nonce}`,className:"text-primary hover:underline",children:d(a.nonce)})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap font-mono text-sm",children:e.jsx(n,{to:`/block/${a.nonce}`,className:"text-primary hover:underline",children:o(a.hash,10)})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",children:a.shard})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:x(a.timestamp)}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:d(a.txCount)}),e.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:[d(a.size)," bytes"]}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",children:d(a.gasConsumed)})]},s)))})]})})}),A>1&&e.jsx("div",{className:"flex justify-center mt-6",children:e.jsxs("nav",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>L(f>1?f-1:1),disabled:1===f,className:"px-3 py-1 rounded-md "+(1===f?"bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800":"bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),children:"Previous"}),Array.from({length:A},((e,a)=>a+1)).filter((e=>1===e||e===A||e>=f-1&&e<=f+1)).map(((a,t,s)=>t>0&&s[t-1]!==a-1?e.jsxs(c.Fragment,{children:[e.jsx("span",{className:"px-3 py-1",children:"..."}),e.jsx("button",{onClick:()=>L(a),className:"px-3 py-1 rounded-md "+(f===a?"bg-primary text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),children:a})]},`ellipsis-${a}`):e.jsx("button",{onClick:()=>L(a),className:"px-3 py-1 rounded-md "+(f===a?"bg-primary text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),children:a},a))),e.jsx("button",{onClick:()=>L(f<A?f+1:A),disabled:f===A,className:"px-3 py-1 rounded-md "+(f===A?"bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800":"bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"),children:"Next"})]})}),e.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mt-8",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx(s,{className:"text-primary mr-2"}),e.jsx("h2",{className:"text-lg font-semibold",children:"About Blocks"})]}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mb-4",children:"Blocks are batches of transactions with a hash of the previous block in the chain. This forms a chronological sequence of connected blocks, creating a chain of blocks (hence, blockchain). The Dharitri blockchain uses adaptive state sharding for high scalability."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-medium mb-2",children:"Block Creation"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"In Dharitri, blocks are created approximately every 6 seconds. Validators take turns proposing new blocks, which must be validated by other validators in the network before being added to the blockchain."})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-md font-medium mb-2",children:"Block Structure"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1",children:[e.jsx("li",{children:"Block hash: unique identifier"}),e.jsx("li",{children:"Nonce: block height in the chain"}),e.jsx("li",{children:"Timestamp: when the block was created"}),e.jsx("li",{children:"Transactions: list of transactions in the block"}),e.jsx("li",{children:"Validator: node that proposed the block"})]})]})]})]})]})};export{m as default};



const parent= React.createElement("div",
{id:"parent"},
React.createElement(
"div"
,{id:"child"},
[React.createElement("h1",{},"i am a heading"), 
React.createElement("h2",{},"hi i am small heading")]
));



 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
(this["webpackJsonpmemo-app"]=this["webpackJsonpmemo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),o=n(8),a=n.n(o),i=n(3),r=n(4),l=n(2),d=n(6),m=n(5),h=n(0),u=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){var e,t="node-".concat(this.props.row,"-").concat(this.props.col);return e="show"===this.props.typey?{color:"black"}:"show_string"===this.props.typey?{color:"black",fontWeight:"bold"}:{color:"white"},Object(h.jsxs)("div",{id:t,className:"node",style:e,children:[" ",this.props.val," "]})}}]),n}(c.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getInitialGrid=function(){for(var e=[],t=0;t<s.props.string_1.length+2;t++){for(var n=[],c=0;c<s.props.string_2.length+2;c++)n.push(s.createNode(c,t));e.push(n)}return e},s.createNode=function(e,t){return{col:e,row:t}},s.state={num_rows:s.props.string_1.length+2,num_cols:s.props.string_2.length+2,memo:s.create_memo(),grid:s.getInitialGrid(),speed:"slow"},s.update_speed=s.update_speed.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"animateDijkstra",value:function(){var e=this,t=800,n=550;console.log(this.state.speed),"slow"===this.state.speed?console.log("slow"):"medium"===this.state.speed?(t=500,n=275):"fast"===this.state.speed&&(t=350,n=120),console.log("increment ",t," lag ",n);for(var s=1,c=function(c){for(var o=function(o){e.props.string_1[c-2]==e.props.string_2[o-2]?(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node node-dev",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("node-".concat(0,"-",o)).className="node node-prev",document.getElementById("node-".concat(c,"-",0)).className="node node-prev",document.getElementById("1234").className="if_statement_1_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node",document.getElementById("node-".concat(0,"-",o)).className="node",document.getElementById("node-".concat(c,"-",0)).className="node",document.getElementById("1234").className="if_statement_1"}),t*s+n)):(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o-1)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("5678").className="if_statement_2_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node",document.getElementById("node-".concat(c,"-").concat(o-1)).className="node",document.getElementById("5678").className="if_statement_2"}),t*s+n)),s++},a=2;a<e.state.grid[0].length;a++)o(a)},o=2;o<this.state.grid.length;o++)c(o)}},{key:"create_memo",value:function(){for(var e=[],t=0;t<this.props.string_1.length+1;t++)e.push(Array(this.props.string_2.length+1).fill(0));console.log("before",e);for(var n=0;n<this.props.string_1.length+1;n++){console.log("internal",e);for(var s=0;s<this.props.string_2.length+1;s++)0!==n&&0!==s?this.props.string_1[n-1]===this.props.string_2[s-1]?e[n][s]=1+e[n-1][s-1]:e[n][s]=Math.max(e[n][s-1],e[n-1][s]):e[n][s]=0}return e}},{key:"reseter",value:function(){console.log("here");for(var e=2;e<this.state.grid.length;e++)for(var t=2;t<this.state.grid[0].length;t++)document.getElementById("node-".concat(e,"-").concat(t)).style.color="white"}},{key:"update_speed",value:function(e){e.preventDefault(),this.setState({speed:e.target.value})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{style:{marginLeft:"3.5%"},children:"Memo-fill-speed: "}),Object(h.jsxs)("select",{style:{marginLeft:"0%"},onChange:this.update_speed,children:[Object(h.jsx)("option",{value:"slow",children:"slow"}),Object(h.jsx)("option",{value:"medium",children:"medium"}),Object(h.jsx)("option",{value:"fast",children:"fast"})]}),Object(h.jsx)("button",{onClick:function(){return e.animateDijkstra()},style:{marginLeft:"0%",marginTop:"1%"},children:"Visualize LCS memo"}),Object(h.jsx)("div",{className:"grid",children:this.state.grid.map((function(t,n){return Object(h.jsx)("div",{children:t.map((function(t,n){var s=t.row,c=t.col,o="-",a="";return 0===s&&c>1?(o=e.props.string_2[c-2],a="show_string"):s>1&&0===c?(o=e.props.string_1[s-2],a="show_string"):s>0&&c>0&&(a=1==s||1==c?"show":"dont_show",o=String(e.state.memo[s-1][c-1])),Object(h.jsx)(u,{row:s,col:c,val:o,typey:a},n)}))},n)}))}),Object(h.jsxs)("div",{style:{height:"250px",width:"400px",type:"relative",float:"left",marginLeft:"5%",marginTop:"1.2%"},children:[Object(h.jsx)("div",{id:"1234",class:"if_statement_1",style:{marginTop:"0%"},children:Object(h.jsxs)("pre",{children:[" ","if(string_1[r-1]==string_2[c-1]){\n\n     memo1[r][c]=1+memo1[r-1][c-1];\n\n }"]})}),Object(h.jsx)("div",{id:"5678",class:"if_statement_2",style:{marginTop:"8.5%"},children:Object(h.jsx)("pre",{children:" else{\n\n     memo1[r][c]=max(memo1[r-1][c],memo1[r][c-1]);\n\n }"})})]}),Object(h.jsx)("button",{onClick:function(){return e.reseter()},style:{marginLeft:"0%",marginTop:"2%"},children:"reset LCS memo"})]})}}]),n}(c.a.Component),p=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={string_1:"",string_2:"",submitted:!1},s.change_handler1=s.change_handler1.bind(Object(l.a)(s)),s.change_handler2=s.change_handler2.bind(Object(l.a)(s)),s.handle_submit=s.handle_submit.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"change_handler1",value:function(e){this.setState({string_1:e.target.value,submitted:!1})}},{key:"change_handler2",value:function(e){this.setState({string_2:e.target.value,submitted:!1})}},{key:"handle_submit",value:function(e){this.setState({submitted:!0}),e.preventDefault()}},{key:"render",value:function(){var e;return e=this.state.submitted?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["string 1 is ",this.state.string_1]}),Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["string 2 is ",this.state.string_2]}),Object(h.jsx)(g,{string_1:this.state.string_1,string_2:this.state.string_2})]}):Object(h.jsx)("div",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Please enter both of your (non-empty) strings "}),Object(h.jsx)("h3",{children:"(Try limiting to 10 chars)"}),Object(h.jsxs)("form",{onSubmit:this.handle_submit,children:[Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["String 1 ",Object(h.jsx)("input",{type:"text",name:"s1",value:this.state.string_1,onChange:this.change_handler1})]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["String 2 ",Object(h.jsx)("input",{type:"text",name:"s2",value:this.state.string_2,onChange:this.change_handler2})]})}),Object(h.jsx)("input",{type:"submit",value:"submit"})]}),e,Object(h.jsx)("div",{})]})}}]),n}(c.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){var e,t="node-".concat(this.props.row,"-").concat(this.props.col);return e="show"===this.props.typey?{color:"black"}:"show_string"===this.props.typey?{color:"black",fontWeight:"bold"}:{color:"white"},Object(h.jsxs)("div",{id:t,className:"node",style:e,children:[" ",this.props.val," "]})}}]),n}(c.a.Component),b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getInitialGrid=function(){for(var e=[],t=0;t<s.props.string_1.length+2;t++){for(var n=[],c=0;c<s.props.string_2.length+2;c++)n.push(s.createNode(c,t));e.push(n)}return e},s.createNode=function(e,t){return{col:e,row:t}},s.state={num_rows:s.props.string_1.length+2,num_cols:s.props.string_2.length+2,memo:s.create_memo(),grid:s.getInitialGrid(),speed:"slow"},s.update_speed=s.update_speed.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"animateDijkstra",value:function(){var e=this,t=1200,n=700;console.log(this.state.speed),"slow"===this.state.speed?console.log("slow"):"medium"===this.state.speed?(t=500,n=275):"fast"===this.state.speed&&(t=350,n=120),console.log("increment ",t," lag ",n);for(var s=1,c=function(c){for(var o=function(o){e.props.string_1[c-2]==e.props.string_2[o-2]||"."==e.props.string_2[o-2]?(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node node-dev",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("node-".concat(0,"-",o)).className="node node-prev",document.getElementById("node-".concat(c,"-",0)).className="node node-prev",document.getElementById("1234").className="if_statement_1_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node",document.getElementById("node-".concat(0,"-",o)).className="node",document.getElementById("node-".concat(c,"-",0)).className="node",document.getElementById("1234").className="if_statement_1"}),t*s+n)):"*"===e.props.string_2[o-2]?e.props.string_2[o-3]===e.props.string_1[c-2]||"."===e.props.string_2[o-3]?(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("node-".concat(0,"-",o)).className="node node-prev",document.getElementById("node-".concat(0,"-",o-1)).className="node node-dev",document.getElementById("node-".concat(c,"-",0)).className="node node-dev",document.getElementById("5678").className="if_statement_2_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node",document.getElementById("node-".concat(c,"-",0)).className="node",document.getElementById("node-".concat(0,"-",o)).className="node",document.getElementById("node-".concat(0,"-",o-1)).className="node",document.getElementById("5678").className="if_statement_2"}),t*s+n)):(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c,"-").concat(o-2)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("node-".concat(0,"-",o)).className="node node-prev",document.getElementById("5678").className="if_statement_2_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c,"-").concat(o-2)).className="node",document.getElementById("node-".concat(0,"-",o)).className="node",document.getElementById("5678").className="if_statement_2"}),t*s+n)):(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"}}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node"}),t*s+n)),s++},a=2;a<e.state.grid[0].length;a++)o(a)},o=2;o<this.state.grid.length;o++)c(o)}},{key:"create_memo",value:function(){for(var e=[],t=0;t<this.props.string_1.length+1;t++)e.push(Array(this.props.string_2.length+1).fill(!1));console.log("before",e),e[0][0]=!0;for(var n=1;n<e[0].size;n++)"*"===this.props.string_2[n-1]&&e[0][n-2]&&(e[0][n]=!0);for(var s=1;s<this.props.string_1.length+1;s++){console.log("internal",e);for(var c=1;c<this.props.string_2.length+1;c++)this.props.string_1[s-1]==this.props.string_2[c-1]||"."==this.props.string_2[c-1]?e[s][c]=e[s-1][c-1]:"*"===this.props.string_2[c-1]&&(this.props.string_2[c-2]!==this.props.string_1[s-1]&&"."!==this.props.string_2[c-2]||(e[s][c]=e[s-1][c]),e[s][c]=e[s][c]||e[s][c-2])}return e}},{key:"reseter",value:function(){console.log("here");for(var e=2;e<this.state.grid.length;e++)for(var t=2;t<this.state.grid[0].length;t++)document.getElementById("node-".concat(e,"-").concat(t)).style.color="white"}},{key:"update_speed",value:function(e){e.preventDefault(),this.setState({speed:e.target.value})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{style:{marginLeft:"3.7%"},children:"Memo-fill-speed: "}),Object(h.jsxs)("select",{style:{marginLeft:"0%"},onChange:this.update_speed,children:[Object(h.jsx)("option",{value:"slow",children:"slow"}),Object(h.jsx)("option",{value:"medium",children:"medium"}),Object(h.jsx)("option",{value:"fast",children:"fast"})]}),Object(h.jsx)("button",{onClick:function(){return e.animateDijkstra()},style:{marginLeft:"0%",marginTop:"1%"},children:"Visualize REM memo"}),Object(h.jsx)("div",{className:"grid",children:this.state.grid.map((function(t,n){return Object(h.jsx)("div",{children:t.map((function(t,n){var s=t.row,c=t.col,o="-",a="";return 0===s&&c>1?(o=e.props.string_2[c-2],a="show_string"):s>1&&0===c?(o=e.props.string_1[s-2],a="show_string"):s>0&&c>0&&(a=1==s||1==c?"show":"dont_show",o=String(e.state.memo[s-1][c-1])),Object(h.jsx)(j,{row:s,col:c,val:o,typey:a},n)}))},n)}))}),Object(h.jsxs)("div",{style:{height:"250px",width:"415px",type:"relative",float:"left",marginLeft:"5%",marginTop:"0.7%"},children:[Object(h.jsx)("div",{id:"1234",class:"if_statement_1",style:{width:"415px"},children:Object(h.jsxs)("pre",{children:[" ","if(string[r-1]==pattern[c-1]||pattern[c-1]=='.'){\n   memo[r][c] = memo[r-1][c-1];\n }"]})}),Object(h.jsx)("div",{id:"5678",class:"if_statement_2",style:{marginTop:"6.7%",width:"415px"},children:Object(h.jsx)("pre",{children:" else if(this.props.string_2[c-1]==='*'){\n\n   if(pattern[c-2]==string[r-1]||pattern[c-2]=='.'){\n       memo1[r][c] = memo1[r-1][c];\n   }\n\n   memo1[r][c] = memo1[r][c]||memo1[r][c-2];\n }"})})]}),Object(h.jsx)("button",{onClick:function(){return e.reseter()},style:{marginLeft:"0%",marginTop:"2%"},children:"reset REM memo"})]})}}]),n}(c.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={string_1:"",string_2:"",submitted:!1},s.change_handler1=s.change_handler1.bind(Object(l.a)(s)),s.change_handler2=s.change_handler2.bind(Object(l.a)(s)),s.handle_submit=s.handle_submit.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"change_handler1",value:function(e){this.setState({string_1:e.target.value,submitted:!1})}},{key:"change_handler2",value:function(e){this.setState({string_2:e.target.value,submitted:!1})}},{key:"handle_submit",value:function(e){this.setState({submitted:!0}),e.preventDefault()}},{key:"render",value:function(){var e;return e=this.state.submitted?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["string  is ",this.state.string_1]}),Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["pattern is ",this.state.string_2]}),Object(h.jsx)(b,{string_1:this.state.string_1,string_2:this.state.string_2})]}):Object(h.jsx)("div",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Please enter your (non-empty) string and pattern "}),Object(h.jsx)("h3",{children:"(Try limiting to 10 chars)"}),Object(h.jsxs)("form",{onSubmit:this.handle_submit,children:[Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["String   ",Object(h.jsx)("input",{type:"text",name:"s1",value:this.state.string_1,onChange:this.change_handler1})]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["Pattern ",Object(h.jsx)("input",{type:"text",name:"s2",value:this.state.string_2,onChange:this.change_handler2})]})}),Object(h.jsx)("input",{type:"submit",value:"submit"})]}),e,Object(h.jsx)("div",{})]})}}]),n}(c.a.Component),_=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(r.a)(n,[{key:"render",value:function(){var e,t="node-".concat(this.props.row,"-").concat(this.props.col);return e="show"===this.props.typey?{color:"black"}:"show_string"===this.props.typey?{color:"black",fontWeight:"bold"}:{color:"white"},Object(h.jsxs)("div",{id:t,className:"node",style:e,children:[" ",this.props.val," "]})}}]),n}(c.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).getInitialGrid=function(){for(var e=[],t=0;t<s.props.string_1.length+2;t++){for(var n=[],c=0;c<s.props.string_2.length+2;c++)n.push(s.createNode(c,t));e.push(n)}return e},s.createNode=function(e,t){return{col:e,row:t}},s.state={num_rows:s.props.string_1.length+2,num_cols:s.props.string_2.length+2,memo:s.create_memo(),grid:s.getInitialGrid(),speed:"slow"},s.update_speed=s.update_speed.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"animateDijkstra",value:function(){var e=this,t=800,n=550;console.log(this.state.speed),"slow"===this.state.speed?console.log("slow"):"medium"===this.state.speed?(t=500,n=275):"fast"===this.state.speed&&(t=350,n=120),console.log("increment ",t," lag ",n);for(var s=1,c=function(c){for(var o=function(o){e.props.string_1[c-2]==e.props.string_2[o-2]?(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node node-dev",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("node-".concat(0,"-",o)).className="node node-prev",document.getElementById("node-".concat(c,"-",0)).className="node node-prev",document.getElementById("1234").className="if_statement_1_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node",document.getElementById("node-".concat(0,"-",o)).className="node",document.getElementById("node-".concat(c,"-",0)).className="node",document.getElementById("1234").className="if_statement_1"}),t*s+n)):(setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node node-finish",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o-1)).className="node node-start",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node node-start",document.getElementById("node-".concat(c,"-").concat(o)).style={color:"black"},document.getElementById("5678").className="if_statement_2_alt"}),t*s),setTimeout((function(){document.getElementById("node-".concat(c,"-").concat(o)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o)).className="node",document.getElementById("node-".concat(c,"-").concat(o-1)).className="node",document.getElementById("node-".concat(c-1,"-").concat(o-1)).className="node",document.getElementById("5678").className="if_statement_2"}),t*s+n)),s++},a=2;a<e.state.grid[0].length;a++)o(a)},o=2;o<this.state.grid.length;o++)c(o)}},{key:"create_memo",value:function(){for(var e=[],t=0;t<this.props.string_1.length+1;t++)e.push(Array(this.props.string_2.length+1).fill(0));console.log("before",e);for(var n=0;n<this.props.string_1.length+1;n++){console.log("internal",e);for(var s=0;s<this.props.string_2.length+1;s++)0!==n&&0!==s?this.props.string_1[n-1]===this.props.string_2[s-1]?e[n][s]=e[n-1][s-1]:e[n][s]=1+Math.min(e[n][s-1],Math.min(e[n-1][s],e[n-1][s-1])):e[n][s]=Math.max(n,s)}return e}},{key:"reseter",value:function(){console.log("here");for(var e=2;e<this.state.grid.length;e++)for(var t=2;t<this.state.grid[0].length;t++)document.getElementById("node-".concat(e,"-").concat(t)).style.color="white"}},{key:"update_speed",value:function(e){e.preventDefault(),this.setState({speed:e.target.value})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{style:{marginLeft:"4.5%"},children:"Memo-fill-speed: "}),Object(h.jsxs)("select",{style:{marginLeft:"1%"},onChange:this.update_speed,children:[Object(h.jsx)("option",{value:"slow",children:"slow"}),Object(h.jsx)("option",{value:"medium",children:"medium"}),Object(h.jsx)("option",{value:"fast",children:"fast"})]}),Object(h.jsx)("button",{onClick:function(){return e.animateDijkstra()},style:{marginLeft:"0%",marginTop:"1%"},children:"Visualize Edit-Distance memo"}),Object(h.jsx)("div",{className:"grid",children:this.state.grid.map((function(t,n){return Object(h.jsx)("div",{children:t.map((function(t,n){var s=t.row,c=t.col,o="-",a="";return 0===s&&c>1?(o=e.props.string_2[c-2],a="show_string"):s>1&&0===c?(o=e.props.string_1[s-2],a="show_string"):s>0&&c>0&&(a=1==s||1==c?"show":"dont_show",o=String(e.state.memo[s-1][c-1])),Object(h.jsx)(_,{row:s,col:c,val:o,typey:a},n)}))},n)}))}),Object(h.jsxs)("div",{style:{height:"250px",width:"450px",type:"relative",float:"left",marginLeft:"5%",marginTop:"0.5%"},children:[Object(h.jsx)("div",{id:"1234",class:"if_statement_1",style:{width:"450px"},children:Object(h.jsxs)("pre",{children:[" ","if(string_1[r-1]==string_2[c-1]){\n\n     memo1[r][c]=memo1[r-1][c-1];\n\n }"]})}),Object(h.jsx)("div",{id:"5678",class:"if_statement_2",style:{width:"450px",marginTop:"8.5%"},children:Object(h.jsx)("pre",{children:" else{\n\n     int first_min = min(memo1[r][c-1],memo[r-1][c-1]);\n     memo1[r][c]= 1 + min(memo1[r-1][c],first_min);\n\n }"})})]}),Object(h.jsx)("button",{onClick:function(){return e.reseter()},style:{marginLeft:"0%",marginTop:"2%"},children:"reset memo"})]})}}]),n}(c.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={string_1:"",string_2:"",submitted:!1},s.change_handler1=s.change_handler1.bind(Object(l.a)(s)),s.change_handler2=s.change_handler2.bind(Object(l.a)(s)),s.handle_submit=s.handle_submit.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"change_handler1",value:function(e){this.setState({string_1:e.target.value,submitted:!1})}},{key:"change_handler2",value:function(e){this.setState({string_2:e.target.value,submitted:!1})}},{key:"handle_submit",value:function(e){this.setState({submitted:!0}),e.preventDefault()}},{key:"render",value:function(){var e;return e=this.state.submitted?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["Input string is ",this.state.string_1]}),Object(h.jsxs)("p",{style:{fontWeight:"bold",fontSize:"20px"},children:["Target string is ",this.state.string_2]}),Object(h.jsx)(y,{string_1:this.state.string_1,string_2:this.state.string_2})]}):Object(h.jsx)("div",{}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Please enter both of your (non-empty) strings "}),Object(h.jsx)("h3",{children:"(Try limiting to 10 chars)"}),Object(h.jsxs)("form",{onSubmit:this.handle_submit,children:[Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["Input String ",Object(h.jsx)("input",{type:"text",name:"s1",value:this.state.string_1,onChange:this.change_handler1})]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("label",{children:["Target String ",Object(h.jsx)("input",{type:"text",name:"s2",value:this.state.string_2,onChange:this.change_handler2})]})}),Object(h.jsx)("input",{type:"submit",value:"submit"})]}),e,Object(h.jsx)("div",{})]})}}]),n}(c.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={algorithm:"Longest Common Subsequence"},s.change_handler1=s.change_handler1.bind(Object(l.a)(s)),s}return Object(r.a)(n,[{key:"change_handler1",value:function(e){this.setState({algorithm:e.target.value})}},{key:"render",value:function(){var e;return e="Longest Common Subsequence"===this.state.algorithm?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:Object(h.jsx)("p",{children:"We will visualise the Longest common Subsequence problem"})}),Object(h.jsx)("a",{href:"https://leetcode.com/problems/longest-common-subsequence/",target:"_blank",children:"Problem statement (leetcode)"}),Object(h.jsx)(p,{})]}):"Regular Expression Matching"===this.state.algorithm?Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:Object(h.jsx)("p",{children:"We will visualise the Regular Expression Matching problem"})}),Object(h.jsx)("a",{href:"https://leetcode.com/problems/regular-expression-matching/",target:"_blank",children:"Problem statement (leetcode)"}),Object(h.jsx)(f,{})]}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:Object(h.jsx)("p",{children:"We will visualise the Edit-Distance problem"})}),Object(h.jsx)("a",{href:"https://leetcode.com/problems/edit-distance/",target:"_blank",children:"Problem statement (leetcode)"}),Object(h.jsx)(v,{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:Object(h.jsx)("h2",{children:"Select your DP problem: "})}),Object(h.jsxs)("select",{onChange:this.change_handler1,children:[Object(h.jsx)("option",{value:"Longest Common Subsequence",children:"Longest Common Subsequence"}),Object(h.jsx)("option",{value:"Regular Expression Matching",children:"Regular Expression Matching"}),Object(h.jsx)("option",{value:"Edit Distance",children:"Edit distance"})]}),e]})}}]),n}(c.a.Component);n(14);a.a.render(Object(h.jsx)(O,{}),document.getElementById("reactEntry"))}},[[15,1,2]]]);
//# sourceMappingURL=main.cedb9bd6.chunk.js.map
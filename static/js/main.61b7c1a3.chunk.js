(this["webpackJsonpkaggle-look-alike"]=this["webpackJsonpkaggle-look-alike"]||[]).push([[0],{10:function(e,t){e.exports=[{name:"content",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content.csv",description:"Articles information.",columns:[{name:"content_id",type:"integer"},{name:"author",type:"string"},{name:"body",type:"string"},{name:"target_lat",type:"decimal"},{name:"target_long",type:"decimal"},{name:"language",type:"string"},{name:"is_recommendable",type:"integer"}]},{name:"content_display",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content_display.csv",description:"Page views and questions.",columns:[{name:"content_display_id",type:"integer"},{name:"user_id",type:"integer"},{name:"content_id",type:"integer"},{name:"question_id",type:"integer"},{name:"latitude",type:"decimal"},{name:"longitude",type:"decimal"},{name:"timestamp",type:"decimal"},{name:"clicked",type:"integer"}]},{name:"content_topic",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content_topic.csv",description:"Articles categorization.",columns:[{name:"id",type:"integer"},{name:"content_id",type:"integer"},{name:"topic_id",type:"string"},{name:"confidence",type:"decimal"}]},{name:"page_view",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/page_view.csv",description:"Articles page views.",columns:[{name:"page_view_id",type:"integer"},{name:"timestamp",type:"timestamp"},{name:"user_id",type:"integer"},{name:"content_id",type:"integer"},{name:"latitude",type:"decimal"},{name:"longitude",type:"decimal"}]},{name:"questions",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/questions.csv",description:"Questions on articles.",columns:[{name:"question_id",type:"integer"},{name:"timestamp",type:"timestamp"},{name:"user_id",type:"integer"},{name:"question_text",type:"string"}]},{name:"stock_portfolio_item",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/stock_portfolio_item.csv",description:"Stock market stuff.",columns:[{name:"id",type:"integer"},{name:"user_id",type:"integer"},{name:"topic_id",type:"string"},{name:"created_at",type:"time"}]},{name:"user",url:"https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/user.csv",description:"Users information.",columns:[{name:"user_id",type:"integer"},{name:"first_name",type:"string"},{name:"last_name",type:"string"},{name:"email",type:"string"},{name:"gender",type:"string"},{name:"language",type:"string"},{name:"birthdate",type:"date"},{name:"enthnicity",type:"string"},{name:"zip_code",type:"integer"},{name:"home_latitude",type:"decimal"},{name:"home_longitude",type:"decimal"},{name:"home_geo_hash",type:"decimal"}]}]},38:function(e,t,a){e.exports=a(55)},43:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(25),s=a.n(i),c=a(27),l=a(2),o=a(3),m=a(5),u=a(4),d=a(10),p=a.n(d),g=(a(43),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"FileList"},r.a.createElement("div",{className:"dataExplo fTitle"},"Data Explorer"),r.a.createElement("div",{className:"fileCount fTitle"}," ",e.files.length+" files"),e.files.map((function(t,a){return r.a.createElement("div",{key:t.name,id:a,className:a===e.selectedIdx?"selected":"",onClick:e.loading?null:e.clickFile},t.name)})))}}]),a}(r.a.PureComponent)),y=a(68),f=a(69),h=a(70),v=(a(44),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"TitleBar"},r.a.createElement("h1",null,e.name+" ",r.a.createElement("span",null,e.count)),r.a.createElement("div",{className:"topIcons"},"table"===e.view?r.a.createElement(y.a,{onClick:e.toggleViewFunc}):r.a.createElement(f.a,{onClick:e.toggleViewFunc}),r.a.createElement("a",{href:e.url,target:"_new"},r.a.createElement(h.a,null))))}}]),a}(r.a.Component)),E=a(9),b=(a(49),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.data;if(e){var t=E.d(e);return r.a.createElement("div",{className:"Bars"},e.map((function(e,a){return r.a.createElement("div",{key:"b"+a,style:{left:10*a+"px",height:parseInt(e/t*100)+"px"},title:e})})))}return r.a.createElement("div",{className:"NoBars"},"N/A")}}]),a}(r.a.Component)),_=(a(50),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={sorting:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.stats,n=e.metadata.columns,i=e.sorting;return r.a.createElement("table",{className:"Table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"rowLabels"},n.map((function(t,a){return r.a.createElement("th",{id:t.name,key:"c"+a,className:"integer"===t.type||"decimal"===t.type?"rightAlign":"",onClick:e.sortFunc},r.a.createElement("div",null,t.name))}))),r.a.createElement("tr",{className:"rowHisto"},n.map((function(e,t){return r.a.createElement("td",{key:"c"+t},r.a.createElement(b,{data:a[e.name].hist}))})))),r.a.createElement("tbody",{className:i?"hidden":""},t.map((function(e,t){return r.a.createElement("tr",{key:"r"+t},n.map((function(t,a){return r.a.createElement("td",{key:"c"+a,className:"integer"===t.type||"decimal"===t.type?"rightAlign":""},e[t.name])})))}))))}}]),a}(r.a.PureComponent)),w=(a(51),["nulls","min","max","mean","stdDev"]),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.metadata.columns;return r.a.createElement("div",{className:"Stats"},t.map((function(t,a){return r.a.createElement("div",{key:"c"+a},r.a.createElement("h3",null,t.name," ",r.a.createElement("span",null,t.type)),e.renderFeature(t))})),r.a.createElement("span",{className:"clearer"}))}},{key:"renderFeature",value:function(e){var t=this.props.stats[e.name];return["string","date","time","timestamp"].includes(e.type)?r.a.createElement("div",null,r.a.createElement("label",null,"nulls"),r.a.createElement("span",null,t.nulls)):w.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("label",null,e),r.a.createElement("span",null,t[e]))}))}}]),a}(r.a.PureComponent),N=(a(52),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"evol-loading"},r.a.createElement("div",{className:"loading_txt"},this.props.message||"Loading..."),r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"})))}}]),a}(r.a.PureComponent)),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={view:"table"},e.toggleView=function(){document.getElementById("DataSpace").scrollTo(0,0),e.setState({view:"table"===e.state.view?"stats":"table"})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=this.props.metadata,n=(t&&t.length?t.length+" rows, ":"")+a.columns.length+" columns";return r.a.createElement("div",{id:"DataSpace",className:"DataSpace"},r.a.createElement(v,{name:a.name,count:n,url:a.url,toggleViewFunc:this.toggleView,view:this.state.view}),r.a.createElement("div",{className:"file_desc"},a.description),e.loading?r.a.createElement(N,null):"table"===this.state.view?r.a.createElement(_,{metadata:a,data:t,stats:e.stats,sortFunc:e.sortFunc,lastSort:e.lastSort}):r.a.createElement(k,{metadata:a,stats:e.stats}))}}]),a}(r.a.Component),j=(a(53),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).dataCache={},e.state={selectedIdx:0,data:null,stats:null,loading:!0},e.clickFile=function(t){var a=parseInt(t.currentTarget.id);e.setState({selectedIdx:a,data:null,stats:null,loading:!0,error:null}),e.getData(p.a[a])},e.sortData=function(t){var a,n=t.currentTarget.id,r=p.a[e.state.selectedIdx].columns.find((function(e){return e.name===n})),i=r.name;i===e.state.lastSort?e.setState({data:e.state.data.reverse(),lastSort:""}):(a="string"===r.type?function(e,t){return(e[i]||"").localeCompare(t[i]||"")}:function(e,t){return e[i]<t[i]?1:t[i]<e[i]?-1:0},e.setState({data:e.state.data.sort(a),lastSort:i}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.selectedIdx;return r.a.createElement("div",{className:"App"},r.a.createElement(g,{loading:this.state.loading,files:p.a,clickFile:this.clickFile,selectedIdx:e}),this.state.error?r.a.createElement("div",{className:"error"},"An error occured while requesting data from the server."):r.a.createElement(O,{loading:this.state.loading,metadata:p.a[e],data:this.state.data,stats:this.state.stats,sortFunc:this.sortData,lastSort:this.state.lastSort}))}},{key:"componentDidMount",value:function(){this.getData(p.a[this.state.selectedIdx])}},{key:"getData",value:function(e){var t=this,a=e.url;if(this.dataCache[a]){var n=this.dataCache[a];this.setState({data:n.data,stats:n.stats,loading:!1,lastSort:""})}else{var r=e.columns,i={};r.forEach((function(e){return i[e.name]="string"===e.type?{nulls:0}:{min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY,nulls:0,total:0}}));var s={integer:function(e){return parseInt(e)},decimal:function(e){return parseFloat(e)},time:function(e){return e},date:function(e){return e},timestamp:function(e){return e}};E.a(a,(function(e){return r.forEach((function(t){if("string"!==t.type){var a=t.name,n=e[a];""===n?(i[t].nulls+=1,e[a]=null):(n=s[t.type](n),e[a]=n,"integer"!==t.type&&"decimal"!==t.type||(n>i[a].max&&(i[a].max=n),n<i[a].min&&(i[a].min=n),i[a].total+=n))}})),e})).then((function(e){r.forEach((function(t){if("string"!==t.type){var a=i[t.name],n=e.length-a.nulls;if(a.mean=0!==n?a.total/n:"N/A","integer"===t.type||"decimal"===t.type){var r=e.map((function(e){return e[t.name]}));a.stdDev=E.b(r),a.hist=E.c().domain([a.min,a.max]).thresholds(19)(r).map((function(e){return e.length}))}}}));var n={data:e,stats:i};t.dataCache[a]=n,t.setState(Object(c.a)({loading:!1,lastSort:""},n))})).catch((function(e){t.setState({loading:!1,error:e.message})}))}}}]),a}(r.a.Component));a(54);s.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.61b7c1a3.chunk.js.map
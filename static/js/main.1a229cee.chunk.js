(window.webpackJsonpminori=window.webpackJsonpminori||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/logo.873d899c.png"},119:function(e,t,a){e.exports=a(206)},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(3),r=a.n(l),s=(a(124),a(125),a(15)),m=a(16),i=a(18),o=a(17),u=a(19),f=(a(126),a(107)),h=a.n(f),E=(a(127),a(9)),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"header"},c.a.createElement("nav",{className:"navbar navbar-expand navbar-light fixed-top"},c.a.createElement("div",{className:"border-logo"},c.a.createElement(E.b,{className:"navbar-brand",to:"/"},c.a.createElement("img",{className:"images-logo",src:h.a,alt:"Logo"}))),c.a.createElement("div",{className:"btn-toggler ml-5"},c.a.createElement("button",{type:"button",className:"btn btn-info",onClick:this.props.handleOnSidebar}," ",c.a.createElement("i",{className:"fas fa-bars fa-lg"}))),c.a.createElement("form",{className:"form-inline ml-5"},c.a.createElement("div",{className:"input-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search for..."}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("span",{className:"input-group-text"}," ",c.a.createElement("i",{className:"fas fa-search"}))))),c.a.createElement("div",{className:"information collapse navbar-collapse justify-content-end"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(E.b,{className:"nav-link",to:"#"},c.a.createElement("span",{className:"badge badge-danger"},"22"),c.a.createElement("i",{className:"far fa-bell fa-lg"}))),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(E.b,{className:"nav-link",to:"#"},c.a.createElement("span",{className:"badge badge-danger"},"8"),c.a.createElement("i",{className:"far fa-comment-alt fa-lg"}))),c.a.createElement("li",{className:"nav-item clock"},c.a.createElement(E.b,{className:"nav-link name",to:"#"}," ",c.a.createElement("span",{className:"fullname"},"Valerie Luna"),c.a.createElement("i",{className:"fas circle-user fa-user-circle fa-lg"})))))))}}]),t}(n.Component),p=(a(132),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"sidebar-menu"},c.a.createElement("ul",{className:"nav flex-column"},c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fab fa-microsoft fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Dashboard"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon far fa-heart fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Blue Print"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fas fa-cog fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Property"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items master"},c.a.createElement("i",{className:"item icon fas fa-crown fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Master"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon far fa-calendar fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Tenants"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fas fa-globe fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Sites"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fas fa-check fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Parts"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fas fa-book-open fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"Catalog"),c.a.createElement("i",{className:"item next fas fa-chevron-right"})),c.a.createElement("li",{className:"items"},c.a.createElement("i",{className:"item icon fas fa-user fa-lg"}),c.a.createElement(E.b,{className:"item title",to:"/"},"User"),c.a.createElement("i",{className:"item next fas fa-chevron-right"}))))}}]),t}(n.Component)),b=(a(133),a(39)),N=a(109),v=a.n(N),g="https://jsonplaceholder.typicode.com";function O(e,t,a){return v()({method:t,url:"".concat(g,"/").concat(e),data:a}).catch(function(e){console.log(e)})}var w=a(208),y=(a(151),a(56)),j=a.n(y),C=a(57),k=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).onChange=function(t){t.preventDefault();var a=t.target,n=a.name,c=a.value;e.setState(Object(C.a)({},n,c))},e.onClear=function(){e.setState({name:"",description:""})},e.onSearch=function(t){t.preventDefault(),e.props.onSearch(e.state),e.onClear()},e.state={name:"",description:""},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.description;return c.a.createElement("div",{className:"nav-filter"},c.a.createElement("div",{className:"nav-item search"},c.a.createElement("div",{className:"result"},c.a.createElement(E.b,{className:"navbar-brand",to:"/"},this.props.total," Found")),c.a.createElement("form",{className:"item form-inline"},c.a.createElement("label",{className:"title",htmlFor:"parts-type"},"Name :"),c.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.onChange,className:"form-control",id:"email",placeholder:"Name"}),c.a.createElement("label",{className:"title",htmlFor:"item-name"},"Description :"),c.a.createElement("input",{type:"text",className:"form-control",name:"description",value:a,onChange:this.onChange,id:"pwd",placeholder:"Description"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.onSearch},c.a.createElement("i",{className:"fas fa-search mr-2"}),c.a.createElement("span",{className:"title-search"},"Search")))),c.a.createElement("div",{className:"nav-item add-master"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},c.a.createElement("i",{className:"fas fa-plus-circle mr-2"}),c.a.createElement("span",{className:"title-add"},"Add"))))}}]),t}(n.Component),S=Object(b.b)(null,function(e,t){return{onSearch:function(t){e(function(e){return{type:"SEARCH_COMMENTS",keyword:e}}(t))}}})(k),D=a(80),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).getListComment=function(t){O("comments?_limit=10&_page=".concat(t),"GET",null).then(function(t){t&&t.data&&e.props.onListComment(t.data)},window.scrollTo(0,0))},e.handlePagination=function(t){t!==e.state.pageNumber&&(e.getListComment(t),e.setState({pageNumber:t}))},e.state={pageNumber:1,total:0,commentTotal:[]},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;O("comments","GET",null).then(function(t){t&&t.data&&e.setState({total:t.data.length,commentTotal:t.data})}),this.getListComment(this.state.pageNumber)}},{key:"showComments",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.name),c.a.createElement("td",null,"jpg"),c.a.createElement("td",null,e.email),c.a.createElement("td",null,c.a.createElement("i",{className:"far fa-edit fa-lg "})),c.a.createElement("td",null,c.a.createElement("i",{className:"far fa-trash-alt fa-lg fa-lg"})))})),t}},{key:"onShowSizeChange",value:function(e,t){console.log(e,t)}},{key:"itemRender",value:function(e,t,a){return"prev"===t?c.a.createElement(E.b,{className:"arrow-left",to:"#"},c.a.createElement("i",{className:"fas fa-arrow-left fa-sm"})):"next"===t?c.a.createElement(E.b,{className:"arrow-left",to:"#"},c.a.createElement("i",{className:"fas fa-arrow-right fa-sm"})):a}},{key:"render",value:function(){var e=this.props,t=e.comments,a=e.keyword,n=this.state.commentTotal;return Object(D.isEmpty)(a)||(t=Object(D.filter)(n,function(e){return-1!==e.email.toLowerCase().indexOf(a.description.toLowerCase())&&-1!==e.name.toLowerCase().indexOf(a.name.toLowerCase())})),c.a.createElement("main",{className:j()("left-content",{"sidebar-menu-hidden":!this.props.showMenu,"left-content-mobi":this.props.showMenu})},c.a.createElement("div",{className:"main-header"},c.a.createElement("h1",{className:"title"},"Master"),c.a.createElement("p",{className:"description"},"Description Description Description Description Description Description Description Description Description Description Description DescriptionDescription")),c.a.createElement("div",{className:"main-content"},c.a.createElement(S,{total:this.state.total}),c.a.createElement("div",{className:"box-table mt-2"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body table-responsive"},c.a.createElement("table",{className:"table table-hover"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"ID:"),c.a.createElement("th",null,"Name:"),c.a.createElement("th",null,"Tenant:"),c.a.createElement("th",null,"Descriptiont:"),c.a.createElement("th",null,"Edit:"),c.a.createElement("th",null,"Delete:"))),c.a.createElement("tbody",null,this.showComments(t))),c.a.createElement("div",{className:"card-end"},c.a.createElement("i",{className:"fas fa-ellipsis-v fa-2x"})))))))),c.a.createElement("div",{className:"main-footer"},c.a.createElement("div",{className:"main-pagination"},c.a.createElement(w.a,{onShowSizeChange:this.onShowSizeChange,onChange:this.handlePagination,defaultCurrent:3,total:this.state.total,current:this.state.pageNumber,className:"mb-5",showTitle:!0,itemRender:this.itemRender,showTotal:function(e,t){return"".concat(e,"\u4ef6\u4e2d ").concat(t[0]," \u4ef6\uff5e").concat(t[1],"\u4ef6\u3092\u8868\u793a")}}))),c.a.createElement("div",{className:"clearfix"}))}}]),t}(n.Component),M=Object(b.b)(function(e){return{comments:e.comments.listComment,keyword:e.comments.keyword}},function(e,t){return{onListComment:function(t){e(function(e){return{type:"LIST_COMMENT",data:e}}(t))}}})(x),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:j()({"footer-sidebar-hidden":!this.props.showMenu})},c.a.createElement("div",{className:"footer-content"},c.a.createElement("p",null,"\xa9 2019. Cloudmanageportal Co., Ltd. All Rights Reserved")))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(o.a)(t).call(this))).handleOnSidebar=function(){e.setState({showMenu:!e.state.showMenu})},e.state={showMenu:!0},e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log(this.state.showMenu),c.a.createElement("div",{className:"page-container"},c.a.createElement(d,{handleOnSidebar:this.handleOnSidebar}),this.state.showMenu&&c.a.createElement(p,null),c.a.createElement(M,{showMenu:this.state.showMenu}),c.a.createElement(T,{showMenu:this.state.showMenu}))}}]),t}(n.Component);var P=function(){return c.a.createElement(E.a,null,c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(38);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var I={listComment:[],keyword:{}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIST_COMMENT":return A({},e,{listComment:t.data});case"SEARCH_COMMENTS":return A({},e,{keyword:t.keyword});default:return A({},e)}},B=Object(R.b)({comments:z}),F=Object(R.c)(B);r.a.render(c.a.createElement(b.a,{store:F},c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[119,1,2]]]);
//# sourceMappingURL=main.1a229cee.chunk.js.map
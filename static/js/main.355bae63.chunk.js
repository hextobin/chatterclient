(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(315)},168:function(e,t,a){},170:function(e,t,a){},193:function(e,t){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(39),c=a.n(r),o=(a(168),a(17)),l=a(18),u=a(20),i=a(19),m=a(21),h=(a(169),a(325)),b=(a(170),a(142)),p=a.n(b),g=a(322),E=a(316),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={userName:""},a.onUserSubmit=function(e){e.preventDefault(),a.props.setUserName(a.state.userName),a.props.enableUser()},a.onChange=function(e){a.setState({userName:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{action:"",onSubmit:this.onUserSubmit},s.a.createElement(g.a,{id:"userbox",size:"big",action:s.a.createElement(E.a,{icon:"address card",onClick:this.onUserSubmit}),onChange:this.onChange,value:this.state.userName,placeholder:"Username"})))}}]),t}(n.Component),d=a(324),j=a(153),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).userList=function(){return a.props.users.map(function(e,t){return s.a.createElement(d.a,{key:e.id.replace(/[_]/g,"")},s.a.createElement("div",{className:"user-list-name-align"},s.a.createElement(j.a,{src:"https://robohash.org/".concat(e.name,"?size=200x200"),style:{fontSize:42},alt:"avatar image",avatar:!0}),s.a.createElement("span",{id:"user-list-name"},e.name)),s.a.createElement(d.a.Header,null))})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,"Current Users",this.userList())}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={users:[]},a.props.socket.on("join room",function(e){a.setState({users:e})}),a.props.socket.on("leave room",function(e){a.setState({users:e})}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a.Column,{textAlign:"center",width:4},s.a.createElement("div",{className:"controlcol"},this.props.userEnabled?s.a.createElement(v,{users:this.state.users}):s.a.createElement(f,{setUserName:this.props.setUserName,enableUser:this.props.enableUser})))}}]),t}(n.Component),k=a(154),N=a(323),y=a(151),C=a.n(y),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).currMessages=function(){return s.a.createElement("div",null,s.a.createElement("ul",null,a.state.inMessages.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(N.a,null,s.a.createElement(N.a.Event,null,s.a.createElement(N.a.Label,null,s.a.createElement("img",{src:"https://robohash.org/".concat(e.userName),alt:"robot user avatar"})),s.a.createElement(N.a.Content,null,s.a.createElement(N.a.Summary,null,s.a.createElement(N.a.User,null,e.userName),s.a.createElement(N.a.Date,null,C()().format("h:mm:ss a"))),s.a.createElement(N.a.Extra,null,e.message)))))})))},a.state={inMessages:[]},a.props.socket.on("chat message",function(e,t){console.log(t);var n={message:e,userName:t};a.setState({inMessages:[].concat(Object(k.a)(a.state.inMessages),[n])})}),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,0===this.state.inMessages.length?s.a.createElement("div",null,"No Messages"):this.currMessages())}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={message:""},a.onMessageSubmit=function(e){e.preventDefault(),a.props.socket.emit("chat message",a.state.message,a.props.userName),a.setState({message:""})},a.onChange=function(e){a.setState({message:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{id:"messagebox",action:"",onSubmit:this.onMessageSubmit},s.a.createElement(g.a,{disabled:!this.props.userEnabled,fluid:!0,action:s.a.createElement(E.a,{icon:"chat",onClick:this.onMessageSubmit}),onChange:this.onChange,value:this.state.message,placeholder:"Your chatter goes here..."})))}}]),t}(n.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a.Column,{width:8},s.a.createElement("div",{className:"messagecol"},s.a.createElement(w,{socket:this.props.socket}),s.a.createElement(S,{userName:this.props.userName,userEnabled:this.props.userEnabled,socket:this.props.socket}))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).enableUser=function(){a.setState({userEnabled:!0})},a.setUserName=function(e){a.setState({userName:e},function(){a.socket.emit("join room",a.state.userName)})},a.state={userEnabled:!1,userName:""},a.socket=p()("https://thawing-basin-98882.herokuapp.com/"),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{columns:"equal"},s.a.createElement(O,{socket:this.socket,setUserName:this.setUserName,enableUser:this.enableUser,userEnabled:this.state.userEnabled}),s.a.createElement(U,{socket:this.socket,userEnabled:this.state.userEnabled,userName:this.state.userName})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,1,2]]]);
//# sourceMappingURL=main.355bae63.chunk.js.map
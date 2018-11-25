(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,a,n){e.exports=n(78)},56:function(e,a,n){},69:function(e,a,n){},78:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(40),r=n.n(l),s=(n(56),n(11)),m=n(12),u=n(15),o=n(13),i=n(16),h=n(49),p=n(14),E=n(82),d=n(83),b=n(24),g=n(10),f=n.n(g),_=n(25),N=n.n(_),v=n(46),y=n.n(v),k=n(81);function O(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission :"," ",c.a.createElement("span",{className:N()({"text-warning":r,"text-danger":!r})},t)," "),c.a.createElement("p",null,"Date: ",c.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(k.a,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function j(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-warning"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function w(){var e=Object(b.a)(["\n  {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return w=function(){return e},e}var x=f()(w()),R=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(t.Fragment,null,c.a.createElement("h3",null,"Launches"),c.a.createElement(j,null),c.a.createElement(p.Query,{query:x},function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h2",null,"Loading..."):(n&&console.log("ERROR: ".concat(n)),console.log("data: ",l),c.a.createElement(t.Fragment,null,l.launches.map(function(e){return c.a.createElement(O,{key:e.flight_number,launch:e})})))}))}}]),a}(t.Component);function D(){var e=Object(b.a)(["\n  query launchQuery($flight_number: Int!) {\n    launch(flight_number : $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local,\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var L=f()(D()),Y=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement("div",null,c.a.createElement(p.Query,{query:L,variables:{flight_number:e}},function(e){var a=e.loading,n=e.err,t=e.data;if(a)return c.a.createElement("h1",null,"loading...");n&&console.log(n);var l=t.launch,r=l.flight_number,s=l.mission_name,m=l.launch_year,u=l.launch_success,o=(l.launch_date_local,l.rocket),i=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},"Mission Name: ",c.a.createElement("span",{className:"text-dark"},s)),c.a.createElement("h4",{className:"mb-3"},"Luanch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",r),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Success: ",c.a.createElement("span",{className:N()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket id: ",i),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"))}))}}]),a}(t.Component),q=(n(69),new h.a({uri:"/graphql"})),F=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.ApolloProvider,{client:q},c.a.createElement(E.a,null,c.a.createElement("div",{className:"container"},c.a.createElement("h3",null,"SpaceX"),c.a.createElement(d.a,{exact:!0,path:"/",component:R}),c.a.createElement(d.a,{path:"/launch/:flight_number",component:Y}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,2,1]]]);
//# sourceMappingURL=main.ad26d9be.chunk.js.map
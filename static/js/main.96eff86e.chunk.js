(window["webpackJsonpclicky-game"]=window["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Cardinals","images":"https://i.pinimg.com/564x/a8/f5/71/a8f57159af35cb1c4aa4854c57b44083.jpg"},{"id":2,"name":"Bears","images":"https://i.pinimg.com/564x/26/f1/67/26f16706b395379ae7ab9f9cec93c754.jpg"},{"id":3,"name":"Packers","images":"https://www.desktopbackground.org/download/o/2012/05/18/391886_green-bay-packers-logo-wallpapers-182692_1920x1200_h.jpg"},{"id":4,"name":"Giants","images":"https://seeklogo.net/wp-content/uploads/2011/05/new-york-giants-logo-vector.png"},{"id":5,"name":"Lions","images":"https://i.pinimg.com/564x/6f/4b/af/6f4baf1eeb3f109ba06048e39062f416.jpg"},{"id":6,"name":"Redskins","images":"https://vignette.wikia.nocookie.net/prosportsteams/images/1/19/Washington_Redskins.jpg/revision/latest?cb=20120912141725"},{"id":7,"name":"Steelers","images":"https://images.homedepot-static.com/productImages/a8b39686-51d9-495c-b736-76f56576fc5a/svn/yellow-applied-icon-wall-decals-nfop2601-64_600.jpg"},{"id":8,"name":"Eagles","images":"https://i.pinimg.com/564x/0b/8e/4d/0b8e4ddf5e023d9497b94f28f6117f5b.jpg"}]')},,,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(3),c=t.n(s),i=(t(15),t(4)),r=t(5),l=t(8),m=t(6),d=t(9),p=(t(16),function(e){return o.a.createElement("div",{className:"card img-container hover"},o.a.createElement("img",{alt:e.name,src:"".concat(e.images),id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),g=(t(17),function(e){return o.a.createElement("div",{className:"wrapper"},e.children)}),u=(t(18),t(7)),f=function(e){return o.a.createElement("div",{className:"gameScore"},o.a.createElement("h3",{className:"score"},"Your Score ",o.a.createElement(u.a,null)," ",e.total),o.a.createElement("h3",{className:"status"},e.status))},h=t(1),k=(t(19),function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).state={nflLogo:h,clickedTeamIds:[],score:0,goal:8,status:""},t.shuffleScoreCard=function(e){var a=t.state.clickedTeamIds;if(a.includes(e))t.setState({clickedTeamIds:[],score:0,status:"Game Over! You lost. Click to play again!"});else{if(a.push(e),8===a.length)return t.setState({score:8,status:"Touchdown! Click to play again!",clickedTeamIds:[]}),void console.log("You Win");t.setState({nflLogo:h,clickedTeamIds:a,score:a.length,status:" "});for(var n=h.length-1;n>0;n--){var o=Math.floor(Math.random()*(n+1)),s=[h[o],h[n]];h[n]=s[0],h[o]=s[1]}}},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-title"},"Clicky Game"),o.a.createElement("p",{className:"App-intro"},"Try not to click the same image twice!")),o.a.createElement(f,{total:this.state.score,goal:8,status:this.state.status}),o.a.createElement(g,null,this.state.nflLogo.map(function(a){return o.a.createElement(p,{shuffleScoreCard:e.shuffleScoreCard,id:a.id,key:a.id,name:a.name,images:a.images})})),o.a.createElement("footer",null,o.a.createElement("p",null,"Woodley Johnson 2019",o.a.createElement("a",{href:"https://github.com/dawood32913/clicky-game",target:"_blank",rel:"noopener noreferrer"}," here"),".")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.96eff86e.chunk.js.map
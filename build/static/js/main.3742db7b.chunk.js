(this["webpackJsonptasq-dashboard"]=this["webpackJsonptasq-dashboard"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(10),i=r.n(a),d=(r(16),r(17),r(0));function c(){return Object(d.jsx)("div",{className:"Header",children:Object(d.jsx)("h1",{children:"Worldle"})})}var u=r(2),o=r.n(u),h=r(7),l=r(3),b=r(4),j=r(6),f=r(5),S=(r(20),function(){var e=Object(h.a)(o.a.mark((function e(t,r,n){var s,a,i,d,c,u,h,l,b,j,f,S;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s="",a="",i=[],d=[],"",c=0;c<=4;c++)a+=r[c];for(u=0;u<=4;u++)i[u]=t[u];for(h=0;h<=4;h++)d[h]=r[h];for(l=0;l<=4;l++)i[l]===d[l]&&(i[l]=null,d[l]="X");for(b=0;b<=4;b++)for(j=0;j<=4;j++)d[j]===i[b]&&(i[b]=null,d[j]="O");return console.log(d),console.log(i),f=fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+a).then((function(e){return e.json()})).then((function(e){return e[0]})),e.next=15,f;case 15:if(void 0===e.sent)s="this is not a word";else{for(S=0;S<=4;S++)"X"===d[S]?s+="X":"O"===d[S]?s+="O":s+="-";"XXXXX"===s?s="You Win!":7===n&&(s="You Lose!")}return e.abrupt("return",s);case 18:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()),q=r(8),O=(r(21),function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(l.a)(this,r),n=t.call(this,e),console.log(Object(q.a)(n)),n.state={trigger:n.props.trigger},n}return Object(b.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:this.state.trigger?Object(d.jsx)("div",{className:"popup",children:Object(d.jsxs)("div",{className:"popup-inner",children:[Object(d.jsx)("button",{className:"close-btn",onClick:function(){return e.setState({trigger:!1})},children:"close"}),"   You win!"]})}):""})}}]),r}(s.a.Component)),v=r(11),g=(r(22),function(){var e=Object(n.useState)(!1),t=Object(v.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){s(!0)}),[]),Object(n.useEffect)((function(){setTimeout((function(){return s(!1)}),1e3)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"alert alert-success ".concat(r?"alert-shown":"alert-hidden"),children:Object(d.jsx)("strong",{children:"Word not found in database"})}),"//why does it only work with button? // button -> changes state to true. Rerenders page and goes through if statement that goes through the onTransitionEnd //no buton -> starts as true. shows alert, but never transitions to false. That is the question! //----- //difference is that we do not use setState with no button"]})}),m=0,x=-1,p=0,w=1,k=(s.a.useState,s.a.useEffect,function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){return Object(l.a)(this,r),t.call(this,e)}return Object(b.a)(r,[{key:"render",value:function(){return x++,Object(d.jsx)("button",{id:x,style:{backgroundColor:"black"},className:"squared",onClick:function(){return console.log("this does nothing")},children:this.props.value})}}]),r}(s.a.Component)),y=function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){return Object(l.a)(this,r),t.call(this,e)}return Object(b.a)(r,[{key:"render",value:function(){var e=this;return Object(d.jsx)("button",{id:this.props.value,className:"square",onClick:function(){return e.props.onClick()},children:this.props.value})}}]),r}(s.a.Component),N=function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).state={triggers:!1,squares:Array(29).fill(null),not_word:!1},n}return Object(b.a)(r,[{key:"handleClick",value:function(){var e=Object(h.a)(o.a.mark((function e(t){var r,n,s,a,i,d,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state.squares.slice(),"Enter"!==t||p/w!==5){e.next=12;break}return w++,n=r.slice(p-5,p),console.log(n),e.next=7,S(["R","E","A","C","T"],n,w);case 7:if(s=e.sent,console.log(n),"You Win!"===s)this.setState({triggers:!0});else if("this is not a word"===s)w--,this.setState({not_word:!0});else for(a=0;a<s.length;a++)"-"===(i=s.charAt(a))&&"rgb(221, 201, 141)"!==document.getElementById(n[a]).style.background&&(document.getElementById(n[a]).style.background="#606060"),"O"===i&&(d=m/56*60-2-(58-10*(w-2)/58*58)+2*a,document.getElementById(n[a]).style.background="#ddc98d",document.getElementById(d).style.background="#ddc98d"),"X"===i&&(c=m/56*60-2-(58-10*(w-2)/58*58)+2*a,document.getElementById(n[a]).style.background="#00d084",document.getElementById(c).style.background="#00d084");e.next=13;break;case 12:"delete"!==t||p%5===0&&p/w!==5?"delete"!==t&&"Enter"!==t&&p/w!==5&&(this.setState({not_word:!1}),r[p]=t,this.setState({squares:r}),this.setState({color:"rgb(0, 191, 255)"}),p++):(this.setState({not_word:!1}),p--,r[p]=null,this.setState({squares:r}));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderSquare",value:function(e){var t=this;return m++,Object(d.jsx)(y,{value:e,onClick:function(){return t.handleClick(e)}})}},{key:"renderSquared",value:function(e){return Object(d.jsx)(k,{value:this.state.squares[e]})}},{key:"winfunction",value:function(){if(!0===this.state.triggers)return Object(d.jsx)(O,{trigger:this.state.triggers})}},{key:"not_wordfunction",value:function(){return!0===this.state.not_word?Object(d.jsx)(g,{}):Object(d.jsx)("div",{className:"boxed"})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[this.winfunction(),this.not_wordfunction(),Object(d.jsxs)("div",{className:"Grids",children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(0),this.renderSquared(1),this.renderSquared(2),this.renderSquared(3),this.renderSquared(4)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(5),this.renderSquared(6),this.renderSquared(7),this.renderSquared(8),this.renderSquared(9)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(10),this.renderSquared(11),this.renderSquared(12),this.renderSquared(13),this.renderSquared(14)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(15),this.renderSquared(16),this.renderSquared(17),this.renderSquared(18),this.renderSquared(19)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(20),this.renderSquared(21),this.renderSquared(22),this.renderSquared(23),this.renderSquared(24)]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquared(25),this.renderSquared(26),this.renderSquared(27),this.renderSquared(28),this.renderSquared(29)]})]}),Object(d.jsxs)("div",{className:"keyboard",children:[Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare("Q"),this.renderSquare("W"),this.renderSquare("E"),this.renderSquare("R"),this.renderSquare("T"),this.renderSquare("Y"),this.renderSquare("U"),this.renderSquare("I"),this.renderSquare("O"),this.renderSquare("P")]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare("A"),this.renderSquare("S"),this.renderSquare("D"),this.renderSquare("F"),this.renderSquare("G"),this.renderSquare("H"),this.renderSquare("J"),this.renderSquare("K"),this.renderSquare("L")]}),Object(d.jsxs)("div",{className:"board-row",children:[this.renderSquare("Enter"),this.renderSquare("Z"),this.renderSquare("X"),this.renderSquare("C"),this.renderSquare("V"),this.renderSquare("B"),this.renderSquare("N"),this.renderSquare("M"),this.renderSquare("delete")]})]})]})}}]),r}(s.a.Component),C=N;r(23);function E(){return Object(d.jsxs)("div",{className:"Worldle",children:[Object(d.jsx)("div",{className:"Header",children:Object(d.jsx)(c,{})}),Object(d.jsx)("div",{className:"Grid",children:Object(d.jsx)(C,{})})]})}var X=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(E,{})})},B=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,25)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root")),B()}],[[24,1,2]]]);
//# sourceMappingURL=main.3742db7b.chunk.js.map
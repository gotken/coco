((function(){function f(a,b){return document.body.appendChild(j(document.createElement(a),b))}function g(c,d){var e,f;e=c[0],f=c[1],b.innerHTML=d,document.title=e+(a&&" - "+a),f&&document.getElementById(f).scrollIntoView(),prettyPrint()}function h(a,b){var c,d,e,f,g,h,j,k,l,m,n;f=e=d=c="",g=/^[^\n\S]*#(?![!{$A-Za-z_]) ?(.*)/;for(l=0,n=(m=b.split("\n")).length;l<n;++l){h=m[l];if(!h){j=!0,d&&(d+="\n");continue}if(k=g.exec(h)){if(d||e&&j)f+=i(a,e,d,c++),e=d="";e+=k[1]+"\n"}else d+=h+"\n";j=!1}if(e||d)f+=i(a,e,d,c);return"<h1>"+a+"</h1>"+f+"<br clear=both>"}function i(a,b,c,d){return c&&(c='<pre class="code prettyprint lang-co"\n >'+c.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</pre>"),"<div id="+d+" class=block><div class=comment\n ><a class=anchor href=#"+a+d+">#"+d+"</a\n >"+e.makeHtml(b)+"</div\n >"+c+"</div>"}function j(a,b){for(var c in b)a[c]=b[c];return a}var a,b,c,d,e;a=document.title,b=document.getElementById("doc")||f("div",{id:"doc"}),c=document.getElementById("nav")||function(){var b,c,d,e,g;b="<div class=pointee>&#x2935;</div>",a&&(b+="<h1>"+a+"</h1>");for(d=0,g=(e=sources).length;d<g;++d)c=e[d],b+=c?"<li><a href=#"+c+">"+c+"</a>":"<p class=spacer>";return b+="<li class=index><a href=#>#</a>",f("ul",{id:"nav",innerHTML:b})}.call(this),d={__proto__:null},e=new Showdown.converter,(this.onhashchange=function(){var e,f,i,j;if(!(e=/^\D+(?=(\d*)$)/.exec(location.hash.slice(1)))){document.title=a,c.className=b.innerHTML="";return}c.className="menu",b.innerHTML="...",f=e[0];if(i=d[f])return g(e,i);j=new XMLHttpRequest,j.open("GET",f!=="Cokefile"?f+".co":f,!0),typeof j.overrideMimeType=="function"&&j.overrideMimeType("text/plain"),j.onreadystatechange=function(){j.readyState===4&&g(e,d[f]=h(f,j.responseText))},j.send(null)})()})).call(this)
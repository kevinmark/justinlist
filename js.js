function s(){document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='http://api.justin.tv/api/' +(jid?('user/favorites/'+jid):'stream/list')+'.json?jsonp=j&'+(jid?'live=true':'language=zh-*')+'&limit=100&offset='+o;}
function j(x){
	var n=x.length;
	for(i=0;i<n;i++){
		o++;
		c=vt?x[i]:x[i].channel;
		a=r(c.status);
		b=r(c.title);
		v.insertAdjacentHTML('beforeEnd','<div class="ff" title="'+a+'\r\r'+b+'"><div class="f0">'+a+'</div><div class="f1">'+b+'</div><img src="'+c.screen_cap_url_medium+'"><div class="f2">'+c.login+'</div><span class="f3">['+o+']</span><span class="f4">'+(vt?'':('觀眾:' +x[i].channel_count))+'</span><div style="float:left;color:red">['+x[i].up_time+']</div></div>');
		v.lastChild.onclick=function(){wo(this.childNodes[3].innerHTML)}
	}
	n==100?s():z();
}
function z(){
	if(!vt)return;
	jid=0;vt=0;o=0;
	v.insertAdjacentHTML('beforeEnd','<hr><div id="re" style="width:100%;text-align:center;" onclick="this.style.display=\'none\';s()">點我讀取中文列表</div>')
}
function r(l){return l?l.replace(/\'/g,'&#39;').replace(/\"/g,'&#34;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):''}
function wo(g){
	q=document.getElementById('a05').checked;
	switch(document.getElementById('sel').selectedIndex)
	{
	case 1:
  		u='http://www.justin.tv/'+g+'/popout';
  		window.open(u,'','top=10,left=10,height=378,width=620')
  		break;
	case 2:
  		u='http://zh-tw.'+(q?'twitch':'justin')+'.tv/chat/embed?channel='+g+'&popout_chat=true';
  		window.open(u,'','top=10,left=10,height=600,width'+(q?'=420':'=400'))
  		break;
	case 3:
  		u='http://www.justin.tv/'+g+'/popout';
  		window.open(u,'','top=10,left=10,height=378,width=620')
  		u='http://zh-tw.' +(q?'twitch':'justin')+'.tv/chat/embed?channel='+g+'&popout_chat=true';
  		window.open(u,'','top=10,left=640,height=600,width'+(q?'=420':'=400'))
  		break;
	default:
  		u='http://zh-tw.justin.tv/'+g;
  		window.open(u)
	}
}
window.onload=function(){var lh=location.href;var avb=lh.indexOf("?");jid=(avb+1)?lh.substring(avb+1,lh.length):'';vt=jid?1:0;document.body.innerHTML='<select id="sel" onchange="document.getElementById(\'a04\').style.display=this.selectedIndex>1?\'\':\'none\'"><option>開啟頻道</option><option>彈出實況</option><option>彈出聊天室</option><option>彈出實況和聊天室</option></select><span id="a04" style="display:none"><input id="a05" type="checkbox">twitch(聊天室)</span>　<a href="http://list1.xlphp.net/">list1.xlphp.net</a>　<a href="javascript:;" onclick="location.href=\'http://list0.xlphp.net?\' + window.prompt(\'輸入你的ID:\')">追隨的頻道</a><div id="v1"></div>';v=document.getElementById('v1');o=0;s();}

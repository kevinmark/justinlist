/*ref: http://apiwiki.justin.tv/mediawiki/index.php/Stream/list */
function difff(start, end, day) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();

    // new for (1) across day (2) time_zone diff hr (3) time_zone diff min
    diff= diff+ (24*day -16)*1000*60*60+ (-11)*1000*60

    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}
function time_interval(x){
                uptime=x[i].up_time.split(" ");  // Wed Nov 13 07:54:53 2013
                diff=difff(uptime[3], now[4], now[2]-uptime[2]);  // (now) Fri Nov 15 2013 14:12:31 GMT+0800 (CST) 1384495951519 00:30
	return diff;
}
function interval_level(diff){
	difflv=diff.split(":");
	if (difflv[0] > 0) {return 4;}
	//else if (isNaN(difflv[0]) {return 4;}
	else if (difflv[1] < 6 ) {return 1;}    // first interval
	else if (difflv[1] < 21 ) {return 2;}   // middle interval
	else if (difflv[1] < 46 ) {return 3;}   // release interval
	else {return 4;}
}
function s(){document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='http://api.justin.tv/api/' +(jid?('user/favorites/'+jid):'stream/list')+'.json?jsonp=j&'+(jid?'live=true':'language=zh-*')+'&limit=100&offset='+o;}
function j(x){
	var n=x.length;
	var diff;
	var uptime;
	var lv;
	for(i=0;i<n;i++){
		o++;
		c=vt?x[i]:x[i].channel;
		a=r(c.status);
		b=r(c.title);

		diff=time_interval(x);
		lv=interval_level(diff);
		if(lv>3) continue;
		v.insertAdjacentHTML('beforeEnd','<div class="ff" title="'+a+'\r\r'+b+'"><div class="f0">'+a+'</div><div class="f1">'+b+'</div><img src="'+c.screen_cap_url_medium+'"><div class="f2">'+c.login+'</div><span class="f3">['+o+']</span><span class="f4">'+(vt?'':('觀眾:' +x[i].channel_count))+'</span><div class='+(lv==1?'"f5"':lv==2?'"f6"':lv==3?'"f7"':'"f3"')+'>['+x[i].up_time+"/ "+diff+"/ "+lv+']</div></div>');
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
var now=Date().split(" ");
window.onload=function(){var lh=location.href;var avb=lh.indexOf("?");jid=(avb+1)?lh.substring(avb+1,lh.length):'';vt=jid?1:0;document.body.innerHTML='<select id="sel" onchange="document.getElementById(\'a04\').style.display=this.selectedIndex>1?\'\':\'none\'"><option>開啟頻道</option><option>彈出實況</option><option>彈出聊天室</option><option>彈出實況和聊天室</option></select><span id="a04" style="display:none"><input id="a05" type="checkbox">twitch(聊天室)</span>　<a href="http://list1.xlphp.net/">list1.xlphp.net</a>　<a href="javascript:;" onclick="location.href=\'http://list0.xlphp.net?\' + window.prompt(\'輸入你的ID:\')">追隨的頻道</a><div id="v1"></div>';v=document.getElementById('v1');o=0;s();}

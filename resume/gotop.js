//codes from http://www.xwbetter.com/gotop/
function goTop(){  
var _btn = document.getElementById("goTop");  
if (document.documentElement && document.documentElement.scrollTop) {  
var _con = document.documentElement;  
} else if (document.body) {  
var _con = document.body;  
}  
window.onscroll = set;  
_btn.style.left = document.documentElement.scrollWidth/2 + 500 + "px";  
_btn.onclick = function (){  
_btn.style.display = "none";  
window.onscroll = null;  
this.timer = setInterval(function() {  
_con.scrollTop -= Math.ceil(_con.scrollTop * 0.3);  
if (_con.scrollTop == 0) clearInterval(_btn.timer, window.onscroll = set);  
},10);  
};  
function set() {  
_btn.style.display = _con.scrollTop ? 'block': "none";  
}  
};  
document.write("<div id=\"goTop\" style=\"font-size:12px; width:20px; height:55px; background:#0950A2; color:#fff; line-height:14px; position:fixed; bottom:30px; display:none; cursor:pointer; text-align:center; padding:5px 0; z-index:1; _position:absolute; _top:expression(eval(document.compatMode && document.compatMode == \'CSS1Compat\') ? documentElement.scrollTop + (documentElement.clientHeight - this.clientHeight) - 30 : document.body.scrollTop + (document.body.clientHeight - this.clientHeight) - 30);\">返<br />回<br />顶<br />部</div>");  
window.onscroll = goTop;  

document.createElement("section");
document.createElement("article");
document.createElement("nav");
function addLoadEvent(func){
    var oldonload= window.onload;
    if(typeof window.onload !='function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(showDiv) ;
addLoadEvent(artShow);
document.write("<div id=\"goTop\" style=\"font-size:12px; width:20px; height:55px; background:#aa363d; color:#fff; line-height:14px; position:fixed; bottom:30px; display:none; cursor:pointer; text-align:center; padding:5px 0; z-index:1; _position:absolute; _top:expression(eval(document.compatMode && document.compatMode == \'CSS1Compat\') ? documentElement.scrollTop + (documentElement.clientHeight - this.clientHeight) - 30 : document.body.scrollTop + (document.body.clientHeight - this.clientHeight) - 30);\">返<br />回<br />顶<br />部</div>");
window.onscroll = goTop;
function showDiv(){
    var workT=document.getElementById("works-hd").getElementsByTagName("li");
    var workC=document.getElementById("works-bd").getElementsByTagName("div");
    for(var a =0; a<workT.length;a++){
        workT[a].index= a;
        workT[a].onmouseover=function(){
            for (var b=0;b<workT.length;b++)workT[b].className="" ;
            this.className="current";
            for(var b=0;b<workC.length;b++)workC[b].style.display="none";
            workC[this.index].style.display="block";
        }
    }
}
function artShow() {
    var oLi = document.getElementById("hd").getElementsByTagName("li");
    var oArt = document.getElementById("bd").getElementsByTagName("article");
    var timer = null;

    for(i = 0; i < oLi.length; i++) {
        oLi[i].index=i;

        oLi[i].onmouseover = function () {
            fadeIn(this.index);
        }
    }

    function fadeIn(index) {
        var alpha = 0.4;
        for (i = 0; i < oLi.length; i++)
            oLi[i].className = "";
        oLi[index].className = "current";

        for (i = 0; i < oArt.length; i++)
            oArt[i].style.opacity = 0;
        oArt[index].style.opacity = 0.4;

        clearInterval(timer);

        timer = setInterval(function () {
            alpha += 5;
            alpha > 100 && (alpha = 100);
            oArt[index].style.opacity = alpha / 100;
            alpha == 100 && clearInterval(timer);
        }, 20);
    }

}
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
}



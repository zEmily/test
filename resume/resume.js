document.createElement("section")   ;
document.createElement("article")    ;
document.createElement("nav")    ;

window.onload=function(){
    var oLi = document.getElementById("hd").getElementsByTagName("li");
    var oArt = document.getElementById("bd").getElementsByTagName("article");
    var timer = null;

    for(var i=0;i<oLi.length;i++) {
        oLi[i].index=i;

        //alert(oArt);
        oLi[i].onmouseover=function(){
            fadeIn(this.index);
            /*
            for(var n=0;n<oLi.length;n++)oLi[n].className="";
            this.className="current";
            for(var n=0;n<oArt.length;n++) {
                oArt[n].style.opacity=0;
            }
            oArt[this.index].style.opacity = 0.123; //for debug
            fadeIn(this.index);
            */
            /*
    	    setTimeout(function() { 
                //alert(cur);
                oLi[cur].style.width = '100%';
                oArt[cur].style.opacity = 0.8;
            }, 300);
            */
        }
    }
    function fadeIn(index) {
        var alpha = 0;
        for (i = 0; i < oLi.length; i++) oLi[i].className = "";
        oLi[index].className = "current";
        for (i = 0; i < oArt.length; i++) oArt[i].style.opacity = 0;

        clearInterval(timer);

        timer = setInterval(function () {
            alpha += 2;
            alpha > 100 && (alpha = 100);
            oArt[index].style.opacity = alpha / 100;
            alpha == 100 && clearInterval(timer);
            console.log(oArt[index].style.opacity);
        }, 20);
        //console.log(oArt[index].style.opacity);
        /*
        for (i = 0; i <= 1; i+=0.2) {
            //setTimeout("setOp("+i+")", i * duration);
            //setTimeout("alert("+oArt[index]+".style.opacity);oArt["+index+"].style.opacity="+"i", i * duration);
            //setTimeout("alert("+oArt[index]+".style.opacity);oArt["+index+"].style.opacity="+"i", i * duration);
            setTimeout(function() { 
                elem[index].style.opacity = i;
                //alert(oArt[index].style.opacity);
                console.log(elem[index].style.opacity);
            }, (i * duration));
        }
        */
    }
}



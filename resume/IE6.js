window.onload= function () {
    var oLi = document.getElementById("hd").getElementsByTagName("li");
    var oArt = document.getElementById("bd").getElementsByTagName("article");
    var workT=document.getElementById("works-hd").getElementsByTagName("li");
    var workC=document.getElementById("works-bd").getElementsByTagName("div");

    for(i = 0; i < oLi.length; i++) {
        oLi[i].index=i;
        oLi[i].onmouseover = function () {
            for (n = 0; n < oLi.length; n++)oLi[n].className = "";
            this.className = "current";
            for (n = 0; n < oArt.length; n++)oArt[n].className = "";
            oArt[this.index].className="current";
        }
    }
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
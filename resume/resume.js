document.createElement("section");
document.createElement("article");
document.createElement("nav");

window.onload = function () {
    var oLi = document.getElementById("hd").getElementsByTagName("li");
    var oArt = document.getElementById("bd").getElementsByTagName("article");
    //var oUp = document.getElementById("up").getElementsByTagName("a");
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
            console.log(oArt[index].style.opacity);
        }, 20);
        //console.log(oArt[index].style.opacity);
    }

}

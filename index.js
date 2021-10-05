var x;
var m =0 ;
function start(){
    x = setInterval(anim,0);
    function anim(){
        console.log(m);
        if(m==1200){
            clearInterval(x);
        }
        else{
            m = m+50;
            document.getElementById("im").style.visibility = "visible";
            var target = document.getElementById("im");
            target.style.marginLeft = m + 'px';
        }
    }
}
function stop(){
    clearInterval(x)
}
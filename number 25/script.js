let up = document.getElementsByTagName('span')[0];
window.onscroll = function(){
    if(this.scrollY >= 50){
        up.style.bottom="5px";
    }
    else{
        up.style.bottom="-20%";
    }
}
up.onclick = function (){
    // window.scrollTo({
    //     top : 0,
    //     behavior : 'smooth'
    // });
    /*
        Defines vertical alignment =>  block
        Defines horizontal alignment => inline
    */
    document.documentElement.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
    // this.scrollTop;
}
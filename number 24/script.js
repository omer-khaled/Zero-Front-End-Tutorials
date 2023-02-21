let tabs = Array.from(document.querySelectorAll('.parent>.content>div>span'));
let tabs_p = Array.from(document.querySelectorAll('.parent>.content>p'));
tabs.forEach((Element , index)=>{
    Element.onclick = function(){
        tabs.forEach(Elem=>{
            Elem.classList.remove('active');
        });
        Element.classList.add('active');
        tabs_p.forEach(ee => {
            ee.classList.remove('active');
        });
        tabs_p[index].classList.add('active');
    }
});
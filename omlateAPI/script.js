let link = 'https://api.currencyfreaks.com/latest?apikey=84702684323744b69486b593d117979e';
let $price_amount = document.querySelector('.amount span').innerHTML;
let omlates = [...document.querySelectorAll('div')];

getAPI(link);

async function getAPI(link){
    let data = await fetch(link).then(res=>{
        res = res.json();
        return res;
    });
    setDate(data['rates']);
}
function setDate (da){
    omlates.forEach(element=>{
        console.log(da[element.className]);
        element.children[0].innerHTML = Number($price_amount * (da[element.className])).toFixed();
    });
}
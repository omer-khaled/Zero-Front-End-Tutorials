document.body.onload = function(){
    document.body.style.cssText = ` 
    background-color: ${createColor()};
    `;
}
function createColor(){
    let hexaArray = '0123456789ABCDEF';
    let rondomColor = '#';
    for(let i=1 ; i<=6 ; i++){
        rondomColor += hexaArray[Math.floor(Math.random() * hexaArray.length)];
    }
    return rondomColor;
}
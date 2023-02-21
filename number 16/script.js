// event is oninput this if use input when write on it
let progress = document.querySelector('form div span');
let counter = document.querySelector('.counter');
let width = 0;
let maxLength = (document.forms[0].txt).getAttribute('maxlength');
counter.innerHTML = maxLength;
let precn = (1 / maxLength) * 100;
document.forms[0].txt.oninput = function (e){
        let textvalue = this.value;
        counter.innerHTML = maxLength - (textvalue.length);
        width = (textvalue.length) * precn;
        progress.style.width = `${width}%`;
        counter.style.color = (counter.innerText == 0) ? 'red' : '#00bcd4';
        progress.style.backgroundColor = (counter.innerText == 0) ? 'red' : '#00bcd4';
};

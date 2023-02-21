// JsonPlacholder (provied fake Api)

// All variables
let user_name = document.forms[0].userName;
let buttomGet = document.forms[0].get;
let fetchedData = document.querySelector('.data');

// submit
document.forms[0].onsubmit = function(e){
    if(user_name.value == ""){
        let p = document.createElement('p');
        let text  = document.createTextNode('pleas Write Github Username.');
        p.classList.add('non-exist');
        p.appendChild(text);
        fetchedData.innerHTML = "";
        fetchedData.appendChild(p);
    }
    else{
        getRepos(`https://api.github.com/users/${user_name.value}/repos`).then((Data)=>{
            showRepos(user_name.value,Data);
        });
    }
    e.preventDefault();
}

// get APi
async function getRepos(link){
    let api = await fetch(link);
    return await api.json();
}   

// show Repos
function showRepos(user,Data){
    fetchedData.innerHTML = "";
    Data = Array.from(Data);
    Data.forEach((elem,index)=>{
        // main_div
        let element = document.createElement('div');
        element.classList.add('element');

        // Name of repo (p tag)
        let p = document.createElement('p');
        let text = document.createTextNode(elem.name);
        p.appendChild(text);

        // buttons
        let buttons = document.createElement('div');
        buttons.classList.add('buttons');
        // button1
        let button1 = document.createElement('button');
        let a1 = document.createElement('a');
        let a1_text = document.createTextNode(`Stars ${elem.stargazers_count}`);
        a1.appendChild(a1_text);
        // a1.href = elem.;
        button1.appendChild(a1);
        // button2
        let button2 = document.createElement('button');
        let a2 = document.createElement('a');
        let a2_text = document.createTextNode('Visit');
        a2.appendChild(a2_text);
        a2.href = `https://github.com/${user}/${elem.name}`;
        a2.setAttribute('target','_blank');
        button2.appendChild(a2);
        // add buttons to div buttons
        buttons.appendChild(button1);
        buttons.appendChild(button2);
        // add to data element
        element.appendChild(p);
        element.appendChild(buttons);
        // add to data featchData
        fetchedData.appendChild(element);
    })
}


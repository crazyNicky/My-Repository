//Crazy Nicky
//import data from "./dest/input.json" assert {type: json};
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

     

let first = null;
let second = null;
let result = null;
function sum(first, second){
        return first + second;
}

//var color = "#0B9880";
document.querySelector('#okBtn').addEventListener('click', function() {document.color = document.querySelector('#color')});

let sendBtn = document.querySelector('#sendBtn');
sendBtn.addEventListener('click', sendRecord);
function sendRecord(){
    let anrede = document.querySelector('#anrede');
    let firstname = document.querySelector('#firstname');
    let secondname = document.querySelector('#secondname');
    let email = document.querySelector('#email');
    let nachricht = document.querySelector('#nachricht');
    let newRecord = new {anrede,firstname,secondname,email,nachricht};
    //data.push(newRecord);
    fs.writeFileSync('./dest/input.json', JSON.stringify(newRecord));
}


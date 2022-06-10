const charVal = document.getElementById('textarea');
let totalCount =document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar=0;


const updateCounter = () => {
    userChar = charVal.value.length;
    totalCount .innerHTML = userChar;
    remainingCount.innerText = 150 -userChar;
};

charVal.addEventListener('keyup', ()=>updateCounter());



// copy The Textcode 

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0,99999); // For Mobile 
    navigator.clipboard.writeText(charVal.value); // important  code
};
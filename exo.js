// ------------- EXO 1 ---------------
let integer = document.getElementById('is-integer')

if (Number.isInteger(integer.innerHTML)) {
    integer.innerHTML += "==> est un nombre entier";
}
else {
    integer.innerHTML += "==> n'est pas un nombre entier"
}

// ----------- EXO 2 --------------

let notNumber = document.getElementById('is-nan')

if (Number.isNaN(notNumber.innerHTML)) {
    notNumber.innerHTML += "==> est NaN";
}
else {
    notNumber.innerHTML += "==> est pas NaN"
}

// ------------- EXO 3 --------------

let float = document.getElementById('parse-float').innerHTML;

document.getElementById('parse-float').innerHTML = parseFloat(float) *22;


// ---------------EXO 4----------

let int = document.getElementById('parse-int').innerHTML;

document.getElementById('parse-int').innerHTML = parseInt(int) / 22 + 'px';

// ------------------ EXO 5 ------------------

let fix = document.getElementById('to-fixed');

fix.innerHTML = parseFloat(fix.innerHTML).toFixed(2)





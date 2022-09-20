let url_string = window.location.href;
let url = new URL(url_string);

let nickname = url.searchParams.get("nick");
let hours = url.searchParams.get("hours");
let level = url.searchParams.get("level");
let raids = url.searchParams.get("raids");
let death = url.searchParams.get("death");
let pmc = url.searchParams.get("pmc");
let blik = url.searchParams.get("anim");

function showMessage(text, selector) {
    arr = text.split('');
    let arrayLength = arr.length;
    let x = '';
    for (let i = 0; i < arrayLength; i++) {
        let symbol = arr[i];

        let mega = '';
        if (arrayLength >= 10) {
            mega = ' badge__more-than-ten';
        }

        let isUpperCase = symbol.toUpperCase() == symbol; // true - верхний регистр, false - нижний
        if (arr[i] === '_' || arr[i] === ' ') {
            x += '<img class="badge__cont-right-head-slash' + mega + '" src="assets/img/sym/slash.png" alt="">';
        } else if (arr[i] === '-') {
            x += '<img class="badge__cont-right-head-tir' + mega + '" src="assets/img/sym/tir.png" alt="">';
        } else if (!!isUpperCase) {
            x += '<img class="badge__cont-right-head-uppercase badge__cont-right-head-' + arr[i] + mega + '" src="assets/img/sym/' + arr[i] + 'b.png" alt="">';
        } else {
            x += '<img class="badge__cont-right-head-normal badge__cont-right-head-' + arr[i] + mega + '" src="assets/img/sym/' + arr[i] + '.png" alt="">';
        }
        // console.log(arr[i]);
    }
    document.getElementById(selector).innerHTML = x;
}

function showPMC(text, selector) {
    console.log(text);
    let x = '';
    if (text === 'USEK') {
        x = '<img class="badge__cont-img-bear" src="assets/img/USEK.png" alt="">';
    } else {
        x = '<img class="badge__cont-img-bear" src="assets/img/BEAR.png" alt="">';
    }
    document.getElementById(selector).innerHTML = x;
}

if (blik === 'blik') {
    document.querySelector('.badge').classList.add('badge__tilt');
}

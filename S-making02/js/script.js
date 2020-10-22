let burger = document.getElementsByClassName('burger');
let menu = document.getElementsByClassName('header__menu');
let body = document.getElementById('body');

burger[0].addEventListener('click', () => {
    burger[0].classList.toggle('active');
    menu[0].classList.toggle('active');
    body.classList.toggle('active');
})


// inputs 

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let mail = document.getElementById('mail');

// Order

let order = document.getElementById('order');
let page = document.getElementById('third__page');

order.onclick = () => {
    page.style.height = '400px';
    page.innerHTML = `<div class="newText__order">Thanks. Your order is being processed :)</div>`;

    console.log(`Your name is ${name.value}`);
    console.log(`Your phone is ${phone.value}`);
    console.log(`Your mail is ${mail.value}`);
}




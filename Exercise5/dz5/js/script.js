let menu    = document.getElementsByClassName('menu'),
menuItems   = menu[0].getElementsByClassName('menu-item'),
title       = document.querySelector('.title'),
columns     = document.querySelectorAll('.column'),
adv         = document.querySelector('.adv'),
blockPrompt = document.getElementById('prompt');

let text = menuItems[2].textContent;
menuItems[2].textContent = menuItems[1].textContent;
menuItems[1].textContent = text;

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(adv);
let answer = prompt('Как вы отноститесь к технике apple.','');
blockPrompt.textContent = answer;

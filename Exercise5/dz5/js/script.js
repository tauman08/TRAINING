let menu    = document.getElementsByClassName('menu')[0],
menuItems   = menu[0].getElementsByClassName('menu-item'),
title       = document.querySelector('.title'),
columns     = document.querySelectorAll('.column'),
adv         = document.querySelector('.adv'),
blockPrompt = document.getElementById('prompt'),
menuItemLi = document.createElement("li");


//let text = menuItems[2].textContent;
//menuItems[2].textContent = menuItems[1].textContent;
//menuItems[1].textContent = text;
menu.insertBefore(menuItems[2], menuItems[1]); 
menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   

document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';
//columns[1].removeChild(adv);
adv.remove();
let answer = prompt('Как вы отноститесь к технике apple.','');
blockPrompt.textContent = answer;

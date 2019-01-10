'use strict';

let btnStart    = document.getElementById('start'),
//elValue         = document.querySelectorAll('.result-table>div[class$=-"value"]'),
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
elInput         = document.querySelectorAll('.expenses-item');


let mButtons = document.getElementsByTagName('button');
let expensesBtn = mButtons[0],
optionalExpensesBtn = mButtons[1],
countBtn = mButtons[2];

let elOpt       = document.querySelectorAll('.optionalexpenses-item'),
elChooseIncom   = document.querySelector('.choose-income'),
elSavings       = document.querySelector('#savings'),
elSum           = document.querySelector('#sum'),
elPercent       = document.querySelector('#percent'),
elYearValue     = document.querySelector('.year-value'),
elMonthValue    = document.querySelector('.month-value'),
elDayValue     = document.querySelector('.day-value');
//let elAll = document.querySelectorAll('.choose-income, #savings, #sum, #percent, .year-value, month-value, .day-value');


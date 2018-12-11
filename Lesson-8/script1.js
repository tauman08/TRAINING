var money;
var time;
money = prompt('Ваш бюджет на месяц');
time  = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {};
appData.budget 				= money;
appData.timeData 			= time;
appDate.expenses 			= {};
appDate.optionalExpenses 	= {};
appDate.incom 				= [];
appData.savings 			= false;

for (i=0,i<2,i++){
    appData.expenses[prompt(“Введите обязательную статью расходов в этом месяце”)]=prompt(“Введите обязательную статью расходов в этом месяце”);
}
alert(appData.budget/30);




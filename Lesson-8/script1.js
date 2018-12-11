var money;
var time;
money = prompt('Ваш бюджет на месяц');
time  = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {};
appData.budget 				= money;
appData.timeData 			= time;
appData.expenses 			= {};
appData.optionalExpenses 	= {};
appData.incom 				= [];
appData.savings 			= false;

for (i=0;i<2;i++) {
    appData.expenses[prompt('Введите обязательную статью расходов в этом месяце')]=+prompt('Во сколько обойдется?','0');
}
alert((appData.budget/30*100^0)/100);




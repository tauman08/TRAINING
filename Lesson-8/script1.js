var money;
var time;
money = prompt('Ваш бюджет на месяц');
time  = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {};
appData.budget 				= money;
appData.timeData 			= time;
appDate.expenses 			= {prompt(“Введите обязательную статью расходов в этом месяце”):+prompt(“Во сколько обойдется”),
                            prompt(“Введите обязательную статью расходов в этом месяце”):+prompt(“Во сколько обойдется”)};
appDate.optionalExpenses 	= {};
appDate.incom 				= [];
appData.savings 			= false;
var sumMoney;
for (var key in appData.expenses) {
    sumMoney + = appData.expenses[key];
}
alert(sumMoney/30);




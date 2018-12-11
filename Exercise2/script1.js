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

for (let i=0;i<2;i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?','');
    if (typeof(a)!=null&&typeof(b)!=null&&a!=''&&b!=''&&a.length<50){
        console.log('done')
        appData.expenses[a]=b;
    }else{
        i--;
    }
};
appData.moneyPerday=appData.budget/30*100^0)/100;
alert('Ежедневный бюджет: '+appData.moneyPerday);




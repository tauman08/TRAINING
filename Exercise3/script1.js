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
    let a = +prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?','');
    if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a !='' && b !='' && a.length < 50){
        console.log('done')
        appData.expenses[a]=b;
    }else{
        i--;
    }
};
/*let i=0;
while (i<2) {
    let a = +prompt('Введите обязательную статью расходов в этом месяце'),
    b = prompt('Во сколько обойдется?','');
if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a !='' && b !='' && a.length < 50){
        console.log('done')
        appData.expenses[a]=b;
    }else{
        i--;
    }
    i++;
}*/
/*let i=0;
do {
    let a = +prompt('Введите обязательную статью расходов в этом месяце'),
        b = prompt('Во сколько обойдется?','');
    if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a !='' && b !='' && a.length < 50){
        console.log('done')
        appData.expenses[a]=b;
    }else{
        i--;
    }
    i++;
}while(i<2)*/
appData.moneyPerday=appData.budget/30;
alert('Ежедневный бюджет: '+appData.moneyPerday);
 if (appData.moneyPerday<100){
    console.log('минимальный уровень достатка');
 }else if (appData.moneyPerday<2000){
    console.log('средний уровень достатка');
 }else if (appData.moneyPerday>2000){
    console.log('высокий уровень достатка');
 }else{
     console.log('Произошла ошибка.');
 }



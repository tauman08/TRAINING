

var money, time;

function start(){
   do {
    money = +prompt('Ваш бюджет на месяц','');
   } while(isNaN(money) || money=='' || money==null);

   time  = prompt('Введите дату в формате YYYY-MM-DD','');
}


start();

var appData = {};
appData.budget 				= money;
appData.timeData 			= time;
appData.expenses 			= {};
appData.optionalExpenses 	= {};
appData.incom 				= [];
appData.savings 			= false;
appdate.chooseExpenses: function(){
    for (var i=0;i<2;i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце'),
            b = +prompt('Во сколько обойдется?','');

        if (typeof(a)==='string' && typeof(a)!=null && typeof(b)!=null && a !='' && b !='' && a.length < 50){
            console.log('done')
            appData.expenses[a]=b;
        }else{
            i--;
        }
    };
},
appData.checkSavings: function(){
    if (appData.savings==true){
        let save = +prompt('Какая сумма накоплений?'),
        percent = +prompt('Под какой процент');
        appDate.monthIncom = save*percent/100/12;
        alert('Доход в месяц с вашего депозита: '+appData.monthIncom);
    }
},
appData.detectDayBudget: function(){
    appData.moneyPerday=(appData.budget/30).toFixed();
    alert('Ежедневный бюджет: '+appData.moneyPerday);
},
appdate.detectLevel: function(){
    if (appData.moneyPerday<100){
        console.log('минимальный уровень достатка');
     }else if (appData.moneyPerday<2000){
        console.log('средний уровень достатка');
     }else if (appData.moneyPerday>2000){
        console.log('высокий уровень достатка');
     }else{
        console.log('Произошла ошибка.');
     }
},
appData.chooseOptExpenses: function(){
    let i=1;  
    do{
        
        appData.optionalExpenses[i]=prompt('Статья необязательных расходов'); 
    i++;
    }while(i<4) 
}

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();




var money, time;

function start(){
   do {
    money = +prompt('Ваш бюджет на месяц','');
   } while(isNaN(money) || money=='' || money==null);

   time  = prompt('Введите дату в формате YYYY-MM-DD','');
}


start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    incom: [],
    savings: false,
    chooseExpenses: function () {
        for (var i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце'),
                b = +prompt('Во сколько обойдется?', '');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
                console.log('done')
                appData.expenses[a] = b;
            } else {
                i--;
            }
        };
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какая сумма накоплений?'),
                percent = +prompt('Под какой процент');
            appDate.monthIncom = save * percent / 100 / 12;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncom);
        }
    },
    detectDayBudget: function () {
        appData.moneyPerday = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerday);
    },
    detectLevel: function () {
        if (appData.moneyPerday < 100) {
            console.log('минимальный уровень достатка');
        } else if (appData.moneyPerday < 2000) {
            console.log('средний уровень достатка');
        } else if (appData.moneyPerday > 2000) {
            console.log('высокий уровень достатка');
        } else {
            console.log('Произошла ошибка.');
        }
    },
    chooseOptExpenses: function () {
        let i = 1;
        do {

            appData.optionalExpenses[i] = prompt('Статья необязательных расходов');
            i++;
        } while (i < 4);
    },
    chooseIncome: function () {
        let allOk = true; 
        do{
        allOk = true;
        var items = prompt('Что принесет дополнительный доход?(введите через запятую)','');
        if (typeof(items) == null) {
            allOk = false;
            alert('необходимо указать  дополнительный доход');
        }
        else if (typeof(items) !== 'string'){
             allOk = false;
             alert('Можно указывать только строку');
        }
        else if ((typeof(items) == 'string')&&(items.trim() == '')){
            allOk = false;
            alert('Нельзя указывать пустую строку');  
        };
        }while(allOk==false);
        appData.incom = items.split(', ');
        appData.incom.push(prompt('Может что-нибудь еще?',''));
        appData.incom.sort();

        let strAlert = 'Способы доп. заработка: ';
        appData.incom.forEach(function(item){
            strAlert=strAlert+'\r\n'+item+', ';
        });
        
        alert(strAlert);
        strAlert = 'Наша программа включает в себя данные: ';
        for (const key in appData) {
            if (appData.hasOwnProperty(key)) {
                strAlert = strAlert+'\r\n'+key+': '+appData[key]+', ';              
            }   
        }
       /* for (const iterator of appData) {
            strAlert = strAlert+'\r\n'+iterator+', '; 
        }*/
        strAlert = strAlert.slice(0,strAlert.length-3);
        alert(strAlert);
    }
};
/*
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
*/

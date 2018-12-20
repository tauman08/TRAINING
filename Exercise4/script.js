

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
        } while (i < 4)
    }
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход?(введите через запятую)','');
        appData.incom = items.split(', ');
        appData.incom.push(prompt('Может что-нибудь еще?',''));
        appData.incom.sort();
    }
};
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();


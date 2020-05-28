let money, time;
function start() {
    time=prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money=="" || money==null) {
        money=+prompt('Ваш бюджет в месяц?', '');
    };
};
start();
let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i++) {
            let expensesName=prompt('Введите обязательную статью расходов в этом месяце', ''),
                expensesCost=prompt('Во сколько обойдется?', '');
            if ( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
                && expensesCost != '' && expensesName != '' && expensesName.length < 50){
                appData.expenses[expensesName]=expensesCost;
            } else {
                i--;
            }
        }    
    },
    detectDayBudget: function() {
        appData.moneyPerDay=(appData.budget/30).toFixed();
    },
    detectLevel: function() {
        alert('Ваш бюджет на ' + (appData.timeData) + ' : ' + appData.moneyPerDay);
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Что-то пошло не так');
        } 
    },
    chooseOptionalExpenses: function() {
        for (let i=0; i<3; i++) {
            let optionalExpensesName= prompt ('Введите необязательную статью расходов в этом месяце', '');
                if ( (typeof(optionalExpensesName)) === 'string' && (typeof(optionalExpensesName)) != null 
                && optionalExpensesName != '' && optionalExpensesName.length < 50) {
                    appData.optionalExpenses[i]=optionalExpensesName;
                } else {
                    i--;
                }
        }
    },
    checkSavings: function() {
        if (appData.savings ==true) {
            let save = +prompt("Какова сумма накоплений?", "");
            let persent = +prompt("Под какой процент?", "");
            appData.monthIncome = save / 12 / 100 * persent;
            alert("Дохот в месяц с вашего дипозита :", + appData.monthIncome);
        }
    },
    chooseIcome: function() {
        for (let i=0; i<1; i++){
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            if ((typeof(items)) === 'string' && items != '' && items != null ) {
                appData.income= items.split(', ')
                appData.income.push(prompt('Может что-то еще?', ''))
                appData.income.sort();
            } else {
                i--;
            }

        }
        appData.income.forEach(function(item, i){
            let kount=i;
            alert(++kount + '. Способ доп. зароботка: ' + item);
        });
        for (key in appData) {
            alert('Наша программа включает в себя данные: ' + key + ' : ' + appData[key]);
        }
        
    },
}




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
    savings: true
};
function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let expensesName=prompt('Введите обязательную статью расходов в этом месяце', ''),
            expensesCost=prompt('Во сколько обойдется?', '');
        if ( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
            && expensesCost != '' && expensesName != '' && expensesName.length < 50){
            appData.expenses[expensesName]=expensesCost;
        } else {
            i--;
        };
    }; 
};
chooseExpenses();
function detectDayBudget () {
    appData.moneyPerDay=(appData.budget/30).toFixed();
};
detectDayBudget();
function detectLevel () {
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
}
detectLevel ();
function chooseOptionalExpenses () {
    for (let i=0; i<3; i++) {
        let optionalExpensesName= prompt ('Введите необязательную статью расходов в этом месяце', '');
            if ( (typeof(optionalExpensesName)) === 'string' && (typeof(optionalExpensesName)) != null 
            && optionalExpensesName != '' && optionalExpensesName.length < 50) {
                appData.optionalExpenses[i]=optionalExpensesName;
            } else {
                i--;
            }
    }
}
detectLevel();
function checkSavings() {
    if (appData.savings ==true) {
        let save = +prompt("Какова сумма накоплений?", "");
        let persent = +prompt("Под какой процент?", "");
        appData.monthIncome = save / 12 / 100 * persent;
        alert("Дохот в месяц с вашего дипозита :", + appData.monthIncome);
    };
};
checkSavings();




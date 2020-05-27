let money=+prompt('Ваш бюджет в месяц?', '');
let time=prompt('Введите дату в формате YYYY-MM-DD', '');
let appData={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
for (let i=0; i<2; i++) {
    let expensesName=prompt('Введите обязательную статью расходов в этом месяце', ''),
        expensesCost=prompt('Во сколько обойдется?', '');
    if ( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
        && expensesCost != '' && expensesName != '' && expensesName.length < 50){
        appData.expenses[expensesName]=expensesCost;
    }
};

/*i=0;
while (i<2) {
    i++;
    let expensesName=prompt('Введите обязательную статью расходов в этом месяце', ''),
        expensesCost=prompt('Во сколько обойдется?', '');
    if ( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
        && expensesCost != '' && expensesName != '' && expensesName.length < 50){
        appData.expenses[expensesName]=expensesCost;
}
*/
/*do {
    i++;
    let expensesName=prompt('Введите обязательную статью расходов в этом месяце', ''),
        expensesCost=prompt('Во сколько обойдется?', '');
    if ( (typeof(expensesName)) === 'string' && (typeof(expensesName)) != null && (typeof(expensesCost)) != null 
        && expensesCost != '' && expensesName != '' && expensesName.length < 50){
        appData.expenses[expensesName]=expensesCost;  
} while (i<2);
*/

appData.moneyPerDay=appData.budget/30;
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





let money=prompt('Ваш бюджет в месяц?', '');
let time=prompt('Введите дату в формате YYYY-MM-DD', '');
let appData={
    money: '',
    timeData: '',
    expenses: {},
    optionalExpenses: 0,
    income: 0,
    savings: false
};
appData.money=money;
appData.timeData=time;
appData.expenses[prompt('Введите обязательную статью расходов в этом месяце', '')]=prompt('Во сколько обойдется?', '');
alert('Ваш бюджет на', (appData.timeData) , ' : ', (+appData.money/30));



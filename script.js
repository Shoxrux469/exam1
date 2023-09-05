// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = [];

let unSuccessful = [];

let taxes = Number;

let taxesMax = {};

let taxesMin = {};

// Реальные данные 2021*

let bank = [
  {
    name: "Apple",

    budget: 1000000,

    tax: 28,

    expensesPerYear: [
      { title: "Salaries", total: 125000 },

      { title: "Utilites", total: 18000 },

      { title: "Rent", total: 258000 },
    ],
  },

  {
    name: "Microsoft",

    budget: 988000,

    tax: 21,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 148000,
      },

      {
        title: "Utilites",

        total: 124000,
      },

      {
        title: "Rent",

        total: 314000,
      },
    ],
  },

  {
    name: "HP",

    budget: 609000,

    tax: 14,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 414000,
      },

      {
        title: "Utilites",

        total: 19000,
      },

      {
        title: "Rent",

        total: 114400,
      },
    ],
  },

  {
    name: "Xiomi",

    budget: 889500,

    tax: 17,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 318000,
      },

      {
        title: "Utilites",

        total: 14000,
      },

      {
        title: "Rent",

        total: 169000,
      },
    ],
  },

  {
    name: "Samsung",

    budget: 889500,

    tax: 12,

    expensesPerYear: [
      {
        title: "Salaries",

        total: 650400,
      },

      {
        title: "Utilites",

        total: 29000,
      },

      {
        title: "Rent",

        total: 212000,
      },
    ],
  },
];

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*

// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*

// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*

// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*

// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*

// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
  function arr(x) {
    taxes = 0;
    for (i = 0; i < x.length; i++) {
      taxes += x[i];
    }
    // console.log(taxes); // 4
  }
  let tax = [];
  let minMax = [];
  bank.forEach((item) => {
    let a = item.expensesPerYear.reduce((a, b) => a + b.total, 0);
    item.expensesPerMonth = a / 12;

    let budgetMonth = item.budget / 12;
    item.procent = (item.expensesPerMonth * 100) / budgetMonth;
    // console.log(item.procent + '%'); // 2

    let sum = budgetMonth - budgetMonth / item.tax;
    if (sum > 0) {
      successful.push({ sum, ...item });
    } else {
      unSuccessful.push({ sum, ...item });
    }

    let payment = budgetMonth * item.tax / 100 
    tax.push(payment);
    minMax.push({ payment, ...item });

    let totalMoney = item.budget - a - (item.budget * item.tax) / 100;
    bank.push({ totalMoney, ...item });
  });
//   console.log(bank); // 1, 6
//   console.log(successful);// 3
  taxesMax = minMax.reduce((a, b) => (a.payment > b.payment ? a : b));
  taxesMin = minMax.reduce((a, b) => (a.payment < b.payment ? a : b));
//   console.log(taxesMax, taxesMin); // 5
  arr(tax);
//   console.log(tax);
};

setup();

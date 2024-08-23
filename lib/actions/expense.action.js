import {
  calculateTotalExpense,
  formattedDate,
  getMonth,
  readData,
  TOTAL_BUDGET,
  writeToCSVFile,
  writeToFile,
} from "../utils.js";

function addExpense(option) {
  const data = readData();

  if (option.amount < 0) {
    console.error("Can't set negative expense amount");
    return;
  }

  const newExpense = {
    id: data.length > 0 ? Math.max(...data.map((el) => el.id)) + 1 : 1,
    description: option.description,
    amount: parseFloat(option.amount),
    category: option.category,
    date: formattedDate(),
  };

  data.push(newExpense);
  const recentMonthExpenses = data.filter(
    (expense) => getMonth() === getMonth(expense.date)
  );

  const totalExpense = calculateTotalExpense(recentMonthExpenses);

  if (totalExpense >= TOTAL_BUDGET) {
    console.error("You exceeds the budget.");
  } else {
    writeToFile(data);
    console.log({
      ...newExpense,
      totalExpense,
      budgetRemaining: TOTAL_BUDGET - totalExpense,
    });
  }
}

function listExpenses() {
  const data = readData();

  if (!data.length) console.log("No expense found");
  else {
    console.log(
      " ID    Date            Description        Categery       Amount"
    );
    data.forEach((el) => {
      console.log(
        ` ${el.id}   ${el.date}        ${el.description}        ${el.category}               ${el.amount}`
      );
    });
  }
}

function summary(option) {
  const data = readData();
  if (option.month) {
    const monthlyExpense = data.filter(
      (expense) => getMonth(expense.date) === parseFloat(option.month)
    );
    const totalMonthlyExpense = calculateTotalExpense(monthlyExpense);
    console.log(`Total expenses: $${totalMonthlyExpense}`);

    return;
  }

  if (option.category) {
    const expenseByCategory = data.filter(
      (expense) => expense.category === option.category
    );
    const totalExpensesByCategory = calculateTotalExpense(expenseByCategory);
    console.log(`Total expenses: $${totalExpensesByCategory}`);
    return;
  }

  if (!data.length) console.log("No expense found");

  const totalExpense = calculateTotalExpense(data);
  console.log(`Total expenses: $${totalExpense}`);
}

function deleteExpense(option) {
  const data = readData();
  const expenseIndex = data.findIndex(
    (exp) => exp.id === parseFloat(option.id)
  );

  if (expenseIndex < 0) {
    console.error("Invalid expense id");
    return;
  }
  data.splice(expenseIndex, 1);
  writeToFile(data);

  console.log("Expense deleted successfully");
}

function updateExpense(option) {
  const data = readData();
  const expenseToUpdate = data.find(
    (expense) => expense.id === parseFloat(option.id)
  );

  if (!expenseToUpdate) {
    console.error("Invalid expense ID");
    return;
  }

  if (option.description) {
    expenseToUpdate.description = option.description;
  }

  if (option.category) {
    expenseToUpdate.category = option.category;
  }

  if (option.category) {
    expenseToUpdate.category = option.category;
  }

  if (option.amount > 0 && !isNaN(option.amount)) {
    expenseToUpdate.amount = parseFloat(option.amount);
  }
  console.log(data);
  writeToFile(data);
}

function writeCsv() {
  const data = readData();
  const headers = Object.keys(data[0]);
  const rows = [headers.join(",")];
  data.forEach((row) => {
    const values = headers.map((header) => JSON.stringify(row[header] || ""));
    rows.push(values.join(","));
  });
  writeToCSVFile(rows.join("\r\n"));
}

function exportToCSV() {
  const data = readData();
  if (data.length === 0) {
    console.log("No data available to export.");
    return;
  }

  writeCsv(data);
}
export {
  addExpense,
  listExpenses,
  deleteExpense,
  summary,
  exportToCSV,
  updateExpense,
};

import fs from "fs";

const dataPath = "data.json";
const csvPath = "data.csv";

const TOTAL_BUDGET = 10_000;

function readData() {
  if (!fs.existsSync(dataPath)) {
    return [];
  }

  return JSON.parse(fs.readFileSync(dataPath).toString());
}

function writeToFile(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data));
}

function writeToCSVFile(data) {
  fs.writeFileSync(csvPath, data);
}

function formattedDate() {
  return new Date().toISOString().split("T")[0];
}

function calculateTotalExpense(data) {
  return data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
}

function getMonth(date = new Date()) {
  return new Date(date).getMonth() + 1;
}

export {
  writeToFile,
  readData,
  formattedDate,
  TOTAL_BUDGET,
  calculateTotalExpense,
  getMonth,
  writeToCSVFile,
};

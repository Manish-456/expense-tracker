import { program } from "commander";
import {
  addExpense,
  deleteExpense,
  exportToCSV,
  listExpenses,
  summary,
  updateExpense,
} from "./lib/actions/expense.action.js";

program
  .command("add")
  .description("Add a new expense")
  .requiredOption("--description <desc>", "Description of an expense")
  .requiredOption("--category <cat>", "Category of an expense")
  .requiredOption("--amount <amt>", "Amount of an expense")
  .action(addExpense);

program
  .command("list")
  .description("List all the expenses")
  .action(listExpenses);

program
  .command("summary")
  .description("Summary of expenses")
  .option("--month <month>")
  .option("--category <cat>")
  .action(summary);
program
  .command("delete")
  .description("Delete expense")
  .requiredOption("--id <id>", "Expense ID to delete expense")
  .action(deleteExpense);

program
  .command("export-to-csv")
  .description("Export JSON data to CSV")
  .action(exportToCSV);

program
  .command("update")
  .description("Update the expense")
  .option("--id <id>", "Id of the expense")
  .option("--description <description>", "Description to update expense")
  .option("--category <cat>", "Category to update expense")
  .option("--amount <amount>", "Amount to update expense")
  .action(updateExpense);

program.parse(process.argv);

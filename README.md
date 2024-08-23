# CLI Expense Tracker

Solution for expense tracker from [roadmap.sh](https://roadmap.sh/projects/expense-tracker)

A command-line interface (CLI) application for managing expenses. This project allows you to add, list, update, delete, and summarize expenses and export expense to csv format.

## Features

- Add new expenses
- List all expenses
- Get a summary of total expenses
- Get a summary of expenses by category
- Get a summary of expenses for a specific month
- Delete an expense
- Update an existing expense
- Export expense to CSV file

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Manish-456/expense-tracker.git
    cd expense-tracker
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

## Usage

### Adding a New Expense

```bash
node index.js add --description "<description>" --category "<category>" --amount <amount>
```
### Listing All Expenses

```bash
node index.js list
```
### Getting a Summary of All Expenses

```bash
node index.js summary
```
### Getting a Summary of Expenses by Category

```bash
node index.js summary --category "<category>"
```

### Getting a Summary of Expenses for a Specific Month

```bash 
node index.js summary --month <month>
```

### Deleting an Expense

```bash
node index.js delete --id <id>
```

### Updating an Expense

```bash
node index.js update --id <id> [--description "<description>"] [--category "<category>"] [--amount <amount>]
```

### Exporting Data to CSV

```bash
node index.js export-to-csv
```


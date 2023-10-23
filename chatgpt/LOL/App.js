import React, { useState } from 'react';
import './App.css';


function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
  });
  const [balance, setBalance] = useState(0);

  const handleDescriptionChange = (e) => {
    setNewExpense({ ...newExpense, description: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };

  const handleDepositChange = (e) => {
    setBalance(parseFloat(e.target.value));
  };

  const addExpense = () => {
    if (newExpense.description && newExpense.amount) {
      setExpenses([...expenses, newExpense]);
      setBalance(balance + parseFloat(newExpense.amount));
      setNewExpense({ description: '', amount: '' });
    }
  };

  const depositMoney = () => {
    if (balance > 0) {
      setBalance(balance);
      setBalance(0);
    }
  };

  const calculateTotal = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>

      <div>
      {/* <div class="my-4">
      <h2 class="text-xs font-semibold text-gray-600">YOUR BALANCE</h2>
      <span class="text-xl font-semibold">{{balance | money}}</span>
      </div> */}
        <h2 id='bal1'>Balance: </h2>
        <h2 id='bal2'>${balance}</h2>
      </div>

      <div>
        <h2 className='exp1'>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.description}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Total Expenses: ${calculateTotal()}</h2>
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={handleDescriptionChange}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleAmountChange}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>

      <div>
        <input
            type="number"
            placeholder="Deposit Amount"
            value={balance}
            onChange={handleDepositChange}
          />
          <button onClick={depositMoney}>Deposit</button>
      </div>

      
      
      
    </div>
  );
}

export default ExpenseTracker;

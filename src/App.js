import React from 'react'
import Header from './component/Header.js';
import Balance from './component/Balance.js';
import IncomeExpenses from './component/IncomeExpenses.js';
import TransactionList from './component/TransactionList.js';
import AddTransaction from './component/AddTransaction.js';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  )
}

export default App;
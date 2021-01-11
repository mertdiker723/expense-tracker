import React from 'react'
import { Header } from './component/Header.js';
import { Balance } from './component/Balance.js';
import { IncomeExpenses } from './component/IncomeExpenses.js';
import { TransactionList } from './component/TransactionList.js';
import { AddTransaction } from './component/AddTransaction.js';

import { GlobalProvider } from './context/GlobalState.js'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App;
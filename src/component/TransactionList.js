import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';
import { Transaction } from './Transaction.js'
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))
                }
            </ul>
        </>
    )
}

import React from 'react'

export const Transaction = ({ transaction, deleteValue }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteValue(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}

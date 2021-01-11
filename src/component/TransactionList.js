import React from 'react';
import { connect } from 'react-redux';
import { Transaction } from './Transaction.js'
import { deleteExpense } from '../action/tracker-action.js'
const TransactionList = ({ transactions, onDeleteIncome }) => {

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} deleteValue={(id) => onDeleteIncome(id)} transaction={transaction} />
                    ))
                }
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions: state.tracker
    }
}

const mapDispatchToProps = {
    onDeleteIncome: deleteExpense
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);
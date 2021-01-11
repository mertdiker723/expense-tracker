import React from 'react'
import { connect } from 'react-redux';

const Balance = ({ transactions }) => {

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // eslint-disable-next-line
    let sign = total < 0 ? '-' : (total == 0 ? '' : '+');


    return (
        <>
            <h4>Your Balance</h4>
            <h1>{sign}${Math.abs(total)}</h1>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions: state.tracker
    }
}


export default connect(mapStateToProps)(Balance);
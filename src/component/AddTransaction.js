import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState.js';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const [validation, setValidation] = useState(false);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        setValidation(false);
        if (text.trim() !== '') {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
            addTransaction(newTransaction);
            setText('');
            setAmount(null);
        }
        else {
            setValidation(true);
        }
    }

    const onSetText = (e) => {
        if (e.target.value.trim() === '') {
            setValidation(true);
        }
        else {
            setValidation(false);
        }
        setText(e.target.value);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"><b>Text</b></label>
                    <input type="text" value={text} onChange={(e) => onSetText(e)} placeholder="Enter text..." />
                    {validation ? <div style={{ color: "red" }}>Must be written</div> : ""}
                </div>
                <div className="form-control">
                    <label htmlFor="amount"><b>Amount<br />
                    (negative - expense, positive - income)</b></label>
                    <input type="number" value={amount === null ? '' : amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

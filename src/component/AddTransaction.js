import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { addIncome } from '../action/tracker-action.js';

const AddTransaction = ({ onAddIncome }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(null);
    const [validation, setValidation] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        textRef.current.focus();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        setValidation(false);
        if (text.trim() !== '') {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
            onAddIncome(newTransaction);
            setText('');
            setAmount(null);
            textRef.current.focus();

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
                    <input type="text" value={text} ref={textRef} onChange={(e) => onSetText(e)} placeholder="Enter text..." />
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

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    onAddIncome: addIncome
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
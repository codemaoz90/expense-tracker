import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
function AddTransaction() {
  const {addTransaction} = useContext(GlobalContext)
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const onSubmit = e => {
    e.preventDefault()
    const newTrasaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseInt(amount)
    }
    addTransaction(newTrasaction)
  }

  return (
    <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn" type="submit">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
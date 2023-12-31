"use client"

import React, {useState} from 'react'
import { text } from 'stream/consumers';

const addtransaction = () => {

    const [Text, setText] = useState('');
    const [Amount, setAmount] = useState('');

  return (
                <div>
                    <h3>Add new transaction</h3>

                        <form>

                                    <div className="form-control">

                                            <label htmlFor="text">Text</label>
                                            <input type="text" value={Text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />

                                    </div>

                                    <div className="form-control">
                                        
                                            <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                                            <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                                    </div>

                                            <button className="btn">Add transaction</button>
                            
                        </form>
                </div>
  )
}

export default addtransaction

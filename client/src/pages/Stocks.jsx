import React, { useState, useContext } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { CredentialsContext } from "..";


function Stocks() {

    const [stockName, setStockName] = useState("");
    const [GSTIN, setGSTIN] = useState("");
    const [billNo, setBillNo] = useState("");
    const [type, setType] = useState("");
    const [total, setTotal] = useState("");
    const [date, setDate] = useState("");
    const [credentials] = useContext(CredentialsContext);

    const postBill = () => {
        if (stockName && GSTIN && billNo && type && total && date) {
            fetch("http://localhost:4000/postBill",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${credentials.username}:${credentials.password}`
                    },
                    // body: JSON.stringify({
                    //     HSN: HSN,
                    //     amount: total,

                    // })
                }
            ).then(res => res.json())
            .then()
        }
    }

    const types = ["sell", "purchase"];

    return (

    <div>
        <div>
            <label>Stock Name</label>
            <input type="text" placeholder="Stock Name" className="input" onChange={(e) => {setStockName(e.target.value); console.log(stockName);}} />
            <input type="text" placeholder="GSTIN" className="input" onChange={(e) => setGSTIN(e.target.value)}/>
            <input type="text" placeholder="Bill Number" className="input" onChange={(e) => setBillNo(e.target.value)} />
            <Dropdown 
                options={types}
                onChange={(e) => setType(e.value)}
                value={type}
                placeholder="Select an option"
                className="dropdown rounded-md"
            />

            <input type="text" placeholder="Total Amount" className="input" onChange={(e) => setTotal(e.target.value)} />
            <input type="date" placeholder="Date" className="input" onChange={(e) => setDate(e.target.value)} />

            <button onSubmit={postBill}>Post Bill</button>
        </div>
    </div>

    )
}

export default Stocks

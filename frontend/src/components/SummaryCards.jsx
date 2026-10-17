import {useState, useEffect} from "react"
import { fetchTransactions } from "../api"

function SummaryCards(){
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetchTransactions().then(data => setTransactions(data))
    }, [])

    const totalIncome = transactions
        .filter(t => t.amount > 0)
        .reduce((sum, t) => sum +t.amount, 0)

    const totalExpenses = transactions
        .filter(t => t.amount < 0)
        .reduce((sum, t) => sum + t.amount, 0)

    const netBalance = totalIncome + totalExpenses

    return (
        <div style = {{display: "flex", gap: "20 px", padding: "20px"}}>
            <div style = {{padding: "20px", border: "1px solid green"}}>
                <h3>Total Income</h3>
                <p>€{totalIncome.toFixed(2)}</p>
            </div>
            <div style = {{padding: "20px", border: "1px solid red"}}>
                <h3>Total Expenses</h3>
                <p>€{totalExpenses.toFixed(2)}</p>
            </div>
            <div style = {{padding: "20px", border: "1px solid blue"}}>
                <h3>Net Balance</h3>
                <p>€{netBalance.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default SummaryCards
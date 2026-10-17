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
    <div style={{ display: "flex", gap: "20px", padding: "0 30px 30px", justifyContent: "center" }}>
        <div style={{ flex: 1, padding: "25px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderTop: "4px solid #2ecc71" }}>
            <h3 style={{ color: "#888", fontSize: "0.9rem", marginBottom: "10px" }}>Total Income</h3>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#2ecc71" }}>€{totalIncome.toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, padding: "25px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderTop: "4px solid #e74c3c" }}>
            <h3 style={{ color: "#888", fontSize: "0.9rem", marginBottom: "10px" }}>Total Expenses</h3>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#e74c3c" }}>€{Math.abs(totalExpenses).toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, padding: "25px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderTop: "4px solid #3498db" }}>
            <h3 style={{ color: "#888", fontSize: "0.9rem", marginBottom: "10px" }}>Net Balance</h3>
            <p style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#3498db" }}>€{netBalance.toFixed(2)}</p>
        </div>
    </div>
)
}

export default SummaryCards
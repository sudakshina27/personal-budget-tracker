import {useState, useEffect} from "react"
import {fetchTransactions} from "../api"

function TransactionTable() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetchTransactions().then(data => setTransactions(data))
    }, [])

    return (
    <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "25px", margin: "0 30px 30px" }}>
        <h2>Transactions</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr style={{ background: "#f5f7fa", textAlign: "left" }}>
                    <th style={{ padding: "12px", borderBottom: "2px solid #e0e0e0" }}>Date</th>
                    <th style={{ padding: "12px", borderBottom: "2px solid #e0e0e0" }}>Description</th>
                    <th style={{ padding: "12px", borderBottom: "2px solid #e0e0e0" }}>Amount</th>
                    <th style={{ padding: "12px", borderBottom: "2px solid #e0e0e0" }}>Category</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((t, index) => (
                    <tr key={t.id} style={{ background: index % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                        <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>{t.date}</td>
                        <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>{t.description}</td>
                        <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0", color: t.amount < 0 ? "#e74c3c" : "#2ecc71", fontWeight: "bold" }}>
                            €{t.amount.toFixed(2)}
                        </td>
                        <td style={{ padding: "12px", borderBottom: "1px solid #e0e0e0" }}>{t.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}

export default TransactionTable
import {useState, useEffect} from "react"
import {fetchTransactions} from "../api"

function TransactionTable() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        fetchTransactions().then(data => setTransactions(data))
    }, [])

    return (
        <div style = {{padding: "20px"}}>
            <h2>Transactions</h2>
            <table border = "1" cellPadding = "8" width = "100%">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(t => (
                        <tr key = {t.id}>
                            <td>{t.date}</td>
                            <td>{t.description}</td>
                            <td style = {{color: t.amount <0 ? "red" : "green"}}>
                                €{t.amount.toFixed(2)}
                            </td>
                            <td>{t.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionTable
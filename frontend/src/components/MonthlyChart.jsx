import { useState, useEffect } from "react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"
import { fetchMonthlySummary } from "../api"

function MonthlyChart() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchMonthlySummary().then(d => setData(d))
    }, [])

    return (
    <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "25px", marginBottom: "30px" }}>
        <h2>Monthly Net Balance</h2>
        <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="net" fill="#82ca9d" />
        </BarChart>
    </div>
)
}

export default MonthlyChart
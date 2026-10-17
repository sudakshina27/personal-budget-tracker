import {useState, useEffect} from "react"
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts"
import {fetchCategorySummary} from "../api"

function CategoryChart(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetchCategorySummary().then(d => setData(d))
    }, [])

    return (
    <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "25px", marginBottom: "30px" }}>
        <h2>Spending by Category</h2>
        <BarChart width={500} height={300} data={data} margin={{ bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" angle={-35} textAnchor="end" height={60} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
    </div>
)
}

export default CategoryChart
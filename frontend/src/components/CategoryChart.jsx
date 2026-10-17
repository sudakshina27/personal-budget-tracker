import {useState, useEffect} from "react"
import {BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts"
import {fetchCategorySummary} from "../api"

function CategoryChart(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetchCategorySummary().then(d => setData(d))
    }, [])

    return (
        <div style = {{padding:"20px"}}>
            <h2>Spending by Category</h2>
            <BarChart width = {600} height = {300} data = {data}>
                <CartesianGrid strokeDasharray = "3 3" />
                <XAxis dataKey = "category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey = "total" fill = "#8884d8" />
            </BarChart>
        </div>
    )
}

export default CategoryChart
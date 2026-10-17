import { useState } from "react"
import { importCSV } from "../api"

function ImportCSV() {
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState("")

    async function handleUpload() {
        if (!file) {
            setMessage("Please select a file first.")
            return
        }
        const result = await importCSV(file)
        setMessage(`Done! ${result.inserted} rows inserted from ${result.filename}`)
    }

    return (
    <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: "25px", margin: "0 30px 30px", display: "flex", alignItems: "center", gap: "15px" }}>
        <h2 style={{ margin: 0 }}>Import CSV</h2>
        <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
        <button
            onClick={handleUpload}
            style={{ padding: "8px 20px", background: "#3498db", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>
            Upload
        </button>
        {message && <p style={{ color: "#2ecc71", fontWeight: "bold" }}>{message}</p>}
    </div>
    )
}

export default ImportCSV
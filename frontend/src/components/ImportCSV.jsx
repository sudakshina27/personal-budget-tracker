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
        <div style={{ padding: "20px" }}>
            <h2>Import CSV</h2>
            <input
                type="file"
                accept=".csv"
                onChange={e => setFile(e.target.files[0])}
            />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    )
}

export default ImportCSV
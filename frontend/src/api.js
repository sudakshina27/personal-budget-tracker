export async function fetchTransactions() {
    const response = await fetch("http://localhost:8000/transactions")
    return await response.json()
}

export async function fetchCategorySummary() {
    const response = await fetch("http://localhost:8000/summary/categories")
    return await response.json()
}

export async function fetchMonthlySummary() {
    const response = await fetch("http://localhost:8000/summary/monthly")
    return await response.json()
}

export async function importCSV(file) {
    const formData = new FormData()
    formData.append("file", file)

    const response = await fetch("http://localhost:8000/import", {
        method: "POST",
        body: formData
    })
    return await response.json()
}
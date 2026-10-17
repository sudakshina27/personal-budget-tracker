const BASE_URL = "https://personal-budget-tracker-vgj9.onrender.com"

export async function fetchTransactions() {
    //const response = await fetch("http://localhost:8000/transactions")
    const response = await fetch(`${BASE_URL}/transactions`)
    return await response.json()
}

export async function fetchCategorySummary() {
    //const response = await fetch("http://localhost:8000/summary/categories")
    const response = await fetch(`${BASE_URL}/summary/categories`)
    return await response.json()
}

export async function fetchMonthlySummary() {
    //const response = await fetch("http://localhost:8000/summary/monthly")
    const response = await fetch(`${BASE_URL}/summary/monthly`)
    return await response.json()
}

export async function importCSV(file) {
    const formData = new FormData()
    formData.append("file", file)

    //const response = await fetch("http://localhost:8000/import", {
    const response = await fetch(`${BASE_URL}/import`, {

        method: "POST",
        body: formData
    })
    return await response.json()
}
# Personal Budget Tracker

A full-stack personal finance tool that lets you import bank CSV exports, 
stores transactions in SQLite, and visualizes spending through a React dashboard.

Built as a portfolio project to demonstrate SQL, REST API design, and frontend skills.

---

## Tech Stack

- **Backend:** Python, FastAPI, SQLite
- **Frontend:** React, Vite, Recharts
- **Data:** CSV parsing with validation

---

## Features

- Import transactions via CSV file upload
- Spending breakdown by category (bar chart)
- Monthly net balance overview (bar chart)
- Full transactions table with color-coded amounts
- Summary cards — total income, expenses, and net balance

---

## How to Run

### Prerequisites
- Python 3
- Node.js

### Backend
```bash
cd backend
pip3 install fastapi uvicorn
python3 db.py
python3 -m uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure

```
budget-tracker/
├── backend/
│   ├── main.py          # FastAPI endpoints
│   ├── queries.py       # SQL logic
│   ├── csv_parser.py    # CSV import and validation
│   └── db.py            # Database connection
├── frontend/
│   └── src/
│       ├── components/  # React components
│       └── api.js       # API calls
└── data/
    └── sample.csv       # Sample data to test with
```


---

## Sample Data

A sample CSV is included in `data/sample.csv`. 
Use the Import CSV button in the dashboard to load it.
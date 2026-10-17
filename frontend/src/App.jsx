import SummaryCards from "./components/SummaryCards"
import TransactionTable from "./components/TransactionTable"
import CategoryChart from "./components/CategoryChart"
import MonthlyChart from "./components/MonthlyChart"
import ImportCSV from "./components/ImportCSV"

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Budget Tracker</h1>
      <ImportCSV />
      <SummaryCards />
      <div style={{ display: "flex", gap: "20px", padding: "0 30px 30px" }}>
        <div style={{ flex: 1 }}>
          <CategoryChart />
        </div>
        <div style={{ flex: 1 }}>
          <MonthlyChart />
        </div>
      </div>
      <TransactionTable />
    </div>
  )
}

export default App
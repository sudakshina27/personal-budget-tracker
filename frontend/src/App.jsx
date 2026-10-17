import SummaryCards from "./components/SummaryCards"
import TransactionTable from "./components/TransactionTable"
import CategoryChart from "./components/CategoryChart"
import MonthlyChart from "./components/MonthlyChart"
import ImportCSV from "./components/ImportCSV"

function App() {
  return (
    <div>
      <h1>Budget Tracker</h1>
      <ImportCSV />
      <SummaryCards />
      <CategoryChart />
      <MonthlyChart />
      <TransactionTable />
    </div>
  )
}

export default App

import './App.css';
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactionlist/>
        <AddTransaction/>
      </div>
    </div>
  );
}

export default App;


import './App.css';
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import IncomeExpenses from './components/IncomeExpenses';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactionlist/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;

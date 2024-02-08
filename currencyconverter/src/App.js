import './App.css';
import money from "./image/money.png"
import CurrencyComponent from './components/CurrencyComponent';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [currencyChoice, setCurrencyChoice] = useState([])

  const [fromCurrency, setFromCurrency] = useState("THB")
  const [toCurrency, setToCurrency] = useState("USD")

  const [amount, setAmount] = useState(1)
  const [exChangeRate, setExChangeRate] = useState(0)

  const [checkFromCurrency, setCheckFromCurrency] = useState(true)

  let fromAmount, toAmount

  if (checkFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exChangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exChangeRate).toFixed(2)
  }

  useEffect(() => {
    const url = `https://v6.exchangerate-api.com/v6/4ed1c56156380ded435a78d3/latest/${fromCurrency}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCurrencyChoice([...Object.keys(data.conversion_rates)])
        setExChangeRate(data.conversion_rates[toCurrency])
      })
  }, [fromCurrency, toCurrency])

  const amountFromCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(true)
  }
  const amountToCurrency = (e) => {
    setAmount(e.target.value)
    setCheckFromCurrency(false)
  }

  return (
    <div>
      <div className='con-text'>
        <h1 className='text'>Currency- <br /> Converter</h1>
      </div>
      <div className='container'>
        <div className='con-item'>
          <img src={money} alt="logo" />
          <h2>Currency Converter app (API)</h2>
          <div className='compo'>
            <CurrencyComponent
              currencyChoice={currencyChoice}
              selectCurrency={fromCurrency}
              changeCurrency={(e) => setFromCurrency(e.target.value)}
              amount={fromAmount}
              onChangeAmount={amountFromCurrency} />
            <div className='equal'> = </div>
            <CurrencyComponent
              currencyChoice={currencyChoice}
              selectCurrency={toCurrency}
              changeCurrency={(e) => setToCurrency(e.target.value)}
              amount={toAmount} 
              onChangeAmount={amountToCurrency} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

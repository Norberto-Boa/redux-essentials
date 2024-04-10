import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const [amount, setAmount] = useState<number>(0);

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  function handleClick() {
    dispatch({ type: 'counter/increment' });
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(e.target.value));
  }

  function handleIncrementAmount() {
    dispatch({ type: 'counter/incrementAmount', payload: amount });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>

        <p>
          <input type="number" name="amount" id="amount" onChange={handleAmountChange} />
        </p>

        <p>
          <button type="button" onClick={handleIncrementAmount}>
            Increment Amount
          </button>
        </p>

        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'counter/increment' }),
//     incrementAmount: (amount: number) => dispatch({ type: 'counter/incrementAmount', payload: amount })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

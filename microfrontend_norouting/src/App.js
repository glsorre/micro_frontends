import './App.css';
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useLocation } from "wouter"

function App() {
  const [counter, setCounter] = useState(0)
  const [location, setLocation] = useLocation()

  function handleClick(location) {
    setLocation(location)
  }

  function handleLocalCounter() {
    setCounter(counter + 1)
    if (counter % 5 === 0 && counter !== 0) {
      window.COMMON.doublerIncrement()
    }
  }

  let DoublerCounter = observer(() => <p>Shared counter: {window.COMMON.doublerGet()}</p>)

  return (
    <div className="App">
      <p>Local counter: {counter}</p>
      <button onClick={() => handleLocalCounter()}>increment local counter</button><br />
      <button onClick={() => window.COMMON.doublerIncrement()}>increment shared counter</button>
      <DoublerCounter />
      <nav>
        <ul>
          <li>
            <button onClick={() => handleClick("/")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleClick("/about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleClick("/users")}>Users</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

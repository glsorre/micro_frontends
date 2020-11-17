import './App.css';
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
//import { useLocation } from "wouter"

function App() {
  const [counter, setCounter] = useState(0)
  //const [location, setLocation] = useLocation()

  function handleClick(location) {
    window.COMMON.navigate(location)
  }

  function handleLocalCounter() {
    setCounter(counter + 1)
    if (counter % 5 === 0 && counter !== 0) {
      window.COMMON.doubler.increment()
    }
  }

  let DoublerCounter = observer(() => <p>Shared counter: {window.COMMON.doubler.get()}</p>)

  return (
    <div className="App">
      <p>Local counter: {counter}</p>
      <button onClick={() => handleLocalCounter()}>increment local counter</button><br />
      <button onClick={() => window.COMMON.doubler.increment()}>increment shared counter</button>
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
          <li>
            <button onClick={() => handleClick("/external")}>Shell router link</button>
          </li>
          <li>
            <button onClick={() => handleClick("/404")}>404</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

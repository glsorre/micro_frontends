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

  let DoublerCounter = observer(() => <p>Shared counter: {window.COMMON.doublerGet()}</p>)

  return (
    <div className="App">
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click to increment local counter.</button>
      <button onClick={() => window.COMMON.doublerIncrement()}>Click to increment shared counter.</button>
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

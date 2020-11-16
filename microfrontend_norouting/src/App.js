import './App.css';
import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { observer } from 'mobx-react-lite'

function App() {
  const [counter, setCounter] = useState(0)
  const history = useHistory()

  function handleClick(location) {
    history.push(location)
  }

  let DoublerCounter = observer(() => <p>{window.doubler.value}</p>)

  return (
    <div className="App">
      <p>You clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={() => window.doubler.increment()}>Click me</button>
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

import './App.css';
import { Component, useState } from 'react'
import { observer } from 'mobx-react-lite'

const injectShell = Comp =>
  class extends Component {
    state = { shell: window.SHELL };

    render() {
      const { shell } = this.state;
      return <Comp {...this.props} shell={ shell } />;
    }
  };

function App({ shell }) {
  const [counter, setCounter] = useState(0)
  //const [location, setLocation] = useLocation()

  function handleClick(location) {
    shell.navigate(location)
  }

  function handleLocalCounter() {
    setCounter(counter + 1)
    if (counter % 5 === 0 && counter !== 0) {
      shell.doubler.increment()
    }
  }

  let DoublerCounter = observer(() => <p>Shared counter: {shell.doubler.get()}</p>)

  return (
    <div className="App">
      <p>Local counter: {counter}</p>
      <button onClick={() => handleLocalCounter()}>increment local counter</button><br />
      <button onClick={() => shell.doubler.increment()}>increment shared counter</button>
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

export default injectShell(App);

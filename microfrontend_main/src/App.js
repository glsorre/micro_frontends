import { observer } from 'mobx-react-lite'
import { Component } from 'react'
import {
  Switch,
  Route,
  Link
} from "wouter"

const injectShell = Comp =>
  class extends Component {
    state = { shell: document.getElementById("app_content").shell };

    render() {
      const { shell } = this.state;
      return <Comp {...this.props} shell={ shell } />;
    }
  };

function App({ shell }) {

  let DoublerCounter = observer(() => <span>{shell.doubler.get()}</span>)
  let DoublerDouble = observer(() => <span>{shell.doubler.squared()}</span>)

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
          <li>
            <Link href="/external">Shell Router Page</Link>
          </li>
        </ul>
      </nav>
      <p>Shared counter: <DoublerCounter /></p>
      <p>Squared: <DoublerDouble /></p>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default injectShell(App)

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


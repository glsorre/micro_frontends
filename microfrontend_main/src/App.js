import React from "react"
import {
  Switch,
  Route,
  Link
} from "wouter"
import { observer } from 'mobx-react-lite'

export default function App() {

  let DoublerCounter = observer(() => <span>{window.COMMON.doubler.get()}</span>)
  let DoublerDouble = observer(() => <span>{window.COMMON.doubler.squared()}</span>)

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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from './routes/Home'

function App() {
  return (
    <HashRouter>

      {/* HashRouter는 위에서부터 쭉 돌면서 매칭되는 urlpattern에 해당되는걸 싹다 render */}
      {/* 그래서 /와 /about은 동시에 렌더링된다. */}
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />


      <Route path="/about" component={About} />
    </HashRouter>
  )
}

export default App

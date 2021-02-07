import React from 'react'
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/About"
import Home from './routes/Home'
import Navigation from './components/Navigation'
import Detail from './components/Detail'

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* HashRouter는 위에서부터 쭉 돌면서 매칭되는 urlpattern에 해당되는걸 싹다 render */}
      {/* 그래서 /와 /about은 동시에 렌더링된다. */}

      {/* 해결하는 방법은 exact={true} prop을 추가해주거나 */}
      {/* /home /about처럼 아예 다른 url pattern을 만들어주는 것. */}
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/home" component={Home} /> */}
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  )
}

export default App

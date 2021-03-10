import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [pageName, setPageName] = useState('');
  // useEffect : 컴포넌트 생애주기와 관련된 훅
  // componentDidUpdate, componentWillUnmount가 합쳐진 것으로 봐도 무방하다.
  useEffect(() => {
    window.onpopstate = event => {
      setPageName(event.state)
    }
  }, []);

  function onClick1() {
    const pageName = 'page1';
    window.history.pushState(pageName, '', '/page1')
    setPageName(pageName)
  }

  function onClick2() {
    const pageName = 'page2'
    window.history.pushState(pageName, '', '/page2')
    setPageName(pageName)
  }

  return (
    <div className="App">
      <button onClick={onClick1}>page1</button>
      <button onClick={onClick2}>page2</button>
      <button onClick={() => setPageName("asdf")}>123</button>
      {!pageName && <Home />}
      {pageName === 'page1' && <Page1 />}
      {pageName === 'page2' && <Page2 />}
      {pageName === 'asdf' && <PageASDF />}
    </div>
  );

  function Home() {
    return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭해주세요.</h2>
  }

  function Page1() {
    return <h2>여기는 Page1입니다.</h2>
  }

  function Page2() {
    return <h2>여기는 Page2입니다.</h2>
  }

  function PageASDF() {
    return <h3>여기는 아무것도 아닙니다.</h3>
  }
}

export default App;

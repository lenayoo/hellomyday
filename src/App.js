import './App.css'
import cookie from './images/main-cookie.png'

function App() {
  return (
    <div className="App">
      <h1 className="header-text">hello my day</h1>
      <img src={cookie} alt="main" className="cookie" />
      <div>
        <button className="btn-cookie">Open your luck</button>
      </div>
    </div>
  )
}

export default App

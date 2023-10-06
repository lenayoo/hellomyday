import './App.css'
import cookie from './images/main-cookie.png'
import fortunes from './fortunecookie'
import { useState } from 'react'

function App() {
  const [todayFortune, setTodayFortune] = useState('')

  const randomFortune = () => {
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    console.log(randomIndex)
    console.log(fortunes[randomIndex])
    return setTodayFortune(fortunes[randomIndex])
  }
  return (
    <div className="App">
      <h1 className="header-text">
        Today is a day! Go on kid, You will find your mountain😆🥠 
      </h1>
      <img src={cookie} alt="main" className="cookie" />
      <div>
        <button className="btn-cookie" onClick={randomFortune}>
          Open your luck
        </button>
      </div>
      {todayFortune && <div className="text-cookie">{todayFortune}</div>}
    </div>
  )
}

export default App

import { useState, useContext } from 'react'
import DataContext from './dataContext'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import './App.css'

function App() {
  
  const [userInfo, setUserInfo] = useState({
    name: "Abraham",
    favColor: 'Green',
    favFood: "Coffee",
    favMovie: "The Sound of Music"
  })
  
  return (
      <div className="app">
        <div className="header">
          <h1>Intro to Context</h1>
        </div>

        <div className="main">
          <DataContext.Provider value={{userInfo, setUserInfo}}>
            <ComponentA/>
            <ComponentB/>
          </DataContext.Provider>
        </div>
 </div>
  )
}

export default App

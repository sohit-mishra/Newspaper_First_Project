import React, { useState } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  const pageSize = 5;
  const apikey = process.env.REACT_APP_API_KEY;
  const country = process.env.REACT_APP_COUNTRY;
  const [progress, setProgress] = useState(0)
   
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          color='#f11946'
          height={2}
          progress={progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path='business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
            <Route exact path='entertainment' element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
            <Route exact path='general' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
            <Route exact path='health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
            <Route exact path='science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
            <Route exact path='sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
            <Route exact path='technology' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}



export default App;
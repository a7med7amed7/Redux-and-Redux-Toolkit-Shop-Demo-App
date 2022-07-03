import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourite/Favourite'
import Home from './pages/Home/Home'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

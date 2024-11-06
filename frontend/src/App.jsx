
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

import Forms from "./components/Forms";
import RoomPage from "./pages/RoomPage";

const App = () => {
  return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forms />} />
            <Route path="/:roomId" element={<RoomPage />} />

          </Routes>
        </BrowserRouter>
        
        </div>
  )
}

export default App

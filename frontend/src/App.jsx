
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

import Forms from "./components/Forms";
import RoomPage from "./pages/RoomPage";

const App = () => {

  const uuid = () => {
    var S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    )
  }
  return (
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forms uuid={uuid}/>} />
            <Route path="/:roomId" element={<RoomPage />} />

          </Routes>
        </BrowserRouter>
        
        </div>
  )
}

export default App

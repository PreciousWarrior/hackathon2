import React, {useState} from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Popup from "./components/popup"

import Home from "./pages/Home"
import TeacherPage from "./pages/Teacher"
import StudentPage from "./pages/Student"


function App() {
  const [showPopup, setPopup] = useState(false)

  return (
      <div>
          <Popup display={showPopup} onClose={()=>setPopup(false)} />
          <Navbar onClick={action=>{
                  if (action === "getStarted"){
                      setPopup(true)
                  }
              }} />

          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/new" element={<TeacherPage />} />
                  <Route path="/lesson/:id" element={<StudentPage />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import Notes from "./Components/Notes/Notes"
import Long from "./Pages/Long"
import Test from "./Pages/Test"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/long" element={<Long />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  )
}

export default App

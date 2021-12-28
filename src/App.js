import { Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import Notes from "./Components/Notes/Notes"
import Long from "./Pages/Long"
import Page2 from "./Pages/Page2"
import Page3 from "./Pages/Page3"
import Test from "./Pages/Test"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/long" element={<Long />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  )
}

export default App

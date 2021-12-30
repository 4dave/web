import { Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./Components/NavBar"
import Notes from "./Components/Notes/Notes"
import Long from "./Pages/Long"
import Page2 from "./Pages/Page2"
import Test from "./Pages/Test"

// auth stuff below:
import Home from "./Components/Auth/Home"
import Login from "./Components/Auth/Login"
import Secret from "./Components/Auth/Secret"
import ProtectedRoute from "./Components/Auth/ProtectedRoute"
import { UserAuthContextProvider } from "./context/UserAuthContext"
import Unauthed from "./Pages/Unauthed"

// end auth imports

function App() {
  return (
    <>
      <NavBar />
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/secret"
            element={
              <ProtectedRoute>
                <Secret />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Test />} />
          <Route path="/long" element={<Long />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthed" element={<Unauthed />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  )
}

export default App

// prev code:
// {
//   /* <>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Test />} />
//         <Route path="/long" element={<Long />} />
//         <Route path="/notes" element={<Notes />} />
//         <Route path="/page2" element={<Page2 />} />
//         <Route path="/page3" element={<Page3 />} />
//       </Routes>
//     </> */
// }

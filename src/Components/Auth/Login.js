import React from "react"
import { useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button"
import { useUserAuth } from "../../context/UserAuthContext"

const Login = () => {
  const { googleSignIn } = useUserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn()
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="page-container">
        <h2>Firebase Auth Login</h2>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
    </>
  )
}

export default Login

import React from "react"
import { Link } from "react-router-dom"

const Unauthed = () => {
  return (
    <div className="page-container">
      <h1>You are not authorized.</h1>
      <h4>
        <Link to="/login" style={{ textDecoration: "none" }}>
          Sign in
        </Link>
      </h4>
    </div>
  )
}

export default Unauthed

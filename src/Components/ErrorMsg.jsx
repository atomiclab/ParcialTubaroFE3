import React from 'react'

const ErrorMsg = ({children}) => {
  return (
    <div>
    <h4 style={{ color: "red" }}>{children}</h4>
  </div>
  )
}

export default ErrorMsg
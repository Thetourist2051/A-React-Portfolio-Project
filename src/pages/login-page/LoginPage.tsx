import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteConstants } from '../../constants/RouteContstants'

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      login page
      <button onClick={()=>navigate(RouteConstants.Userspage)}>Go to Users page</button>
    </div>
  )
}

export default LoginPage


import { Navigate, useParams } from 'react-router-dom'
import Login from '../Login/Login'
import Exercises from '../../Pages/User/Exercises'

export default function ProtectedRoute({children}) {
  const user = JSON.parse(localStorage.getItem('user'));
return <>
  {
  
  user ? children: <Login />
  
  }
  </>
}
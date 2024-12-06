import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Compnent/Home/Home'
import Login from './Compnent/Login/Login'
import Admin from './Pages/User/Admin'
import Exercises from './Pages/User/Exercises'

import Yossef_darwish from './Compnent/Client/Yossef_darwish/Yossef_darwish'
import Mohamed_Ashraf from './Compnent/Client/Mohamed_Ashraf/Mohamed_Ashraf'

import Yossef_Lila from './Compnent/Client/Yossef_Lila/Yossef_Lila'
import Ahmed_Darawish from './Compnent/Client/Ahmed_Darawish/Ahmed_Darawish'

import Days from './Compnent/Client/Ahmed_Darawish/Days'
import NotFound from './Pages/NotFound'
import Months from './Pages/User/Months'
import Diet from './Pages/User/Diet'
import Client1 from './Pages/User/Client1'
import Mahmoud_Saber from './Compnent/Client/Mahmoud_Saber/Mahmoud_Saber'
import Mohamed_Samer from './Compnent/Client/Mohamed_Samer/Mohamed_Samer';
import ProtectedRoute from './Compnent/AuthContext/ProtectedRoute';
import Zeyad_Habib from './Compnent/Client/zeyad_Habib/Zeyad_Habib';



export default function App() {
  const router=createBrowserRouter([
    {index:true,element:<Home/>},
    {path:'login',element:<Login/>},
    
    {path:'admin',element:<ProtectedRoute><Admin/></ProtectedRoute>},
    {path:'exercises',element:<ProtectedRoute><Exercises/></ProtectedRoute>},
    {path:'month',element:<ProtectedRoute><Months/></ProtectedRoute> },
    {path:'yossefdarwish',element:<ProtectedRoute><Yossef_darwish/></ProtectedRoute> },
    {path:'mohamedashraf',element:<ProtectedRoute><Mohamed_Ashraf/></ProtectedRoute>},
    {path:'zeyadhabib',element:<ProtectedRoute><Zeyad_Habib/></ProtectedRoute>},
    {path:'yosseflila',element:<ProtectedRoute><Yossef_Lila/></ProtectedRoute>},
    {path:'ahmeddarwish',element:<ProtectedRoute><Ahmed_Darawish/></ProtectedRoute>},
    {path:'mahmoudsabra',element:<ProtectedRoute><Mahmoud_Saber/></ProtectedRoute>},
    {path:'mohamedsamer',element:<ProtectedRoute><Mohamed_Samer/></ProtectedRoute>},
    {path:'days',element:<ProtectedRoute><Days/></ProtectedRoute>},
    { path: "/exercise/:day", element:<ProtectedRoute><Client1 /></ProtectedRoute>  } ,
    { path: "/diet/:month", element:<ProtectedRoute><Diet /></ProtectedRoute>  } ,
    {path:'*',element:<NotFound/>}

    
  ])
  return<>
 


  

    <RouterProvider router={router}></RouterProvider>
    
   
  </>
}

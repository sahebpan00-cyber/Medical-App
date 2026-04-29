import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Layout/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard'
import Services from './pages/Services'
import PrivateRoute from './routers/privateRouter'
import AddDoctor from './pages/AddDoctor'
import AdminRoute from './routers/adminRouter'
import AdminDashboard from './pages/AdminDashboard'
import AllDoctors from './pages/AllDoctors'
import EditDoctor from './pages/EditDoctor'
import AllUsers from './pages/AllUser'
import UserDashboard from './pages/UserDashboard/UserDashboard'
import BookAppointment from './pages/UserDashboard/BookAppointment'
import Doctors from './pages/Doctors'
import Allappointments from './pages/Allappointments'
import Chatbot from './components/Chatbot'




function App() {


  return (
    <>
      <Navbar />
      
      <main>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/services' element={<Services />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <UserDashboard/>
              </PrivateRoute>
            }
          />

          <Route
            path="/book-appointment"
            element={
              <PrivateRoute>
                <BookAppointment/>
              </PrivateRoute>
            }
          />

          <Route
            path="/admindashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          {/* Add Doctor Separate Page */}
          <Route
            path="/add-doctor"
            element={
              <AdminRoute>
                <AddDoctor />
              </AdminRoute>
            }
          />
      <Route
  path="/all-doctors"
  element={
    <AdminRoute>
      <AllDoctors />
    </AdminRoute>
  }
/>

<Route
  path="/edit-doctor/:id"
  element={
    <AdminRoute>
      <EditDoctor />
    </AdminRoute>
  }
/>
<Route path='/allusers'
  element={
    <AdminRoute>
      <AllUsers />
    </AdminRoute>
  }
/>
<Route path='/all-appointments'
  element={
    <AdminRoute>
      <Allappointments />
    </AdminRoute>
  }
/>


        </Routes>
      </main>
      <Chatbot/>
      <Footer />
    </>
  )
}

export default App
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import MakeAppointment from './Pages/MakeAppointment/MakeAppointment';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import My_Appointment from './Pages/Dashboard/My_Appointment';
import My_Review from './Pages/Dashboard/My_Review';
import My_History from './Pages/Dashboard/My_History';
import My_Users from './Pages/Dashboard/My_Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Add_Doctor from './Pages/Dashboard/Add_Doctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';



function App() {
  return (
    <div className='max-w-screen-xl px-12 mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>}>
        </Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<My_Appointment />} />
          <Route path="review" element={<My_Review />} />
          <Route path="history" element={<My_History />} />
          <Route path="users" element={<RequireAdmin><My_Users /></RequireAdmin>} />
          <Route path="addoctor" element={<RequireAdmin><Add_Doctor /></RequireAdmin>} />
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors /></RequireAdmin>} />
        </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from './components/Sign_up/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from './components/Utils/ProtectedRoutes';
import Home from './components/Home/Home';
import Main from './components/Main';
import About from './components/About/About';
import Login from './components/Login/Login'
import LoginClient from './components/LoginClient/LoginClient'
import AddClients from './components/AddClients/AddClients';
import Profile from './components/Profile/Profile';
import DashboardAdv from './components/dsh/DashAdvisor';
import EditClients from './components/EditClients/EditClients';
import EditAdvisor from './components/EditAdvisor/EditAdvisor';
import ViewClient from './components/ClientViews/ViewClient';
import ChangePass from './components/ChangePass/change'
import { createHashHistory } from '@remix-run/router';

import AdvAccVerification from './components/Verification/AdvAccVerification';
import EditInvestment from './components/EditInvestment/EditInvestment';
import AddInvestment from './components/AddInvestment/AddInvestment';
import ForgotPass from './components/ForgotPass/ForgotPass'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Demotest from './components/Demotest/demotest';
import CannotAccess from './components/CannotAccess/CannotAccess'


function App() {
  const history = createHashHistory();

  return (
    <Router history={history}>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<ProtectedRoutes />}>

          <Route path="/aldsh"  element={<DashboardAdv />} />
          {/* <Route path="/" element={<MySide />} /> */}
          <Route path="/addClient" element={<AddClients />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/advisordash" element={<DashboardAdv />} />
          <Route path="/editclient/:vcliID" element={<EditClients />} />
          <Route path="/editadvisor" element={<EditAdvisor />} />
          <Route path="/viewclient/:vcliID" element={<ViewClient />} />
          <Route path="/editinvestment/:infoID/:strtID/:vcliID" element={<EditInvestment />} />
          <Route path="/addinvestment/:aicliID" element={<AddInvestment />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

        </Route>
        <Route path="/" exact element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginc" element={<LoginClient />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/accverify" element={<AdvAccVerification />} />
          <Route path="/changepass" element={<ChangePass/>} />
          <Route path="/forgotpass" element={<ForgotPass/>} />
          <Route path="/demotest" element={<Demotest/>} />
          <Route path="/*" element={<CannotAccess/>} />
        </Route>
    </Routes>
   </Router >
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./pages/header/Header";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import SignUp from "./pages/auth/signup/SignUp";


function App() {
  return (

    <>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

      <Route path="/register" element={<SignUp/>}></Route>
    </Routes>
    </>
  );
}

export default App;

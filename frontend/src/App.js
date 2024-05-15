
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>


      <Route path="*" element={<ErrorPage />} />
      <Route path="/signup" element={<RegisterPage/>}></Route>
    </Routes>
    </>
  );
}

export default App;

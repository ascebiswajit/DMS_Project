
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";


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

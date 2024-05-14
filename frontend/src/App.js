
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";


function App() {
  return (

    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>


      {/* <Route path="/register" element={<SignUp/>}></Route> */}
    </Routes>
    </>
  );
}

export default App;

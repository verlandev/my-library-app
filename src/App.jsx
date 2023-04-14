import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/loginPages/Login"
import Register from "./pages/loginPages/Register"
import ForgotPassword from "./pages/loginPages/ForgotPassword"
import NewPassword from "./pages/loginPages/NewPassword"
import ConfirmAccount from "./pages/loginPages/ConfirmAccount"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/:token" element={<NewPassword />} />
          <Route path="/confirm/:id" element={<ConfirmAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/page/auth/Register";
import Login from "./components/page/auth/Login";
import Home from "./components/page/Home";
import Navbar from "./components/Layouts/Navbar";
import Homeadmin from "./components/page/admin/home";
import AdminMember from "./components/page/admin/mamber";
import Admindashbord from "./components/page/admin/dashbord";




import HomeUser from "./components/page/users/home";






import Dashborduser from "./components/page/users/home";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../src/components/function/Auth";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const idtoken = localStorage.token;
  if (idtoken) {
    currentUser(idtoken)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: "LOGIN",
          playload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {/* <h1 className="text-center mt-2">Hello React </h1> */}
      {/* <Register /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Homeadmin />
            </AdminRoute>
          }
        />
 <Route
          path="/admin/member"
          element={
            <AdminRoute>
              <AdminMember />
            </AdminRoute>
          }
        />

<Route
          path="/admin/dashbord"
          element={
            <AdminRoute>
              <Admindashbord />
            </AdminRoute>
          }
        />






        <Route
          path="/user"
          element={
            <UserRoute>
              <HomeUser />
            </UserRoute>
          }
        />
        
        <Route path="/dashborduser" element={<HomeUser />} />
      </Routes>
    </>
  );
}

export default App;

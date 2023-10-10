import React from "react";
import Nav from "../../Layouts/NavbarAdmin";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, Link,NavLink  } from "react-router-dom";
import UserPro from '../../../assets/user.png'
import { ToastContainer, toast } from "react-toastify";
const home = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
    const navgate = useNavigate();
    const logout = () => {
        console.log("dfdf")
        dispatch({
          type: "LOGOUT",
          playload: null,
        });
        navgate("/login");
      };
      
  return (
    <>
      <Nav />
     
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5 t">
            <div className="card">
              <div className="card-body">
                <div className="col-md-12 text-center">
                <img src={UserPro} class="img-thumbnail" alt="..."  width={'180px'} />
                          <div className="display-1">สวัสดีคุณ {user.username}</div>
                          <div className="display-4">ระดับบัญชี {user.role}</div>

                          <div className="h1 mt-2">เข้าสู่ระบบโดยบัญชีจากระบบ</div>
                          <button className="btn btn-danger d-grid gap-2 col-6 mx-auto mt-3" type="button" onClick={logout}>ออกจากระบบ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;

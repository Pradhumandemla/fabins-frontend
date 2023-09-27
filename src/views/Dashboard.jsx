import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ShareFeed from "./components/ShareFeed";
import Timeline from "./components/Timeline";
import RightSidebar from "./components/RightSidebar";
// import Stories from "./components/Stories";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "../auth/auth";


export default function Dashboard() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if (token === false ){
      return navigate("/login");
    }
    if (user) {
      getUser(dispatch, token);
    }
  },[token])
  return (
    <>
      <Header />
      <main>
        {/* <!--  Container START --> */}
        <div className="container">
          <div className="row">
            <Sidebar />
            {/* <!--  Main content START --> */}
            <div className="col-md-8 col-lg-6 ">
              {/* <Stories /> */}
              <ShareFeed />
              <div className="w-100 mb-4"></div>
              <div className="vstack gap-4">
              <Timeline />
              </div>
            </div>
            {/* <!--  Main content END --> */}
            {/* <RightSidebar /> */}
          </div>
          {/* <!--  Row END --> */}
        </div>
        {/* <!--  Container END --> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

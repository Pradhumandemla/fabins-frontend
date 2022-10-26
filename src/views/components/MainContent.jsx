import Sidebar from "../components/Sidebar";
import Main from "./main";
import RightSidebar from "./RightSidebar";

export default function MainContent() {
  return (
    <main>
      {/* <!--  Container START --> */}
      <div className="container">
        <div className="row g-4">
         <Sidebar/>
          <Main/>

          <RightSidebar/>
        </div>{" "}
        {/* <!--  Row END --> */}
      </div>
      {/* <!--  Container END --> */}
    </main>
  );
}

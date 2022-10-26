import Header from "./components/Header";
// import Footer from "./partials/Footer";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        {/* <!--  Container START --> */}
        <div className="container">
          <div className="row g-4">
            <Sidebar />
            <MainContent />
            <RightSidebar />
          </div>
          {/* <!--  Row END --> */}
        </div>
        {/* <!--  Container END --> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

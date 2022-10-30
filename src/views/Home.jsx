import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import ShareFeed from "./components/ShareFeed";
import Timeline from "./components/Timeline";
import Stories from "./components/Stories";

export default function Dashboard() {
  return (
    <>
      <Header />
      <main>
        {/* <!--  Container START --> */}
        <div className="container">
          <div className="row g-4">
            <Sidebar />
            {/* <!--  Main content START --> */}
            <div className="col-md-8 col-lg-6 vstack gap-4">
              <Stories />
              <ShareFeed />
              <Timeline />
            </div>
            {/* <!--  Main content END --> */}
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

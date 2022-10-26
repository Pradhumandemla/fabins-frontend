import ShareFeed from "./ShareFeed";
import Story from "./Stories";
import Timeline from "./Timeline";

export default function MainContent() {
  return (
    <>
       {/* <!--  Main content START --> */}
       <div className="col-md-8 col-lg-6 vstack gap-4">
            <Stories/>
            <ShareFeed/>
            <Timeline/>
          </div>
          {/* <!--  Main content END --> */}
      </>
  );
}
